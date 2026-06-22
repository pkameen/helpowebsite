export type PortfolioCategory = "Website" | "Web App" | "Ecommerce" | "ERP";

export type PortfolioItem = {
  id: number;
  title: string;
  category: PortfolioCategory;
  description: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Corporate Business Website",
    category: "Website",
    description:
      "Premium company website designed to strengthen brand credibility and present services professionally.",
    image: "/images/portfolio/website-1.jpg",
  },
  {
    id: 2,
    title: "Modern Ecommerce Store",
    category: "Ecommerce",
    description:
      "A conversion-focused ecommerce experience with premium layout, product presentation and clean shopping flow.",
    image: "/images/portfolio/ecommerce-1.jpg",
  },
  {
    id: 3,
    title: "Custom Web Application",
    category: "Web App",
    description:
      "Business-focused custom web application with dashboard, workflow features and premium interface structure.",
    image: "/images/portfolio/webapp-1.jpg",
  },
  {
    id: 4,
    title: "ERP Management System",
    category: "ERP",
    description:
      "Enterprise-style ERP dashboard system designed for operations, reporting and business workflow management.",
    image: "/images/portfolio/erp-1.jpg",
  },
  {
    id: 5,
    title: "Luxury Brand Website",
    category: "Website",
    description:
      "Elegant premium website experience for a modern brand looking for a stronger online presence.",
    image: "/images/portfolio/website-2.jpg",
  },
  {
    id: 6,
    title: "Product Selling Platform",
    category: "Ecommerce",
    description:
      "A scalable ecommerce storefront focused on premium visuals, product discovery and clean user flow.",
    image: "/images/portfolio/ecommerce-2.jpg",
  },
  {
    id: 7,
    title: "CRM / Admin Dashboard",
    category: "Web App",
    description:
      "A modern internal dashboard and client management interface built for structured workflow and business efficiency.",
    image: "/images/portfolio/webapp-2.jpg",
  },
  {
    id: 8,
    title: "Business Operations ERP",
    category: "ERP",
    description:
      "A robust business operations system with inventory, finance and reporting oriented modules.",
    image: "/images/portfolio/erp-2.jpg",
  },
];