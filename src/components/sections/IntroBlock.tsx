const IntroBlock = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Clean layout */}
          <div className="relative">
            {/* Subtle decorative element */}
            <div className="absolute -top-8 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8 font-bold">
              Welcome to my <span className="text-accent font-handwriting">corner</span> of the internet.
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  This isn't a funnel. Not a sales page. It's where I think out loud, 
                  share what I'm learning, and connect with people who care about the same things I do.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Consider it a creative lab. A digital campfire. A space for real conversations 
                  about building a better relationship between humans and technology.
                </p>
                <p className="text-base text-muted-foreground/80 font-handwriting">
                  (Also, I overshare about coffee and jazz. Fair warning.)
                </p>
              </div>
              
              <div className="relative">
                {/* Clean visual element */}
                <div className="aspect-square max-w-xs mx-auto md:ml-auto bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl flex items-center justify-center p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="text-7xl mb-2">☕</div>
                    <p className="text-sm text-muted-foreground font-medium font-handwriting">
                      Pull up a chair
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroBlock;
