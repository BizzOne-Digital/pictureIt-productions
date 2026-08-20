import { NextRequest, NextResponse } from "next/server";
import { findAlbumBySlug } from "@/lib/content";

export async function POST(req: NextRequest) {
  const { slug, password } = await req.json();
  const album = await findAlbumBySlug(slug);
  if (!album || !album.password) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }
  if (password !== album.password) {
    return NextResponse.json({ error: "Incorrect password" }, { status: 401 });
  }
  const res = NextResponse.json({ ok: true });
  res.cookies.set(`album_access_${slug}`, password, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
  });
  return res;
}
