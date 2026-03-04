import { Link } from "react-router-dom";
import { ArrowRight, Download, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/blog/SEOHead";
import StructuredData, { personSchema, breadcrumbSchema } from "@/components/StructuredData";

import ferryPortrait from "@/assets/ferry-portrait.jpg";
import ferrySpeaking from "@/assets/ferry-speaking.jpg";
import ferrySpeakingAudience from "@/assets/ferry-speaking-audience.jpg";
import ferryPresenting from "@/assets/ferry-presenting.jpg";

const HEADSHOTS = [
  { src: ferryPortrait, label: "Portrait" },
  { src: ferrySpeaking, label: "Speaking" },
  { src: ferrySpeakingAudience, label: "On stage with audience" },
  { src: ferryPresenting, label: "Presenting" },
];

const TOPICS = [
  "Brand Humanizing: using technology to make brands more human",
  "The Human Side of AI: what AI can and can't replace",
  "The Future of Work: combining AI and human judgment",
  "Digital transformation and customer experience",
  "Ethics and responsible use of technology",
];

const Press = () => {
  return (
    <>
      <SEOHead
        title="Press & Media Kit | Ferry Hoes"
        description="Official bio, high-resolution headshots, and speaking topics for Ferry Hoes. For press and media enquiries."
        ogType="website"
        canonicalUrl="/press"
      />
      <StructuredData
        data={[
          personSchema,
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
          </div>
        </section>

        {/* Headshots */}
        <section className="pb-16 bg-secondary/30 py-16">
          <div className="container px-6 md:px-8 max-w-5xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">
              <Download className="inline h-5 w-5 mr-2 text-accent" />
              Headshots
            </h2>
            <p className="text-muted-foreground mb-8">Right-click and save, or open in a new tab for full resolution.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {HEADSHOTS.map((img) => (
                <a key={img.label} href={img.src} target="_blank" rel="noopener noreferrer" className="group">
                  <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-sm group-hover:shadow-lg transition-shadow">
                    <img src={img.src} alt={`Ferry Hoes — ${img.label}`} className="w-full h-full object-cover" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-2 text-center">{img.label}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Topics */}
        <section className="py-16">
          <div className="container px-6 md:px-8 max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-foreground mb-6">Topics Ferry speaks about</h2>
            <ul className="space-y-3">
              {TOPICS.map((topic) => (
                <li key={topic} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-1.5 h-2 w-2 rounded-full bg-accent shrink-0" />
                  {topic}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 md:py-24 bg-foreground text-background">
          <div className="container px-6 md:px-8 max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Media enquiry?</h2>
            <p className="text-white/70 text-lg mb-8">
              For interviews, quotes, or event programme copy — get in touch directly.
            </p>
            <Button asChild size="lg" className="rounded-full px-8 bg-accent text-accent-foreground hover:bg-accent/90 group">
              <Link to="/contact" state={{ from: "press" }}>
                Contact Ferry
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
