import { useState, useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
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
  {
    id: 1,
    title: "Digital Circuits",
    category: "Abstract Photography",
    date: "March 2024",
    image: gallery1,
    span: 2,
    description: "Exploring the intricate beauty of technology through macro photography"
  },
  {
    id: 2,
    title: "Code Poetry",
    category: "Digital Art",
    date: "February 2024",
    image: gallery2,
    span: 1,
    description: "Where programming meets visual storytelling"
  },
  {
    id: 3,
    title: "Innovation Light",
    category: "Conceptual",
    date: "January 2024",
    image: gallery3,
    span: 1,
    description: "Capturing the moment of creative inspiration"
  },
  {
    id: 4,
    title: "Natural Bridge",
    category: "Landscape",
    date: "December 2023",
    image: gallery4,
    span: 2,
    description: "Architectural forms found in nature's design"
  },
  {
    id: 5,
    title: "Forest Light",
    category: "Nature",
    date: "November 2023",
    image: gallery5,
    span: 1,
    description: "Golden hour magic filtering through ancient trees"
  },
  {
    id: 6,
    title: "Urban Glow",
    category: "Street Photography",
    date: "October 2023",
    image: gallery6,
    span: 2,
    description: "Night lights creating an urban dreamscape"
  },
  {
    id: 7,
    title: "Digital Dream",
    category: "Experimental",
    date: "September 2023",
    image: gallery7,
    span: 1,
    description: "Exploration of digital textures"
  },
  {
    id: 8,
    title: "Color Burst",
    category: "Modern Art",
    date: "August 2023",
    image: gallery8,
    span: 1,
    description: "Vibrant display of color and form"
  },
  {
    id: 9,
    title: "Silent Waves",
    category: "Minimalism",
    date: "July 2023",
    image: gallery9,
    span: 1,
    description: "Gentle rhythm captured in minimalist style"
  }
];

const HorizontalScrollCarousel = ({ items }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Calculate the exact transform needed to show the last image fully
  // With 9 images at 675px each + 8 gaps at 24px + 32px padding = ~6299px total
  // Adjust the scroll range so horizontal scrolling completes when last image is fully visible
  const x = useTransform(scrollYProgress, [0, 0.75], ["1%", "-80%"]);

  return (
    <section
      ref={targetRef}
      className="relative h-[300vh] w-full"
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 pl-8"
        >
          {items.map((item) => (
            <GalleryCard
              key={item.id}
              item={item}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryCard = ({ item }) => {
  return (
    <Card
      className="group relative h-[675px] w-[675px] overflow-hidden rounded-lg border border-gray-400 flex-shrink-0 cursor-pointer"
    >
      <CardContent className="p-0 h-full relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end`}>
          <div className="p-6 text-white">
            <p className="text-sm uppercase tracking-wider text-accent mb-2">
              {item.category}
            </p>
            <h3 className="text-xl font-serif font-bold mb-2">
              {item.title}
            </h3>
            <p className="text-sm text-gray-300 mb-2">
              {item.description}
            </p>
            <p className="text-xs text-gray-400">
              {item.date}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const HorizontalScrollGrid = () => {
  return (
    <section id="works" className="pt-48 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
   

        {/* Artistic Statement Divider */}
        <motion.div 
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
              }
            }
          }}
        >
          <motion.div 
            className="relative"
            variants={{
              hidden: { y: 30, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-6 text-muted-foreground">✦</span>
            </div>
          </motion.div>
          <motion.blockquote 
            className="mt-8 text-xl md:text-2xl font-serif italic text-center max-w-4xl mx-auto leading-relaxed"
            variants={{
              hidden: { y: 40, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" }
              }
            }}
          >
            "Every photograph is a story waiting to be told, a moment suspended between memory and imagination."
          </motion.blockquote>
          <motion.p 
            className="mt-4 text-sm text-muted-foreground uppercase tracking-wider"
            variants={{
              hidden: { y: 20, opacity: 0 },
              visible: { 
                y: 0, 
                opacity: 1,
                transition: { duration: 0.6, ease: "easeOut" }
              }
            }}
          >
            Artist Statement
          </motion.p>
        </motion.div>
      </div>

      <HorizontalScrollCarousel items={galleryItems} />
    </section>
  );
};

export default HorizontalScrollGrid;
