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

const logos = [
  { src: logoAtos, alt: "Atos", className: "max-h-12 max-w-[160px]" },
  { src: logoVodafone, alt: "Vodafone", className: "max-h-12 max-w-[180px]" },
  { src: logoGsk, alt: "GlaxoSmithKline", className: "max-h-14 max-w-[180px]" },
  { src: logoToshiba, alt: "Toshiba", className: "max-h-12 max-w-[170px]" },
  { src: logoAma, alt: "American Marketing Association", className: "max-h-12 max-w-[180px]" },
  { src: logoZiggo, alt: "Ziggo", className: "max-h-12 max-w-[180px]" },
  { src: logoChubb, alt: "Chubb Fire & Security", className: "max-h-12 max-w-[160px]" },
  { src: logoAsr, alt: "a.s.r.", className: "max-h-16 max-w-[160px]" },
  { src: logoUwv, alt: "UWV", className: "max-h-14 max-w-[160px]" },
  { src: logoMinfin, alt: "Ministerie van Financiën", className: "max-h-16 max-w-[140px]" },
  { src: logoEindhoven, alt: "Gemeente Eindhoven", className: "max-h-16 max-w-[140px]" },
];

const ClientLogos = () => {
  const logoSet = logos.map((logo) => (
    <div
      key={logo.alt}
      className="flex-shrink-0 flex items-center justify-center px-8"
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className={`object-contain opacity-50 grayscale transition-all duration-300 ${logo.className}`}
      />
    </div>
  ));

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          <p className="text-center text-sm font-medium text-muted-foreground/60 uppercase tracking-widest mb-10">
            Trusted by organizations like
          </p>
          <div className="overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-4">
              {logoSet}
              {logos.map((logo) => (
                <div
                  key={`dup-${logo.alt}`}
                  className="flex-shrink-0 flex items-center justify-center px-8"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className={`object-contain opacity-50 grayscale transition-all duration-300 ${logo.className}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;
