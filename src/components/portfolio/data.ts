export const profile = {
  name: "Shady Algammal",
  fullName: "Shady Ashraf Mostafa Algammal",
  role: "Backend Engineer",
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
    label: "Backend",
    items: ["Laravel 10/12", "PHP", "REST APIs", "Sanctum Auth", "MVC", "OOP"],
  },
  {
    label: "Databases",
    items: ["MySQL", "Schema Design", "Normalization (3NF)", "Migrations", "Eloquent ORM"],
  },
  {
    label: "Languages",
    items: ["PHP", "Python", "SQL", "C++", "JavaScript", "HTML / CSS"],
  },
  {
    label: "AI & Automation",
    items: ["Hugging Face APIs", "LLM Routing", "Streamlit", "n8n"],
  },
  {
    label: "Cybersecurity Foundations",
    items: ["Linux Basics", "Networking", "Access Control", "Secure APIs"],
  },
  {
    label: "Tooling",
    items: ["Git & GitHub", "Postman", "VS Code", "VirtualBox"],
  },
];

export type Project = {
  title: string;
  tag: string;
  stack: string[];
  description: string;
  features: string[];
  github?: string;
  live?: string;
  highlight?: boolean;
};

export const projects: Project[] = [
  {
    title: "Faculty of Science — Exam Schedule System",
    tag: "Production API",
    stack: ["Laravel 12", "PHP", "MySQL", "Sanctum"],
    description:
      "RESTful API backend for managing university exam schedules with role-based authentication and optimized bulk import pipelines for large course datasets.",
    features: [
      "Role-based auth with Laravel Sanctum",
      "Eloquent relationships & migrations",
      "Chunked Excel imports at scale",
      "Public & protected endpoints",
    ],
    github: "https://github.com/Sh-algammal/exam-system",
    live: "https://faculty-of-science-final-exam.free.laravel.cloud",
    highlight: true,
  },
  {
    title: "Recipe Management System",
    tag: "Full-stack API",
    stack: ["Laravel 10", "PHP", "MySQL"],
    description:
      "Backend-driven recipe platform with authentication, CRUD endpoints, favorites, and a mobile-ready REST API layer.",
    features: [
      "Auth + favorites system",
      "Mobile-ready REST endpoints",
      "Relational MySQL schema",
      "MVC architecture",
    ],
    github: "https://github.com/Sh-algammal/recipe-project",
  },
  {
    title: "Mixture-of-Agents System",
    tag: "AI / LLM",
    stack: ["Python", "Streamlit", "Hugging Face"],
    description:
      "Configurable AI system that distributes prompts across multiple language models and aggregates the strongest responses through a routing layer.",
    features: [
      "Multi-model AI routing",
      "Async response handling",
      "Streamlit control dashboard",
      "API-first architecture",
    ],
    github: "https://github.com/Sh-algammal/Mixture-of-Agents",
    highlight: true,
  },
  {
    title: "School Management Database",
    tag: "Data modeling",
    stack: ["SQL", "MySQL"],
    description:
      "Normalized relational database for school operations — attendance, grading, and enrollment — with reporting queries and 3NF schema design.",
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
