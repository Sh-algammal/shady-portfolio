import { motion } from "motion/react";
import { Section } from "./Section";
import { timeline } from "./data";

export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience & Education"
      title="Learning by building, in public."
      description="No fabricated job titles — just a honest record of study, shipped projects, and formal training."
    >
      <ol className="relative ml-3 space-y-10 border-l border-hairline pl-8 md:ml-6">
        {timeline.map((t, i) => (
          <motion.li
            key={t.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="relative"
          >
            <span
              className={`absolute -left-[41px] top-1 grid h-5 w-5 place-items-center rounded-full border md:-left-[43px] ${
                t.current
                  ? "border-primary bg-primary/20"
                  : "border-hairline bg-card"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  t.current ? "bg-primary" : "bg-muted-foreground"
                }`}
              />
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
              {t.period}
            </p>
            <h3 className="mt-2 font-display text-lg font-semibold md:text-xl">
              {t.title}
            </h3>
            <p className="mt-0.5 text-sm text-muted-foreground">{t.org}</p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              {t.body}
            </p>
          </motion.li>
        ))}
      </ol>
    </Section>
  );
}
