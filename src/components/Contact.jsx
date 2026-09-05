import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useSectionInView } from "../hooks/useSectionInView";
import { socials } from "../constants/data";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const formRef = useRef(null);
  const [status, setStatus] = useState("idle");

  const sendEmail = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey });
      setStatus("success");
      formRef.current.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      ref={ref}
      id="contact"
      className="scroll-mt-24 border-t border-border py-16 sm:scroll-mt-28 sm:py-20 md:py-32"
    >
      <div className="shell grid gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="mono text-[11px] tracking-[0.18em] text-dim uppercase sm:text-xs">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight text-text sm:mt-4 sm:text-3xl md:text-4xl">
            Let&apos;s work together
          </h2>
          <p className="mt-3 max-w-md text-[0.95rem] text-muted sm:mt-4 sm:text-base">
            Have a project or opportunity? Drop a message — I usually reply within a day.
          </p>

          <ul className="mt-8 space-y-4 text-sm sm:mt-10">
            {[
              { label: "Email", value: socials.email, href: `mailto:${socials.email}` },
              { label: "GitHub", value: "atharvadhumal", href: socials.github },
              { label: "LinkedIn", value: "atharvadhumal24", href: socials.linkedin },
            ].map((item) => (
              <li key={item.label} className="min-w-0">
                <span className="mono text-[11px] text-dim uppercase">{item.label}</span>
                <a
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="mt-0.5 block break-all text-text transition hover:text-muted"
                >
                  {item.value}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="flex w-full min-w-0 flex-col gap-3 sm:gap-4"
        >
          <input name="user_name" required placeholder="Name" autoComplete="name" className="field" />
          <input
            type="email"
            name="user_email"
            required
            placeholder="Email"
            autoComplete="email"
            className="field"
          />
          <textarea
            name="message"
            required
            rows={5}
            placeholder="Message"
            className="field resize-y"
          />
          <button
            type="submit"
            disabled={status === "sending"}
            className="mt-1 min-h-11 w-full rounded-full bg-text px-7 py-3 text-sm font-medium text-bg transition hover:bg-accent disabled:opacity-60 sm:mt-2 sm:w-fit"
          >
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
          {status === "success" && (
            <p className="text-sm text-muted">Message sent. Thanks!</p>
          )}
          {status === "error" && (
            <p className="text-sm text-muted">Couldn&apos;t send — email me directly.</p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
