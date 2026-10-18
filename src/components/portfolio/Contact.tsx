import { motion } from "motion/react";
import { ArrowUpRight, Github, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "./data";

export function Contact() {
  return (
    <section id="contact" className="relative scroll-mt-24 py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-hairline bg-card p-10 shadow-[var(--shadow-card)] md:p-16"
        >
          <div className="absolute inset-0 -z-10 grid-bg opacity-50" />
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-primary/30 blur-[120px]" />

          <div className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-6 bg-primary" /> Contact
          </div>
          <h2 className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-gradient md:text-6xl">
            Have a problem <span className="text-accent-gradient italic">worth solving?</span>
          </h2>
          <p className="mt-5 max-w-xl text-muted-foreground">
            Open to backend internships, collaborative engineering projects, and technical
            conversations. Reach out — I respond fast.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> {profile.email}
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Phone className="h-4 w-4" /> {profile.phone}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-hairline bg-hairline sm:grid-cols-3">
            {[
              { icon: Github, label: "GitHub", value: "@Sh-algammal", href: profile.github },
              { icon: Linkedin, label: "LinkedIn", value: "shady-algammal", href: profile.linkedin },
              {
                icon: BadgeIcon,
                label: "ORCID",
                value: "0009-0005-0192-2845",
                href: profile.orcid,
              },
            ].map((s) => {
              const Icon = s.icon;
              return (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-4 bg-card p-5 transition-colors hover:bg-secondary/40"
                >
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-secondary/60 text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </p>
                    <p className="truncate text-sm font-semibold">{s.value}</p>
                  </div>
                  <ArrowUpRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
                </a>
              );
            })}
          </div>
        </motion.div>

        <footer className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-hairline pt-8 text-xs text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Shady Algammal. Crafted with care.</p>
          <p className="font-mono">Tanta · Egypt — built with Laravel-grade discipline.</p>
        </footer>
      </div>
    </section>
  );
}

function BadgeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M8 9h1.5v6H8zM8 7.5h1.5V8H8zM12 9h2.4a2.4 2.4 0 0 1 0 4.8H12V9zm0 4.8V15" />
    </svg>
  );
}
