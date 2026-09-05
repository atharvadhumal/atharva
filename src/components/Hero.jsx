import { motion, useScroll, useTransform } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowDownRight } from "lucide-react";
import { typewriterStrings } from "../constants/data";
import { useSectionInView } from "../hooks/useSectionInView";

const codeLines = [
  { n: "01", parts: [{ t: "const ", c: "keyword" }, { t: "dev ", c: "plain" }, { t: "= ", c: "plain" }, { t: "{", c: "plain" }] },
  { n: "02", parts: [{ t: "  name: ", c: "plain" }, { t: "'Atharva Dhumal'", c: "string" }, { t: ",", c: "plain" }] },
  { n: "03", parts: [{ t: "  role: ", c: "plain" }, { t: "'Full Stack'", c: "string" }, { t: ",", c: "plain" }] },
  { n: "04", parts: [{ t: "  stack: ", c: "plain" }, { t: "['React', 'Node']", c: "string" }, { t: ",", c: "plain" }] },
  { n: "05", parts: [{ t: "  ship: ", c: "plain" }, { t: "() => ", c: "plain" }, { t: "'clean + reliable'", c: "string" }] },
  { n: "06", parts: [{ t: "}", c: "plain" }] },
];

const tone = {
  keyword: "text-[#7dd3fc]",
  string: "text-[#86efac]",
  plain: "text-muted",
};

export default function Hero() {
  const { ref } = useSectionInView("Home");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const panelY = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0.15]);

  return (
    <section ref={ref} id="home" className="relative min-h-[100svh]">
      <motion.div
        style={{ opacity: fade }}
        className="shell relative grid min-h-[100svh] items-center gap-8 py-24 sm:gap-10 sm:py-28 md:grid-cols-[1.05fr_0.95fr] md:gap-12 md:py-24 lg:gap-16"
      >
        <div className="max-w-xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mono mb-4 text-[11px] tracking-[0.18em] text-dim uppercase sm:mb-5 sm:text-xs sm:tracking-[0.2em]"
          >
            Open to interesting work
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.15rem,9vw,5rem)] font-semibold leading-[1.08] tracking-tight break-words text-text"
          >
            Atharva Dhumal
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-3 min-h-[1.5rem] text-base text-muted sm:mt-4 sm:min-h-[1.6rem] sm:text-lg md:text-xl"
          >
            <Typewriter
              options={{
                strings: typewriterStrings,
                autoStart: true,
                loop: true,
                delay: 45,
                deleteSpeed: 28,
              }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-dim sm:mt-6 sm:text-base md:text-lg"
          >
            Building clean interfaces and reliable backends — shipped with care.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-3 sm:mt-10"
          >
            <a
              href="#work"
              className="inline-flex min-h-11 items-center gap-2 rounded-full bg-text px-5 py-2.5 text-sm font-medium text-bg transition hover:bg-accent sm:px-6 sm:py-3"
            >
              View work
              <ArrowDownRight size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex min-h-11 items-center rounded-full border border-border px-5 py-2.5 text-sm font-medium text-muted transition hover:border-dim hover:text-text sm:px-6 sm:py-3"
            >
              Contact
            </a>
          </motion.div>
        </div>

        <motion.div
          style={{ y: panelY }}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="w-full min-w-0"
        >
          <div className="overflow-hidden rounded-xl border border-border/70 bg-bg/40 shadow-[0_24px_80px_rgba(0,0,0,0.35)] backdrop-blur-md sm:rounded-2xl">
            <div className="flex items-center gap-2 border-b border-border px-3 py-2.5 sm:px-4 sm:py-3">
              <span className="size-2 rounded-full bg-[#ff5f57] sm:size-2.5" />
              <span className="size-2 rounded-full bg-[#febc2e] sm:size-2.5" />
              <span className="size-2 rounded-full bg-[#28c840] sm:size-2.5" />
              <span className="mono ml-2 text-[10px] text-dim sm:ml-3 sm:text-[11px]">
                developer.ts
              </span>
            </div>
            <div className="overflow-x-auto overscroll-x-contain p-4 sm:p-5 md:p-6">
              <div className="min-w-0 space-y-2.5 sm:space-y-3">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={line.n}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35 + i * 0.06 }}
                    className="mono flex gap-2 text-[11px] leading-relaxed sm:gap-3 sm:text-[12px] md:text-[13px]"
                  >
                    <span className="w-4 shrink-0 select-none text-dim/70 sm:w-5">{line.n}</span>
                    <span className="min-w-0 whitespace-pre">
                      {line.parts.map((p, j) => (
                        <span key={j} className={tone[p.c]}>
                          {p.t}
                        </span>
                      ))}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.85 }}
                  className="mono flex gap-2 pt-1 text-[11px] text-dim sm:gap-3 sm:text-[12px] md:text-[13px]"
                >
                  <span className="w-4 shrink-0 sm:w-5">07</span>
                  <span>
                    <span className="text-muted">await </span>
                    <span className="text-text">dev.ship()</span>
                    <span className="ml-0.5 inline-block h-3.5 w-1.5 animate-pulse bg-muted align-middle" />
                  </span>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
