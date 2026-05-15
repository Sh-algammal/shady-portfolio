import { motion } from "motion/react";
import { ArrowUpRight, Download, Mail, MapPin } from "lucide-react";
import portrait from "@/assets/portrait.jpg";
import { profile } from "./data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32">
      <div className="absolute inset-0 -z-10 grid-bg" />
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 px-5 md:grid-cols-12">
        {/* Copy */}
        <div className="md:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-xs text-muted-foreground"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
            </span>
            Available for backend internships & freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl"
          >
            <span className="text-gradient">Backend engineer</span>
            <br />
            shipping <span className="text-accent-gradient italic">reliable</span> systems.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg"
          >
            I'm <span className="text-foreground">{profile.fullName}</span> — a Computer Science
            student at Tanta University focused on Laravel, PHP, REST APIs and relational
            databases, with growing depth in cybersecurity and AI integrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="#work"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:-translate-y-0.5"
            >
              View Projects
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              <Mail className="h-4 w-4" /> Contact me
            </a>
            <a
              href={profile.cv}
              download
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" /> Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
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
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="relative md:col-span-5"
        >
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl" />
            <div className="relative h-full w-full overflow-hidden rounded-[1.5rem] border border-hairline shadow-[var(--shadow-card)]">
              <img
                src={portrait}
                alt={`${profile.fullName} — Backend Engineer`}
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
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-6 top-10 hidden md:block"
            >
              <div className="glass rounded-xl px-3 py-2 text-xs">
                <p className="font-mono text-muted-foreground">stack</p>
                <p className="font-semibold">Laravel · MySQL</p>
              </div>
            </motion.div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 bottom-24 hidden md:block"
            >
              <div className="glass rounded-xl px-3 py-2 text-xs">
                <p className="font-mono text-muted-foreground">focus</p>
                <p className="font-semibold">REST · Auth · Data</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
