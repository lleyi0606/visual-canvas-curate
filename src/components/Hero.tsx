const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="fade-in-up">
          <p className="text-sm uppercase tracking-wider text-accent mb-4">
            Based in San Francisco
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 text-balance leading-tight">
            Hey! I'm Alex Chen
            <br />
            <span className="text-muted-foreground">Visual Artist</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance">
            Creating visual narratives through photography, digital art, and design.
            Each project tells a unique story through light, composition, and emotion.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="#works" 
              className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-sm hover:bg-primary/90 transition-colors"
            >
              View Selected Works
            </a>
            <a 
              href="#contact" 
              className="inline-block border border-border px-8 py-3 rounded-sm hover:bg-muted transition-colors"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;