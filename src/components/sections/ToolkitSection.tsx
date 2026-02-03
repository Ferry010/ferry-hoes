import { Brain, Wrench, Heart } from "lucide-react";

const toolkitCategories = [
  {
    icon: Brain,
    title: "For thinking",
    subtitle: "How I process ideas",
    items: [
      { name: "Obsidian", note: "Where all my notes live" },
      { name: "Morning pages", note: "3 pages, every day, no exceptions" },
      { name: "Long walks", note: "My best ideas happen at 6km/h" },
      { name: "Four Thousand Weeks", note: "Changed how I see time" },
    ],
  },
  {
    icon: Wrench,
    title: "For creating",
    subtitle: "What I use to make things",
    items: [
      { name: "Notion", note: "Project management chaos" },
      { name: "Figma", note: "For talks and visual thinking" },
      { name: "Descript", note: "Podcast editing magic" },
      { name: "A good pen", note: "Lamy Safari, always" },
    ],
  },
  {
    icon: Heart,
    title: "For staying sane",
    subtitle: "Non-negotiable rituals",
    items: [
      { name: "No phone before 9am", note: "Changed everything" },
      { name: "Jazz vinyl", note: "Focus music of choice" },
      { name: "Weekly phone-free walks", note: "2 hours minimum" },
      { name: "Monthly 'unthing' days", note: "No agenda, no goals" },
    ],
  },
];

const ToolkitSection = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12 md:mb-16">
            <span className="text-primary font-medium text-sm mb-2 block">
              The toolkit
            </span>
            <h2 className="font-display text-5xl md:text-6xl text-foreground mb-4 font-bold">
              Things I <span className="text-accent font-handwriting">actually use</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              No affiliate links. No sponsorships. Just honest recommendations 
              from someone who's tried way too many productivity systems.
            </p>
          </div>

          {/* Toolkit grid */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {toolkitCategories.map((category) => (
              <div
                key={category.title}
                className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-soft hover:shadow-soft-lg transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="h-6 w-6 text-accent" />
                  </div>
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  {category.subtitle}
                </p>
                
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="group/item">
                      <div className="font-medium text-foreground group-hover/item:text-accent transition-colors">
                        {item.name}
                      </div>
                      <div className="text-xs text-muted-foreground font-handwriting">
                        {item.note}
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Personal note */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground text-sm font-handwriting">
              "I've realized that the tools matter less than the consistency. 
              Pick something and stick with it." — Ferry
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
