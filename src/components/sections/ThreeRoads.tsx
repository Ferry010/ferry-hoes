import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Eyebrow, Period } from "@/components/HeadingDot";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import ferryPortrait from "@/assets/ferry-portrait.jpg";
import ferryOnStage from "@/assets/ferry-on-stage.jpg";
import ferryWithBook from "@/assets/ferry-bookstore.jpg";

const roads = [
  {
    tag: "The Human",
    title: "My story.",
    body:
      "How a talkative kid from Delft ended up coining Brand Humanizing. The long version.",
    cta: "Read the story",
    to: "/my-story",
    image: ferryPortrait,
    alt: "Portrait of Ferry Hoes",
    bg: "bg-[#F4E9DC]",
    objectPos: "center 25%",
  },
  {
    tag: "The Speaker",
    title: "On stage.",
    body:
      "Around 40 keynotes a year. Boards, leadership teams, anyone trying to figure out what \u201Chuman\u201D means in a tech-heavy world.",
    cta: "See talks & reel",
    to: "/on-stage",
    image: ferryOnStage,
    alt: "Ferry Hoes mid-keynote",
    bg: "bg-[#F9DCD0]",
    objectPos: "center 30%",
  },
  {
    tag: "The Writer",
    title: "My writing.",
    body:
      "Short essays on humans, technology, and the work in between. New when there's something worth saying.",
    cta: "Read essays",
    to: "/writing",
    image: bookCover,
    alt: "Brand Humanizing book cover",
    bg: "bg-ink-navy",
    objectPos: "center center",
    dark: true,
  },
];

/**
 * Three Roads — homepage router. Three editorial cards directing visitors
 * to the right path: My Story, On Stage, My Writing.
 */
const ThreeRoads = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background py-20 md:py-28">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mb-14 md:mb-16">
          <Eyebrow>Ways in</Eyebrow>

          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(36px, 5.4vw, 80px)" }}
          >
            Three ways to plug{" "}
            <span className="text-primary">in</span>
            <Period />
          </h2>

          <p className="mt-7 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
            You'll find me on stage, on paper, and on the page. Pick your
            entry.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-7">
          {roads.map((road) => (
            <Link
              key={road.title}
              to={road.to}
              className={`group ${road.bg} border border-border/40 rounded-2xl p-5 md:p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg flex flex-col`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-xl mb-5 bg-muted">
                <img
                  src={road.image}
                  alt={road.alt}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  style={{ objectPosition: road.objectPos }}
                />
              </div>

              <span className={`text-[11px] uppercase tracking-[0.16em] font-semibold ${road.dark ? "text-primary" : "text-primary"}`}>
                • {road.tag}
              </span>
              <h3 className={`mt-3 font-display text-2xl md:text-[26px] font-bold leading-tight ${road.dark ? "text-background" : "text-foreground"}`}>
                {road.title}
              </h3>
              <p className={`mt-3 leading-relaxed flex-1 ${road.dark ? "text-background/80" : "text-foreground/75"}`}>
                {road.body}
              </p>

              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                {road.cta}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThreeRoads;
