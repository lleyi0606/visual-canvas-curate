import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const ImageCollage = () => {
  return (
    <section className="h-screen relative overflow-hidden">
      <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-3 p-6 -mb-32">
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
        
        {/* Square image */}
        <div className="col-span-3 row-span-2 gallery-item fly-in-up" style={{ animationDelay: '0.5s' }}>
          <img src={gallery5} alt="Gallery 5" className="w-full h-full object-cover" />
        </div>
        
        {/* Wide landscape extending off page */}
        <div className="col-span-7 row-span-2 gallery-item fly-in-right" style={{ animationDelay: '0.6s' }}>
          <img src={gallery6} alt="Gallery 6" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;