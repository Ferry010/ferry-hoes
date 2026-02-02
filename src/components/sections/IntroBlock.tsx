const IntroBlock = () => {
  return (
    <section className="py-24 md:py-32 bg-card">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Organic layout with offset elements */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-8 -left-4 w-16 h-16 bg-accent/10 rounded-full blur-xl" />
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              THIS IS MY <span className="text-accent">HOME BASE.</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Not a funnel. Not a sales page. Just a place where I think out loud, 
                  share what I'm learning, and connect with people who care about the same things.
                </p>
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                  Consider it a creative lab. A digital campfire. A space for real conversations 
                  about how we can build a better relationship between humans and technology.
                </p>
              </div>
              
              <div className="relative">
                {/* Playful visual element - heart icon with pixels */}
                <div className="aspect-square max-w-xs mx-auto md:ml-auto bg-gradient-to-br from-accent/20 to-primary/10 rounded-3xl flex items-center justify-center p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center relative">
                    <div className="text-7xl mb-2">❤️</div>
                    {/* Pixel decorations */}
                    <div className="absolute top-0 right-0 w-3 h-3 bg-primary rounded-sm" />
                    <div className="absolute top-4 right-4 w-2 h-2 bg-primary/70 rounded-sm" />
                    <div className="absolute top-2 right-8 w-2 h-2 bg-primary/50 rounded-sm" />
                    <p className="text-sm text-muted-foreground font-medium">
                      Where human meets digital
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