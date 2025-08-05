import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col pt-16 overflow-hidden">
      {/* Text Section - Top Half */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8">
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
      </div>

      {/* Image Collage - Bottom Half */}
      <div className="flex-1 relative">
        <div className="absolute inset-0 grid grid-cols-12 grid-rows-8 gap-2 p-4 -mb-20">
          {/* Large portrait image spanning 2 rows */}
          <div className="col-span-3 row-span-4 gallery-item fly-in-left" style={{ animationDelay: '0.1s' }}>
            <img src={gallery1} alt="Gallery 1" className="w-full h-full object-cover" />
          </div>
          
          {/* Landscape image */}
          <div className="col-span-5 row-span-2 gallery-item fly-in-up" style={{ animationDelay: '0.2s' }}>
            <img src={gallery2} alt="Gallery 2" className="w-full h-full object-cover" />
          </div>
          
          {/* Portrait image */}
          <div className="col-span-4 row-span-3 gallery-item fly-in-right" style={{ animationDelay: '0.3s' }}>
            <img src={gallery3} alt="Gallery 3" className="w-full h-full object-cover" />
          </div>
          
          {/* Second row landscape */}
          <div className="col-span-4 row-span-2 gallery-item fly-in-left" style={{ animationDelay: '0.4s' }}>
            <img src={gallery4} alt="Gallery 4" className="w-full h-full object-cover" />
          </div>
          
          {/* Square-ish image */}
          <div className="col-span-3 row-span-2 gallery-item fly-in-up" style={{ animationDelay: '0.5s' }}>
            <img src={gallery5} alt="Gallery 5" className="w-full h-full object-cover" />
          </div>
          
          {/* Wide landscape extending off page */}
          <div className="col-span-6 row-span-2 gallery-item fly-in-right" style={{ animationDelay: '0.6s' }}>
            <img src={gallery6} alt="Gallery 6" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;