import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Download, User, Mic, Monitor, Cable, GlassWater, Heart, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Footer from "@/components/sections/Footer";
import ClientLogos from "@/components/sections/ClientLogos";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, breadcrumbSchema, pressItemListSchema } from "@/components/StructuredData";

import ferryPortrait from "@/assets/ferry-portrait.jpg";
import ferrySpeaking from "@/assets/ferry-speaking.jpg";
import ferrySpeakingAudience from "@/assets/ferry-speaking-audience.jpg";
import ferryPresenting from "@/assets/ferry-presenting.jpg";
import ferryKallenbach from "@/assets/ferry-kallenbach.jpg";
import ferryAcesDirect from "@/assets/ferry-aces-direct.png";
import ferrySpeaking3 from "@/assets/ferry-speaking-3.jpg";

const HEADSHOTS = [
  { src: ferryPortrait, label: "Portrait" },
  { src: ferrySpeaking, label: "Speaking" },
  { src: ferrySpeakingAudience, label: "On stage with audience" },
  { src: ferryPresenting, label: "Presenting" },
  { src: ferryKallenbach, label: "Portrait © Walter Kallenbach" },
  { src: ferryAcesDirect, label: "Speaking at Aces Direct" },
  { src: ferrySpeaking3, label: "Keynote with audience" },
];

const TOPICS = [
  "Brand Humanizing: using technology to make brands more human",
  "The Human Side of AI: what AI can and can't replace",
  "The Future of Work: combining AI and human judgment",
  "Digital transformation and customer experience",
  "Ethics and responsible use of technology",
];

const TOPICS_NL = [
  "Brand Humanizing: technologie inzetten om merken menselijker te maken",
  "De menselijke kant van AI: wat AI wel en niet kan vervangen",
  "De toekomst van werk: AI en menselijk oordeelsvermogen combineren",
  "Digitale transformatie en klantbeleving",
  "Ethiek en verantwoord gebruik van technologie",
];

const Press = () => {
  const [isDutch, setIsDutch] = useState(false);

  return (
    <>
      <SEOHead
        title="Press & Media Kit | Ferry Hoes | Keynote Speaker"
        description="Media resources for journalists and event organisers. Download bios, headshots, and speaking topics for Ferry Hoes, international keynote speaker on AI and Brand Humanizing."
        ogType="website"
        canonicalUrl="/press"
      />
      <StructuredData
        data={[
          personSchema,
          pressItemListSchema,
          breadcrumbSchema([
            { name: "Home", url: "https://ferryhoes.com" },
            { name: "Press", url: "https://ferryhoes.com/press" },
          ]),
        ]}
      />

      <main className="min-h-screen bg-background">
        {/* Header */}
        <section className="pt-32 pb-12 md:pt-40 md:pb-16">
          <div className="container px-6 md:px-8 max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              <User className="h-4 w-4" />
              Press & Media
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Media Kit
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Everything you need for articles, event programmes, and introductions.
            </p>
          </div>
        </section>

        {/* Bio */}
        <section className="pb-16">
          <div className="container px-6 md:px-8 max-w-3xl mx-auto space-y-10">
            {/* Language toggle */}
            <div className="flex items-center gap-3">
              <Label htmlFor="lang-toggle" className={`text-sm font-medium ${!isDutch ? 'text-foreground' : 'text-muted-foreground'}`}>EN</Label>
              <Switch id="lang-toggle" checked={isDutch} onCheckedChange={setIsDutch} />
              <Label htmlFor="lang-toggle" className={`text-sm font-medium ${isDutch ? 'text-foreground' : 'text-muted-foreground'}`}>NL</Label>
            </div>

            {!isDutch ? (
              <>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Short bio (50 words)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ferry Hoes is an international keynote speaker, author of <em>Brand Humanizing</em>, and founder of the Brand Humanizing Institute. He helps organisations use technology to become more human, not less. Ferry speaks at conferences and corporate events worldwide, blending storytelling with actionable insight.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Extended bio (150 words)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ferry Hoes spent over a decade at the intersection of technology, marketing, and human behaviour before stepping onto stages worldwide. In 2017, he coined the term <strong>Brand Humanizing</strong>, a framework for using technology to make brands more distinctive and human, and spent years stress-testing it with global organisations.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    He is the co-author of <em>Brand Humanizing</em> (with Jonathan Flores), founder of the Brand Humanizing Institute, and host of <em>The Human Era Podcast</em>. His talks are built around one provocation: technology should make you more human, not less.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ferry is exclusively represented by Speakers Academy and has spoken at events for organisations including ASR, Atos, Chubb, GSK, Vodafone, and the Dutch Ministry of Finance. He is one of the most booked speakers in the Netherlands.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Korte bio (50 woorden)</h2>
                  <p className="text-muted-foreground leading-relaxed">
                    Ferry Hoes is een internationaal keynote spreker, auteur van <em>Brand Humanizing</em> en oprichter van het Brand Humanizing Institute. Hij helpt organisaties technologie te gebruiken om menselijker te worden, niet minder. Ferry spreekt op conferenties en zakelijke evenementen wereldwijd en combineert storytelling met praktische inzichten.
                  </p>
                </div>
                <div>
                  <h2 className="font-display text-2xl font-bold text-foreground mb-4">Uitgebreide bio (150 woorden)</h2>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Ferry Hoes werkte ruim tien jaar op het snijvlak van technologie, marketing en menselijk gedrag voordat hij wereldwijd podia betrad. In 2017 introduceerde hij het concept <strong>Brand Humanizing</strong>, een raamwerk om technologie in te zetten zodat merken onderscheidender en menselijker worden. Hij heeft dit jarenlang getest en verfijnd bij internationale organisaties.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Hij is co-auteur van <em>Brand Humanizing</em> (met Jonathan Flores), oprichter van het Brand Humanizing Institute en host van <em>The Human Era Podcast</em>. Zijn presentaties draaien om één kerngedachte: technologie moet je menselijker maken, niet minder.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    Ferry wordt exclusief vertegenwoordigd door Speakers Academy en heeft gesproken bij evenementen van onder meer ASR, Atos, Chubb, GSK, Vodafone en het Ministerie van Financiën. Hij is een van de meest geboekte sprekers van Nederland.
                  </p>
                </div>
              </>
            )}
          </div>
        </section>

        {/* Headshots with download */}
        <section className="pb-16 bg-secondary/30 py-16">
          <div className="container px-6 md:px-8 max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">
              <Download className="inline h-5 w-5 mr-2 text-accent" />
              Headshots
            </h2>
            <p className="text-muted-foreground mb-8">Click to open full resolution, or use the download button.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {HEADSHOTS.map((img) => (
                <div key={img.label} className="group">
                  <a href={img.src} target="_blank" rel="noopener noreferrer">
                    <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow">
                      <img src={img.src} alt={`Ferry Hoes — ${img.label}`} loading="lazy" width={400} height={533} className="w-full h-full object-cover" />
                    </div>
                  </a>
                  <div className="flex items-center justify-between mt-2">
                    <p className="text-sm text-muted-foreground">{img.label}</p>
                    <a href={img.src} download={`ferry-hoes-${img.label.toLowerCase().replace(/\s+/g, "-")}.jpg`} className="text-xs text-accent hover:underline flex items-center gap-1">
                      <Download className="h-3 w-3" /> Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Logos */}
        <ClientLogos />

        {/* Topics */}
        <section className="py-16 bg-secondary/30">
          <div className="container px-6 md:px-8 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">
              {isDutch ? "Onderwerpen waar Ferry over spreekt" : "Topics Ferry speaks about"}
            </h2>
            <ul className="space-y-3">
              {(isDutch ? TOPICS_NL : TOPICS).map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Media Enquiries CTA */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container px-6 md:px-8 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              {isDutch ? "Media-aanvraag?" : "Media enquiry?"}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {isDutch
                ? "Voor interviews, quotes of evenementprogramma's, neem direct contact op. Ik streef ernaar alle persaanvragen binnen 1 werkdag te beantwoorden."
                : "For interviews, quotes, or event programme copy, get in touch directly. I aim to respond to all press enquiries within 1 business day."}
            </p>
            <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
              <Link to="/contact" state={{ from: "press" }}>
                {isDutch ? "Neem contact op" : "Contact Ferry"}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Press;
