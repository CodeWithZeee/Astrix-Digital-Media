
import 'dotenv/config';
console.log("MONGO_URI:", process.env.MONGO_URI);
import * as fs from "fs";
import * as path from "path";
import * as bcrypt from "bcryptjs";
import { v4 as uuidv4 } from "uuid";
import { MongoClient } from "mongodb";

// Database file paths
const DB_DIR = path.join(process.cwd(), "data");
// const USERS_FILE = path.join(DB_DIR, "users.json");
// const SESSIONS_FILE = path.join(DB_DIR, "sessions.json");

// Ensure data directory exists
if (!fs.existsSync(DB_DIR)) {
  fs.mkdirSync(DB_DIR, { recursive: true });
}

// Initialize database files if they don't exist
// if (!fs.existsSync(USERS_FILE)) {
//   fs.writeFileSync(USERS_FILE, JSON.stringify([], null, 2));
// }
// if (!fs.existsSync(SESSIONS_FILE)) {
//   fs.writeFileSync(SESSIONS_FILE, JSON.stringify([], null, 2));
// }

// Helper functions to read/write JSON files
// function readJsonFile(filePath) {
//   try {
//     const data = fs.readFileSync(filePath, "utf8");
//     return JSON.parse(data);
//   } catch (error) {
//     console.error(`Error reading ${filePath}:`, error);
//     return [];
//   }
// }
// function writeJsonFile(filePath, data) {
//   try {
//     fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
//     return true;
//   } catch (error) {
//     console.error(`Error writing ${filePath}:`, error);
//     return false;
//   }
// }

// User management functions
export const userService = {
  // Create a new user
  async createUser({ email, password, name }) {
    const db = await connectDB();
    const users = db.collection("users");

    // Check if user already exists
    const existingUser = await users.findOne({ email });
    if (existingUser) {
      throw new Error("User with this email already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const uuid = uuidv4();
    const verificationToken = uuidv4();

    const newUser = {
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

    const result = await users.insertOne(newUser);

    return {
      id: result.insertedId,
      uuid: newUser.uuid,
      email: newUser.email,
      name: newUser.name,
      verificationToken: newUser.verification_token,
    };
  },

  // Find user by email
  async findUserByEmail(email) {
    const db = await connectDB();
    const users = db.collection("users");
    return await users.findOne({ email });
  },

  // Find user by ID
  findUserById(id) {
    // const users = readJsonFile(USERS_FILE);
    // return users.find((u) => u.id === id);
  },

  // Find user by UUID
  findUserByUuid(uuid) {
    // const users = readJsonFile(USERS_FILE);
    // return users.find((u) => u.uuid === uuid);
  },

  // Find user by verification token
  async findUserByVerificationToken(verificationToken) {
    const db = await connectDB();
    const users = db.collection("users");
    return await users.findOne({ verification_token: verificationToken });
  },

  // Verify user email
  async verifyEmail(verificationToken) {
    const db = await connectDB();
    const users = db.collection("users");
    const result = await users.findOneAndUpdate(
      { verification_token: verificationToken },
      {
        $set: {
          email_verified: true,
          verification_token: null,
          updated_at: new Date().toISOString(),
        },
      },
      { returnDocument: "after" }
    );
    return result.value !== null;
  },

  // Update user
  updateUser(id, updates) {
    // const users = readJsonFile(USERS_FILE);
    // const userIndex = users.findIndex((u) => u.id === id);
    // if (userIndex === -1) {
    //   return false;
    // }
    // users[userIndex] = {
    //   ...users[userIndex],
    //   ...updates,
    //   updated_at: new Date().toISOString(),
    // };
    // return writeJsonFile(USERS_FILE, users);
  },

  // Set password reset token
  async setResetToken(email, resetToken, expiresAt) {
    const db = await connectDB();
    const users = db.collection("users");
    const result = await users.updateOne(
      { email },
      {
        $set: {
          reset_token: resetToken,
          reset_token_expires: expiresAt,
          updated_at: new Date().toISOString(),
        },
      }
    );
    return result.modifiedCount > 0;
  },

  // Reset password
  async resetPassword(resetToken, newPassword) {
    const db = await connectDB();
    const users = db.collection("users");
    const user = await users.findOne({
      reset_token: resetToken,
      reset_token_expires: { $gt: new Date().toISOString() },
    });
    if (!user) {
      return false;
    }
    const hashedPassword = await bcrypt.hash(newPassword, 12);
    const result = await users.updateOne(
      { reset_token: resetToken },
      {
        $set: {
          password: hashedPassword,
          reset_token: null,
          reset_token_expires: null,
          updated_at: new Date().toISOString(),
        },
      }
    );
    return result.modifiedCount > 0;
  },
};

// Session management functions
export const sessionService = {
  // Create a new session
  async createSession(userId, token, expiresAt) {
    const db = await connectDB();
    const sessions = db.collection("sessions");
    const newSession = {
      user_id: userId,
      token,
      expires_at: expiresAt,
      created_at: new Date().toISOString(),
    };
    await sessions.insertOne(newSession);
    return true;
  },

  // Find session by token
  async findSessionByToken(token) {
    const db = await connectDB();
    const sessions = db.collection("sessions");
    const users = db.collection("users");
    const session = await sessions.findOne({
      token,
      expires_at: { $gt: new Date().toISOString() },
    });
    if (!session) {
      return null;
    }
    const user = await users.findOne({ uuid: session.user_id });
    if (!user) {
      return null;
    }
    return { ...session, ...user };
  },

  // Delete session
  async deleteSession(token) {
    const db = await connectDB();
    const sessions = db.collection("sessions");
    await sessions.deleteOne({ token });
    return true;
  },

  // Clean expired sessions
  async cleanExpiredSessions() {
    const db = await connectDB();
    const sessions = db.collection("sessions");
    const result = await sessions.deleteMany({
      expires_at: { $lte: new Date().toISOString() },
    });
    return result.deletedCount;
  },
};

// Function to initialize default admin user - call this explicitly when needed
export async function initializeDefaultAdmin() {
  const adminUser = userService.findUserByEmail("admin@astrix.com");
  if (!adminUser) {
    try {
      const hashedPassword = await bcrypt.hash("admin123", 12);
      // const users = readJsonFile(USERS_FILE);
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
      // users.push(newAdmin);
      // writeJsonFile(USERS_FILE, users);
      console.log("Default admin user created: admin@astrix.com / admin123");
    } catch (error) {
      console.error("Error creating default admin user:", error);
    }
  }
}

export default { userService, sessionService };

const uri = process.env.MONGO_URI;

if (!uri) {
  throw new Error("MONGO_URI environment variable is not defined");
}

const client = new MongoClient(uri);

export async function connectDB() {
  try {
    if (!client.topology?.isConnected()) {
      await client.connect();
    }
    return client.db("astrix_db");
  } catch (error) {
    console.error("Database connection error:", error);
    throw new Error("Failed to connect to database");
  }
}
