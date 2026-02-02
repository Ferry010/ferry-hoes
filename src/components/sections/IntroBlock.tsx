const IntroBlock = () => {
  return (
    <section className="py-24 md:py-32 bg-warm-grey">
      <div className="container px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Organic layout with offset elements */}
          <div className="relative">
            {/* Decorative element */}
            <div className="absolute -top-8 -left-4 w-16 h-16 bg-primary/10 rounded-full blur-xl" />
            
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground mb-8">
              THIS IS MY HOME BASE.
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
                {/* Playful visual element */}
                <div className="aspect-square max-w-xs mx-auto md:ml-auto bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl flex items-center justify-center p-8 rotate-3 hover:rotate-0 transition-transform duration-500">
                  <div className="text-center">
                    <div className="font-display text-6xl text-primary mb-2">💡</div>
                    <p className="text-sm text-muted-foreground font-medium">
                      Ideas brewing daily
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