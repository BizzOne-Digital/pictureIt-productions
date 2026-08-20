import { iconKeys } from "@/components/icons";

export type FieldKind = "text" | "textarea" | "select" | "checkbox" | "image" | "lines" | "packageFeatures";

export interface FieldConfig {
  name: string;
  label: string;
  kind: FieldKind;
  options?: string[];
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface CollectionConfig {
  key: string;
  title: string;
  fields: FieldConfig[];
  summary: (item: any) => string;
}

export const collectionConfigs: Record<string, CollectionConfig> = {
  services: {
    key: "services",
    title: "Services",
    fields: [
      { name: "title", label: "Title", kind: "text" },
      { name: "iconKey", label: "Icon", kind: "select", options: iconKeys },
      { name: "image", label: "Image", kind: "image" },
      { name: "desc", label: "Description", kind: "textarea" },
      { name: "features", label: "Feature bullets (one per line)", kind: "lines" },
    ],
    summary: item => item.title,
  },
  gallery: {
    key: "gallery",
    title: "Gallery",
    fields: [
      { name: "url", label: "Image", kind: "image" },
      { name: "album", label: "Album (optional — groups photos into a shareable sub-gallery)", kind: "text" },
    ],
    summary: item => `${item.url}${item.album ? `  [${item.album}]` : ""}`,
  },
  galleryAlbums: {
    key: "galleryAlbums",
    title: "Shareable Albums",
    fields: [
      { name: "name", label: "Album Name", kind: "text" },
      { name: "slug", label: "Link Slug (e.g. smith-wedding — used in the shareable URL)", kind: "text" },
      { name: "password", label: "Password (leave blank for no password)", kind: "text" },
    ],
    summary: item => `${item.name} — /gallery/album/${item.slug}${item.password ? " (locked)" : ""}`,
  },
  packages: {
    key: "packages",
    title: "Packages",
    fields: [
      { name: "name", label: "Name", kind: "text" },
      { name: "label", label: "Category Label", kind: "text" },
      { name: "price", label: "Price", kind: "text" },
      { name: "duration", label: "Duration", kind: "text" },
      { name: "image", label: "Badge Image", kind: "image" },
      { name: "featured", label: "Most Popular", kind: "checkbox" },
      { name: "cta", label: "Button Text", kind: "text" },
      { name: "link", label: "Booking Link", kind: "text" },
      { name: "desc", label: "Description", kind: "textarea" },
      { name: "features", label: "Features", kind: "packageFeatures" },
    ],
    summary: item => `${item.name} — ${item.price}`,
  },
  addOns: {
    key: "addOns",
    title: "Add-Ons",
    fields: [
      { name: "label", label: "Label", kind: "text" },
      { name: "iconKey", label: "Icon", kind: "select", options: iconKeys },
    ],
    summary: item => item.label,
  },
  packageIncludes: {
    key: "packageIncludes",
    title: "Package Includes",
    fields: [
      { name: "text", label: "Text", kind: "text" },
      { name: "iconKey", label: "Icon", kind: "select", options: iconKeys },
    ],
    summary: item => item.text,
  },
  testimonials: {
    key: "testimonials",
    title: "Testimonials",
    fields: [
      { name: "name", label: "Name", kind: "text" },
      { name: "role", label: "Role", kind: "text" },
      { name: "quote", label: "Quote", kind: "textarea" },
    ],
    summary: item => item.name,
  },
  faqs: {
    key: "faqs",
    title: "FAQs",
    fields: [
      { name: "q", label: "Question", kind: "text" },
      { name: "a", label: "Answer", kind: "textarea" },
    ],
    summary: item => item.q,
  },
};

export const collectionOrder = ["services", "packages", "gallery", "galleryAlbums", "testimonials", "faqs", "addOns", "packageIncludes"];
