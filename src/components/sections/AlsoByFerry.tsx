import { ArrowUpRight } from "lucide-react";
import { Eyebrow, Period } from "@/components/HeadingDot";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const cards = [
  {
    name: "Brand Humanizing Institute",
    blurb:
      "Advisory, method, and research for organisations that want to use technology to become more human.",
    href: "https://brandhumanizing.com",
    bg: "bg-ink-navy",
    text: "text-ink-navy-foreground",
    accent: "text-primary",
  },
  {
    name: "AIGA, AI Geletterdheid Academy",
    blurb:
      "The #1 AI literacy training for Dutch organisations. AI Act-compliant.",
    href: "https://aigeletterdheid.academy",
    bg: "bg-[#3B1F6B]",
    text: "text-white",
    accent: "text-[#FFB84D]",
  },
];

const AlsoByFerry = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="bg-background-alt py-20 md:py-28">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <div ref={revealRef} className="scroll-reveal max-w-3xl mb-12 md:mb-16">
          <Eyebrow>Also by Ferry</Eyebrow>
          <h2
            className="font-display font-bold text-foreground leading-[1.02]"
            style={{ fontSize: "clamp(36px, 5.5vw, 80px)" }}
          >
            The work behind the keynotes<Period />
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-5 md:gap-8">
          {cards.map((card) => (
            <a
              key={card.href}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative overflow-hidden rounded-2xl p-8 md:p-10 ${card.bg} ${card.text} transition-transform duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-start justify-between gap-4 mb-8">
                <span
                  className={`text-[11px] uppercase tracking-[0.16em] font-semibold ${card.accent}`}
                >
                  • Visit site
                </span>
                <ArrowUpRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
              </div>
              <h3
                className="font-display font-bold leading-[1.05] mb-5"
                style={{ fontSize: "clamp(28px, 3.5vw, 44px)" }}
              >
                {card.name}
              </h3>
              <p className="text-base md:text-lg opacity-80 max-w-md leading-relaxed">
                {card.blurb}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlsoByFerry;
