export const nav = {
  logo: "MP",
  links: [
    { label: "Work",    href: "#work"    },
    { label: "About",   href: "#about"   },
    { label: "Skills",  href: "#skills"  },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Get in touch", href: "#contact" },
};

export const hero = {
  eyebrow: "Full-Stack Engineer · Lagos, Nigeria",
  headline: "Building fast, accessible web products",
  subheadline:
    "I turn complex requirements into clean, maintainable interfaces. From Figma to production, I own the frontend — and the backend that powers it.",
  ctas: [
    { label: "View my work", href: "#work",   variant: "primary" as const },
    { label: "Download CV",  href: "https://docs.google.com/document/d/1oi8mFWDTcyY_W0gTNuiLyxRczfhw4kD8UzAxPr19RQk/edit?usp=sharing", variant: "ghost"   as const },
  ],
  stack: ["React", "Next.js", "TypeScript", "Node.js", "Angular", "SQL"],
};

export const metrics = [
  { value: "4+",  label: "Years in production"   },
  { value: "10+", label: "Clients & companies"   },
  { value: "3",   label: "Industries"             },
  { value: "5+",  label: "Frameworks & runtimes" },
];

export const work = [
  // ─── Featured: Employer work ───────────────────────────────────────
  {
    slug: "surebase",
    eyebrow: "InsurTech · Stringify Consulting",
    company: "Surebase",
    role: "Frontend Developer",
    period: "2024 – 2026",
    summary:
      "Surebase is a B2B insurance aggregation platform consolidating thousands of insurance products into a single unified API — serving brokers, fintechs, and banks across Nigeria. I contributed to the marketing site through Stringify Consulting.",
    problem:
      "The site needed interactive UI components to communicate a complex technical product clearly to a non-technical broker audience.",
    approach:
      "Built the insurance partner logo carousel — showcasing partners including AXA, Cornerstone, and Custodian — and the interactive flip card in the 'What is Surebase?' section, where users click to reveal the company's global expansion story. Also contributed to several other pages.",
    outcome:
      "The carousel and flip card became core storytelling elements on the landing page, communicating partner credibility and product vision side by side.",
    tags: ["React", "TypeScript", "Framer Motion", "Component Architecture", "InsurTech"],
    featured: true,
    link: "https://surebase.vercel.app",
  },
  {
    slug: "rubis-asphalt",
    eyebrow: "Safety App · Shipped to Prod",
    company: "Rubis Asphalt",
    role: "Frontend Developer",
    period: "2024",
    summary:
      "Rubis Asphalt is a workplace rules and safety application — similar in concept to Total's Golden Rules — used to communicate and enforce safety standards in the field. I owned a complete UI overhaul that shipped to production.",
    problem:
      "The existing interface was dated and didn't reflect the clarity a safety-critical application demands. It needed a full visual refresh without disrupting existing functionality.",
    approach:
      "With no Figma handoff, I drove all design decisions directly in code — establishing cleaner visual hierarchy, improving readability of safety content, and modernising the overall experience. Every decision was made with field workers in mind: people who need to access rules quickly and clearly.",
    outcome:
      "The redesigned application shipped to production. Delivering a full UI overhaul without a design file — from blank canvas to live product — demonstrated both design sensibility and the ability to work autonomously.",
    tags: ["React", "UI Overhaul", "Production Delivery", "Design in Code"],
    featured: true,
    link: null,
  },
  {
    slug: "undoquest",
    eyebrow: "HealthTech · Promoted",
    company: "Undoquest",
    role: "Frontend Developer I → II",
    period: "2022 – 2024",
    summary:
      "Joined as a Frontend Developer, built a modular component library and API integrations, and was promoted to Frontend Developer II — taking on architecture ownership, performance work, and direct product collaboration.",
    problem:
      "The frontend lacked a consistent component system, making feature development slow and introducing UI inconsistencies across the product.",
    approach:
      "Built a reusable React component library from scratch, standardised API integration patterns, and improved accessibility across key flows. After promotion, led a significant architecture refactor and worked directly with the product team on roadmap delivery.",
    outcome:
      "The component library became the foundation for all new feature work. The architecture refactor improved maintainability and reduced onboarding time. The promotion was the clearest signal of trust earned.",
    tags: ["React", "TypeScript", "Component Library", "API Integration", "Accessibility"],
    featured: true,
    link: null,
  },

  // ─── Freelance projects ─────────────────────────────────────────────
  {
    slug: "hosc-global",
    eyebrow: "Commodities Trading · Freelance",
    company: "HOSC Global",
    role: "Freelance Developer",
    period: "2024",
    summary:
      "HOSC Global is a premier commodities trading firm with global reach, specialising in energy and trade solutions across international markets. I built their marketing and corporate presence website end-to-end.",
    problem:
      "A commodities trading firm operating at international scale needed a web presence that matched their professionalism and communicated their offer clearly to global trading partners.",
    approach:
      "Delivered a full corporate site — from brief to deployment — with a focus on clean, trust-building design, clear articulation of services, and performance on both desktop and mobile.",
    outcome:
      "A live, professional web presence for an internationally operating firm, delivered independently from design to production.",
    tags: ["React", "Next.js", "Responsive Design", "Corporate Web", "Freelance"],
    featured: false,
    link: "https://www.hoscglobal.com",
  },
  {
    slug: "compenergies",
    eyebrow: "Energy Sector · Freelance",
    company: "CompEnergies",
    role: "Freelance Developer",
    period: "2023",
    summary:
      "CompEnergies is a petroleum products supplier across Nigeria, dealing in PMS, LPG, AGO, HFO, and Base Oil. I built their full corporate website.",
    problem:
      "A petroleum supplier in a regulated, trust-sensitive industry needed a web presence that conveyed reliability, product range, and professional credibility to B2B buyers.",
    approach:
      "Designed and built a clean, content-led site that clearly communicated their product offering, geographic reach, and company credentials — optimised for performance and mobile.",
    outcome:
      "A live corporate site that gives CompEnergies a credible digital presence in a sector where trust and professionalism are the primary buying signals.",
    tags: ["React", "Responsive Design", "Corporate Web", "Energy Sector", "Freelance"],
    featured: false,
    link: "https://www.compenergies.com",
  },
  {
    slug: "spring-and-bells",
    eyebrow: "Travel & Tourism · Freelance",
    company: "Spring & Bells",
    role: "Freelance Developer",
    period: "2023",
    summary:
      "Spring & Bells is a Lagos-based travel agency specialising in luxury trips, adventure tours, cultural experiences, and sporting event packages to destinations including France, Dubai, the USA, and Nigeria.",
    problem:
      "A travel agency selling aspirational experiences needed a website that could capture that sense of adventure visually while making it easy for customers to browse packages and get in touch.",
    approach:
      "Built a visually engaging site with destination showcases, package listings, and clear calls to action — with a design language that matched the premium, experience-led nature of the brand.",
    outcome:
      "A live travel booking-oriented site that reflects the brand's personality and gives customers a compelling first impression of the experiences on offer.",
    tags: ["React", "Next.js", "Responsive Design", "Travel & Tourism", "Freelance"],
    featured: false,
    link: "https://springandbells.com",
  },
  {
    slug: "victor-university",
    eyebrow: "EdTech · Institutional",
    company: "Victor University",
    role: "Frontend Developer",
    period: "2022",
    summary:
      "Modernised the student portal by introducing reusable React components, improving performance, and making the interface fully responsive across devices.",
    problem:
      "The student portal had an inconsistent, non-responsive UI that was slow to load and difficult to maintain.",
    approach:
      "Rebuilt key portal sections in React, introduced a reusable component architecture, and optimised for performance and mobile responsiveness.",
    outcome:
      "Students gained a significantly faster, more consistent experience across desktop and mobile.",
    tags: ["React", "Responsive Design", "Performance", "Component Architecture"],
    featured: false,
    link: null,
  },
];

export const skills = {
  Frontend:  ["React", "Next.js", "Angular", "TypeScript", "JavaScript (ES6+)", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive Design", "Accessibility (WCAG)"],
  Backend:   ["Node.js", "Express", "REST API Design", "SQL", "PostgreSQL", "MySQL"],
  Tooling:   ["Git & GitHub", "Figma → Code", "VS Code", "CI/CD", "Agile / Scrum", "Code Review"],
  Soft:      ["Client Communication", "Cross-functional Collaboration", "Architecture Ownership", "Long-term Product Thinking"],
};

export const timeline = [
  { year: "2024 – Present", company: "Stringify Consulting",  role: "Full-Stack Engineer",    current: true  },
  { year: "2023 – 2024",    company: "Undoquest",             role: "Frontend Developer II",  current: false },
  { year: "2022 – 2023",    company: "Undoquest",             role: "Frontend Developer",     current: false },
  { year: "2022",           company: "Victor University",     role: "Frontend Developer",     current: false },
  { year: "2021 – Present", company: "Freelance",             role: "Independent Developer",  current: false },
];

export const contact = {
  email: "mpodeke@gmail.com",
  github: "https://github.com/deeloins",
  linkedin: "https://www.linkedin.com/in/michael-podeke/",
  availability: "Open to full-stack roles, frontend contracts, and remote opportunities.",
};
