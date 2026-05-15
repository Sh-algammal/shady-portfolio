import { motion } from "motion/react";
import { ArrowUpRight, BadgeCheck } from "lucide-react";
import { Section } from "./Section";
import { certifications } from "./data";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title="Verified credentials."
      description="A growing record of formal training across PHP, full-stack development, and cybersecurity foundations."
    >
      <div className="overflow-hidden rounded-2xl border border-hairline bg-card">
        {certifications.map((c, i) => (
          <motion.a
            key={c.title}
            href={c.href}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.04 }}
            className="group flex items-center justify-between gap-4 border-b border-hairline px-6 py-5 transition-colors last:border-b-0 hover:bg-secondary/40"
          >
            <div className="flex items-center gap-4">
              <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary ring-1 ring-primary/20">
                <BadgeCheck className="h-4 w-4" />
              </div>
              <div>
                <p className="text-sm font-semibold">{c.title}</p>
                <p className="text-xs text-muted-foreground">{c.issuer}</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground transition-colors group-hover:text-primary">
              Verify
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>
        ))}
      </div>
    </Section>
  );
}
