// Authentication utility functions

export function getAuthToken() {
  return localStorage.getItem("authToken");
}

export function getUser() {
  const userStr = localStorage.getItem("user");
  return userStr ? JSON.parse(userStr) : null;
}

export function isAuthenticated() {
  return !!getAuthToken();
}

export function logout() {
  localStorage.removeItem("authToken");
  localStorage.removeItem("user");
  window.location.href = "/login";
}

export function setAuth(token, user) {
  localStorage.setItem("authToken", token);
  localStorage.setItem("user", JSON.stringify(user));
}

// Verify token with backend
export async function verifyToken() {
  const token = getAuthToken();
  if (!token) return false;

  try {
    const response = await fetch("/api/auth/verify", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return response.ok;
  } catch (error) {
    console.error("Token verification error:", error);
    return false;
  }
}

// Protected route helper
export function requireAuth() {
  if (!isAuthenticated()) {
    window.location.href = "/login";
    return false;
  }
  return true;
}

// Get user role
export function getUserRole() {
  const user = getUser();
  return user ? user.role : null;
}

// Check if user is admin
export function isAdmin() {
  return getUserRole() === "admin";
}
