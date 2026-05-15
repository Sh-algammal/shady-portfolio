import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#certifications", label: "Certs" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a
          href="#top"
          className={`flex items-center gap-2 rounded-full px-3 py-1.5 transition-all ${
            scrolled ? "glass" : ""
          }`}
        >
          <span className="grid h-6 w-6 place-items-center rounded-md bg-primary text-[11px] font-bold text-primary-foreground">
            S
          </span>
          <span className="font-display text-sm font-semibold tracking-tight">
            Shady<span className="text-primary">.</span>
          </span>
        </a>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm md:flex ${
            scrolled ? "glass" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="rounded-full bg-foreground px-4 py-2 text-xs font-semibold text-background transition-transform hover:-translate-y-0.5"
        >
          Hire me
        </a>
      </div>
    </header>
  );
}
