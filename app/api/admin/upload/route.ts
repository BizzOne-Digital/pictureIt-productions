import { NextRequest, NextResponse } from "next/server";
import { uploadBuffer } from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get("file");
  if (!(file instanceof File)) {
    return NextResponse.json({ error: "No file provided" }, { status: 400 });
  }
  const bytes = Buffer.from(await file.arrayBuffer());
  try {
    const url = await uploadBuffer(bytes);
    return NextResponse.json({ url });
  } catch {
    return NextResponse.json({ error: "Upload to Cloudinary failed. Check CLOUDINARY_* env vars." }, { status: 500 });
  }
}
