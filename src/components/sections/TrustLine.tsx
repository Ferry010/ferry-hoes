import RuleLine from "@/components/RuleLine";

const LOGOS = [
  "Vodafone",
  "GSK",
  "Toshiba",
  "Atos",
  "ASR",
  "Chubb",
  "Ministry of Finance",
];

const TrustLine = () => {
  return (
    <section className="bg-background py-10 md:py-14">
      <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
        <RuleLine />
        <p className="text-center text-[13px] text-foreground/55 tracking-tight mt-8 mb-6">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {LOGOS.map((name) => (
            <span
              key={name}
              className="font-display text-foreground/65 text-base md:text-[17px] tracking-tight"
              style={{ fontWeight: 500 }}
            >
              {name}
            </span>
          ))}
        </div>
        <RuleLine className="mt-8" />
      </div>
    </section>
  );
};

export default TrustLine;
