import { motion } from "framer-motion";
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
  { id: 1, image: gallery1, span: 2, animateFrom: 'left' },
  { id: 2, image: gallery2, span: 1, animateFrom: 'left' },
  { id: 3, image: gallery3, span: 1, animateFrom: 'right' },
  { id: 4, image: gallery9, span: 2, animateFrom: 'left' }, // will span two rows as well
  { id: 5, image: gallery5, span: 1, animateFrom: 'right' },
  { id: 6, image: gallery6, span: 2, animateFrom: 'right' },
  { id: 7, image: gallery7, span: 1, animateFrom: 'left' },
  { id: 8, image: gallery8, span: 1, animateFrom: 'right' },
  { id: 9, image: gallery4, span: 1, animateFrom: 'left' },
];

const HeroImageCollage = () => {
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: (animateFrom) => ({
      x: animateFrom === 'left' ? -200 : 200,
      opacity: 0,
      scale: 0.8,
    }),
    visible: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      }
    }
  };

  return (
    <section className="h-[65vh] sm:h-[75vh] md:h-screen relative overflow-hidden">
      {/* The grid is wider than the viewport. The section hides overflow so sides fade out. */}
      <div className="absolute inset-0 flex items-center justify-center overflow-visible">
        <motion.div 
          className="grid grid-flow-col auto-cols-[100px] sm:auto-cols-[180px] md:auto-cols-[260px] lg:auto-cols-[300px] grid-rows-2 auto-rows-[100px] sm:auto-rows-[180px] md:auto-rows-[260px] lg:auto-rows-[300px] gap-2 sm:gap-4 md:gap-5"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {galleryItems.map((item) => (
            <motion.div
              key={item.id}
              className={`relative ${item.span === 2 ? 'col-span-2' : ''} ${
                item.id === 4 ? 'row-span-2' : ''
              }`}
              variants={itemVariants}
              custom={item.animateFrom}
            >
              <img
                src={item.image}
                alt={`Gallery ${item.id}`}
                className="w-full h-full object-cover rounded-sm"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroImageCollage;
