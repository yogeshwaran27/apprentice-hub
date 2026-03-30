import { jwtVerify, SignJWT } from "jose"

const SECRET = new TextEncoder().encode(process.env.JWT_SECRET!)

export async function decodeToken(token: string) {
  try {
    const { payload } = await jwtVerify(token, SECRET)
    return payload as { role: string; userId: string; email: string }
  } catch {
    return null
  }
}

export async function signToken(payload: {
  role: string
  userId: string
  email: string
}) {
  return new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("7d")
    .sign(SECRET)
}