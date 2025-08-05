import { useState } from "react";
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

const GalleryGrid = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <section id="works" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Selected Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A curated collection of visual stories, each piece crafted with intention and artistic vision.
          </p>
        </div>

        {/* Horizontal scrolling gallery with 2 fixed rows */}
        <div className="overflow-x-auto">
          <div className="grid grid-flow-col auto-cols-[200px] grid-rows-2 gap-6 auto-rows-[200px]">
            {galleryItems.map((item) => (
              <Card
              key={item.id}
              className={`gallery-item hover-lift cursor-pointer group ${
                item.span === 2 ? 'lg:col-span-2' : ''
              } ${item.id === 4 ? 'lg:row-span-2' : ''}`}
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
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
          ))}
        </div>
        </div>

        <div className="text-center mt-12">
          <a 
            href="#" 
            className="inline-block border border-border px-8 py-3 rounded-sm hover:bg-muted transition-colors"
          >
            View All Works
          </a>
        </div>
      </div>
    </section>
  );
};

export default GalleryGrid;
