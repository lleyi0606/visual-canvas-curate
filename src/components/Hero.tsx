const Hero = () => {
  return (
    <section id="home" className="h-screen flex items-center justify-center pt-16">
      <div className="text-center fade-in-up">
        <p className="text-sm uppercase tracking-wider text-accent mb-4">
          Based in San Francisco
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-bold leading-none uppercase tracking-tight">
          Hey! I'm Alex Chen
          <br />
          <span className="text-muted-foreground">Visual Artist</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;