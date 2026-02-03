import { Calendar, BookOpen, Lightbulb, Camera } from "lucide-react";

const nowItems = [
  {
    icon: Calendar,
    title: "Working on",
    items: [
      "Finishing the manuscript for my second book",
      "Building a new workshop format for leadership teams",
      "Recording season 3 of the podcast",
    ],
  },
  {
    icon: BookOpen,
    title: "Reading & watching",
    items: [
      "'Four Thousand Weeks' by Oliver Burkeman",
      "Re-watching The Social Dilemma with fresh eyes",
      "Anything by Esther Perel",
    ],
  },
  {
    icon: Lightbulb,
    title: "Excited about",
    items: [
      "How AI is changing creative workflows (for better AND worse)",
      "The resurgence of in-person events",
      "New research on attention and deep work",
    ],
  },
];

const NowSection = () => {
  return (
    <section className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm mb-2 block">
              Right now
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4 font-bold">
              What I'm <span className="text-accent font-handwriting">up to</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl">
              A real-time glimpse into my world. Updated whenever something changes.
              <span className="text-xs text-muted-foreground/60 ml-2">(Last updated: Jan 2026)</span>
            </p>
          </div>

          {/* Now grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
            {nowItems.map((section) => (
              <div
                key={section.title}
                className="bg-card rounded-2xl p-6 md:p-8 border border-border shadow-soft hover:shadow-soft-lg transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="text-accent mt-1.5">•</span>
                      <span className="text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Behind the scenes */}
          <div className="bg-gradient-to-br from-accent/10 to-primary/5 rounded-3xl p-8 md:p-12 border border-border">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-4">
                  <Camera className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium text-accent">Behind the scenes</span>
                </div>
                <p className="text-lg text-foreground leading-relaxed mb-2">
                  "Most of my best ideas come from conversations that start with 'this might sound crazy, but...' 
                  That's why I built this space—to have more of those."
                </p>
                <p className="text-sm text-muted-foreground font-handwriting">— Ferry, from my studio in Amsterdam</p>
              </div>
              <div className="w-32 h-32 bg-gradient-to-br from-accent/30 to-primary/20 rounded-2xl flex items-center justify-center text-5xl rotate-3">
                🎙️
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NowSection;
