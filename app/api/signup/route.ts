import { NextRequest, NextResponse } from "next/server";
import * as argon2 from "argon2";
import { PrismaClient } from "@prisma/client";

export interface AuthRequest {
  email: string;
  password: string;
  username: string;
}

export async function POST(req: NextRequest) {
  const prisma = new PrismaClient();

  const { email, password, username}: AuthRequest = await req.json();

  if (!email || !password || !username) {
    return NextResponse.json(
      { error: "you must provide a valid email,password and username" },
      { status: 401 }
    );
  }

  const hashedPassword = await argon2.hash(password);

  try {
    await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        username: username,
      },
    });

    return NextResponse.json(
      { message: "user created with successful" },
      { status: 201 }
    );
  } catch (err) {
    return NextResponse.json("oops, ocurred an error", { status: 500 });
  }
}
