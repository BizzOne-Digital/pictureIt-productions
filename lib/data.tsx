import { IconCamera, Icon360, IconUsers, IconHeart, IconFacebook, IconInstagram, IconTiktok, IconDiamond, IconCrown, IconClock, IconMessage, IconImageFrame, IconTag, IconGallery, IconBook, IconVideo, IconPrinter, IconCarpet, IconBuilding, IconCheck } from "@/components/icons";

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

export const socialLinks = [
  { icon: <IconFacebook />, href: "https://www.facebook.com/people/Picture-It-Productions/61588676041830/" },
  { icon: <IconInstagram />, href: "https://www.instagram.com/pictureitevents.ca/" },
  { icon: <IconTiktok />, href: "https://www.tiktok.com/@pictureitevents.ca" },
];

export const packages = [
  {
    name: "Essential",
    label: "Basic Package",
    price: "$399",
    duration: "2 Hours",
    icon: <IconCamera />,
    featured: false,
    cta: "Select Package",
    link: "https://form.jotform.com/261105582742050",
    features: [
      { icon: <IconClock />, text: "2 hours of service" },
      { icon: <IconImageFrame />, text: "Standard backdrop" },
      { icon: <IconCamera />, text: "Unlimited digital photos" },
      { icon: <IconTag />, text: "Basic props" },
      { icon: <IconUsers />, text: "On-site attendant" },
      { icon: <IconMessage />, text: "Instant sharing" },
      { icon: <IconTag />, text: "Basic custom template" },
    ],
  },
  {
    name: "Signature",
    label: "Standard Package",
    price: "$599",
    duration: "3 Hours",
    icon: <IconDiamond />,
    featured: true,
    cta: "Select Package",
    link: "https://form.jotform.com/261105582742050",
    features: [
      { icon: <IconClock />, text: "3 hours of service" },
      { icon: <IconImageFrame />, text: "Premium backdrop" },
      { icon: <IconCamera />, text: "Unlimited photos + GIFs" },
      { icon: <IconTag />, text: "Premium props" },
      { icon: <IconUsers />, text: "Professional attendant" },
      { icon: <IconMessage />, text: "Instant sharing" },
      { icon: <IconTag />, text: "Custom template" },
      { icon: <IconGallery />, text: "Online gallery" },
    ],
  },
  {
    name: "Luxury",
    label: "Premium Package",
    price: "$799",
    duration: "4 Hours",
    icon: <IconCrown />,
    featured: false,
    cta: "Select Package",
    link: "https://form.jotform.com/261105582742050",
    features: [
      { icon: <IconClock />, text: "4 hours of service" },
      { icon: <IconImageFrame />, text: "Luxury backdrop" },
      { icon: <IconVideo />, text: "Unlimited photos, GIFs, videos" },
      { icon: <IconTag />, text: "Custom props" },
      { icon: <IconUsers />, text: "Dedicated attendant" },
      { icon: <IconCheck />, text: "Full branding experience" },
      { icon: <IconGallery />, text: "Online gallery" },
      { icon: <IconCarpet />, text: "Red carpet + lighting" },
    ],
  },
];

export const addOns = [
  { icon: <IconClock />, label: "Extra Hour" },
  { icon: <IconImageFrame />, label: "Premium Backdrop" },
  { icon: <IconPrinter />, label: "Instant Prints" },
  { icon: <IconVideo />, label: "Video Messages" },
  { icon: <IconBook />, label: "Custom Guestbook" },
  { icon: <IconCarpet />, label: "Red Carpet Setup" },
  { icon: <IconBuilding />, label: "Corporate Branding" },
];

export const services = [
  {
    icon: <IconCamera />, title: "Digital Photobooth",
    image: "/service-photobooth.jpg",
    desc: "Immersive cinematic experiences with custom branding, overlays, and instant digital sharing for your guests.",
    features: ["Unlimited digital photos & GIFs", "Custom branded overlays", "Instant text & email sharing", "Professional on-site attendant"],
  },
  {
    icon: <Icon360 />, title: "360 Video Booth",
    image: "/service-360.png",
    desc: "Slow-motion 360 video experiences with custom music and branding — the ultimate event centrepiece.",
    features: ["Slow-motion 360° video capture", "Custom music & branding overlays", "Red carpet & LED platform setup", "Instant social-ready video clips"],
  },
  {
    icon: <IconUsers />, title: "Corporate Events",
    image: "/service-corporate.png",
    desc: "Sleek, modern photo experiences designed for brand activations, galas, and high-impact corporate moments.",
    features: ["Full logo & brand integration", "Lead capture & data collection", "Custom digital backdrops", "On-brand printed and digital assets"],
  },
  {
    icon: <IconHeart />, title: "Weddings & Private Events",
    image: "/service-wedding.png",
    desc: "Luxury mirror booth and 360 experiences that turn your wedding into a cinematic, unforgettable memory.",
    features: ["Elegant mirror & 360 booth options", "Custom wedding-themed templates", "Guestbook & keepsake prints", "Dedicated event coordinator"],
  },
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

export const packageIncludes = [
  { icon: <IconCheck />, text: "Professional on-site attendant" },
  { icon: <IconCheck />, text: "Unlimited digital sharing" },
  { icon: <IconCheck />, text: "Custom event template" },
  { icon: <IconCheck />, text: "Online gallery access" },
  { icon: <IconCheck />, text: "Full setup & breakdown" },
  { icon: <IconCheck />, text: "No hidden fees" },
];

export const testimonials = [
  { quote: "The 360 booth was the absolute highlight of our wedding! Our guests could not stop talking about it. The quality of the videos is truly unmatched.", name: "Sarah & James", role: "Wedding Clients" },
  { quote: "Incredible professional service for our corporate gala. The branding on the mirror booth was perfect and the attendant was absolutely top-notch.", name: "David Thompson", role: "Marketing Director, TechFlow" },
  { quote: "Exceeded all expectations. From the booking process to the night of the event, everything was seamless. Best photobooth company in the city.", name: "Amanda Lee", role: "Event Planner" },
];

export const galleryImages = [
  "/gallery/g1.png", "/gallery/g2.png", "/gallery/g3.png",
  "/gallery/g4.png", "/gallery/g5.png", "/gallery/g6.png",
  "/gallery/g7.png", "/gallery/g8.png", "/gallery/g9.png",
  "/gallery/g10.png", "/gallery/g11.png", "/gallery/g12.png",
];

export const faqs = [
  { q: "How much space is needed for the 360 booth?", a: "The 360 Video Booth requires approximately a 10x10 ft space with a minimum ceiling height of 8 feet. Our team handles full setup and breakdown." },
  { q: "Do you travel outside Toronto?", a: "Yes — we service Toronto, GTA, and surrounding areas. Travel fees may apply for events outside a 30km radius. Contact us for a custom quote." },
  { q: "How fast are photos and videos delivered to guests?", a: "Instantly. Guests receive photos and videos in real-time via text or email at the event. A full online gallery is delivered within 24 hours." },
  { q: "Can we customize the template and branding?", a: "Absolutely. Every package includes a custom template. Premium and Platinum packages include full branding with your logo, colors, and custom overlays." },
  { q: "What is your cancellation policy?", a: "A 50% deposit secures your date. Cancellations 14+ days before the event receive a full deposit refund. Within 14 days, deposits are non-refundable but can be rescheduled." },
];

export const steps = [
  { num: "01", title: "Book", desc: "Choose your date and package through our easy online portal." },
  { num: "02", title: "Plan", desc: "Customize your backdrop, overlays, and specific event requirements." },
  { num: "03", title: "Setup", desc: "Our professional team arrives early to ensure everything is perfect." },
  { num: "04", title: "Enjoy", desc: "Step in, smile, and watch the magic happen." },
];
