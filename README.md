# Atharva Dhumal — Portfolio

Personal portfolio of Atharva Dhumal, a full stack and mobile developer working with React, Node.js, Electron, and React Native (Expo). It's a single-page site with a dark, minimal design that showcases projects, experience, skills, and a way to get in touch.

## Sections

- **Home** — intro with a typewriter role line, an animated code panel, and links to work, resume, and contact
- **About** — short bio, role snapshot, grouped skills and tools, and a GitHub contribution calendar with a year switcher
- **Work** — project cards with cover images, tech stack, and live / code links
- **Journey** — experience timeline: Coincade Studios, Appaxon Solutions, B.Tech graduation, and freelance work
- **Contact** — email, GitHub, and LinkedIn links plus a contact form powered by [Web3Forms](https://web3forms.com)

## Featured projects

| Project | What it is | Links |
| --- | --- | --- |
| **Noir** | Real-time mobile chat app (Expo, Socket.IO, Express, Prisma) | [App](https://github.com/atharvadhumal/noir-chatApp) · [Backend](https://github.com/atharvadhumal/noir-backend-chatApp) |
| **CanvasRTC** | Collaborative whiteboard with built-in WebRTC video calls | [Live](https://canvas-rtc-fe.vercel.app) · [Frontend](https://github.com/atharvadhumal/canvasRTC-fe) · [Backend](https://github.com/atharvadhumal/canvasRTC-be) |
| **Nexus Engineering** | Freelance company website | [Live](https://www.nexus-eng.in/) · [Code](https://github.com/atharvadhumal/Nexus) |

## Tech stack

- **React 18** and **Vite 6**
- **Tailwind CSS 4** via `@tailwindcss/vite`
- **Framer Motion** for scroll and entrance animations
- **lucide-react** for icons
- **react-github-calendar** for the contribution graph
- **typewriter-effect** for the hero role line
- **Web3Forms** for contact form submissions
- Deployed on **Vercel**

## Getting started

Requires Node.js 18 or newer.

```bash
git clone https://github.com/atharvadhumal/atharva.git
cd atharva
npm install
cp .env.example .env
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173).

### Environment variables

| Variable | Purpose |
| --- | --- |
| `VITE_WEB3FORMS_ACCESS_KEY` | Access key for the contact form. Get one free at [web3forms.com](https://web3forms.com). Without it, the form shows an error and visitors are asked to email directly. |

## Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |

## Project structure

```
atharva/
├── public/
│   ├── atharvaDhumal-resume.pdf   # served by the Resume buttons
│   └── favicon.png
├── src/
│   ├── assets/                    # project covers and images
│   ├── components/                # Navbar, Hero, About, Projects, Experience, Contact, Footer, StarField
│   ├── constants/data.js          # all site content: projects, experience, skills, links
│   ├── context/ActiveSection.jsx  # tracks the active nav section
│   ├── hooks/useSectionInView.js  # updates the active section on scroll
│   ├── App.jsx
│   ├── index.css                  # theme tokens and global styles
│   └── main.jsx
├── vercel.json
└── vite.config.js
```

## Updating content

Almost everything on the site lives in `src/constants/data.js`:

- **Add a project:** add an entry to `projects`. Put the cover image in `src/assets/`, import it at the top of the file, and set `image`. Optional fields: `live`, `liveLabel`, `github`, `githubBe`, `linkedin`, `points`, `imageFit: "contain"`, and `imageBg`.
- **Add experience:** add an entry to `experiences`.
- **Edit skills:** update `skillGroups` and `tools`.
- **Replace the resume:** put the new PDF in `public/` and update `resumePath`.

## Deployment

The site deploys on Vercel using `vercel.json` (Vite framework, `npm run build`, output in `dist`). Add `VITE_WEB3FORMS_ACCESS_KEY` in the Vercel project's environment variables so the contact form works in production.

## Contact

- **Email:** [atharvadhumal256@gmail.com](mailto:atharvadhumal256@gmail.com)
- **LinkedIn:** [atharvadhumal24](https://www.linkedin.com/in/atharvadhumal24)
- **GitHub:** [atharvadhumal](https://github.com/atharvadhumal)
- **X:** [@adhumal6](https://x.com/adhumal6)

---

© 2026 Atharva Dhumal
