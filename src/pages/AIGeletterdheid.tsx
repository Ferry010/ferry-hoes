import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import { Eyebrow, Period } from "@/components/HeadingDot";
import PillButton from "@/components/PillButton";
import StructuredData, { breadcrumbSchema } from "@/components/StructuredData";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const AIGA_URL = "https://aigeletterdheid.academy/";
const BH_URL = "https://brandhumanizing.com";
const PAGE_URL = "https://ferryhoes.com/ai-geletterdheid";

const faqs: { q: string; a: string }[] = [
  {
    q: "Wat is AI geletterdheid precies?",
    a: "AI geletterdheid is de vaardigheid om intelligent met AI te werken: begrijpen wat AI-systemen kunnen, waar ze structureel falen, wanneer hun uitkomst betrouwbaar is en wanneer menselijk oordeel doorslaggevend is. Het is geen technische skill voor IT, maar een competentie voor iedereen die in zijn of haar werk met AI in aanraking komt.",
  },
  {
    q: "Wanneer wordt AI geletterdheid wettelijk verplicht?",
    a: "De EU AI Act is op 1 augustus 2024 in werking getreden. Artikel 4 — dat aantoonbare AI geletterdheid eist van iedereen die met AI-systemen werkt — wordt gehandhaafd vanaf 2 augustus 2026. Vanaf die datum riskeren organisaties die het niet op orde hebben boetes die kunnen oplopen tot 35 miljoen euro of 7% van de wereldwijde jaaromzet.",
  },
  {
    q: "Wat zegt Artikel 4 van de EU AI-wet precies?",
    a: "Artikel 4 verplicht aanbieders én gebruikers van AI-systemen om te zorgen voor een voldoende niveau van AI geletterdheid bij hun personeel en bij iedereen die namens hen met AI werkt. De wet noemt geen exacte trainingsuren, maar eist dat het niveau passend is bij de context, de rol en de risico's van de gebruikte AI.",
  },
  {
    q: "Voor wie is de AIGA-training bedoeld?",
    a: "Voor elke medewerker die in zijn of haar werk AI-tools gebruikt of beslissingen neemt op basis van AI-output. Van marketing tot HR, van klantenservice tot directie. Niet alleen technische rollen. De training is ontwikkeld voor Nederlandse en Belgische organisaties; een Engelstalige versie is in ontwikkeling.",
  },
  {
    q: "Wat is het verschil tussen AIGA en het Brand Humanizing Institute?",
    a: "Het Brand Humanizing Institute ontwikkelt het strategische denkkader rond mens en technologie. AIGA — AI Geletterdheid Academy — is een samenwerking tussen het Brand Humanizing Institute en Speakers Academy, en vertaalt dat denkkader naar een gecertificeerde training die voldoet aan Artikel 4 van de EU AI Act.",
  },
  {
    q: "Hoe lang duurt de training en wat levert het op?",
    a: "De AIGA-training duurt 3 tot 4 uur, is volledig online te volgen en sluit af met een certificaat dat geldt als documentatie voor Artikel 4-naleving. Deelnemers krijgen begrip van hoe AI werkt en faalt, een kader om AI-uitkomsten te beoordelen, en een gedeelde taal binnen de organisatie over mens en technologie.",
  },
];

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "AIGA — AI Geletterdheid Training",
  description:
    "Gecertificeerde Nederlandstalige AI geletterdheid training die voldoet aan Artikel 4 van de EU AI Act. Een samenwerking tussen het Brand Humanizing Institute en Speakers Academy.",
  url: AIGA_URL,
  inLanguage: "nl",
  provider: {
    "@type": "Organization",
    name: "AIGA — AI Geletterdheid Academy",
    url: AIGA_URL,
    sameAs: [BH_URL, "https://www.speakersacademy.com"],
  },
  educationalCredentialAwarded:
    "AIGA-certificaat AI geletterdheid (EU AI Act Artikel 4)",
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "online",
    courseWorkload: "PT4H",
    inLanguage: "nl",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const breadcrumbs = breadcrumbSchema([
  { name: "Home", url: "https://ferryhoes.com/" },
  { name: "AI Geletterdheid", url: PAGE_URL },
]);

const AIGeletterdheid = () => {
  return (
    <>
      <SEOHead
        title="AI Geletterdheid — verplicht vanaf 2 augustus 2026"
        description="Vanaf 2 augustus 2026 verplicht de EU AI Act aantoonbare AI geletterdheid. De AIGA-training van Brand Humanizing Institute en Speakers Academy maakt jouw organisatie klaar."
        keywords={[
          "ai geletterdheid",
          "ai literacy",
          "eu ai act",
          "artikel 4",
          "aiga",
          "ai training nederlands",
          "ai certificaat",
          "brand humanizing",
          "speakers academy",
        ]}
        canonicalUrl="/ai-geletterdheid"
        ogType="article"
      />
      <Helmet>
        <html lang="nl" />
      </Helmet>
      <StructuredData data={[courseSchema, faqSchema, breadcrumbs]} />

      <main className="bg-background min-h-screen">
        {/* HERO */}
        <section className="pt-36 md:pt-44 pb-20 md:pb-28">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-4xl">
              <Eyebrow>EU AI Act · Artikel 4 · AIGA</Eyebrow>
              <h1
                className="font-display font-bold text-foreground leading-[1.02]"
                style={{ fontSize: "clamp(48px, 8vw, 128px)" }}
              >
                AI Geletterdheid<Period />
              </h1>
              <div className="mt-8 space-y-5 text-lg md:text-xl text-foreground/80 leading-[1.55] max-w-2xl">
                <p>
                  Vanaf <strong>2 augustus 2026</strong> zijn organisaties
                  wettelijk verplicht om te zorgen dat hun medewerkers
                  voldoende AI-geletterd zijn. Geen suggestie, geen
                  richtlijn — een eis met boetes tot 35 miljoen euro.
                </p>
                <p>
                  Maar echte AI geletterdheid is meer dan een
                  compliance-vinkje. Het is de vaardigheid om intelligent
                  met AI te werken: begrijpen wat het kan, wat het niet
                  kan, en wanneer jij onvervangbaar bent.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <PillButton
                  href={AIGA_URL}
                  target="_blank"
                  rel="noopener"
                  variant="primary"
                >
                  Start de AIGA-training
                </PillButton>
                <PillButton to="#faq" variant="ghost" arrow={false}>
                  Lees eerst de veelgestelde vragen
                </PillButton>
              </div>
            </div>
          </div>
        </section>

        {/* WAAROM NU */}
        <section className="bg-background-alt py-24 md:py-32 border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>Waarom nu</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                De EU AI-wet is geen ver-van-je-bed-show<Period />
              </h2>
              <div className="mt-8 space-y-5 text-lg text-foreground/80 leading-[1.6]">
                <p>
                  De Europese AI-wet trad in werking in augustus 2024.
                  Artikel 4 stelt uitdrukkelijk dat alle organisaties die
                  AI inzetten moeten zorgen voor aantoonbare AI
                  geletterdheid bij hun medewerkers. De handhaving van dit
                  artikel gaat in op <strong>2 augustus 2026</strong>.
                </p>
                <p>
                  Organisaties die dan niet kunnen aantonen dat hun mensen
                  voldoende AI-geletterd zijn, riskeren boetes die kunnen
                  oplopen tot <strong>35 miljoen euro</strong> of 7% van
                  de wereldwijde jaaromzet.
                </p>
                <p>
                  Dat betekent dat de deadline nu al dichtbij is. Wie
                  wacht op een kant-en-klare oplossing van buitenaf, staat
                  straks voor een korte tijdlijn om honderden of duizenden
                  medewerkers gecertificeerd te krijgen.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* WAT HET IS */}
        <section className="py-24 md:py-32">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>Wat het inhoudt</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                AI geletterdheid is geen technische vaardigheid<Period />
              </h2>
              <div className="mt-8 space-y-5 text-lg text-foreground/80 leading-[1.6]">
                <p>
                  De meest gemaakte fout is denken dat AI geletterdheid
                  een zaak is voor de IT-afdeling. Dat is het niet. AI
                  geletterdheid is een competentie voor iedereen die in
                  zijn of haar werk gebruikmaakt van AI-tools. En dat zijn
                  steeds meer mensen, in steeds meer functies.
                </p>
                <p>
                  Echte AI geletterdheid betekent dat medewerkers
                  begrijpen hoe AI-systemen werken en hoe ze kunnen falen.
                  Dat ze kunnen beoordelen wanneer een AI-uitkomst
                  betrouwbaar is en wanneer niet. Dat ze weten waar hun
                  eigen oordeel en ervaring doorslaggevend is. En dat ze
                  dit kunnen uitleggen aan collega's en klanten.
                </p>
                <p>
                  Dat is precies wat het Brand Humanizing framework al
                  jaren onderwijst: de combinatie van technologisch
                  begrip, kritisch denken en menselijk inzicht. AIGA
                  brengt dit samen in een gecertificeerde training die
                  voldoet aan de eisen van de EU AI-wet.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VIER VAARDIGHEDEN */}
        <section className="bg-background-alt py-24 md:py-32 border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>De vier vaardigheden</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                Het fundament van AI geletterdheid<Period />
              </h2>
              <p className="mt-6 text-lg text-foreground/80 leading-[1.6] max-w-2xl">
                De AIGA-training is gebouwd op het Brand Humanizing
                raamwerk: vier vaardigheden die bepalen of een
                professional effectief en verantwoord met AI kan werken.
              </p>
            </div>

            <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14 max-w-5xl">
              {[
                {
                  t: "Creativiteit & organisatiebewustzijn",
                  d: "Het vermogen om AI-toepassingen te beoordelen in de context van je organisatie: wat past bij onze doelen, onze cultuur, onze klanten?",
                },
                {
                  t: "Gedragswetenschappen & onderzoek",
                  d: "Begrijpen hoe mensen reageren op AI-gestuurde processen en wanneer menselijke interactie de uitkomst bepaalt.",
                },
                {
                  t: "Programmeren, automatisering & AI",
                  d: "Geen code schrijven, maar begrijpen hoe AI-systemen zijn opgebouwd, wat ze doen met data en waar ze structureel falen.",
                },
                {
                  t: "Emotionele intelligentie & ethiek",
                  d: "Het oordeel om te herkennen wanneer een AI-beslissing menselijk toezicht vereist — en de moed om dat ook te zeggen.",
                },
              ].map((p) => (
                <div key={p.t}>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    {p.t}
                    <Period />
                  </h3>
                  <p className="mt-3 text-foreground/75 leading-[1.6]">
                    {p.d}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* DE TRAINING */}
        <section className="py-24 md:py-32">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>De training</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                Wat medewerkers meenemen<Period />
              </h2>
              <p className="mt-8 text-lg text-foreground/80 leading-[1.6]">
                De AIGA-training duurt 3 tot 4 uur, is volledig online en
                sluit af met een certificaat dat geldt als documentatie
                voor EU AI Act Artikel 4-naleving.
              </p>

              <ul className="mt-8 space-y-4 text-lg text-foreground/85">
                {[
                  "Certificaat dat geldt als documentatie voor EU AI Act Artikel 4-naleving.",
                  "Echt begrip van hoe AI-systemen werken — en waar ze structureel falen.",
                  "Het vermogen om te beoordelen waar AI betrouwbaar is en waar niet.",
                  "Een gedeelde taal binnen jouw organisatie over mens en technologie.",
                ].map((t) => (
                  <li key={t} className="flex gap-3">
                    <span
                      className="mt-3 inline-block w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                      aria-hidden="true"
                    />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-10">
                <PillButton
                  href={AIGA_URL}
                  target="_blank"
                  rel="noopener"
                  variant="primary"
                >
                  Bekijk de training op aigeletterdheid.academy
                </PillButton>
              </div>
            </div>
          </div>
        </section>

        {/* SAMENWERKING */}
        <section className="bg-background-alt py-24 md:py-32 border-y border-border/60">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>De samenwerking</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                Brand Humanizing Institute × Speakers Academy<Period />
              </h2>
              <div className="mt-8 space-y-5 text-lg text-foreground/80 leading-[1.6]">
                <p>
                  AIGA — de{" "}
                  <a
                    href={AIGA_URL}
                    target="_blank"
                    rel="noopener"
                    className="underline decoration-primary underline-offset-4 hover:text-foreground"
                  >
                    AI Geletterdheid Academy
                  </a>{" "}
                  — is een samenwerking tussen het Brand Humanizing
                  Institute en Speakers Academy. Brand Humanizing
                  ontwikkelt al jaren de strategische kaders voor
                  organisaties die menselijke en technologische krachten
                  willen combineren. Speakers Academy heeft jarenlange
                  ervaring in het trainen van professionals in
                  communicatie en presentatie.
                </p>
                <p>
                  Die combinatie is niet toevallig. AI geletterdheid
                  vereist zowel inhoudelijke diepte als de didactische
                  kwaliteit om het begrijpelijk over te brengen aan mensen
                  die geen technici zijn. AIGA brengt beide samen in een
                  training die inhoudelijk robuust is — en die mensen ook
                  echt iets leert.
                </p>
                <p>
                  Als oprichter van het Brand Humanizing Institute en
                  internationaal keynote spreker over AI en de menselijke
                  maat ben ik nauw betrokken bij AIGA.{" "}
                  <Link
                    to="/my-story"
                    className="underline decoration-primary underline-offset-4 hover:text-foreground"
                  >
                    Meer over mijn verhaal
                  </Link>
                  .
                </p>
                <p>
                  De training is ontwikkeld in het Nederlands en
                  momenteel beschikbaar voor Nederlandse en Belgische
                  organisaties. Een Engelstalige versie is in
                  ontwikkeling.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap gap-3">
                <PillButton
                  href={AIGA_URL}
                  target="_blank"
                  rel="noopener"
                  variant="primary"
                >
                  Bezoek aigeletterdheid.academy
                </PillButton>
                <PillButton
                  href={BH_URL}
                  target="_blank"
                  rel="noopener"
                  variant="ghost"
                >
                  Over Brand Humanizing Institute
                </PillButton>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-32">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow>FAQ</Eyebrow>
              <h2
                className="font-display font-bold text-foreground leading-[1.04]"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                Veelgestelde vragen over AI geletterdheid<Period />
              </h2>

              <Accordion type="single" collapsible className="mt-10">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-border"
                  >
                    <AccordionTrigger className="text-left text-lg md:text-xl font-display font-semibold text-foreground hover:no-underline py-6">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-foreground/80 text-base md:text-lg leading-[1.65] pb-6">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* SLOT CTA */}
        <section className="bg-foreground text-background py-24 md:py-32">
          <div className="container max-w-[1280px] px-6 md:px-10 lg:px-14">
            <div className="max-w-3xl">
              <Eyebrow light>Klaar om te beginnen</Eyebrow>
              <h2
                className="font-display font-bold leading-[1.02]"
                style={{ fontSize: "clamp(40px, 6vw, 88px)" }}
              >
                De deadline is 2 augustus 2026<Period />
              </h2>
              <p className="mt-6 text-lg md:text-xl text-background/80 leading-[1.55] max-w-2xl">
                De AIGA-training is nu beschikbaar. Bereid jouw
                organisatie voor — voordat de korte tijdlijn dat voor je
                doet.
              </p>
              <div className="mt-10">
                <a
                  href={AIGA_URL}
                  target="_blank"
                  rel="noopener"
                  className="inline-flex items-center gap-2 rounded-full font-semibold text-[15px] px-6 py-3 bg-primary text-primary-foreground hover:brightness-95 transition-all"
                >
                  Start op aigeletterdheid.academy →
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AIGeletterdheid;
