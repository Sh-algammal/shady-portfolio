export const profile = {
  name: "Shady Algammal",
  fullName: "Shady Ashraf Mostafa Algammal",
  role: "Backend Developer",
  tagline: "Building reliable APIs, scalable databases, and backend systems with Laravel, PHP & MySQL.",
  location: "Tanta, Egypt",
  email: "shadyalgmmal@gmail.com",
  phone: "+20 1142797588",
  github: "https://github.com/Sh-algammal",
  linkedin: "https://www.linkedin.com/in/shady-algammal/",
  orcid: "https://orcid.org/0009-0005-0192-2845",
  cv: "/Shady_Algammal_CV.md",
};

export const about = {
  intro:
    "Computer Science student at Tanta University with a backend-focused engineering direction. I design relational databases, build RESTful APIs with Laravel, and integrate AI-powered services into production-style systems.",
  approach:
    "I learn by building: pick a real problem, model the data properly, ship a working API, then harden it. I care about clean structure, honest documentation, and systems that other people can maintain.",
  pillars: [
    {
      title: "Backend Engineering",
      body: "Laravel, PHP and clean MVC architecture. I focus on maintainable code, Eloquent relationships, and well-modeled domains.",
    },
    {
      title: "APIs & Data",
      body: "RESTful API design with role-based authentication (Sanctum), bulk import pipelines, and normalized MySQL schemas.",
    },
    {
      title: "Security & AI",
      body: "Foundations in cybersecurity (Google, Cisco, IBM) plus practical work integrating LLMs and Hugging Face inference into Python systems.",
    },
  ],
  facts: [
    { k: "University", v: "Tanta University — Faculty of Science" },
    { k: "Degree", v: "B.Sc. Computer Science · 2023 – 2027" },
    { k: "GPA", v: "3.1 / 4.0" },
    { k: "Languages", v: "Arabic (Native) · English (Professional)" },
  ],
};

export const skillGroups = [
  {
    label: "Backend Engineering",
    items: ["PHP", "Laravel 10 / 12", "RESTful API design", "MVC architecture", "Laravel Sanctum", "Auth & role-based access"],
  },
  {
    label: "Databases",
    items: ["MySQL", "Relational design", "Normalization (3NF)", "Eloquent ORM", "SQL", "Migrations"],
  },
  {
    label: "Programming",
    items: ["Python", "C++", "JavaScript", "HTML / CSS"],
  },
  {
    label: "Cybersecurity Foundations",
    items: ["Networking fundamentals", "HTTP / HTTPS", "API authentication", "Access control", "Web app security concepts", "Secure backend design"],
  },
  {
    label: "AI & Automation",
    items: ["Hugging Face APIs", "LLM routing", "Streamlit", "n8n"],
  },
  {
    label: "Tools & Platforms",
    items: ["Git & GitHub", "Postman", "VS Code", "Linux fundamentals", "VirtualBox"],
  },
];

export type Project = {
  title: string;
  tag: string;
  context?: string;
  stack: string[];
  description: string;
  features: string[];
  github?: string;
  live?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Faculty of Science — Exam Schedule API",
    tag: "Production API",
    context: "Academic · Deployed",
    stack: ["Laravel 12", "PHP", "MySQL", "Sanctum"],
    description:
      "A production-deployed RESTful API backend for managing and publishing university exam schedules — relational schema, role-based authentication, and bulk Excel import workflows for large course datasets.",
    features: [
      "Role-based auth with Laravel Sanctum",
      "Public & protected API endpoints",
      "Chunked Excel imports at scale",
      "Migrations, seeders & Eloquent relationships",
    ],
    github: "https://github.com/Sh-algammal/exam-system",
    live: "https://faculty-of-science-final-exam.free.laravel.cloud",
    highlight: true,
  },
  {
    title: "Mixture-of-Agents AI System",
    tag: "AI / LLM",
    context: "Collaborative project",
    stack: ["Python", "Streamlit", "Hugging Face"],
    description:
      "A collaborative project exploring configurable multi-model routing and response aggregation through external AI APIs. My contributions: Hugging Face inference integration, asynchronous response handling, and work on the system architecture and Streamlit monitoring dashboard.",
    features: [
      "Multi-model AI routing",
      "Async response handling",
      "Streamlit monitoring dashboard",
      "API-first architecture",
    ],
    github: "https://github.com/Sh-algammal/Mixture-of-Agents",
    highlight: true,
  },
  {
    title: "Recipe Management System",
    tag: "Full-stack API",
    context: "Personal project",
    stack: ["Laravel 10", "PHP", "MySQL"],
    description:
      "A backend-driven recipe management system featuring authentication, CRUD operations, structured API responses, and favorites management — with a mobile-ready REST API layer.",
    features: [
      "Auth + favorites system",
      "Mobile-ready REST endpoints",
      "Relational MySQL schema",
      "MVC architecture",
    ],
    github: "https://github.com/Sh-algammal/recipe-project",
  },
  {
    title: "School Management Database",
    tag: "Data modeling",
    context: "Academic project",
    stack: ["SQL", "MySQL"],
    description:
      "A normalized relational database covering enrollment, attendance, and grades — with data-integrity constraints, reporting queries, and a documented 3NF schema design.",
    features: [
      "Normalized to 3NF",
      "SQL reporting queries",
      "Constraints & integrity rules",
      "Documented architecture",
    ],
    github: "https://github.com/Sh-algammal/school-database-project",
  },
  {
    title: "Task Management App",
    tag: "Laravel CRUD",
    context: "Personal project",
    stack: ["Laravel", "PHP", "MySQL", "JavaScript"],
    description:
      "Task management application demonstrating clean Laravel CRUD patterns, MVC structure, and a responsive interface backed by MySQL persistence.",
    features: [
      "Full CRUD workflow",
      "Responsive UI",
      "Laravel MVC structure",
      "MySQL persistence",
    ],
    github: "https://github.com/Sh-algammal/To-do-list",
  },
];

export const timeline = [
  {
    period: "2023 — 2027",
    title: "B.Sc. Computer Science",
    org: "Tanta University — Faculty of Science",
    body: "Backend-focused engineering direction: databases, operating systems, networking, and software engineering fundamentals. GPA 3.1 / 4.0.",
    current: true,
  },
  {
    period: "2024 — present",
    title: "Backend Development Practice",
    org: "Self-directed · Laravel & PHP",
    body: "Built and deployed RESTful APIs with Laravel 10/12, Sanctum authentication, and MySQL — including a production exam-schedule API for the Faculty of Science.",
  },
  {
    period: "2024 — present",
    title: "Cybersecurity Foundations",
    org: "Google · IBM · Cisco",
    body: "Formal training in security fundamentals, networking, and access control — applied toward secure API and backend design.",
  },
  {
    period: "2025",
    title: "AI Systems Exploration",
    org: "Collaborative · Python & Hugging Face",
    body: "Contributed to a Mixture-of-Agents system: multi-model routing, async inference, and a Streamlit monitoring dashboard.",
  },
];

export const certifications = [
  {
    title: "PHP Mastery: Build Web Apps",
    issuer: "Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/A0V2ZY5F1W4B",
  },
  {
    title: "Foundations of Cybersecurity",
    issuer: "Google · Coursera",
    href: "https://www.coursera.org/account/accomplishments/verify/UP6DQOAJS13V",
  },
  {
    title: "Cybersecurity Basics",
    issuer: "IBM · edX",
    href: "https://courses.edx.org/certificates/85dbe66b7e044f659a4b4e20f50262d8",
  },
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco",
    href: "https://www.credly.com/badges/fe176a1e-02d0-4b53-bfae-602a214ca7bc/linked_in_profile",
  },
  {
    title: "Full Stack Web Development with PHP",
    issuer: "LinkedIn Learning",
    href: "https://www.linkedin.com/in/shady-algammal/overlay/Certifications/1595497009/treasury",
  },
  {
    title: "The Origins I: HTML",
    issuer: "Codedex",
    href: "https://www.credential.net/0342d487-67f9-4386-91ef-1e46b008a614",
  },
  {
    title: "The Origins II: CSS",
    issuer: "Codedex",
    href: "https://www.credential.net/dc531ef8-e031-4a83-8816-1d63654bd7ac",
  },
];
