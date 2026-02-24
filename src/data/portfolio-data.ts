import {
  Experience,
  Education,
  Project,
  SkillCategory,
  Certificate,
  Service,
  ContactInfo,
  NavItem,
} from "@/types";

export const navItems: NavItem[] = [
  { name: "Home", link: "#home" },
  { name: "About", link: "#about" },
  { name: "Experience", link: "#experience" },
  { name: "Skills", link: "#skills" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Certificates", link: "#certificates" },
  { name: "Contact", link: "#contact" },
];

export const personalInfo = {
  name: "Sharjeel Siddiqui",
  designation: "MERN Stack Developer",
  tagline:
    "Crafting dynamic, responsive web applications with the MERN stack. Passionate about clean code, database optimization, and delivering user-centric digital experiences.",
  bio: `I'm a versatile MERN Stack Developer from Karachi, Pakistan, with comprehensive expertise in both web development and database management. I specialize in building dynamic, responsive web applications using MongoDB, Express.js, React.js, and Node.js, while also excelling in designing and optimizing relational databases such as Oracle and MySQL. I focus on delivering seamless front-end experiences paired with robust back-end functionality that exceeds user expectations.`,
  resumeUrl: "/CV Sharjeel.pdf",
};

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Frontend Developer Intern",
    company: "Cropmentum LLC",
    location: "Karachi (Onsite)",
    duration: "Jul 2025 - Oct 2025",
    description: [
      "Developed 15+ production-ready UI components using Next.js, CSS Modules and shadcn/ui",
      "Implemented role-based portals including Admin, Vendor, and Bank dashboards",
      "Built reusable UI components and layout systems to ensure consistency across portals",
      "Collaborated with backend teams to integrate APIs and align UI workflows with business logic",
      "Improved mobile responsiveness by 98% across 3 major portals",
    ],
    technologies: [
      "Next.js",
      "CSS Modules",
      "shadcn/ui",
      "TypeScript",
      "REST APIs",
    ],
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Pakistan Airports Authority (PAA)",
    location: "Karachi (Onsite)",
    duration: "Nov 2024 - Jan 2025",
    description: [
      "Designed and developed a touring and travel booking website enabling users to explore, plan, and book travel packages",
      "Implemented responsive layouts using React, Bootstrap, and custom CSS to ensure cross-device compatibility",
      "Created structured UI flows for package browsing, details viewing, and booking interactions",
      "Collaborated with supervisors to gather requirements and translate them into functional UI components",
    ],
    technologies: [
      "React.js",
      "Bootstrap",
      "CSS",
      "JavaScript",
      "HTML",
    ],
  },
  {
    id: 3,
    title: "MERN Stack Intern",
    company: "Humanity Alliance Organization",
    location: "Remote",
    duration: "Jul 2024 - Sep 2024",
    description: [
      "Developed and maintained full-stack web application modules using React, Node.js, Express.js, and MongoDB",
      "Developed responsive UI components using HTML, CSS, and JavaScript and optimized front-end performance",
      "Reduced page load time and improved user experience metrics through code optimization",
      "Collaborated effectively in a 100% remote development environment",
    ],
    technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    id: 4,
    title: "Custom & WordPress Web Developer",
    company: "IT-O-LOGY",
    location: "Karachi (Onsite)",
    duration: "Jan 2023 - Nov 2023",
    description: [
      "Designed and developed business websites, landing pages, and marketing platforms using custom development and WordPress",
      "Customized WordPress themes and plugins to meet specific client requirements",
      "Managed and delivered 6+ concurrent projects on schedule while maintaining quality standards and stakeholder satisfaction",
      "Communicated directly with clients to gather requirements, provide updates, and implement feedback",
      "Strengthened practical experience in client-facing development, project coordination, and deployment",
    ],
    technologies: [
      "WordPress",
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
    ],
  },
];


export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor in Information Technology",
    institution: "Bahria University Karachi Campus",
    location: "Karachi, Pakistan",
    duration: "2022 - 2026",
    description:
      "Graduated with a Bachelor's degree in Information Technology with a major in Computer Programming, Data Structures and Databases. Focused on building a strong foundation in software development with particular emphasis on both frontend and backend technologies and modern web development practices.",
  },
  {
    id: 2,
    degree: "Experience in Programming",
    institution: "Self-taught & Practical",
    location: "Karachi, Pakistan",
    duration: "2022 - Present",
    description:
      "Extensive hands-on experience in full-stack web development using the MERN Stack, building responsive and production-ready web applications, with additional proficiency in WordPress development including custom themes and client-facing projects.",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    id: 1,
    title: "Frontend",
    description: "Building beautiful, responsive user interfaces",
    icon: "🎨",
    skills: [
      { name: "HTML5", level: 100 },
      { name: "CSS3", level: 100 },
      { name: "JavaScript", level: 90 },
      { name: "React.js", level: 70 },
    ],
  },
  {
    id: 2,
    title: "Backend",
    description: "Building robust server-side applications",
    icon: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 80 },
      { name: "PHP", level: 60 },
    ],
  },
  {
    id: 3,
    title: "Database",
    description: "Managing and optimizing data storage",
    icon: "🗄️",
    skills: [
      { name: "MongoDB", level: 80 },
      { name: "MySQL", level: 90 },
      { name: "Oracle", level: 90 },
    ],
  },
  {
    id: 4,
    title: "Tools & Others",
    description: "Essential development tools and practices",
    icon: "🛠️",
    skills: [
      { name: "WordPress", level: 85 },
      { name: "Protégé", level: 80 },
      // { name: "Java", level: 80 },
      { name: "Git & GitHub", level: 85 },
      { name: "VS Code", level: 90 },
      // { name: "Figma", level: 70 },
    ],
  },
];


export const services: Service[] = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom dynamic websites and web applications built with the MERN stack, focused on performance, scalability, and exceptional user experience.",
    icon: "💻",
    features: [
      "Custom web applications",
      "RESTful API development",
      "Responsive design",
      "Performance optimization",
    ],
  },
  {
    id: 2,
    title: "Database Development",
    description:
      "Design, implementation, and optimization of relational databases (Oracle, MySQL) and NoSQL databases (MongoDB) ensuring data integrity, security, and scalability.",
    icon: "🗄️",
    features: [
      "Database design & architecture",
      "Query optimization",
      "Data integrity & security",
      "Oracle, MySQL & MongoDB",
    ],
  },
  {
    id: 3,
    title: "Content Writing",
    description:
      "Compelling website copy and content strategy that communicates your brand story effectively and drives meaningful user engagement.",
    icon: "✍️",
    features: [
      "Website copywriting",
      "SEO-friendly content",
      "Brand storytelling",
      "Content strategy",
    ],
  },
  {
    id: 4,
    title: "Logo Designing",
    description:
      "Creative logo and brand identity design that makes a lasting impression and accurately represents your business vision.",
    icon: "🎨",
    features: [
      "Logo design",
      "Brand identity",
      "Visual consistency",
      "Multiple format delivery",
    ],
  },
  {
    id: 5,
    title: "Desktop Applications",
    description:
      "Robust desktop software solutions built with Java, leveraging OOP principles for Windows environments, tailored to specific business workflows.",
    icon: "🖥️",
    features: [
      "Java desktop apps",
      "OOP architecture",
      "Business workflow automation",
      "Windows-compatible software",
    ],
  },
  {
    id: 6,
    title: "Freelance Consulting",
    description:
      "Expert consultation on web development strategy, tech stack selection, and project architecture for startups and growing businesses.",
    icon: "💬",
    features: [
      "Tech stack consultation",
      "Project architecture review",
      "Development strategy",
      "Startup-friendly guidance",
    ],
  },
];

export const certificates: Certificate[] = [

  { id: 1, title: "Certificate 1", issuer: "UDEMY", date: "", image: "/certificates/1.webp", credentialUrl: "#" },
  { id: 2, title: "Certificate 2", issuer: "UDEMY", date: "", image: "/certificates/2.webp", credentialUrl: "#" },
  { id: 3, title: "Certificate 3", issuer: "UDEMY", date: "", image: "/certificates/3.webp", credentialUrl: "#" },
  { id: 4, title: "Certificate 4", issuer: "UDEMY", date: "", image: "/certificates/4.webp", credentialUrl: "#" },
  { id: 5, title: "Certificate 5", issuer: "UDEMY", date: "", image: "/certificates/5.webp", credentialUrl: "#" },
  { id: 6, title: "Certificate 6", issuer: "UDEMY", date: "", image: "/certificates/6.webp", credentialUrl: "#" },
  { id: 7, title: "Certificate 7", issuer: "UDEMY", date: "", image: "/certificates/7.webp", credentialUrl: "#" },
  { id: 8, title: "Certificate 8", issuer: "UDEMY", date: "", image: "/certificates/8.webp", credentialUrl: "#" },
  { id: 9, title: "Certificate 9", issuer: "UDEMY", date: "", image: "/certificates/9.webp", credentialUrl: "#" },
  { id: 10, title: "Certificate 10", issuer: "UDEMY", date: "", image: "/certificates/10.webp", credentialUrl: "#" },
  { id: 11, title: "Certificate 11", issuer: "UDEMY", date: "", image: "/certificates/11.webp", credentialUrl: "#" },
  { id: 12, title: "Certificate 12", issuer: "UDEMY", date: "", image: "/certificates/12.webp", credentialUrl: "#" },
  { id: 13, title: "Certificate 13", issuer: "UDEMY", date: "", image: "/certificates/13.webp", credentialUrl: "#" },
  { id: 14, title: "Certificate 14", issuer: "UDEMY", date: "", image: "/certificates/14.webp", credentialUrl: "#" },
  { id: 15, title: "Certificate 15", issuer: "UDEMY", date: "", image: "/certificates/15.webp", credentialUrl: "#" },
  { id: 16, title: "Certificate 16", issuer: "UDEMY", date: "", image: "/certificates/16.webp", credentialUrl: "#" },
  { id: 17, title: "Certificate 17", issuer: "UDEMY", date: "", image: "/certificates/17.webp", credentialUrl: "#" },
  { id: 18, title: "Certificate 18", issuer: "UDEMY", date: "", image: "/certificates/18.webp", credentialUrl: "#" },
  { id: 19, title: "Certificate 19", issuer: "UDEMY", date: "", image: "/certificates/19.webp", credentialUrl: "#" },
  { id: 20, title: "Certificate 20", issuer: "UDEMY", date: "", image: "/certificates/20.webp", credentialUrl: "#" },
  { id: 21, title: "Certificate 21", issuer: "UDEMY", date: "", image: "/certificates/21.webp", credentialUrl: "#" },
  { id: 22, title: "Certificate 22", issuer: "UDEMY", date: "", image: "/certificates/22.webp", credentialUrl: "#" },
  { id: 23, title: "Certificate 23", issuer: "UDEMY", date: "", image: "/certificates/23.webp", credentialUrl: "#" },
  { id: 24, title: "Certificate 24", issuer: "UDEMY", date: "", image: "/certificates/24.webp", credentialUrl: "#" },
  { id: 25, title: "Certificate 25", issuer: "UDEMY", date: "", image: "/certificates/25.webp", credentialUrl: "#" },
  { id: 26, title: "Certificate 26", issuer: "UDEMY", date: "", image: "/certificates/26.webp", credentialUrl: "#" },
  { id: 27, title: "Certificate 27", issuer: "UDEMY", date: "", image: "/certificates/27.webp", credentialUrl: "#" },
  { id: 28, title: "Certificate 28", issuer: "UDEMY", date: "", image: "/certificates/28.webp", credentialUrl: "#" },
  { id: 29, title: "Certificate 29", issuer: "UDEMY", date: "", image: "/certificates/29.webp", credentialUrl: "#" },
  { id: 30, title: "Certificate 30", issuer: "UDEMY", date: "", image: "/certificates/30.webp", credentialUrl: "#" },
  { id: 31, title: "Certificate 31", issuer: "UDEMY", date: "", image: "/certificates/31.webp", credentialUrl: "#" },
  { id: 32, title: "Certificate 32", issuer: "UDEMY", date: "", image: "/certificates/32.webp", credentialUrl: "#" },
  { id: 33, title: "Certificate 33", issuer: "UDEMY", date: "", image: "/certificates/33.webp", credentialUrl: "#" },
  { id: 34, title: "Certificate 34", issuer: "UDEMY", date: "", image: "/certificates/34.webp", credentialUrl: "#" },
  { id: 35, title: "Certificate 35", issuer: "UDEMY", date: "", image: "/certificates/35.webp", credentialUrl: "#" },
  { id: 36, title: "Certificate 36", issuer: "UDEMY", date: "", image: "/certificates/36.webp", credentialUrl: "#" },
  { id: 37, title: "Certificate 37", issuer: "UDEMY", date: "", image: "/certificates/37.webp", credentialUrl: "#" },
  { id: 38, title: "Certificate 38", issuer: "UDEMY", date: "", image: "/certificates/38.webp", credentialUrl: "#" },
  { id: 39, title: "Certificate 39", issuer: "CURSA", date: "", image: "/certificates/39.webp", credentialUrl: "#" },
  { id: 40, title: "Certificate 40", issuer: "GOOGLE", date: "", image: "/certificates/40.webp", credentialUrl: "#" },
  { id: 41, title: "Certificate 41", issuer: "CISCO", date: "", image: "/certificates/41.webp", credentialUrl: "#" },
  { id: 42, title: "Certificate 42", issuer: "UDEMY", date: "", image: "/certificates/42.webp", credentialUrl: "#" },
  { id: 43, title: "Certificate 43", issuer: "UDEMY", date: "", image: "/certificates/43.webp", credentialUrl: "#" },
  { id: 44, title: "Certificate 44", issuer: "UDEMY", date: "", image: "/certificates/44.webp", credentialUrl: "#" },
  { id: 45, title: "Certificate 45", issuer: "UDEMY", date: "", image: "/certificates/45.webp", credentialUrl: "#" },
];

export const contactInfo: ContactInfo = {
  email: "contact@sharjeelsiddiqui.info",
  location: "Karachi, Pakistan",
  phone: "+92 312 2723876",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/sharjeel-siddiqui12",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sharjeel-siddiqui-ss/",
      icon: "linkedin",
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/923122723876",
      icon: "whatsapp",
    },
    {
      name: "Email",
      url: "mailto:contact@sharjeelsiddiqui.info",
      icon: "mail",
    },
  ],
};

export const techStack = [
  "React.js",
  "Node.js",
  "Express.js",
  "MongoDB",
  "JavaScript",
  "HTML5",
  "CSS3",
  "PHP",
  "Java",
  "MySQL",
  "Oracle",
  "WordPress",
  "Git",
  "GitHub",
  "Tailwind CSS",
  "Protégé",
  "VS Code",
  // "Figma",
];