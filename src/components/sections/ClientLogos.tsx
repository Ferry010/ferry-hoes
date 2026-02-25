import logoEindhoven from "@/assets/logos/eindhoven.png";
import logoChubb from "@/assets/logos/chubb.png";
import logoAma from "@/assets/logos/ama.webp";
import logoAtos from "@/assets/logos/atos.png";
import logoErasmus from "@/assets/logos/erasmus.png";
import logoMinfin from "@/assets/logos/minfin.png";
import logoAsr from "@/assets/logos/asr.png";
import logoGsk from "@/assets/logos/gsk.png";
import logoToshiba from "@/assets/logos/toshiba.png";
import logoVodafoneZiggo from "@/assets/logos/vodafoneziggo.png";

const logos = [
  { src: logoAtos, alt: "Atos" },
  { src: logoGsk, alt: "GlaxoSmithKline" },
  { src: logoToshiba, alt: "Toshiba" },
  { src: logoAma, alt: "American Marketing Association" },
  { src: logoVodafoneZiggo, alt: "VodafoneZiggo" },
  { src: logoChubb, alt: "Chubb Fire & Security" },
  { src: logoAsr, alt: "a.s.r." },
  { src: logoErasmus, alt: "Erasmus Universiteit Rotterdam" },
  { src: logoMinfin, alt: "Ministerie van Financiën" },
  { src: logoEindhoven, alt: "Gemeente Eindhoven" },
];

const ClientLogos = () => {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-muted-foreground/60 uppercase tracking-widest mb-10">
            Trusted by organizations like
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12 items-center justify-items-center">
            {logos.map((logo) => (
              <div
                key={logo.alt}
                className="flex items-center justify-center h-12 w-full"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="max-h-10 max-w-[140px] object-contain opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
