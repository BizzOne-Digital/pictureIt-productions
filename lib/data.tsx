import { IconCamera, Icon360, IconUsers, IconHeart, IconFacebook, IconInstagram, IconTiktok, IconDiamond, IconCrown, IconClock, IconMessage, IconImageFrame, IconTag, IconGallery, IconBook, IconVideo, IconPrinter, IconCarpet, IconCheck, BadgeSignature, BadgeLuxury, BadgePlatinum } from "@/components/icons";

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

export const packages = [
  {
    name: "Signature",
    label: "Standard Package",
    price: "$599",
    duration: "3 Hours",
    icon: <BadgeSignature />,
    featured: false,
    cta: "Select Package",
    link: "https://form.jotform.com/261105582742050",
    desc: "Perfect for birthdays, showers, graduations and smaller celebrations.",
    features: [
      { icon: <IconImageFrame />, text: "Standard backdrop" },
      { icon: <IconCamera />, text: "Unlimited photos & GIFs" },
      { icon: <IconTag />, text: "Props" },
      { icon: <IconUsers />, text: "Professional attendant" },
      { icon: <IconTag />, text: "Custom photo template" },
      { icon: <IconMessage />, text: "Instant Sharing" },
      { icon: <IconGallery />, text: "Online gallery" },
    ],
  },
  {
    name: "Luxury",
    label: "Enhanced Package",
    price: "$799",
    duration: "4 Hours",
    icon: <BadgeLuxury />,
    featured: false,
    cta: "Select Package",
    link: "https://form.jotform.com/261105582742050",
    desc: "Our recommended package for weddings, milestones and corporate events.",
    features: [
      { icon: <IconClock />, text: "4 hours of service" },
      { icon: <IconImageFrame />, text: "Backdrop" },
      { icon: <IconCamera />, text: "Unlimited photos, & GIFs" },
      { icon: <IconTag />, text: "Props" },
      { icon: <IconVideo />, text: "Custom-branded photo/video template" },
      { icon: <IconUsers />, text: "Dedicated attendant" },
      { icon: <IconGallery />, text: "Online gallery" },
      { icon: <IconCarpet />, text: "Red carpet" },
    ],
  },
  {
    name: "Platinum",
    label: "Premium Package",
    price: "$1,199",
    duration: "5 Hours",
    icon: <BadgePlatinum />,
    featured: true,
    cta: "Select Package",
    link: "https://form.jotform.com/261105582742050",
    desc: "The ultimate booth experience for weddings and big celebrations. Must be booked at least one month in advance to ensure all customized requests can be accommodated.",
    features: [
      { heading: "Booth Experience" },
      { icon: <IconCamera />, text: "Mirror Booth and/or 360 Video Booth (space permitting)" },
      { icon: <IconClock />, text: "5 hours of premium service" },
      { icon: <IconVideo />, text: "Unlimited photos, GIFs & videos" },
      { icon: <IconImageFrame />, text: "Premium backdrop" },
      { icon: <IconUsers />, text: "Professional attendant(s)" },
      { heading: "Customization & Branding" },
      { icon: <IconCheck />, text: "Full event branding experience" },
      { icon: <IconTag />, text: "Custom photo & video templates" },
      { icon: <IconImageFrame />, text: "Custom welcome screen" },
      { icon: <IconTag />, text: "Custom props" },
      { heading: "Photo & Video Experience" },
      { icon: <IconPrinter />, text: "Up to 100 photo prints" },
      { icon: <IconMessage />, text: "Instant digital sharing station" },
      { icon: <IconVideo />, text: "Boomerang videos" },
      { icon: <IconVideo />, text: "Short-form vertical videos for Instagram & TikTok" },
      { icon: <IconVideo />, text: "Video capture services" },
      { heading: "Event Experience" },
      { icon: <IconCarpet />, text: "Red carpet" },
      { icon: <IconGallery />, text: "Online gallery" },
    ],
  },
];

export const addOns = [
  { icon: <IconClock />, label: "Additional Hour of Service" },
  { icon: <IconBook />, label: "Guestbook" },
  { icon: <IconTag />, label: "Customer Giveaways" },
  { icon: <IconCheck />, label: "Full Event Branding Experience" },
  { icon: <IconPrinter />, label: "Unlimited Photo Prints" },
  { icon: <IconTag />, label: "Custom Props" },
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
