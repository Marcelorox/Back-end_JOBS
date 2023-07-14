import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { AuthRequest } from "../signup/route";
import * as argon2 from "argon2";
import * as jose from 'jose'

export async function GET(req: NextRequest) {
  const prisma = new PrismaClient();

  const jobs = await prisma.job.findMany({
  
  })
  
  return NextResponse.json(jobs);
}
