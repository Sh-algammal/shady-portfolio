import { motion } from "motion/react";
import { Section } from "./Section";
import { skillGroups } from "./data";
import {
  Boxes,
  Database,
  Code2,
  Sparkles,
  ShieldCheck,
  Wrench,
} from "lucide-react";

const icons = [Boxes, Database, Code2, Sparkles, ShieldCheck, Wrench];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Capabilities"
      title="A focused toolkit, used in real projects."
      description="The stack I reach for when designing APIs, modeling data, and shipping backend services."
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[i % icons.length];
          return (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="group relative rounded-2xl border border-hairline bg-card p-6 transition-colors hover:border-primary/40"
            >
              <div className="flex items-center justify-between">
                <div className="grid h-10 w-10 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/20">
                  <Icon className="h-5 w-5" />
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="mt-5 font-display text-base font-semibold">{g.label}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {g.items.map((it) => (
                  <li
                    key={it}
                    className="rounded-md border border-hairline bg-secondary/40 px-2 py-1 text-xs text-foreground/80"
                  >
                    {it}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
