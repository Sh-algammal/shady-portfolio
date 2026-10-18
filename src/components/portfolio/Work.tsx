import { motion } from "motion/react";
import { ArrowUpRight, Github, Globe } from "lucide-react";
import { Section } from "./Section";
import { projects, type Project } from "./data";

function Card({ p, index }: { p: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: (index % 3) * 0.06 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-hairline bg-card p-7 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-primary/40 ${
        p.highlight ? "lg:col-span-2" : ""
      }`}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.06] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />

      <div className="relative flex items-start justify-between gap-4">
        <div>
          <span className="inline-flex items-center gap-2">
            <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-primary">
              {p.tag}
            </span>
            {p.context && (
              <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                {p.context}
              </span>
            )}
          </span>
          <h3 className="mt-4 font-display text-xl font-semibold leading-tight md:text-2xl">
            {p.title}
          </h3>
        </div>
        <span className="font-mono text-xs text-muted-foreground">
          /{String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
        {p.description}
      </p>

      <ul className="relative mt-5 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
        {p.features.map((f) => (
          <li
            key={f}
            className="flex items-start gap-2 text-xs text-foreground/80"
          >
            <span className="mt-1.5 inline-block h-1 w-1 shrink-0 rounded-full bg-primary" />
            {f}
          </li>
        ))}
      </ul>

      <div className="relative mt-6 flex flex-wrap items-center gap-1.5">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-md border border-hairline bg-secondary/40 px-2 py-1 font-mono text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="relative mt-6 flex items-center gap-2 border-t border-hairline pt-5">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-hairline px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:bg-secondary"
          >
            <Github className="h-3.5 w-3.5" /> Code
          </a>
        )}
        {p.live && (
          <a
            href={p.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
          >
            <Globe className="h-3.5 w-3.5" /> Live API
            <ArrowUpRight className="h-3 w-3" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export function Work() {
  return (
    <Section
      id="work"
      eyebrow="Selected Work"
      title="Backend systems, APIs & data."
      description="A selection of projects across Laravel, MySQL and AI tooling — focused on real engineering decisions, not demos."
    >
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.map((p, i) => (
          <Card key={p.title} p={p} index={i} />
        ))}
      </div>
    </Section>
  );
}
