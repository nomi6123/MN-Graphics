// data/portfolioData.js

export const portfolioItems = [
  // Logo Designs
  {
    id: "1",
    title: "Modern Tech Logo",
    description: "Clean, minimalist design for tech startup",
    imageSrc: "/logo/2.png",
    category: "logo",
  },
  {
    id: "2",
    title: "Restaurant Brand Logo",
    description: "Elegant logo for fine dining",
    imageSrc: "/logo/3.png",
    category: "logo",
  },
  {
    id: "3",
    title: "Fitness Brand Logo",
    description: "Dynamic logo for fitness center",
    imageSrc: "/logo/4.png",
    category: "logo",
  },
  {
    id: "4",
    title: "Creative Agency Logo",
    description: "Innovative design for creative agency",
    imageSrc: "/logo/5.png",
    category: "logo",
  },

  // Poster Designs
  {
    id: "5",
    title: "Music Festival Poster",
    description: "Vibrant design for music event",
    imageSrc: "/poster/1.png",
    category: "poster",
  },
  {
    id: "6",
    title: "Conference Poster",
    description: "Professional design for business conference",
    imageSrc: "/poster/2.png",
    category: "poster",
  },
  {
    id: "7",
    title: "Art Exhibition Poster",
    description: "Creative poster for art gallery",
    imageSrc: "/poster/3.jpg",
    category: "poster",
  },

  // Banner Designs
  {
    id: "8",
    title: "E-commerce Banner",
    description: "Promotional banner for online store",
    imageSrc: "/images/banners/banner1.jpg",
    category: "banner",
  },
  {
    id: "9",
    title: "Social Media Banner",
    description: "Engaging banner for social platforms",
    imageSrc: "/images/banners/banner2.jpg",
    category: "banner",
  },
  {
    id: "10",
    title: "Event Banner",
    description: "Eye-catching banner for special event",
    imageSrc: "/images/banners/banner3.jpg",
    category: "banner",
  },
  {
    id: "11",
    title: "Product Launch Banner",
    description: "Modern banner for product launch",
    imageSrc: "/images/banners/banner4.jpg",
    category: "banner",
  },

  // Creative Designs
  {
    id: "12",
    title: "Abstract Art Design",
    description: "Creative abstract composition",
    imageSrc: "/images/creative/creative1.jpg",
    category: "creative",
  },
  {
    id: "13",
    title: "Digital Illustration",
    description: "Custom digital artwork",
    imageSrc: "/images/creative/creative2.jpg",
    category: "creative",
  },
  {
    id: "14",
    title: "Typography Design",
    description: "Innovative typography treatment",
    imageSrc: "/images/creative/creative3.jpg",
    category: "creative",
  },

  // Brand Identity
  {
    id: "15",
    title: "Complete Brand Package",
    description: "Full brand identity system",
    imageSrc: "/images/branding/brand1.jpg",
    category: "brand",
  },
  {
    id: "16",
    title: "Corporate Identity",
    description: "Professional corporate branding",
    imageSrc: "/images/branding/brand2.jpg",
    category: "brand",
  },
  {
    id: "17",
    title: "Startup Brand Kit",
    description: "Modern brand identity for startup",
    imageSrc: "/images/branding/brand3.jpg",
    category: "brand",
  },
];

export const categories = [
  { key: "logo", title: "Logo Designs", gridCols: "xl:grid-cols-4" },
  { key: "poster", title: "Poster Designs", gridCols: "lg:grid-cols-3" },
  { key: "banner", title: "Banner Designs", gridCols: "md:grid-cols-2" },
  { key: "creative", title: "Creative Designs", gridCols: "lg:grid-cols-3" },
  {
    key: "brand",
    title: "Brand Identity Projects",
    gridCols: "lg:grid-cols-3",
  },
];