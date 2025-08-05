const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Hi everyone! I'm Alex Chen, visual artist based in Singapore
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                I am focusing on digital art, photography, and conceptual design. 
                Keeping my distinctive style, I create visual narratives that blend 
                technology with organic beauty, finding poetry in the intersection 
                of digital and natural worlds.
              </p>
              <p>
                My work explores themes of innovation, human connection, and the 
                evolving relationship between art and technology. Each piece is 
                carefully crafted to evoke emotion and inspire contemplation.
              </p>
              <p>
                Whether capturing the intricate patterns of circuit boards or the 
                ethereal quality of light filtering through forest canopies, I 
                strive to reveal the extraordinary within the ordinary.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-border">
              <h3 className="font-serif font-bold mb-4">Specializations</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <ul className="space-y-2">
                  <li>• Digital Art</li>
                  <li>• Abstract Photography</li>
                  <li>• Conceptual Design</li>
                </ul>
                <ul className="space-y-2">
                  <li>• Visual Storytelling</li>
                  <li>• Artistic Direction</li>
                  <li>• Creative Consultation</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-muted to-muted/50 rounded-sm">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 border-2 border-accent rounded-full flex items-center justify-center">
                  <span className="text-2xl font-serif">AC</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;