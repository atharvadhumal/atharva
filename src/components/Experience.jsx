import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useSectionInView } from "../hooks/useSectionInView";
import { experiences } from "../constants/data";

export default function Experience() {
  const { ref } = useSectionInView("Journey");

  return (
    <section
      ref={ref}
      id="journey"
      className="shell scroll-mt-24 py-16 sm:scroll-mt-28 sm:py-20 md:py-32"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8 max-w-lg sm:mb-12 md:mb-14"
      >
        <p className="mono text-[11px] tracking-[0.18em] text-dim uppercase sm:text-xs">Journey</p>
        <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text sm:mt-4 sm:text-3xl md:text-4xl">
          Experience
        </h2>
      </motion.div>

      <div className="flex flex-col">
        {experiences.map((item, index) => {
          const links = item.links?.length
            ? item.links
            : item.link
              ? [{ label: "Write-up", href: item.link }]
              : [];

          return (
            <motion.div
              key={item.title + item.place}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="grid gap-1.5 border-t border-border py-6 sm:grid-cols-[150px_1fr] sm:gap-8 sm:py-8 md:grid-cols-[170px_1fr] md:gap-10"
            >
              <p className="mono text-xs text-dim sm:text-sm">{item.year}</p>
              <div className="min-w-0">
                <h3 className="text-base font-semibold text-text sm:text-lg">{item.title}</h3>
                <p className="mt-1 text-sm text-muted">{item.place}</p>
                <p className="mt-2.5 max-w-xl text-sm leading-relaxed text-dim sm:mt-3">
                  {item.detail}
                </p>
                {item.highlights?.length > 0 && (
                  <ul className="mt-3 max-w-xl space-y-1.5">
                    {item.highlights.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-dim">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-muted" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {links.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-x-4 gap-y-2">
                    {links.map((l) => (
                      <a
                        key={l.href}
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex min-h-10 items-center gap-1 text-sm font-medium text-text hover:text-muted"
                      >
                        {l.label} <ArrowUpRight size={14} />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
