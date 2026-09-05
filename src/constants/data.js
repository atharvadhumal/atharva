import canvasrtc from "../assets/canvasrtc.jpg";
import nexus from "../assets/nexus.png";

export const GITHUB_USERNAME = "atharvadhumal";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Work", href: "#work" },
  { name: "Journey", href: "#journey" },
  { name: "Contact", href: "#contact" },
];

export const typewriterStrings = [
  "Junior Frontend Engineer",
  "Full Stack Developer",
  "React & TypeScript",
  "Product-minded builder",
];

export const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Vite",
  "React Native",
  "Expo",
  "Electron",
  "Node.js",
  "Express",
  "PostgreSQL",
  "Neon",
  "Prisma",
  "WebRTC",
  "WebSockets",
  "JWT",
  "Tailwind",
  "Docker",
  "Git",
  "GitHub Actions CI/CD",
  "Vercel",
  "Render",
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React", "TypeScript", "Next.js", "Vite", "Tailwind", "React Native", "Expo", "Electron"],
  },
  {
    label: "Backend",
    items: ["Node.js", "Express", "PostgreSQL", "Neon", "Prisma", "WebRTC", "WebSockets", "JWT"],
  },
  {
    label: "Platform",
    items: ["Docker", "Git", "GitHub Actions", "Vercel", "Render"],
  },
];

export const tools = [
  "VS Code",
  "Cursor",
  "GitHub",
  "Figma",
  "Postman",
  "Chrome DevTools",
  "Slack",
  "Vercel",
  "Render",
];

export const projects = [
  {
    index: "01",
    title: "CanvasRTC",
    description:
      "Real-time collaboration in one browser workspace — infinite whiteboard and P2P HD video/audio together. Create or join rooms with a share code, live cursors, mesh WebRTC for up to 4 peers, presence, and auto-saved boards. Built for focused brainstorming, design reviews, and small-team workshops — no installs, no tab switching.",
    highlight: "Whiteboard + video call, same tab",
    image: canvasrtc,
    imageFit: "contain",
    stack: ["React", "TypeScript", "WebRTC", "WebSockets", "Node.js", "Prisma", "PostgreSQL"],
    live: "https://canvas-rtc-fe.vercel.app",
    github: "https://github.com/atharvadhumal/canvasRTC-fe",
    githubBe: "https://github.com/atharvadhumal/canvasRTC-be",
    linkedin: "https://lnkd.in/p/dMSenSuh",
  },
  {
    index: "02",
    title: "Nexus Engineering",
    description:
      "Freelance multi-page company website for Nexus Engineering — React, Vite, and Tailwind with clear routing for Home, About, Services, and Contact. Deployed and hosted on Hostinger.",
    highlight: "Client freelance · Hostinger",
    image: nexus,
    stack: ["React", "Vite", "Tailwind", "React Router"],
    live: "https://www.nexus-eng.in/",
    github: "https://github.com/atharvadhumal/Nexus",
  },
];

export const experiences = [
  {
    year: "Jun 2025 – Present",
    title: "Junior Frontend Engineer",
    place: "Coincade Studios",
    detail:
      "Building and shipping frontend features in a product team — React interfaces, polished UI, and day-to-day collaboration on real client work.",
    highlights: [
      "Ship React UI features for production products",
      "Collaborate with design and backend on clear, usable flows",
      "Iterate on performance, accessibility, and component quality",
    ],
  },
  {
    year: "May 2025",
    title: "B.Tech Graduate",
    place: "New Horizon Institute of Technology & Management",
    detail:
      "Graduated with a B.Tech in Artificial Intelligence and Data Science (Thane, Maharashtra) — combining coursework with real product and freelance work.",
  },
  {
    year: "Apr – May 2025",
    title: "Frontend Intern",
    place: "Appaxon Solutions",
    detail:
      "Led front-end work on KodeLayout — the first HTML template for their marketplace — from initial build through requirement specs. Collaborated with the team, shipped under tight timelines, and grew in web development and design.",
    link: "https://lnkd.in/p/dHUMWW67",
  },
  {
    year: "Feb 2025",
    title: "Freelance Frontend",
    place: "Nexus Engineering",
    detail:
      "Built the company frontend website as a freelance project — multi-page React site for Nexus Engineering. Deployed and hosted on Hostinger.",
    links: [
      { label: "Live", href: "https://www.nexus-eng.in/" },
      { label: "Code", href: "https://github.com/atharvadhumal/Nexus" },
    ],
  },
];

export const resumePath = "/atharva-frontend-dev.pdf";

export const socials = {
  email: "atharvadhumal256@gmail.com",
  github: "https://github.com/atharvadhumal",
  linkedin: "http://www.linkedin.com/in/atharvadhumal24",
};
