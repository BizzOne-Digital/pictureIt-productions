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
    ],
    summary: item => item.url,
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

export const collectionOrder = ["services", "packages", "gallery", "testimonials", "faqs", "addOns", "packageIncludes"];
