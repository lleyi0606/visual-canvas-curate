import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const galleryItems = [
  { id: 1, image: gallery1, span: 2 },
  { id: 2, image: gallery2, span: 1 },
  { id: 3, image: gallery3, span: 1 },
  { id: 4, image: gallery9, span: 2 }, // will span two rows as well
  { id: 5, image: gallery5, span: 1 },
  { id: 6, image: gallery6, span: 2 },
  { id: 7, image: gallery7, span: 1 },
  { id: 8, image: gallery8, span: 1 },
  { id: 9, image: gallery4, span: 1 },
];

const ImageCollage = () => {
  return (
    <section className="h-[65vh] sm:h-[75vh] md:h-screen relative overflow-hidden">
      {/* The grid is wider than the viewport. The section hides overflow so sides fade out. */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <div className="grid grid-flow-col auto-cols-[100px] sm:auto-cols-[180px] md:auto-cols-[260px] lg:auto-cols-[300px] grid-rows-2 auto-rows-[100px] sm:auto-rows-[180px] md:auto-rows-[260px] lg:auto-rows-[300px] gap-2 sm:gap-4 md:gap-5">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className={`relative ${item.span === 2 ? 'col-span-2' : ''} ${
                item.id === 4 ? 'row-span-2' : ''
              }`}
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover rounded-sm"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCollage;
