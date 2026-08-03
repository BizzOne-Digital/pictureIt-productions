import { IconCamera, Icon360, IconUsers, IconHeart, IconFacebook, IconInstagram, IconTiktok, IconDiamond, IconCrown, IconClock, IconMessage, IconImageFrame, IconTag, IconGallery, IconBook, IconVideo, IconPrinter, IconCarpet, IconBuilding, IconCheck } from "@/components/icons";

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Packages", href: "/packages" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const socialLinks = [
  { icon: <IconFacebook />, href: "https://www.facebook.com/people/Picture-It-Productions/61588676041830/" },
  { icon: <IconInstagram />, href: "https://www.instagram.com/pictureitevents.ca/" },
  { icon: <IconTiktok />, href: "https://www.tiktok.com/@pictureitevents.ca" },
];

export const packages = [
  {
    name: "The Classic",
    label: "Small Events & Intimate Celebrations",
    price: "$499",
    icon: <IconCamera />,
    featured: false,
    cta: "Book The Classic",
    link: "https://form.jotform.com/261105582742050",
    image: "/packeg.png",
    features: [
      { icon: <IconClock />, text: "2 Hours of Photobooth Service" },
      { icon: <IconCamera />, text: "Unlimited Digital Photos" },
      { icon: <IconMessage />, text: "Instant Sharing via SMS/Email" },
      { icon: <IconImageFrame />, text: "Standard Backdrop" },
      { icon: <IconTag />, text: "Fun Props Included" },
      { icon: <IconTag />, text: "Custom Photo Template" },
      { icon: <IconGallery />, text: "Online Event Gallery" },
    ],
  },
  {
    name: "The Signature",
    label: "Weddings & Special Events",
    price: "$799",
    icon: <IconDiamond />,
    featured: true,
    cta: "Reserve Signature Package",
    link: "https://form.jotform.com/261105582742050",
    image: "/packeg.png",
    features: [
      { icon: <IconClock />, text: "4 Hours of Photobooth Service" },
      { icon: <IconCamera />, text: "Unlimited Photos, GIFs & Boomerangs" },
      { icon: <IconMessage />, text: "Instant Digital Sharing" },
      { icon: <IconImageFrame />, text: "Premium Backdrop Selection" },
      { icon: <IconTag />, text: "Custom Event Overlay" },
      { icon: <IconTag />, text: "Luxury Props Collection" },
      { icon: <IconUsers />, text: "On-Site Booth Attendant" },
      { icon: <IconGallery />, text: "Online Gallery" },
      { icon: <IconBook />, text: "Digital Guestbook" },
    ],
  },
  {
    name: "The Luxe Experience",
    label: "Corporate Galas, Luxury Weddings & VIP Events",
    price: "$1,199",
    icon: <IconCrown />,
    featured: false,
    cta: "Book The Luxe Experience",
    link: "https://form.jotform.com/261105582742050",
    image: "/packeg.png",
    features: [
      { icon: <IconClock />, text: "Up to 6 Hours of Service" },
      { icon: <IconCamera />, text: "Premium Photobooth Setup" },
      { icon: <IconVideo />, text: "Unlimited Photos, Videos & GIFs" },
      { icon: <IconImageFrame />, text: "Custom-Branded Booth Screen" },
      { icon: <IconCarpet />, text: "Luxury Backdrop & Red Carpet Setup" },
      { icon: <IconTag />, text: "Premium Props" },
      { icon: <IconUsers />, text: "Dedicated Event Attendant" },
      { icon: <IconPrinter />, text: "Instant Prints for Guests" },
      { icon: <IconBook />, text: "Custom Guestbook" },
      { icon: <IconGallery />, text: "Full Online Gallery" },
      { icon: <IconCheck />, text: "Setup & Breakdown Included" },
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
    desc: "Immersive cinematic experiences with custom branding, overlays, and instant digital sharing for your guests.",
    features: ["Unlimited digital photos & GIFs", "Custom branded overlays", "Instant text & email sharing", "Professional on-site attendant"],
  },
  {
    icon: <Icon360 />, title: "360 Video Booth",
    desc: "Slow-motion 360 video experiences with custom music and branding — the ultimate event centrepiece.",
    features: ["Slow-motion 360° video capture", "Custom music & branding overlays", "Red carpet & LED platform setup", "Instant social-ready video clips"],
  },
  {
    icon: <IconUsers />, title: "Corporate Events",
    desc: "Sleek, modern photo experiences designed for brand activations, galas, and high-impact corporate moments.",
    features: ["Full logo & brand integration", "Lead capture & data collection", "Custom digital backdrops", "On-brand printed and digital assets"],
  },
  {
    icon: <IconHeart />, title: "Weddings & Private Events",
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
  "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&q=80",
  "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
  "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&q=80",
  "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=600&q=80",
  "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80",
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
