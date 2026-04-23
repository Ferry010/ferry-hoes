import logoEindhoven from "@/assets/logos/eindhoven.png";
import logoChubb from "@/assets/logos/chubb.png";
import logoAma from "@/assets/logos/ama.webp";
import logoAtos from "@/assets/logos/atos.png";
import logoUwv from "@/assets/logos/uwv.png";
import logoMinfin from "@/assets/logos/minfin.png";
import logoAsr from "@/assets/logos/asr.png";
import logoGsk from "@/assets/logos/gsk.png";
import logoToshiba from "@/assets/logos/toshiba.png";
import logoVodafone from "@/assets/logos/vodafone.png";
import logoZiggo from "@/assets/logos/ziggo.png";
import logoUnilever from "@/assets/logos/unilever.png";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const logos = [
  { src: logoAtos, alt: "Atos" },
  { src: logoVodafone, alt: "Vodafone" },
  { src: logoUnilever, alt: "Unilever" },
  { src: logoGsk, alt: "GlaxoSmithKline" },
  { src: logoToshiba, alt: "Toshiba" },
  { src: logoAma, alt: "American Marketing Association" },
  { src: logoZiggo, alt: "Ziggo" },
  { src: logoChubb, alt: "Chubb Fire & Security" },
  { src: logoAsr, alt: "a.s.r." },
  { src: logoUwv, alt: "UWV" },
  { src: logoMinfin, alt: "Ministerie van Financiën" },
  { src: logoEindhoven, alt: "Gemeente Eindhoven" },
];

/**
 * Static, fully-visible grid of client logos.
 * Used on /on-stage where credibility outweighs motion.
 */
const ClientLogosGrid = () => {
  const revealRef = useScrollReveal();

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-6 md:px-8">
        <div ref={revealRef} className="scroll-reveal max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-muted-foreground/60 uppercase tracking-widest mb-10">
            I've had the pleasure to work with great brands like
          </p>

          <div className="bg-background-alt border border-border rounded-2xl p-6 md:p-10">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-x-6 gap-y-8 md:gap-x-8 md:gap-y-10">
              {logos.map((logo) => (
                <div
                  key={logo.alt}
                  className="flex items-center justify-center h-16 md:h-20"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain opacity-60 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>

          <p className="text-center mt-10">
            <a
              href="https://www.speakersacademy.com/en/request-a-quote/?speaker_id=153966"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-foreground/70 hover:text-primary underline underline-offset-4 decoration-primary/40 hover:decoration-primary transition-colors"
            >
              Want to join this list?
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientLogosGrid;
