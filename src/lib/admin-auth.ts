import { SignJWT, jwtVerify } from "jose";

const ADMIN_COOKIE = "admin_session";
const SESSION_TTL = 60 * 60 * 24 * 7;

function secret(): Uint8Array {
  const raw = process.env.SESSION_SECRET;
  if (!raw || raw.length < 16) {
    throw new Error("SESSION_SECRET env var must be set and at least 16 chars");
  }
  return new TextEncoder().encode(raw);
}

export async function signSession(username: string): Promise<string> {
  return await new SignJWT({ u: username })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(`${SESSION_TTL}s`)
    .sign(secret());
}

export async function verifySession(token: string | undefined): Promise<{ username: string } | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret());
    if (typeof payload.u === "string") return { username: payload.u };
    return null;
  } catch {
    return null;
  }
}

export const ADMIN_COOKIE_NAME = ADMIN_COOKIE;
export const ADMIN_COOKIE_MAX_AGE = SESSION_TTL;
