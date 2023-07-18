import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "@/lib/auth";

export const config = {
  matcher: "/api/user/:function*",
};

export async function middleware(request: NextRequest) {

  const isAuth = await isAuthenticated(request);
  if (!isAuth) {
    return new NextResponse(
      JSON.stringify({ success: false, message: "authentication failed" }),
      { status: 401, headers: { "content-type": "application/json" } }
    );
  }
}