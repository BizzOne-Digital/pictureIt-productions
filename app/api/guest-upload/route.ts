import { NextRequest, NextResponse } from "next/server";
import { findAlbumBySlug, galleryStore } from "@/lib/content";
import { uploadBuffer } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const slug = formData.get("slug");
  const file = formData.get("file");

  if (typeof slug !== "string" || !slug.trim()) {
    return NextResponse.json({ error: "Missing album" }, { status: 400 });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }

  const album = await findAlbumBySlug(slug);
  if (!album) {
    return NextResponse.json({ error: "Album not found" }, { status: 404 });
  }

  if (album.password) {
    const cookieValue = req.cookies.get(`album_access_${slug}`)?.value;
    if (cookieValue !== album.password) {
      return NextResponse.json({ error: "This album is locked" }, { status: 401 });
    }
  }

  const bytes = Buffer.from(await file.arrayBuffer());
  try {
    const url = await uploadBuffer(bytes);
    await galleryStore.create({ url, album: slug });
    return NextResponse.json({ ok: true, url });
  } catch {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
