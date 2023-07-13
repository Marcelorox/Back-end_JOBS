import * as jose from "jose";
import { NextRequest } from "next/server";

export async function isAuthenticated(req: NextRequest) {
  const requestHeaders = new Headers(req.headers);

  const token = requestHeaders.get("authorization")?.split(" ")[1];

  if (!token) {
    return false;
  }

  const secret = Buffer.from(process.env.JWT_SECRET as string, "utf8");

  try {
    const { payload } = await jose.jwtVerify(token, secret);

    if (payload) {
      return true;
    }
    return false;
  } catch {
    return false;
  }
}
