import { JWTPayload } from "@/types/auth";

export const getTokenCookies = () => {
  if (typeof document === "undefined") return null;

  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith("authToken="));

  if (!match) return null;

  const token = match.split("=")[1];
  try {
    const jwt = atob(token);
    return jwt;
  } catch (error) {
    console.error("Invalid Base64 token", error);
    return null;
  }
};

export const decodeToken = (token: string): JWTPayload | null => {
  try {
    const parts = token.split(".");
    if (parts.length !== 3) {
      return null;
    }

    // Decode base64 payload
    const payload = parts[1];
    const decodedPayload = atob(payload.replace(/-/g, "+").replace(/_/g, "/"));
    return JSON.parse(decodedPayload) as JWTPayload;
  } catch (error) {
    console.error("Error decoding token:", error);
    return null;
  }
};
