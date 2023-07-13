import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { AuthRequest } from "../signup/route";
import * as argon2 from "argon2";
import * as jose from 'jose'

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();
  const { email, password }: AuthRequest = await req.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "you must provide a valid email and password" },
      { status: 401 }
    );
  }

  const user = await prisma.user.findUnique({
    where: {
      email: email,
    },
  });

  if (!user) {
    return NextResponse.json(
      { error: "email does not exists" },
      { status: 401 }
    );
  }

  const passwordMatches = await argon2.verify(user.password, password);

  if (!passwordMatches) {
    return NextResponse.json(
      { error: "email or password is incorrect" },
      { status: 401 }
    );
  }

  const payload = {
    email: user.email,
    id: user.id
  }

  const secret = Buffer.from(process.env.JWT_SECRET || '', 'utf8')

  const token = await new jose.SignJWT(payload).setProtectedHeader({ alg: 'HS256', typ: 'JWT' }).sign(secret)

  return NextResponse.json({
    accessToken: token
  });
}
