import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Work } from "@/components/portfolio/Work";
import { Experience } from "@/components/portfolio/Experience";
import { Certifications } from "@/components/portfolio/Certifications";
import { Contact } from "@/components/portfolio/Contact";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shady Algammal — Backend Engineer & CS Student" },
      {
        name: "description",
        content:
          "Backend-focused Computer Science student building reliable APIs and scalable systems with Laravel, PHP, MySQL — with depth in cybersecurity foundations and AI integration.",
      },
      { property: "og:title", content: "Shady Algammal — Backend Engineer" },
      {
        property: "og:description",
        content:
          "Laravel · PHP · REST APIs · MySQL. Featured projects, certifications and contact for Shady Ashraf Algammal.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Experience />
      <Certifications />
      <Contact />
    </main>
  );
}
