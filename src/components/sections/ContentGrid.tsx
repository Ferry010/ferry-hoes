import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Placeholder blog posts
const posts = [
  {
    id: 1,
    title: "Why We're Building AI Wrong (And How to Fix It)",
    excerpt: "Most companies are treating AI as a replacement for humans. Here's why that's the wrong approach entirely.",
    category: "Technology",
    readTime: "6 min read",
    date: "Jan 28, 2026",
  },
  {
    id: 2,
    title: "The Future of Work Isn't Remote—It's Human",
    excerpt: "We've been so focused on where we work, we forgot to ask how we work. Let's change that.",
    category: "Work",
    readTime: "4 min read",
    date: "Jan 21, 2026",
  },
  {
    id: 3,
    title: "What Playing Jazz Taught Me About Leadership",
    excerpt: "Improvisation, listening, and knowing when to solo. Lessons from the stage for the boardroom.",
    category: "Leadership",
    readTime: "5 min read",
    date: "Jan 14, 2026",
  },
  {
    id: 4,
    title: "The Quiet Revolution in How We Connect",
    excerpt: "Social media promised connection but delivered performance. What comes next?",
    category: "Culture",
    readTime: "7 min read",
    date: "Jan 7, 2026",
  },
  {
    id: 5,
    title: "Stop Optimizing. Start Exploring.",
    excerpt: "Efficiency is killing creativity. Here's my case for strategic wandering.",
    category: "Creativity",
    readTime: "3 min read",
    date: "Dec 28, 2025",
  },
  {
    id: 6,
    title: "A Letter to My Younger Self About Technology",
    excerpt: "What I wish I knew about screens, attention, and what really matters.",
    category: "Personal",
    readTime: "8 min read",
    date: "Dec 21, 2025",
  },
];

const ContentGrid = () => {
  return (
    <section id="writing" className="py-24 md:py-32 bg-secondary/90 backdrop-blur-sm">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <h2 className="font-display text-5xl md:text-6xl text-foreground font-bold">
                What I'm <span className="text-primary">thinking about</span>
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mt-4 md:mt-0 max-w-md">
              Essays, ideas, and experiments. No clickbait. No fluff.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {posts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-background rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-accent/20"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-secondary text-primary text-xs font-medium rounded-full mb-4">
                  {post.category}
                </span>
                
                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-accent transition-colors leading-tight font-semibold">
                  {post.title}
                </h3>
                
                {/* Excerpt */}
                <p className="text-muted-foreground text-sm md:text-base mb-4 leading-relaxed">
                  {post.excerpt}
                </p>
                
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>{post.date}</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-16">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 group border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              View all writing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Inline conversation prompt */}
          <div className="max-w-xl mx-auto">
            <div className="bg-background rounded-2xl p-6 md:p-8 border border-border shadow-soft text-center">
              <p className="text-muted-foreground mb-4">
                Something on your mind about this?
              </p>
              <button
                onClick={() => {
                  const bubble = document.querySelector('[aria-label="Open message panel"]') as HTMLButtonElement;
                  bubble?.click();
                }}
                className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors group"
              >
                <span className="underline underline-offset-4">Drop a thought</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;
