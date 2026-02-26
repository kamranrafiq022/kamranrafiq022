import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Kamran Rafiq — Full-Stack Engineer | AI SaaS | MERN | Laravel | Open AI | Dev-Ops",
  author: "Kamran Rafiq",
  description:
    "Full-Stack Engineer | AI SaaS | MERN | Laravel | Open AI | Dev-Ops with 5+ years of experience building scalable SaaS products. Specializing in AI-powered features, OpenAI integrations, and cloud deployments.",
  lang: "en",
  siteLogo: "/profile-pic-small.jpg",
  navLinks: [
    { text: "Experience", href: "#experience" },
    { text: "Projects", href: "#projects" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/kamran-rafiq-810a9a27a/" },
    { text: "Github", href: "https://github.com/kamranrafiq022" },
  ],
  socialImage: "/zen-og.png",
  canonicalURL: "https://kamranrafiq022.vercel.app/",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Kamran Rafiq",
    specialty: "Full-Stack Engineer | AI SaaS | MERN | Laravel | Open AI | Dev-Ops",
    summary:
      "Full-Stack Engineer with 5+ years of experience building scalable SaaS products using MERN and Laravel. I specialize in AI-powered features, OpenAI integrations, and automation systems. Based in Lahore, Pakistan — open to remote roles.",
    email: "Kamranrafiq022@gmail.com",
  },
  experience: [
    {
      company: "Pure Logics",
      position: "Senior Full Stack Engineer | Dev-Ops",
      startDate: "2024",
      endDate: "Jan 2026",
      summary: [
        "Led full-stack development and managed cloud deployments, optimizing CI/CD pipelines to deliver scalable, high-performance applications.",
        "Architected and maintained production infrastructure on VPS and cloud platforms, ensuring high availability and reliable deployments.",
        "Collaborated with cross-functional teams to deliver robust features, improving system performance and developer productivity.",
      ],
    },
    {
      company: "Systems LTD",
      position: "Full Stack Engineer",
      startDate: "2023",
      endDate: "2024",
      summary: [
        "Contributed to the Foodpanda dashboard application, building scalable features and efficient REST APIs using React.js and Laravel.",
        "Worked closely with product and design teams to translate requirements into reliable, maintainable code across the full stack.",
      ],
    },
    {
      company: "Trisage Solutions",
      position: "MERN Stack Developer",
      startDate: "2021",
      endDate: "2023",
      summary: [
        "Developed scalable web applications using MongoDB, Express.js, React, and Node.js for a variety of client projects.",
        "Built efficient REST APIs with clean, maintainable code and contributed to architecture decisions that improved long-term scalability.",
      ],
    },
  ],
  projects: [
    {
      name: "Available Trades",
      summary:
        "A full-stack online marketplace connecting homeowners with local tradespeople across the UK. Features include user onboarding, job posting, bidding, profiles, and admin controls.",
      linkPreview: "https://availabletrades.co.uk/",
      linkSource: "https://github.com/kamranrafiq022",
      image: "/avbtrade.jpg",
    },
    {
      name: "Krub.ai",
      summary:
        "An AI-driven platform featuring intelligent automation, real-time data processing, and seamless user experiences. Built with full-stack development, backend logic, and OpenAI integrations.",
      linkPreview: "https://krub.ai",
      linkSource: "https://github.com/kamranrafiq022",
      image: "/krub.jpg",
    },
    {
      name: "SeeBiz Inventory",
      summary:
        "A comprehensive wholesale inventory management platform for tracking stock, managing invoices, and streamlining warehouse operations across multiple locations.",
      linkPreview: "https://seebiz.com/inventory",
      linkSource: "https://github.com/kamranrafiq022",
      image: "/seebiz.jpg",
    },
    {
      name: "Yoder Smokers",
      summary:
        "Developed an admin portal to manage products and sync the database with WooCommerce, streamlining inventory management and online sales for the e-commerce platform.",
      linkPreview: "https://yodersmokers.com",
      linkSource: "https://github.com/kamranrafiq022",
      image: "/yoder.jpg",
    },
  ],
  about: {
    description: `
      Hi, I'm Kamran Rafiq — a Full-Stack Engineer with 5+ years of experience building scalable SaaS products using MERN and Laravel. I specialize in AI-powered features, OpenAI integrations, and automation systems that solve real business problems.

      I have a strong background in REST APIs, online marketplaces, secure payment integrations (Stripe, Mangopay), and cloud deployments on AWS and DigitalOcean. I enjoy working with remote teams, writing clean code, and delivering fast, reliable products that make a real impact.

      My tech stack includes JavaScript (ES6+), TypeScript, React.js, Next.js, Node.js, Express.js, Laravel, MongoDB, MySQL, and PostgreSQL. I hold a Bachelor's degree in Computer Science from the National University of Computer and Emerging Sciences (FAST-NUCES), Lahore.
    `,
    image: "/profile-pic.png",
  },
};

// #5755ff
