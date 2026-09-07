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
  "Electron · React Native · Expo",
  "Full Stack Developer",
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
  "NeonDB",
  "Prisma",
  "Redis",
  "WebRTC",
  "WebSockets",
  "mediasoup",
  "JWT",
  "Tailwind",
  "Docker",
  "Git",
  "GitHub Actions CI/CD",
  "Turborepo",
  "Vercel",
  "Render"
];

export const skillGroups = [
  {
    label: "Frontend",
    items: [
      "React",
      "TypeScript",
      "Next.js",
      "Vite",
      "Tailwind",
      "Framer Motion",
      "React Native",
      "Expo",
      "Electron",
    ],
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Redis",
      "WebRTC",
      "WebSockets",
      "mediasoup",
      "JWT",
    ],
  },
  {
    label: "Platform",
    items: ["Docker", "Turborepo", "GitHub Actions", "EAS", "Vercel", "DigitalOcean"],
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
    stack: ["React", "TypeScript", "WebRTC", "WebSockets", "Node.js", "Prisma", "PostgreSQL", "tldraw"],
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
    title: "Full Stack & Mobile Developer",
    place: "Coincade Studios · Mumbai, Maharashtra",
    detail:
      "Joined as a frontend developer and transitioned into full-stack and mobile app development — Electron desktop, React Native/Expo, microservices/CI, and Next.js brand sites.",
    highlights: [
      "Electron desktop (React, TypeScript, electron-vite, Tailwind): auth, workspaces, channels/DMs/threads, presence, search, rich text, secure credentials, persistence, OS notifications, auto-updates, and Windows/macOS/Linux packaging",
      "Expo/React Native mobile (Expo Router, TanStack Query, NativeWind, EAS): auth, workspaces, chat, push notifications, and staging/production APIs aligned with desktop",
      "Realtime messaging and voice/video huddles via REST/WebSockets, mediasoup-client, and react-native-webrtc — live calls, screen share, reconnect handling",
      "Turborepo Node.js/TypeScript microservices (Express, Prisma/PostgreSQL, Redis, Docker) and GitHub Actions CI/CD: tests, path-filtered builds, migrations, staging/production deploys",
      "Next.js marketing sites (React, TypeScript, Tailwind) including bilingual EN/FR with next-intl, Framer Motion, SEO, Google Maps, and contact flows",
    ],
  },
  {
    year: "May – Jun 2025",
    title: "Frontend Developer Intern",
    place: "Appaxon Solutions · Remote",
    detail:
      "Led front-end work on KodeLayout — the marketplace’s first reusable HTML template — from requirements through responsive layout systems, reusable UI sections, and production handoff under tight timelines.",
    highlights: [
      "Collaborated with teammates and mentors on scope and review cycles, iterating on semantic HTML, CSS, and UI polish to meet release standards",
    ],
    link: "https://lnkd.in/p/dHUMWW67",
  },
  {
    year: "May 2025",
    title: "B.Tech Graduate",
    place: "New Horizon Institute of Technology & Management",
    detail:
      "Graduated with a B.Tech in Artificial Intelligence and Data Science (Thane, Maharashtra) — combining coursework with real product and freelance work.",
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
