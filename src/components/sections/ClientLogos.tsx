import logoEindhoven from "@/assets/logos/eindhoven.png";
import logoChubb from "@/assets/logos/chubb.png";
import logoAma from "@/assets/logos/ama.webp";
import logoAtos from "@/assets/logos/atos.png";
import logoUwv from "@/assets/logos/uwv.png";
import logoMinfin from "@/assets/logos/minfin.png";
import logoAsr from "@/assets/logos/asr.png";
import logoGsk from "@/assets/logos/gsk.png";
import logoToshiba from "@/assets/logos/toshiba.png";
import logoVodafoneZiggo from "@/assets/logos/vodafoneziggo.png";

const logos = [
  { src: logoAtos, alt: "Atos", className: "max-h-10 max-w-[140px]" },
  { src: logoGsk, alt: "GlaxoSmithKline", className: "max-h-12 max-w-[160px]" },
  { src: logoToshiba, alt: "Toshiba", className: "max-h-10 max-w-[150px]" },
  { src: logoAma, alt: "American Marketing Association", className: "max-h-10 max-w-[160px]" },
  { src: logoVodafoneZiggo, alt: "VodafoneZiggo", className: "max-h-10 max-w-[170px]" },
  { src: logoChubb, alt: "Chubb Fire & Security", className: "max-h-10 max-w-[140px]" },
  { src: logoAsr, alt: "a.s.r.", className: "max-h-14 max-w-[140px]" },
  { src: logoUwv, alt: "UWV", className: "max-h-12 max-w-[140px]" },
  { src: logoMinfin, alt: "Ministerie van Financiën", className: "max-h-14 max-w-[120px]" },
  { src: logoEindhoven, alt: "Gemeente Eindhoven", className: "max-h-14 max-w-[120px]" },
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
                  className={`object-contain opacity-50 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0 ${logo.className}`}
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
