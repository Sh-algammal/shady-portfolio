import { motion } from "motion/react";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  description,
  children,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-2xl"
        >
          <div className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" /> {eyebrow}
          </div>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-gradient md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="mt-4 text-base text-muted-foreground md:text-lg">{description}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
