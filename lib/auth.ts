export const ADMIN_COOKIE = "admin_session";

async function sha256Hex(input: string): Promise<string> {
  const data = new TextEncoder().encode(input);
  const hash = await crypto.subtle.digest("SHA-256", data);
  return Array.from(new Uint8Array(hash)).map(b => b.toString(16).padStart(2, "0")).join("");
}

export async function makeSessionToken(): Promise<string> {
  const secret = process.env.ADMIN_SECRET || "";
  const password = process.env.ADMIN_PASSWORD || "";
  return sha256Hex(`${password}:${secret}`);
}

export async function checkPassword(candidate: string): Promise<boolean> {
  return candidate === process.env.ADMIN_PASSWORD;
}

export async function isValidSessionToken(token: string | undefined): Promise<boolean> {
  if (!token) return false;
  const expected = await makeSessionToken();
  return token === expected;
}
