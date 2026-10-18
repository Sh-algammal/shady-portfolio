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
    >
      <div className="grid grid-cols-1 gap-12 md:grid-cols-12">
        {/* Biography — wide editorial column */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="md:col-span-7"
        >
          <p className="text-lg leading-relaxed text-foreground/90 md:text-xl">
            {about.intro}
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">
            {about.approach}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline">
            {about.facts.map((f) => (
              <div key={f.k} className="bg-card p-5">
                <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                  {f.k}
                </p>
                <p className="mt-1.5 text-sm font-semibold">{f.v}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Pillars — narrow stacked column */}
        <div className="flex flex-col gap-4 md:col-span-5">
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
      </div>
    </Section>
  );
}
