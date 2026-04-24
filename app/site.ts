export type SocialLink = {
  label: string;
  href: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location?: string;
  summary: string;
};

export type Education = {
  degree: string;
  institution: string;
  period: string;
  notes?: string;
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  appType: "web" | "mobile";
  href?: string;
  repo?: string;
  screenshots?: string[];
};

export type UiDesign = {
  title: string;
  appType: "Web" | "Mobile";
  summary: string;
  image?: string;
  images?: string[];
};

export const site = {
  name: "Rathees Krishanth",
  role: "Software Engineer | Frontend Developer",
  location: "Trincomalee, Sri Lanka",
  headline:
    "I am a software developer and IT lecturer focused on building modern web and mobile applications using React, React Native, and Next.js. I combine real-world development experience with a passion for teaching and mentoring future IT professionals.",
  about:
    "I focus on clean architecture, responsive UI, and high-performance applications with React, Next.js, and React Native. I enjoy shipping practical products with cross-functional teams and improving user engagement through thoughtful engineering and UX.",
  highlights: [
    "12+ years in IT",
    "React + Next.js",
    "React Native",
    "REST API integration",
    "Clean, reusable code",
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "HTML5",
    "CSS3",
    "React.js",
    "Next.js",
    "React Native",
    "Redux Toolkit",
    "Context API",
    "React Query",
    "Material UI",
    "Tailwind CSS",
    "Axios",
    "Firebase",
    "Git",
    "GitHub",
    "Bitbucket",
    "Docker",
  ],
  experiences: [
    {
      role: "Software Engineer - React / Next / React Native",
      company: "Approlabs Pvt Ltd",
      period: "Aug 2021 - Present",
      location: "Chennai (Remote)",
      summary:
        "Develops scalable web and mobile applications, integrates REST APIs, manages state with Redux/Context, and maintains code quality through reusable patterns and code reviews.",
    },
    {
      role: "Visiting Lecturer",
      company: "Sri Lanka Institute of Advanced Technological Education",
      period: "May 2019 - Present",
      location: "Trincomalee",
      summary:
        "Delivers theory and practical lectures for IT programs, supervises student projects, and mentors students on academic and career development.",
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2017 - 2020",
      summary:
        "Designed and built responsive websites and web applications for individual clients and small businesses.",
    },
    {
      role: "Transaction Monitoring Officer",
      company: "Allsec Technologies Limited",
      period: "Jan 2015 - Jul 2016",
      location: "Chennai",
      summary:
        "Monitored online sales transactions for quality and compliance, validated records, and enforced QA standards.",
    },
    {
      role: "Junior Software Engineer",
      company: "Intrepid IT Solutions",
      period: "Nov 2013 - Dec 2014",
      location: "Chennai",
      summary:
        "Supported development and maintenance of web applications with HTML, CSS, JavaScript, and frontend frameworks.",
    },
  ] as Experience[],
  education: [
    {
      degree: "Bachelor of Engineering in Computer Science",
      institution:
        "Anna University (Hindusthan College of Engineering & Technology)",
      period: "2009 - 2013",
      notes: "First Class | Coimbatore, Tamil Nadu, India",
    },
    {
      degree: "Diploma in Hardware and Network Engineering",
      institution: "ACCEL Academy",
      period: "2013",
      notes: "Certified in hardware troubleshooting and maintenance",
    },
  ] as Education[],
  achievements: [
    "Launched multiple scalable web and mobile apps, increasing user engagement by 30%.",
    "Improved cross-platform performance and compatibility, boosting app efficiency by 25%.",
    "Reduced bug reports by 35% through close collaboration and better UI delivery quality.",
    "Improved data flow and reduced loading times by 20% through API and state optimizations.",
  ],
  projects: [
    {
      slug: "vitaraka",
      title: "Vitaraka (Web Application)",
      description:
        "End-to-end gas supply chain platform for vendor management, order tracking, inventory monitoring, and route optimization.",
      appType: "web",
      tags: ["React.js", "JavaScript", "Redux", "REST API", "Material UI"],
      screenshots: [
        "/projects/project-1/screenshot-1.png",
        "/projects/project-1/screenshot-2.png",
        "/projects/project-1/screenshot-3.png",
      ],
    },
    {
      slug: "22-yards",
      title: "22 Yards (Mobile Application)",
      description:
        "Cricket scoring and team management app with real-time updates, player statistics, and match summaries.",
      appType: "mobile",
      tags: ["React Native", "TypeScript", "Redux", "REST API", "Axios"],
      screenshots: [
        "/projects/project-2/screenshot-1.png",
        "/projects/project-2/screenshot-2.png",
        "/projects/project-2/screenshot-3.png",
      ],
    },
    {
      slug: "letscoot",
      title: "Letscoot (Mobile Application)",
      description:
        "Online food ordering platform for pre-order, prepaid dine-in reservations, and self-pickup.",
      appType: "mobile",
      tags: ["React Native", "TypeScript", "Redux", "REST API", "Axios"],
      screenshots: [
        "/projects/project-3/screenshot-1.png",
        "/projects/project-3/screenshot-2.png",
        "/projects/project-3/screenshot-3.png",
      ],
    },
    {
      slug: "bodhi",
      title: "Bodhi (Web Application)",
      description:
        "AI-powered chatbot that helps employees find information related to industrial machinery and equipment.",
      appType: "web",
      tags: ["React", "TypeScript", "Redux", "REST API", "Material UI"],
      screenshots: [
        "/ui/bodhi/bodhi-1.png",
        "/ui/bodhi/bodhi-2.png",
        "/ui/bodhi/bodhi-3.png",
        "/ui/bodhi/bodhi-4.png",
        "/ui/bodhi/bodhi-5.png",
        "/ui/bodhi/bodhi-6.png",
      ],
    },
    {
      slug: "talents-explorer",
      title: "Talents Explorer (Mobile Application)",
      description:
        "Platform for discovering, developing, and showcasing personal talents and skills.",
      appType: "mobile",
      tags: ["React Native", "TypeScript", "Redux", "REST API", "Axios"],
      screenshots: [
        "/ui/talent-explorer/talent-explorer-1.jpg",
        "/ui/talent-explorer/talent-explorer-2.jpg",
        "/ui/talent-explorer/talent-explorer-3.jpg",
        "/ui/talent-explorer/talent-explorer-4.jpg",
        "/ui/talent-explorer/talent-explorer-5.jpg",
      ],
    },
    {
      slug: "yellowchunks",
      title: "YellowChunks (Web Application)",
      description:
        "AI-driven document extraction and summarization platform for key information insights.",
      appType: "web",
      tags: ["React", "TypeScript", "Redux", "REST API", "Material UI"],
      screenshots: [
        "/projects/project-6/screenshot-1.png",
        "/projects/project-6/screenshot-2.png",
        "/projects/project-6/screenshot-3.png",
      ],
    },
  ] as Project[],
  uiDesigns: [
    {
      title: "Vitaraka Dashboard UI",
      appType: "Web",
      summary:
        "Operations dashboard views for vendor workflows, dispatch visibility, and order-level status tracking.",
      image: "/ui/vitaraka-dashboard.png",
    },
    {
      title: "22 Yards Match Center UI",
      appType: "Mobile",
      summary:
        "Live scoring screens and match summary layouts focused on quick actions and clear statistics.",
      image: "/ui/22yards-match-center.png",
    },
    {
      title: "Letscoot Ordering Flow UI",
      appType: "Mobile",
      summary:
        "Pre-order and reservation journey with clean checkout, confirmation, and pickup-ready states.",
      image: "/ui/letscoot-ordering-flow.png",
    },
    {
      title: "Bodhi Chat Assistant UI",
      appType: "Web",
      summary:
        "AI assistant experience for equipment query resolution with structured response and guidance panels.",
      image: "/ui/bodhi-chat-ui.png",
    },
    {
      title: "Talents Explorer Profile UI",
      appType: "Mobile",
      summary:
        "Talent showcase and profile views with social-style cards and achievement-forward layout.",
      image: "/ui/talent-explorer/talent-explorer-1.jpg",
      images: [
        "/ui/talent-explorer/talent-explorer-1.jpg",
        "/ui/talent-explorer/talent-explorer-2.jpg",
        "/ui/talent-explorer/talent-explorer-3.jpg",
        "/ui/talent-explorer/talent-explorer-4.jpg",
        "/ui/talent-explorer/talent-explorer-5.jpg",
      ],
    },
    {
      title: "YellowChunks Document Insights UI",
      appType: "Web",
      summary:
        "Upload-to-summary workflow screens highlighting extracted entities and compact insight widgets.",
      image: "/ui/yellowchunks-insights.png",
    },
  ] as UiDesign[],
  links: {
    email: "imkrishanth@gmail.com",
    phone: "+94 774 635 376",
    github: "https://github.com/imkrishanth",
    linkedin: "https://linkedin.com/in/imkrishanth",
    resume: "/resume",
  },
  languages: ["Tamil", "English", "Sinhala"],
  socials(): SocialLink[] {
    return [
      { label: "LinkedIn", href: this.links.linkedin },
      { label: "Email", href: `mailto:${this.links.email}` },
      { label: "Call", href: `tel:${this.links.phone.replace(/\s+/g, "")}` },
    ];
  },
} as const;
