import * as fs from "fs";
import * as path from "path";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";

// Database file paths
const DB_DIR = path.join(process.cwd(), "data");
const USERS_FILE = path.join(DB_DIR, "users.json");
const SESSIONS_FILE = path.join(DB_DIR, "sessions.json");

// Ensure data directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Initialize database files if they don't exist
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
}

if (!fs.existsSync(SESSIONS_FILE)) {
  fs.writeFileSync(SESSIONS_FILE, JSON.stringify([], null, 2));
}

// Helper functions to read/write JSON files
function readJsonFile(filePath) {
  try {
    const data = fs.readFileSync(filePath, "utf8");
    return JSON.parse(data);
  } catch (error) {
    console.error(`Error reading ${filePath}:`, error);
    return [];
  }
}

function writeJsonFile(filePath, data) {
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
    return true;
  } catch (error) {
    console.error(`Error writing ${filePath}:`, error);
    return false;
  }
}

// User management functions
export const userService = {
  // Create a new user
  async createUser({ email, password, name }) {
    const users = readJsonFile(USERS_FILE);

    // Check if user already exists
    const existingUser = users.find((u) => u.email === email);
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const uuid = uuidv4();
    const verificationToken = uuidv4();

    const newUser = {
      id: users.length + 1,
      uuid,
      email,
      password: hashedPassword,
      name,
      role: "user",
      email_verified: false,
      verification_token: verificationToken,
      reset_token: null,
      reset_token_expires: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };

    users.push(newUser);
    writeJsonFile(USERS_FILE, users);

    return {
      id: newUser.id,
      uuid: newUser.uuid,
      email: newUser.email,
      name: newUser.name,
      verificationToken: newUser.verification_token,
    };
  },

  // Find user by email
  findUserByEmail(email) {
    const users = readJsonFile(USERS_FILE);
    return users.find((u) => u.email === email);
  },

  // Find user by ID
  findUserById(id) {
    const users = readJsonFile(USERS_FILE);
    return users.find((u) => u.id === id);
  },

  // Find user by UUID
  findUserByUuid(uuid) {
    const users = readJsonFile(USERS_FILE);
    return users.find((u) => u.uuid === uuid);
  },

  // Find user by verification token
  findUserByVerificationToken(verificationToken) {
    const users = readJsonFile(USERS_FILE);
    return users.find((u) => u.verification_token === verificationToken);
  },

  // Verify user email
  verifyEmail(verificationToken) {
    const users = readJsonFile(USERS_FILE);
    const userIndex = users.findIndex(
      (u) => u.verification_token === verificationToken
    );

    if (userIndex === -1) {
      return false;
    }

    users[userIndex].email_verified = true;
    users[userIndex].verification_token = null;
    users[userIndex].updated_at = new Date().toISOString();

    return writeJsonFile(USERS_FILE, users);
  },

  // Update user
  updateUser(id, updates) {
    const users = readJsonFile(USERS_FILE);
    const userIndex = users.findIndex((u) => u.id === id);

    if (userIndex === -1) {
      return false;
    }

    users[userIndex] = {
      ...users[userIndex],
      ...updates,
      updated_at: new Date().toISOString(),
    };
    return writeJsonFile(USERS_FILE, users);
  },

  // Set password reset token
  setResetToken(email, resetToken, expiresAt) {
    const users = readJsonFile(USERS_FILE);
    const userIndex = users.findIndex((u) => u.email === email);

    if (userIndex === -1) {
      return false;
    }

    users[userIndex].reset_token = resetToken;
    users[userIndex].reset_token_expires = expiresAt;
    users[userIndex].updated_at = new Date().toISOString();

    return writeJsonFile(USERS_FILE, users);
  },

  // Reset password
  resetPassword(resetToken, newPassword) {
    const users = readJsonFile(USERS_FILE);
    const userIndex = users.findIndex(
      (u) =>
        u.reset_token === resetToken &&
        u.reset_token_expires > new Date().toISOString()
    );

    if (userIndex === -1) {
      return false;
    }

    const hashedPassword = bcrypt.hashSync(newPassword, 12);
    users[userIndex].password = hashedPassword;
    users[userIndex].reset_token = null;
    users[userIndex].reset_token_expires = null;
    users[userIndex].updated_at = new Date().toISOString();

    return writeJsonFile(USERS_FILE, users);
  },
};

// Session management functions
export const sessionService = {
  // Create a new session
  createSession(userId, token, expiresAt) {
    const sessions = readJsonFile(SESSIONS_FILE);

    const newSession = {
      id: sessions.length + 1,
      user_id: userId,
      token,
      expires_at: expiresAt,
      created_at: new Date().toISOString(),
    };

    sessions.push(newSession);
    return writeJsonFile(SESSIONS_FILE, sessions);
  },

  // Find session by token
  findSessionByToken(token) {
    const sessions = readJsonFile(SESSIONS_FILE);
    const users = readJsonFile(USERS_FILE);

    const session = sessions.find(
      (s) => s.token === token && s.expires_at > new Date().toISOString()
    );
    if (!session) {
      return null;
    }

    const user = users.find((u) => u.id === session.user_id);
    if (!user) {
      return null;
    }

    return { ...session, ...user };
  },

  // Delete session
  deleteSession(token) {
    const sessions = readJsonFile(SESSIONS_FILE);
    const filteredSessions = sessions.filter((s) => s.token !== token);
    return writeJsonFile(SESSIONS_FILE, filteredSessions);
  },

  // Clean expired sessions
  cleanExpiredSessions() {
    const sessions = readJsonFile(SESSIONS_FILE);
    const currentTime = new Date().toISOString();
    const validSessions = sessions.filter((s) => s.expires_at > currentTime);
    return writeJsonFile(SESSIONS_FILE, validSessions);
  },
};

// Initialize with a default admin user if none exists
const adminUser = userService.findUserByEmail("admin@astrix.com");
if (!adminUser) {
  bcrypt.hash("admin123", 12).then((hashedPassword) => {
    const users = readJsonFile(USERS_FILE);
    const newAdmin = {
      id: users.length + 1,
      uuid: uuidv4(),
      email: "admin@astrix.com",
      password: hashedPassword,
      name: "Admin User",
      role: "admin",
      email_verified: true,
      verification_token: null,
      reset_token: null,
      reset_token_expires: null,
      created_at: new Date().toISOString(),
      updated_at: new Date().toISOString(),
    };
    users.push(newAdmin);
    writeJsonFile(USERS_FILE, users);
    console.log("Default admin user created: admin@astrix.com / admin123");
  });
}

export default { userService, sessionService };
