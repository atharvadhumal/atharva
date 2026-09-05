import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitHubCalendar } from "react-github-calendar";
import { ArrowUpRight } from "lucide-react";
import { useSectionInView } from "../hooks/useSectionInView";
import { GITHUB_USERNAME, skillGroups, socials, tools } from "../constants/data";

const CURRENT_YEAR = new Date().getFullYear();
const YEAR_OPTIONS = [CURRENT_YEAR, CURRENT_YEAR - 1, CURRENT_YEAR - 2, CURRENT_YEAR - 3];

const GITHUB_GREEN = {
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
};

const highlights = [
  { label: "Role", value: "Junior Frontend Engineer" },
  { label: "At", value: "Coincade Studios" },
  { label: "Studied", value: "B.Tech · AI & Data Science" },
];

function useCalendarSize() {
  const [size, setSize] = useState({ blockSize: 12, blockMargin: 3, fontSize: 12 });

  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 400) setSize({ blockSize: 9, blockMargin: 2, fontSize: 10 });
      else if (w < 640) setSize({ blockSize: 10, blockMargin: 3, fontSize: 11 });
      else if (w < 1024) setSize({ blockSize: 11, blockMargin: 3, fontSize: 11 });
      else setSize({ blockSize: 12, blockMargin: 4, fontSize: 12 });
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  return size;
}

export default function About() {
  const { ref } = useSectionInView("About");
  const [year, setYear] = useState(CURRENT_YEAR);
  const calendar = useCalendarSize();

  return (
    <section
      ref={ref}
      id="about"
      className="scroll-mt-24 border-t border-border py-16 sm:scroll-mt-28 sm:py-24 md:py-32"
    >
      <div className="shell">
        {/* Intro */}
        <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl"
          >
            <p className="mono text-[11px] tracking-[0.18em] text-dim uppercase sm:text-xs">About</p>
            <h2 className="mt-4 text-[clamp(1.85rem,4.5vw,2.75rem)] font-semibold leading-[1.15] tracking-tight text-text">
              Building products people enjoy using.
            </h2>
            <p className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-muted sm:mt-6 sm:text-base">
              I ship web apps with React and Node, desktop with Electron, and mobile with React
              Native (Expo). I build interactive experiences you fall in love with—not me, lol.
            </p>
          </motion.div>

          <motion.a
            href={`mailto:${socials.email}`}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="inline-flex w-fit items-center gap-1.5 text-sm text-muted transition hover:text-text"
          >
            <span className="break-all">{socials.email}</span>
            <ArrowUpRight size={14} className="shrink-0" />
          </motion.a>
        </div>

        {/* Snapshot facts */}
        <motion.ul
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.05 }}
          className="mt-12 grid gap-6 border-y border-border py-8 sm:mt-14 sm:grid-cols-3 sm:gap-8 sm:py-10"
        >
          {highlights.map((item) => (
            <li key={item.label}>
              <p className="mono text-[11px] tracking-[0.14em] text-dim uppercase">{item.label}</p>
              <p className="mt-2 text-base font-medium tracking-tight text-text sm:text-lg">
                {item.value}
              </p>
            </li>
          ))}
        </motion.ul>

        {/* Capabilities */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="mt-12 sm:mt-14"
        >
          <p className="mono text-[11px] tracking-[0.14em] text-dim uppercase sm:text-xs">
            Capabilities
          </p>

          <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
            {skillGroups.map((group) => (
              <div key={group.label}>
                <p className="text-sm font-medium text-text">{group.label}</p>
                <ul className="mt-3 space-y-1.5">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-dim">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div>
              <p className="text-sm font-medium text-text">Tools</p>
              <ul className="mt-3 space-y-1.5">
                {tools.map((item) => (
                  <li key={item} className="text-sm text-dim">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Activity */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-14 sm:mt-16"
        >
          <div className="overflow-hidden rounded-2xl border border-border/70 bg-[#0c0c0e]/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)_inset] backdrop-blur-xl">
            <div className="flex flex-col gap-4 border-b border-border/60 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-5">
              <div className="min-w-0">
                <p className="mono text-[11px] tracking-[0.16em] text-dim uppercase">
                  Contributions
                </p>
                <a
                  href={`https://github.com/${GITHUB_USERNAME}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-1 text-sm text-muted transition hover:text-text"
                >
                  github.com/{GITHUB_USERNAME}
                  <ArrowUpRight size={13} className="shrink-0 opacity-70" />
                </a>
              </div>

              <div
                role="tablist"
                aria-label="Contribution year"
                className="flex w-fit rounded-full border border-border/70 bg-bg/50 p-1"
              >
                {YEAR_OPTIONS.map((y) => (
                  <button
                    key={y}
                    type="button"
                    role="tab"
                    aria-selected={year === y}
                    onClick={() => setYear(y)}
                    className={`mono rounded-full px-3 py-1.5 text-[11px] transition sm:text-xs ${
                      year === y
                        ? "bg-elevated text-text shadow-sm"
                        : "text-dim hover:text-muted"
                    }`}
                  >
                    {y}
                  </button>
                ))}
              </div>
            </div>

            <div className="github-calendar-wrap overflow-x-auto px-3 py-5 sm:px-5 sm:py-6 md:px-6">
              <div className="github-calendar-inner mx-auto w-max">
                <GitHubCalendar
                  key={`${year}-${calendar.blockSize}`}
                  username={GITHUB_USERNAME}
                  year={year}
                  blockSize={calendar.blockSize}
                  blockMargin={calendar.blockMargin}
                  fontSize={calendar.fontSize}
                  colorScheme="dark"
                  theme={GITHUB_GREEN}
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
