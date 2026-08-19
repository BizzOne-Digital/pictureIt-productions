import { NextRequest, NextResponse } from "next/server";
import { ADMIN_COOKIE, checkPassword, makeSessionToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  const ok = await checkPassword(password);
  if (!ok) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }
  const token = await makeSessionToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set(ADMIN_COOKIE, token, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
  return res;
}
