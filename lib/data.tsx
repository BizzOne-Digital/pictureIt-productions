import { IconUsers, IconHeart, IconFacebook, IconInstagram, IconTiktok, IconDiamond, IconCrown, IconClock, IconCheck } from "@/components/icons";

export const mainNav = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
];

export const moreNav = [
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const navLinks = [...mainNav.filter(l => l.label !== "Home"), ...moreNav];

export const squarePayLink = "https://square.link/u/YHC4osR3";

export const socialLinks = [
  { icon: <IconFacebook />, href: "https://www.facebook.com/people/Picture-It-Productions/61588676041830/" },
  { icon: <IconInstagram />, href: "https://www.instagram.com/pictureitevents.ca/" },
  { icon: <IconTiktok />, href: "https://www.tiktok.com/@pictureitevents.ca" },
];

export const whyChooseUs = [
  { icon: <IconClock />, title: "Fast Setup & On-Time Every Time", desc: "Our team arrives early and handles complete setup and breakdown, so you never have to worry about a thing." },
  { icon: <IconUsers />, title: "Professional Attendants", desc: "Every booking includes a trained, friendly attendant to keep your guests moving and having fun all night." },
  { icon: <IconDiamond />, title: "Premium Quality Equipment", desc: "High-resolution cameras, luxury backdrops, and studio-quality lighting for flawless photos every time." },
  { icon: <IconCheck />, title: "100% Satisfaction Guarantee", desc: "With 500+ luxury events delivered and a 5-star rating, your celebration is in trusted hands." },
];

export const values = [
  { icon: <IconHeart />, title: "Passion", desc: "We treat every event like it's our own celebration — because your memories deserve nothing less." },
  { icon: <IconDiamond />, title: "Precision", desc: "From setup to breakdown, every detail is planned and executed with meticulous care." },
  { icon: <IconUsers />, title: "Professionalism", desc: "Trained, friendly attendants who represent your event with polish and respect." },
  { icon: <IconCrown />, title: "Innovation", desc: "Cutting-edge 360 and mirror booth technology that keeps your celebration ahead of the trend." },
];

export const milestones = [
  { num: "2020", title: "Founded", desc: "Picture It Productions launched with a single mirror booth and a big vision." },
  { num: "2022", title: "Expansion", desc: "Added the 360 Video Booth experience and grew our team across the GTA." },
  { num: "2024", title: "500+ Events", desc: "Crossed 500 luxury weddings, corporate galas, and private celebrations served." },
  { num: "Today", title: "Industry Leader", desc: "Toronto's trusted, 5-star rated luxury photobooth and video booth company." },
];

export const pageBanners = {
  services: "/service-360.png",
  packages: "/packages-collage.png",
  gallery: "/gallery/g5.png",
  reviews: "/reviews/r2.png",
  about: "/wedding-couple.png",
  faq: "/gallery/g7.png",
  contact: "/gallery/g3.png",
};

export const steps = [
  { num: "01", title: "Book", desc: "Choose your date and package through our easy online portal." },
  { num: "02", title: "Plan", desc: "Customize your backdrop, overlays, and specific event requirements." },
  { num: "03", title: "Setup", desc: "Our professional team arrives early to ensure everything is perfect." },
  { num: "04", title: "Enjoy", desc: "Step in, smile, and watch the magic happen." },
];
