import { NextRequest, NextResponse } from "next/server";
import { stores, storeNames, StoreName } from "@/lib/content";

function resolveStore(collection: string) {
  if (!storeNames.includes(collection as StoreName)) return null;
  return stores[collection as StoreName];
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ collection: string; id: string }> }) {
  const { collection, id } = await params;
  const store = resolveStore(collection);
  if (!store) return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  const body = await req.json();
  if (body.__reorder) {
    await store.reorder(id, body.__reorder);
    return NextResponse.json({ ok: true });
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await (store.update as (id: string, data: any) => Promise<void>)(id, body);
  return NextResponse.json({ ok: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ collection: string; id: string }> }) {
  const { collection, id } = await params;
  const store = resolveStore(collection);
  if (!store) return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  await store.remove(id);
  return NextResponse.json({ ok: true });
}
