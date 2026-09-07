import { motion } from "framer-motion";
import { ArrowUpRight, MonitorSmartphone, Globe2 } from "lucide-react";
import { useSectionInView } from "../hooks/useSectionInView";
import { projects } from "../constants/data";

const accents = {
  comm: {
    icon: MonitorSmartphone,
    gradient:
      "radial-gradient(ellipse 80% 60% at 20% 20%, rgba(125,211,252,0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 90% 80%, rgba(134,239,172,0.12), transparent 50%), #0c0c10",
    label: "Desktop · Mobile · Backend",
  },
  brand: {
    icon: Globe2,
    gradient:
      "radial-gradient(ellipse 80% 60% at 80% 15%, rgba(250,250,250,0.12), transparent 50%), radial-gradient(ellipse 60% 45% at 10% 85%, rgba(161,161,170,0.14), transparent 45%), #0c0c10",
    label: "Marketing · i18n · SEO",
  },
};

function ProjectVisual({ project }) {
  if (project.image) {
    return (
      <div
        className={`relative aspect-[16/10] overflow-hidden border-b border-border sm:aspect-[16/11] md:aspect-auto md:min-h-[280px] md:border-b-0 md:border-r lg:min-h-[320px] ${
          project.imageFit === "contain" ? "bg-[#0a0910]" : "bg-elevated/40"
        }`}
      >
        {project.imageFit === "contain" ? (
          <div className="absolute inset-0 flex items-center justify-center p-3 sm:p-5">
            <img
              src={project.image}
              alt={project.title}
              className="max-h-full max-w-full rounded-lg object-contain"
              loading="lazy"
            />
          </div>
        ) : (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover object-center transition duration-500 hover:scale-[1.02]"
            loading="lazy"
          />
        )}
      </div>
    );
  }

  const accent = accents[project.accent] || accents.comm;
  const Icon = accent.icon;

  return (
    <div
      className="relative flex aspect-[16/10] flex-col justify-between overflow-hidden border-b border-border p-5 sm:aspect-[16/11] sm:p-6 md:aspect-auto md:min-h-[280px] md:border-b-0 md:border-r md:p-8 lg:min-h-[320px]"
      style={{ background: accent.gradient }}
    >
      <div className="flex items-start justify-between gap-3">
        <span className="mono text-[11px] tracking-[0.16em] text-dim uppercase">
          {accent.label}
        </span>
        <span className="flex size-10 items-center justify-center rounded-xl border border-border/70 bg-bg/40 text-muted backdrop-blur-sm">
          <Icon size={18} strokeWidth={1.75} />
        </span>
      </div>

      <div>
        <p className="mono text-xs text-dim">{project.index}</p>
        <p className="mt-2 max-w-[16rem] text-lg font-semibold leading-snug tracking-tight text-text sm:text-xl">
          {project.title}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.stack.slice(0, 5).map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border/60 bg-bg/35 px-2.5 py-1 text-[11px] text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProjectLinks({ project }) {
  const links = [];
  if (project.live) links.push({ href: project.live, label: "Live", primary: true });
  if (project.github)
    links.push({
      href: project.github,
      label: project.githubBe ? "Frontend" : "Code",
      primary: !project.live,
    });
  if (project.githubBe) links.push({ href: project.githubBe, label: "Backend" });
  if (project.linkedin) links.push({ href: project.linkedin, label: "Write-up" });

  if (links.length === 0) {
    return (
      <p className="mt-6 text-sm text-dim sm:mt-8">
        Shipped in production · details available on request
      </p>
    );
  }

  return (
    <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 sm:mt-8">
      {links.map((link) => (
        <a
          key={link.href + link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex min-h-10 items-center gap-1 text-sm font-medium ${
            link.primary ? "text-text hover:text-muted" : "text-muted hover:text-text"
          }`}
        >
          {link.label} <ArrowUpRight size={14} />
        </a>
      ))}
    </div>
  );
}

export default function Projects() {
  const { ref } = useSectionInView("Work");

  return (
    <section
      ref={ref}
      id="work"
      className="scroll-mt-24 border-t border-border py-16 sm:scroll-mt-28 sm:py-20 md:py-32"
    >
      <div className="shell">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-lg sm:mb-12 md:mb-14"
        >
          <p className="mono text-[11px] tracking-[0.18em] text-dim uppercase sm:text-xs">Work</p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text sm:mt-4 sm:text-3xl md:text-4xl">
            Selected projects
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 sm:text-base">
            Selected builds — realtime collaboration and client websites.
          </p>
        </motion.div>

        <div className="flex flex-col gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              className="overflow-hidden rounded-xl border border-border/70 bg-bg/35 backdrop-blur-md sm:rounded-2xl"
            >
              <div className="grid md:grid-cols-2">
                <ProjectVisual project={project} />

                <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8">
                  <span className="mono text-xs text-dim">{project.index}</span>
                  {project.highlight && (
                    <p className="mt-2 text-sm font-medium text-[#39d353] sm:mt-3">
                      {project.highlight}
                    </p>
                  )}
                  <h3 className="mt-1.5 text-xl font-semibold tracking-tight text-text sm:mt-2 sm:text-2xl md:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:mt-4 md:text-base">
                    {project.description}
                  </p>

                  {project.points?.length > 0 && (
                    <ul className="mt-4 space-y-2 sm:mt-5">
                      {project.points.map((point) => (
                        <li key={point} className="flex gap-2 text-sm leading-relaxed text-dim">
                          <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  <p className="mono mt-4 text-[11px] leading-relaxed break-words text-dim sm:mt-5 sm:text-xs">
                    {project.stack.join(" · ")}
                  </p>

                  <ProjectLinks project={project} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
