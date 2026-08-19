import { NextRequest, NextResponse } from "next/server";
import { stores, storeNames, StoreName } from "@/lib/content";

function resolveStore(collection: string) {
  if (!storeNames.includes(collection as StoreName)) return null;
  return stores[collection as StoreName];
}

export async function GET(_req: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const store = resolveStore(collection);
  if (!store) return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  const items = await store.list();
  return NextResponse.json({ items });
}

export async function POST(req: NextRequest, { params }: { params: Promise<{ collection: string }> }) {
  const { collection } = await params;
  const store = resolveStore(collection);
  if (!store) return NextResponse.json({ error: "Unknown collection" }, { status: 404 });
  const body = await req.json();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const id = await (store.create as (data: any) => Promise<string>)(body);
  return NextResponse.json({ id });
}
