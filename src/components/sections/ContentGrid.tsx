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
    <section id="writing" className="py-24 md:py-32 bg-background">
      <div className="container px-6 md:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16">
            <div>
              <span className="text-primary font-medium text-sm uppercase tracking-wider mb-2 block">
                Latest Writing
              </span>
              <h2 className="font-display text-5xl md:text-6xl text-foreground">
                FRESH THOUGHTS
              </h2>
            </div>
            <p className="text-muted-foreground text-lg mt-4 md:mt-0 max-w-md">
              Essays, ideas, and experiments. No clickbait. No fluff. Just honest thinking.
            </p>
          </div>

          {/* Blog grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {posts.map((post, index) => (
              <article 
                key={post.id}
                className="group bg-card rounded-2xl p-6 md:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-transparent hover:border-primary/10"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category badge */}
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full mb-4">
                  {post.category}
                </span>
                
                {/* Title */}
                <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 group-hover:text-primary transition-colors leading-tight">
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
          <div className="text-center">
            <Button 
              variant="outline" 
              size="lg" 
              className="rounded-full px-8 group"
            >
              View all writing
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentGrid;