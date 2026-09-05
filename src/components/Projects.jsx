import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSectionInView } from "../hooks/useSectionInView";
import { projects } from "../constants/data";

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
                  <p className="mono mt-4 text-[11px] leading-relaxed break-words text-dim sm:mt-5 sm:text-xs">
                    {project.stack.join(" · ")}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 sm:mt-8">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-text hover:text-muted"
                    >
                      Live <ArrowUpRight size={14} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-muted hover:text-text"
                    >
                      {project.githubBe ? "Frontend" : "Code"} <ArrowUpRight size={14} />
                    </a>
                    {project.githubBe && (
                      <a
                        href={project.githubBe}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-muted hover:text-text"
                      >
                        Backend <ArrowUpRight size={14} />
                      </a>
                    )}
                    {project.linkedin && (
                      <a
                        href={project.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-muted hover:text-text"
                      >
                        Write-up <ArrowUpRight size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
