export const NAV_LINKS = [
  { label: "Home",       href: "#hero"     },
  { label: "About Me",   href: "#about"    },
  { label: "Projects",   href: "#projects" },
  { label: "What I Do",  href: "#offer"    },
  { label: "Skills",     href: "#skills"   },
  { label: "FAQ",        href: "#faq"      },
];

export const STATS = [
  { value: "4+",  label: "Years of experience" },
  { value: "10+", label: "Projects delivered"  },
];

export const CLIENTS = [
  "Surebase", "HOSC Global", "CompEnergies",
  "Spring & Bells", "Victor University", "Undoquest", "Stringify",
];

export const TICKER = [
  "Full-Stack Engineer","React Developer","Next.js","TypeScript",
  "UI/UX Minded","API Integration","Component Architecture",
  "Accessible","Production Ready","Node.js","Angular","Remote Available",
];

export const TRAITS = [
  { icon: "◎", label: "Creative"   },
  { icon: "✦", label: "Reliable"   },
  { icon: "▲", label: "Strategist" },
  { icon: "◆", label: "Builder"    },
  { icon: "⚡", label: "Efficient" },
];

export const TIMELINE = [
  {
    year:"'21", title:"Where it started", handle:"@freelance", ago:"4 years ago",
    short:"First clients. First real deadlines. First lesson in what production-quality actually means.",
    long:"I opened VS Code for the first time with a freelance brief and no safety net. What happened next was equal parts panic and obsession. I built, broke things, fixed them, and kept going. That first year taught me more than any course ever could — not because the projects were complex, but because someone was counting on me to get it right.",
  },
  {
    year:"'22", title:"Going deeper", handle:"@edtech", ago:"3 years ago",
    short:"Victor University portal. First institutional product. First real component architecture.",
    long:"I took on the Victor University student portal and had to think at a different scale. It wasn't just about making things look right — it was about making them work consistently, load fast, and hold up under real usage. I built a reusable component system for the first time and felt what it meant to write code other people could actually maintain.",
  },
  {
    year:"'22–'23", title:"First startup", handle:"@undoquest", ago:"2 years ago",
    short:"Joined Undoquest as Frontend Developer. Built the component library from scratch.",
    long:"Joining Undoquest meant going from freelance ownership to team collaboration — a completely different challenge. I built their React component library from the ground up, standardised API integration patterns, and learned what it means to ship features on a roadmap rather than a brief.",
  },
  {
    year:"'23–'24", title:"Earned a promotion", handle:"@undoquest", ago:"1 year ago",
    short:"Frontend Developer II at Undoquest. Architecture ownership. Direct product collaboration.",
    long:"The promotion wasn't given — it was earned. After leading a significant architecture refactor and taking on product-level decisions, the title caught up to what I was already doing. I worked directly with the product team, owned performance improvements, and became the person people came to when the frontend needed to scale.",
  },
  {
    year:"'24", title:"Shipped to production", handle:"@stringify", ago:"8 months ago",
    short:"Rubis Asphalt UI overhaul. No Figma. Design decisions in code, direct to prod.",
    long:"The Rubis Asphalt project had no design handoff. Just a brief and a broken interface that needed to work. I made every visual decision in code and shipped it to production. It was the clearest proof to myself that I had developed a design sensibility alongside the technical depth.",
  },
  {
    year:"'24–Now", title:"Going full-stack", handle:"@stringify", ago:"Now",
    short:"Stringify Consulting. APIs, Node.js, SQL. Owning features end-to-end.",
    long:"At Stringify I stopped being purely a frontend engineer. I started designing REST endpoints, writing SQL queries, building Node.js service logic, and keeping the React layer in sync with the backend I was now responsible for too. The gap between frontend developer and full-stack engineer closed in production, not in a tutorial.",
  },
];

export const WORK = [
  { num:"01", company:"Surebase",       desc:"B2B insurance aggregation platform — the future of insurance distribution, built on one API.",  tags:["React","TypeScript","Framer Motion"], link:"https://surebase.vercel.app",          image:"/project-screenshots/surebase.jpg",        bg:"#0d1b2a" },
  { num:"02", company:"HOSC Global",    desc:"Corporate site for a premier commodities trading firm with global reach.",                       tags:["React","Next.js","Responsive"],        link:"https://www.hoscglobal.com",            image:"/project-screenshots/hosc-global.jpg",     bg:"#1a1a0a" },
  { num:"03", company:"CompEnergies",   desc:"Trusted suppliers of petroleum products across Nigeria — PMS, LPG, AGO, HFO.",                  tags:["React","Corporate Web","Responsive"],  link:"https://www.compenergies.com",          image:"/project-screenshots/compenergies.jpg",    bg:"#1a0d2a" },
  { num:"04", company:"Spring & Bells", desc:"Lagos-based travel agency specialising in luxury and adventure packages worldwide.",              tags:["React","Next.js","Travel"],            link:"https://springandbells.com",            image:"/project-screenshots/spring-and-bells.jpg",bg:"#0a1a0a" },
];

export const OFFER = [
  { num:"01", title:"Frontend Development",   desc:"React and Next.js applications built with a focus on performance, accessibility, and maintainability. TypeScript throughout, responsive across every device." },
  { num:"02", title:"Full-Stack Engineering", desc:"End-to-end feature delivery — REST API design, Node.js services, SQL data models, and the React frontend that consumes them. One engineer who owns it all." },
  { num:"03", title:"UI Implementation",      desc:"Figma to production without losing fidelity. Pixel-perfect layouts that don't sacrifice interactivity or responsiveness." },
  { num:"04", title:"Component Systems",      desc:"Reusable component libraries that make your team faster. Built from scratch at startups, designed to scale without becoming a maintenance burden." },
  { num:"05", title:"API Integration",        desc:"Connecting frontend interfaces to backend services cleanly. REST APIs, auth flows, data fetching — integrated properly so they don't break when things change." },
  { num:"06", title:"Freelance Delivery",     desc:"Full ownership from brief to deployment. Scoping, design collaboration, build, deployment, and maintenance. Doing this since 2021." },
];

export const SKILLS = {
  Frontend: ["React","Next.js","Angular","TypeScript","JavaScript (ES6+)","HTML5","CSS3","Tailwind CSS","Framer Motion","Responsive Design","Accessibility (WCAG)"],
  Backend:  ["Node.js","Express","REST API Design","SQL","PostgreSQL","MySQL"],
  Tooling:  ["Git & GitHub","Figma → Code","VS Code","CI/CD","Agile / Scrum","Code Review"],
};

export const FAQ = [
  { q:"What do you specialise in?",                  a:"React and Next.js on the frontend, Node.js and REST APIs on the backend. I'm comfortable across the full delivery chain — from Figma handoff to production deployment. Angular too, which is rarer than you'd think." },
  { q:"Are you available for freelance or contract?", a:"Yes. I'm open to freelance projects, short-term contracts, and remote full-time roles. If you have something in mind, send me an email and we can talk through the scope." },
  { q:"What does your project process look like?",    a:"It starts with a conversation about goals, timeline, and constraints. From there I scope the work, align on deliverables, and build in stages — sharing progress as I go so nothing drifts. Clean handoff with documented code at the end." },
  { q:"Can you work from a Figma design?",            a:"Yes — Figma to production is a core part of my workflow. I read design files accurately, ask the right questions early, and translate layouts pixel-perfectly without losing interactivity or responsiveness." },
  { q:"Teams or solo clients?",                       a:"Both. I've been embedded in product teams at startups and worked independently for solo founders and small businesses. I adapt to whatever workflow and communication style the project needs." },
  { q:"What industries have you worked in?",          a:"InsurTech, HealthTech, EdTech, Energy, Travel and Tourism, and Consulting. The variety means I get up to speed quickly in new domains." },
  { q:"How do I get in touch?",                       a:"Email is best — mpodeke@gmail.com. I usually respond within 24 hours. LinkedIn works too if that's easier." },
];
