/* ============================================================
   EDIT THIS FILE to personalise the whole site.
   Anything marked "YOUR ..." is a placeholder.
   ============================================================ */
window.PROFILE = {
  name: "YOUR NAME",
  title: "Software Developer",
  location: "YOUR LOCATION",
  email: "",                 // e.g. "you@example.com" (leave empty to hide email buttons)
  github: "",                // full URL, e.g. "https://github.com/yourname"
  githubUsername: "",        // enables optional live repo cards; leave "" to use placeholders
  linkedin: "",              // full URL
  siteUrl: "",               // used only for reference; also edit index.html meta tags

  status: { show: true, text: "Open to interesting projects" }, // set show:false to hide

  eyebrow: "Software developer · API engineering · System integration",
  headline: "Building reliable systems behind the scenes.",
  intro: "I build backend systems, APIs and integrations that connect complex business systems into reliable, maintainable software.",

  aboutStatement: "I like solving problems where software meets real-world systems.",
  bio: [
    "I'm a software developer focused on backend engineering and API architecture, working mostly with C#, .NET and Oracle-backed enterprise systems.",
    "I'm drawn to integration work: connecting modern APIs to established business platforms, particularly in financial and insurance technology, without compromising security or maintainability.",
    "Beyond the code, I care about system modernization, database-driven design, and the security and infrastructure choices that keep services dependable."
  ],
  currentlyWith: ["C#", ".NET", "ASP.NET Core", "Oracle", "REST APIs", "Azure DevOps"],

  skills: [
    { category: "Backend", items: ["C#", ".NET", "ASP.NET Core", "REST APIs", "Web APIs"] },
    { category: "Database", items: ["Oracle", "SQL", "PL/SQL", "Stored Procedures"] },
    { category: "Architecture", items: ["API Architecture", "System Integration", "Adapter Pattern", "Middleware", "Microservices concepts"] },
    { category: "DevOps / Infrastructure", items: ["Git", "Azure DevOps", "IIS", "Windows Server", "CI/CD"] },
    { category: "Security", items: ["OAuth", "JWT", "JWS", "mTLS", "API Security", "Certificate-based authentication"] }
  ],

  // Replace with real projects. Leave github/demo empty to show "Private / Enterprise Project".
  projects: [
    {
      name: "Open Finance API Platform",
      summary: "Enterprise API platform connecting external Open Finance participants with internal insurance systems.",
      problem: "External participants needed secure, standardised access to internal insurance data and services.",
      work: "API security, certificate authentication, middleware, audit logging and integration architecture.",
      tech: ["C#", ".NET", "ASP.NET Core", "Oracle", "IIS", "REST APIs", "mTLS", "JWT/JWS"],
      tags: ["API Security", "Middleware", "Audit Logging", "Integration"],
      github: "", demo: ""
    },
    {
      name: "Insurance API Adapter Architecture",
      summary: "An adapter-based architecture designed to decouple public APIs from legacy insurance systems.",
      problem: "Public APIs were tightly coupled to individual back-end systems, making change slow and risky.",
      work: "API → Adapter → Domain → Data Access layering, so the same API layer can talk to different underlying insurance systems through interchangeable adapters.",
      tech: ["C#", ".NET", "Oracle", "PL/SQL"],
      tags: ["Adapter Pattern", "Layered Architecture", "Decoupling"],
      github: "", demo: ""
    },
    {
      name: "Enterprise API Security",
      summary: "Security architecture for enterprise APIs involving certificate authentication, signed requests and authorization.",
      problem: "APIs exposed to external parties required strong identity, message integrity and authorization.",
      work: "Mutual TLS, signed requests and token-based authorization applied consistently across services.",
      tech: ["mTLS", "JWT", "JWS", "Certificates", "OAuth"],
      tags: ["Authentication", "Authorization", "Signed Requests"],
      github: "", demo: ""
    }
  ],

  systemsIntro: "Good integration work is mostly about clear boundaries: what each layer knows, and what it deliberately doesn't.",
  architectures: [
    { title: "Layered integration", steps: ["External Consumer", "API Hub", "Public API", "Adapter", "Domain Logic", "Data Access Layer", "Oracle DB"] },
    { title: "Request pipeline", steps: ["API", "Authentication", "Validation", "Business Logic", "Integration", "Audit"] }
  ],

  // Placeholder entries: replace company, role and dates. Nothing here is real.
  experience: [
    { group: "Current", company: "YOUR COMPANY", role: "YOUR ROLE", dates: "START – Present",
      description: "Describe what you do here in one or two sentences.",
      tech: ["C#", ".NET", "Oracle"], responsibilities: ["Replace with a key responsibility", "Replace with another responsibility"] },
    { group: "Previous", company: "PREVIOUS COMPANY", role: "YOUR ROLE", dates: "START – END",
      description: "Describe the role.", tech: [], responsibilities: ["Replace with a key responsibility"] },
    { group: "Earlier", company: "EARLIER COMPANY", role: "YOUR ROLE", dates: "START – END",
      description: "Describe the role.", tech: [], responsibilities: [] }
  ],

  githubSection: {
    blurb: "Code, experiments and tooling. Repositories load live when githubUsername is set; otherwise placeholders show.",
    placeholders: [
      { name: "your-repository", description: "Short description of a repository you want to highlight.", language: "C#" },
      { name: "another-repository", description: "Replace these once githubUsername is set.", language: "TypeScript" }
    ],
    topTech: ["C#", "SQL", "TypeScript"]
  },

  interests: [
    { name: "Travel", note: "Seeing how other places work." },
    { name: "Photography", note: "Light, composition, patience." },
    { name: "Automobiles", note: "Engineering you can hear." },
    { name: "Technology", note: "Tinkering with whatever's new." },
    { name: "Learning", note: "Always a book or course in progress." },
    { name: "Architecture", note: "Buildings and systems alike." }
  ],

  contact: {
    heading: "Let's build something useful.",
    text: "For technical discussions, collaboration, interesting projects or just exchanging ideas, feel free to reach out."
  }
};
