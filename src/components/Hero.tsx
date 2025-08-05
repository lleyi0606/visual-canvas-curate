const Hero = () => {
  return (
    <section id="home" className="h-[35vh] sm:h-[45vh] md:h-[50vh] flex items-center justify-center pt-12 sm:pt-16">
      <div className="text-center fade-in-up px-4">
        <p className="text-xs sm:text-sm uppercase tracking-wider text-accent mb-2 sm:mb-4">
          Based in Singapore
        </p>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-6xl font-serif font-bold leading-tight sm:leading-none uppercase tracking-tight">
          Hey! I'm Alex Chen
          <br />
          <span className="text-muted-foreground">Visual Artist</span>
        </h1>
      </div>
    </section>
  );
};

export default Hero;