import { jwtVerify, SignJWT, type JWTPayload } from "jose";

export const secret = new TextEncoder().encode(process.env.JWT_SECRET as string);
const jwtExpiresIn = process.env.JWT_EXPIRES_IN as string

export async function signToken(payload: JWTPayload, expiresIn = jwtExpiresIn) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiresIn)
    .sign(secret);
}

export async function verifyToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, secret);
    return payload as { id: number; email: string };
  } catch {
    return null;
  }
}
