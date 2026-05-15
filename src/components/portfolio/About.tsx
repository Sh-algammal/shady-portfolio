import { motion } from "motion/react";
import { Section } from "./Section";
import { about } from "./data";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={
        <>
          Engineer-minded student with a<br /> bias for shipping.
        </>
      }
      description={about.intro}
    >
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {about.pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group relative overflow-hidden rounded-2xl border border-hairline bg-card p-6 shadow-[var(--shadow-card)] transition-transform hover:-translate-y-1"
          >
            <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-primary/10 blur-3xl transition-opacity group-hover:opacity-80" />
            <div className="relative">
              <span className="font-mono text-xs text-primary">0{i + 1}</span>
              <h3 className="mt-3 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline md:grid-cols-4">
        {about.facts.map((f) => (
          <div key={f.k} className="bg-card p-5">
            <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              {f.k}
            </p>
            <p className="mt-1.5 text-sm font-semibold">{f.v}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
