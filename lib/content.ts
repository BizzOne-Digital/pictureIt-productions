import { ObjectId } from "mongodb";
import { getDb } from "@/lib/mongodb";

export type WithId<T> = T & { _id: string; order: number };

function serialize<T>(doc: T & { _id: ObjectId; order: number }): WithId<T> {
  const { _id, ...rest } = doc;
  return { ...rest, _id: _id.toHexString() } as unknown as WithId<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function makeStore<T extends Record<string, any>>(collectionName: string, seed: T[]) {
  async function ensureSeeded() {
    const db = await getDb();
    // Seed at most once ever per collection -- otherwise deleting everything
    // (e.g. clearing the gallery to start fresh) would keep resurrecting the
    // original sample data every time the empty collection was read.
    const metaCol = db.collection<{ _id: string; seeded: boolean }>("_seedMeta");
    const already = await metaCol.findOne({ _id: collectionName });
    if (already) return;
    const col = db.collection(collectionName);
    const count = await col.countDocuments();
    if (count === 0 && seed.length > 0) {
      await col.insertMany(seed.map((doc, i) => ({ ...doc, order: i })));
    }
    await metaCol.updateOne({ _id: collectionName }, { $set: { seeded: true } }, { upsert: true });
  }

  async function list(): Promise<WithId<T>[]> {
    await ensureSeeded();
    const db = await getDb();
    const docs = await db.collection(collectionName).find({}).sort({ order: 1 }).toArray();
    return docs.map(d => serialize<T>(d as unknown as T & { _id: ObjectId; order: number }));
  }

  async function create(data: T): Promise<string> {
    const db = await getDb();
    const col = db.collection(collectionName);
    const maxOrderDoc = await col.find({}).sort({ order: -1 }).limit(1).toArray();
    const nextOrder = maxOrderDoc.length > 0 ? (maxOrderDoc[0].order ?? 0) + 1 : 0;
    const res = await col.insertOne({ ...data, order: nextOrder });
    return res.insertedId.toHexString();
  }

  async function update(id: string, data: Partial<T>): Promise<void> {
    const db = await getDb();
    await db.collection(collectionName).updateOne({ _id: new ObjectId(id) }, { $set: data });
  }

  async function remove(id: string): Promise<void> {
    const db = await getDb();
    await db.collection(collectionName).deleteOne({ _id: new ObjectId(id) });
  }

  async function reorder(id: string, direction: "up" | "down"): Promise<void> {
    const db = await getDb();
    const col = db.collection(collectionName);
    const all = await col.find({}).sort({ order: 1 }).toArray();
    const idx = all.findIndex(d => d._id.toHexString() === id);
    if (idx === -1) return;
    const swapIdx = direction === "up" ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= all.length) return;
    const a = all[idx];
    const b = all[swapIdx];
    await col.updateOne({ _id: a._id }, { $set: { order: b.order } });
    await col.updateOne({ _id: b._id }, { $set: { order: a.order } });
  }

  return { list, create, update, remove, reorder };
}

// ---- Services ----
export interface ServiceData {
  iconKey: string;
  image: string;
  title: string;
  desc: string;
  features: string[];
}
export const servicesStore = makeStore<ServiceData>("services", [
  { iconKey: "camera", image: "/service-photobooth.jpg", title: "Digital Photobooth", desc: "Immersive cinematic experiences with custom branding, overlays, and instant digital sharing for your guests.", features: ["Unlimited digital photos & GIFs", "Custom branded overlays", "Instant text & email sharing", "Professional on-site attendant"] },
  { iconKey: "video360", image: "/service-360.png", title: "360 Video Booth", desc: "Slow-motion 360 video experiences with custom music and branding — the ultimate event centrepiece.", features: ["Slow-motion 360° video capture", "Custom music & branding overlays", "Red carpet & LED platform setup", "Instant social-ready video clips"] },
  { iconKey: "users", image: "/service-corporate.png", title: "Corporate Events", desc: "Sleek, modern photo experiences designed for brand activations, galas, and high-impact corporate moments.", features: ["Full logo & brand integration", "Lead capture & data collection", "Custom digital backdrops", "On-brand printed and digital assets"] },
  { iconKey: "heart", image: "/service-wedding.png", title: "Weddings & Private Events", desc: "Luxury mirror booth and 360 experiences that turn your wedding into a cinematic, unforgettable memory.", features: ["Elegant mirror & 360 booth options", "Custom wedding-themed templates", "Guestbook & keepsake prints", "Dedicated event coordinator"] },
]);

// ---- Gallery ----
export interface GalleryData {
  url: string;
  album?: string;
}
export const galleryStore = makeStore<GalleryData>("gallery", [
  "/gallery/g1.png", "/gallery/g2.png", "/gallery/g3.png",
  "/gallery/g4.png", "/gallery/g5.png", "/gallery/g6.png",
  "/gallery/g7.png", "/gallery/g8.png", "/gallery/g9.png",
  "/gallery/g10.png", "/gallery/g11.png", "/gallery/g12.png",
].map(url => ({ url, album: "" })));

// ---- Gallery Albums (shareable, optionally password-protected sub-galleries) ----
export interface GalleryAlbumData {
  name: string;
  slug: string;
  password?: string;
}
export const galleryAlbumsStore = makeStore<GalleryAlbumData>("galleryAlbums", []);

export async function findAlbumBySlug(slug: string): Promise<WithId<GalleryAlbumData> | null> {
  const albums = await galleryAlbumsStore.list();
  return albums.find(a => a.slug === slug) || null;
}

// ---- Packages ----
export interface PackageFeatureItem {
  iconKey?: string;
  text?: string;
  heading?: string;
}
export interface PackageData {
  name: string;
  label: string;
  price: string;
  duration: string;
  image: string;
  featured: boolean;
  cta: string;
  link: string;
  desc: string;
  features: PackageFeatureItem[];
}
export const packagesStore = makeStore<PackageData>("packages", [
  {
    name: "Signature", label: "Standard Package", price: "$599", duration: "3 Hours", image: "/badge-signature.png", featured: false, cta: "Select Package", link: "https://form.jotform.com/261105582742050",
    desc: "Perfect for birthdays, showers, graduations and smaller celebrations.",
    features: [
      { iconKey: "imageFrame", text: "Standard backdrop" },
      { iconKey: "camera", text: "Unlimited photos & GIFs" },
      { iconKey: "tag", text: "Props" },
      { iconKey: "users", text: "Professional attendant" },
      { iconKey: "tag", text: "Custom photo template" },
      { iconKey: "message", text: "Instant Sharing" },
      { iconKey: "gallery", text: "Online gallery" },
    ],
  },
  {
    name: "Luxury", label: "Enhanced Package", price: "$799", duration: "4 Hours", image: "/badge-luxury.png", featured: false, cta: "Select Package", link: "https://form.jotform.com/261105582742050",
    desc: "Our recommended package for weddings, milestones and corporate events.",
    features: [
      { iconKey: "clock", text: "4 hours of service" },
      { iconKey: "imageFrame", text: "Backdrop" },
      { iconKey: "camera", text: "Unlimited photos, & GIFs" },
      { iconKey: "tag", text: "Props" },
      { iconKey: "video", text: "Custom-branded photo/video template" },
      { iconKey: "users", text: "Dedicated attendant" },
      { iconKey: "gallery", text: "Online gallery" },
      { iconKey: "carpet", text: "Red carpet" },
    ],
  },
  {
    name: "Platinum", label: "Premium Package", price: "$1,199", duration: "5 Hours", image: "/badge-platinum.png", featured: true, cta: "Select Package", link: "https://form.jotform.com/261105582742050",
    desc: "The ultimate booth experience for weddings and big celebrations. Must be booked at least one month in advance to ensure all customized requests can be accommodated.",
    features: [
      { heading: "Booth Experience" },
      { iconKey: "camera", text: "Mirror Booth and/or 360 Video Booth (space permitting)" },
      { iconKey: "clock", text: "5 hours of premium service" },
      { iconKey: "video", text: "Unlimited photos, GIFs & videos" },
      { iconKey: "imageFrame", text: "Premium backdrop" },
      { iconKey: "users", text: "Professional attendant(s)" },
      { heading: "Customization & Branding" },
      { iconKey: "check", text: "Full event branding experience" },
      { iconKey: "tag", text: "Custom photo & video templates" },
      { iconKey: "imageFrame", text: "Custom welcome screen" },
      { iconKey: "tag", text: "Custom props" },
      { heading: "Photo & Video Experience" },
      { iconKey: "printer", text: "Up to 100 photo prints" },
      { iconKey: "message", text: "Instant digital sharing station" },
      { iconKey: "video", text: "Boomerang videos" },
      { iconKey: "video", text: "Short-form vertical videos for Instagram & TikTok" },
      { iconKey: "video", text: "Video capture services" },
      { heading: "Event Experience" },
      { iconKey: "carpet", text: "Red carpet" },
      { iconKey: "gallery", text: "Online gallery" },
    ],
  },
]);

// ---- Add-ons ----
export interface AddOnData {
  iconKey: string;
  label: string;
}
export const addOnsStore = makeStore<AddOnData>("addOns", [
  { iconKey: "clock", label: "Additional Hour of Service" },
  { iconKey: "book", label: "Guestbook" },
  { iconKey: "tag", label: "Customer Giveaways" },
  { iconKey: "check", label: "Full Event Branding Experience" },
  { iconKey: "printer", label: "Unlimited Photo Prints" },
  { iconKey: "tag", label: "Custom Props" },
]);

// ---- Package Includes ----
export interface PackageIncludeData {
  iconKey: string;
  text: string;
}
export const packageIncludesStore = makeStore<PackageIncludeData>("packageIncludes", [
  { iconKey: "check", text: "Professional on-site attendant" },
  { iconKey: "check", text: "Unlimited digital sharing" },
  { iconKey: "check", text: "Custom event template" },
  { iconKey: "check", text: "Online gallery access" },
  { iconKey: "check", text: "Full setup & breakdown" },
  { iconKey: "check", text: "No hidden fees" },
]);

// ---- Testimonials ----
export interface TestimonialData {
  quote: string;
  name: string;
  role: string;
}
export const testimonialsStore = makeStore<TestimonialData>("testimonials", [
  { quote: "The 360 booth was the absolute highlight of our wedding! Our guests could not stop talking about it. The quality of the videos is truly unmatched.", name: "Sarah & James", role: "Wedding Clients" },
  { quote: "Incredible professional service for our corporate gala. The branding on the mirror booth was perfect and the attendant was absolutely top-notch.", name: "David Thompson", role: "Marketing Director, TechFlow" },
  { quote: "Exceeded all expectations. From the booking process to the night of the event, everything was seamless. Best photobooth company in the city.", name: "Amanda Lee", role: "Event Planner" },
]);

// ---- FAQs ----
export interface FaqData {
  q: string;
  a: string;
}
export const faqsStore = makeStore<FaqData>("faqs", [
  { q: "How much space is needed for the 360 booth?", a: "The 360 Video Booth requires approximately a 10x10 ft space with a minimum ceiling height of 8 feet. Our team handles full setup and breakdown." },
  { q: "Do you travel outside Toronto?", a: "Yes — we service Toronto, GTA, and surrounding areas. Travel fees may apply for events outside a 30km radius. Contact us for a custom quote." },
  { q: "How fast are photos and videos delivered to guests?", a: "Instantly. Guests receive photos and videos in real-time via text or email at the event. A full online gallery is delivered within 24 hours." },
  { q: "Can we customize the template and branding?", a: "Absolutely. Every package includes a custom template. Premium and Platinum packages include full branding with your logo, colors, and custom overlays." },
  { q: "What is your cancellation policy?", a: "A 50% deposit secures your date. Cancellations 14+ days before the event receive a full deposit refund. Within 14 days, deposits are non-refundable but can be rescheduled." },
]);

export const stores = {
  services: servicesStore,
  gallery: galleryStore,
  galleryAlbums: galleryAlbumsStore,
  packages: packagesStore,
  addOns: addOnsStore,
  packageIncludes: packageIncludesStore,
  testimonials: testimonialsStore,
  faqs: faqsStore,
} as const;

export type StoreName = keyof typeof stores;
export const storeNames = Object.keys(stores) as StoreName[];
