export type TemplateCategory = "Tourism & Travel" | "Riad / Hotel" | "Restaurant" | "Agency / Corporate" | "E-commerce" | "Portfolio";

export interface TemplateItem {
  slug: string;
  title: string;
  category: TemplateCategory;
  tags: string[];
  priceRange: string;
  features: string[];
  previewUrl: string;
  screenshots: string[];
  description: string;
  popular?: boolean;
  createdAt: string;
  delivery: string;
}

const screen = (seed: string) => `https://images.unsplash.com/${seed}?auto=format&fit=crop&w=1200&q=80`;

export const templates: TemplateItem[] = [
  { slug: "atlas-voyage", title: "Atlas Voyage", category: "Tourism & Travel", tags: ["Booking", "Multilingual", "Maps"], priceRange: "€€", features: ["Tour package pages", "Integrated inquiry forms", "SEO landing pages"], previewUrl: "/demos/atlas-voyage", screenshots: [screen("photo-1469474968028-56623f02e42e"), screen("photo-1488646953014-85cb44e25828"), screen("photo-1501555088652-021faa106b9b")], description: "Luxury desert and mountain itinerary showcase with fast booking funnels.", popular: true, createdAt: "2026-01-10", delivery: "14 days" },
  { slug: "riad-noor", title: "Riad Noor", category: "Riad / Hotel", tags: ["Reservations", "Gallery", "Reviews"], priceRange: "€€", features: ["Room detail pages", "Availability calendar", "Guest testimonials"], previewUrl: "/demos/riad-noor", screenshots: [screen("photo-1566073771259-6a8506099945"), screen("photo-1578683010236-d716f9a3f461"), screen("photo-1571896349842-33c89424de2d")], description: "Elegant hospitality template inspired by Marrakech courtyards.", createdAt: "2026-01-20", delivery: "12 days" },
  { slug: "medina-bites", title: "Medina Bites", category: "Restaurant", tags: ["Menu", "Reservations", "Delivery"], priceRange: "€", features: ["Interactive menu", "Chef story", "Local SEO schema"], previewUrl: "/demos/medina-bites", screenshots: [screen("photo-1555396273-367ea4eb4db5"), screen("photo-1540189549336-e6e99c3679fe"), screen("photo-1466978913421-dad2ebd01d17")], description: "Restaurant-first website for modern Moroccan dining brands.", createdAt: "2026-02-05", delivery: "10 days" },
  { slug: "kasbah-corp", title: "Kasbah Corporate", category: "Agency / Corporate", tags: ["Lead Gen", "B2B", "CMS"], priceRange: "€€", features: ["Case study blocks", "Team pages", "Content hub"], previewUrl: "/demos/kasbah-corp", screenshots: [screen("photo-1497366811353-6870744d04b2"), screen("photo-1552664730-d307ca884978"), screen("photo-1517048676732-d65bc937f952")], description: "Clean corporate presentation with premium trust-building sections.", createdAt: "2026-01-02", delivery: "16 days" },
  { slug: "souk-shop", title: "Souk Shop", category: "E-commerce", tags: ["Payments", "Catalog", "Upsell"], priceRange: "€€€", features: ["Product filtering", "Checkout optimized", "Inventory ready"], previewUrl: "/demos/souk-shop", screenshots: [screen("photo-1441986300917-64674bd600d8"), screen("photo-1472851294608-062f824d29cc"), screen("photo-1483985988355-763728e1935b")], description: "Premium commerce layout for handcrafted and lifestyle brands.", popular: true, createdAt: "2026-02-12", delivery: "21 days" },
  { slug: "artisan-portfolio", title: "Artisan Portfolio", category: "Portfolio", tags: ["Showcase", "Storytelling", "Contact"], priceRange: "€", features: ["Project highlight reels", "Service showcase", "Fast contact CTA"], previewUrl: "/demos/artisan-portfolio", screenshots: [screen("photo-1456324504439-367cee3b3c32"), screen("photo-1519389950473-47ba0277781c"), screen("photo-1504805572947-34fad45aed93")], description: "Designed for freelancers and creators that need polished credibility.", createdAt: "2026-01-14", delivery: "8 days" },
  { slug: "sahara-retreats", title: "Sahara Retreats", category: "Tourism & Travel", tags: ["Itineraries", "Video", "Seasonal"], priceRange: "€€", features: ["Trip filtering", "Guide bios", "WhatsApp inquiries"], previewUrl: "/demos/sahara-retreats", screenshots: [screen("photo-1501785888041-af3ef285b470"), screen("photo-1472396961693-142e6e269027"), screen("photo-1469474968028-56623f02e42e")], description: "Adventure-led tourism site focused on conversion-rich storytelling.", createdAt: "2026-01-27", delivery: "15 days" },
  { slug: "cobalt-riad", title: "Cobalt Riad", category: "Riad / Hotel", tags: ["Luxury", "Multi-language", "SEO"], priceRange: "€€€", features: ["Virtual room tour", "Concierge requests", "Localized content"], previewUrl: "/demos/cobalt-riad", screenshots: [screen("photo-1535827841776-24afc1e255ac"), screen("photo-1551882547-ff40c63fe5fa"), screen("photo-1522708323590-d24dbb6b0267")], description: "High-end hospitality template with immersive visuals and conversion CTAs.", popular: true, createdAt: "2026-02-18", delivery: "18 days" },
  { slug: "argan-digital", title: "Argan Digital", category: "Agency / Corporate", tags: ["SaaS", "Blog", "Analytics"], priceRange: "€€", features: ["Service funnels", "Insight pages", "Data dashboard blocks"], previewUrl: "/demos/argan-digital", screenshots: [screen("photo-1460925895917-afdab827c52f"), screen("photo-1551434678-e076c223a692"), screen("photo-1486312338219-ce68d2c6f44d")], description: "Modern agency architecture optimized for inbound lead capture.", createdAt: "2026-02-01", delivery: "13 days" },
  { slug: "mint-market", title: "Mint Market", category: "E-commerce", tags: ["Headless", "Subscriptions", "SEO"], priceRange: "€€€", features: ["Category pages", "Bundles", "Subscription widget"], previewUrl: "/demos/mint-market", screenshots: [screen("photo-1441984904996-e0b6ba687e04"), screen("photo-1523381210434-271e8be1f52b"), screen("photo-1512436991641-6745cdb1723f")], description: "Scalable online storefront for premium Moroccan goods.", createdAt: "2026-02-22", delivery: "20 days" }
];
