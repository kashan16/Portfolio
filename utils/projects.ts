export const projects = [
  {
    title: "ChefGPT",
    description:
      "AI-powered recipe discovery platform with personalized recommendations and ingredient substitution. Used Redis caching to reduce API token usage by 40% and improve response latency.",
    tech: ["React", "Flask", "PostgreSQL", "Redis"],
    image: "/projects/chefgpt.png",
    //github ?: "https://github.com/kashan16",
    demo: "https://recipe-blog-8doxgjn9z-kashan16s-projects.vercel.app/",
  },
  {
    title: "Habitize",
    description:
      "Real-time habit tracker with Supabase subscriptions and SSR. Built an analytics dashboard that increased user retention by 20%.",
    tech: ["Next.js", "Supabase", "TailwindCSS"],
    image: "/projects/habitize.png",
    github: "https://github.com/kashan16/habitize",
    demo: "https://habitize-nu.vercel.app/",
  },
  {
    title: "Stryx Compiler",
    description:
      "Custom compiler implemented in C++ with lexer, parser, and semantic analyzer. Designed advanced loop constructs and optimized memory usage by 30% with a custom allocator.",
    tech: ["C++"],
    image: "/projects/stryx.png",
    github: "https://github.com/kashan16/Stryx",
    demo: "#",
  },
  {
    title: "MetroSystem",
    description:
      "C++ program implementing Dijkstra, BFS, and DFS to model a metro system. Stations as vertices and distances as edges.",
    tech: ["C++", "Graph Algorithms"],
    image: "/projects/metro.png",
    github: "https://github.com/kashan16/MetroSystem",
    demo: "#",
  },
];