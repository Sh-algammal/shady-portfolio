import { motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile } from "./data";

const line = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.12, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-12">
        {/* Copy */}
        <div className="md:col-span-7">
          <motion.div
            variants={line}
            custom={0}
            initial="hidden"
            animate="show"
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for backend internships & freelance
          </motion.div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.04] tracking-tight md:text-7xl">
            <motion.span variants={line} custom={1} initial="hidden" animate="show" className="block text-gradient">
              Building systems.
            </motion.span>
            <motion.span variants={line} custom={2} initial="hidden" animate="show" className="block">
              Securing <span className="text-accent-gradient italic">what matters.</span>
            </motion.span>
          </h1>

          <motion.p
            variants={line}
            custom={3}
            initial="hidden"
            animate="show"
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            I'm <span className="text-foreground">Shady</span>, a Computer Science student at
            Tanta University focused on backend engineering, API development, and
            cybersecurity. I enjoy turning complex problems into practical,
            well-structured solutions.
          </motion.p>

          <motion.div
            variants={line}
            custom={4}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              Explore My Work
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
            <div className="flex items-center gap-1">
              {[
                { icon: Github, href: profile.github, label: "GitHub" },
                { icon: Linkedin, href: profile.linkedin, label: "LinkedIn" },
                { icon: Mail, href: `mailto:${profile.email}`, label: "Email" },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  aria-label={s.label}
                  className="grid h-10 w-10 place-items-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-muted-foreground"
          >
            <span className="inline-flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" /> {profile.location}
            </span>
            <span className="hairline h-3 border-l" />
            <span className="font-mono">B.Sc. CS · 2023 – 2027</span>
            <span className="hairline hidden h-3 border-l sm:inline-block" />
            <span className="hidden font-mono sm:inline">GPA 3.1 / 4.0</span>
          </motion.div>
        </div>

        {/* Portrait */}
        <motion.div
          initial={reduceMotion ? { opacity: 0 } : { opacity: 0, clipPath: "inset(8% 8% 8% 8% round 1.5rem)", scale: 0.98 }}
          animate={reduceMotion ? { opacity: 1 } : { opacity: 1, clipPath: "inset(0% 0% 0% 0% round 1.5rem)", scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-hairline shadow-[var(--shadow-card)]">
              <img
                src={portrait}
                alt={`${profile.fullName} — Backend Developer`}
                className="h-full w-full object-cover"
                loading="eager"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/80 via-background/0 to-background/20" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <div className="glass flex items-center justify-between rounded-xl px-3 py-2 text-xs">
                  <div>
                    <p className="font-semibold">{profile.name}</p>
                    <p className="text-muted-foreground">{profile.role}</p>
                  </div>
                  <span className="rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    OPEN TO WORK
                  </span>
                </div>
              </div>
            </div>

            {/* floating stat chips */}
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 hidden md:block"
            >
              <div className="glass rounded-xl px-3 py-2 text-xs">
                <p className="font-mono text-muted-foreground">stack</p>
                <p className="font-semibold">Laravel · MySQL</p>
              </div>
            </motion.div>
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-24 hidden md:block"
            >
              <div className="glass rounded-xl px-3 py-2 text-xs">
                <p className="font-mono text-muted-foreground">focus</p>
                <p className="font-semibold">APIs · Security</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* scroll indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-foreground md:flex"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <motion.span
          animate={reduceMotion ? undefined : { y: [0, 5, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="h-3.5 w-3.5" />
        </motion.span>
      </motion.a>
    </section>
  );
}
