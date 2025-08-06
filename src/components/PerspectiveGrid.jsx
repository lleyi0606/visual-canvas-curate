import { useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import useLenis from "@/hooks/useLenis";

// Import gallery images
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
];

const PerspectiveGrid = () => {
  const grid = useRef(null);
  const gridWrap = useRef(null);

  const { contextSafe } = useGSAP();

  const applyAnimation = contextSafe(() => {
    if (!grid.current || !gridWrap.current) return;

    const timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".grid_wrap",
        start: "top bottom-=50%",
        end: "bottom top-=5%",
        scrub: true,
        // markers: true, // Optional: for debugging
      },
    });

    Object.assign(grid.current.style, {
      perspective: "1300px",
      height: "200%",
      width: "115%",
    });

    Object.assign(gridWrap.current.style, {
      width: "105%",
      gridTemplateColumns: "repeat(6, minmax(4, 1fr))",
    });

    timeline
      .set(".grid_item", {
        transformOrigin: "50% 0%",
        z: () => gsap.utils.random(-4000, -2000),
        rotationX: () => gsap.utils.random(-65, -25),
        filter: "brightness(30%)",
      })
      .to(
        ".grid_item",
        {
          xPercent: () => gsap.utils.random(-150, 150),
          yPercent: () => gsap.utils.random(-300, 300),
          rotationX: 0,
          filter: "brightness(200%)",
        },
        0,
      )
      .to(
        ".grid_wrap",
        {
          z: 6500,
        },
        0,
      )
      .fromTo(".grid_item-inner", { scale: 1.5 }, { scale: 0.5 }, 0);
  });

  useLenis();

  useGSAP(
    () => {
      // Register ScrollTrigger
      gsap.registerPlugin(ScrollTrigger);
      applyAnimation();
    },
    { scope: grid.current, dependencies: [] },
  );

  return (
    <div className="z-10 w-full overflow-hidden bg-gray-800 dark:bg-gray-900">
      {/* Artistic Header Section */}
      <motion.div 
        className="text-center py-8 px-4"
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
          className="relative mb-8"
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
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-gray-800 dark:bg-gray-900 px-6 text-gray-400">✦</span>
          </div>
        </motion.div>
        <motion.h1 
          className="text-3xl md:text-5xl lg:text-6xl font-serif italic text-center max-w-4xl mx-auto leading-relaxed text-white"
          variants={{
            hidden: { y: 40, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.8, ease: "easeOut" }
            }
          }}
        >
          Experience the Gallery
        </motion.h1>
        <motion.p 
          className="mt-6 text-sm text-gray-400 uppercase tracking-wider"
          variants={{
            hidden: { y: 20, opacity: 0 },
            visible: { 
              y: 0, 
              opacity: 1,
              transition: { duration: 0.6, ease: "easeOut" }
            }
          }}
        >
          Immersive Visual Journey
        </motion.p>
      </motion.div>
      <div className="relative w-full py-[5vh]">
        <div
          ref={grid}
          className="grid w-full place-items-center"
          style={{ perspective: "1200px" }}
        >
          <div
            ref={gridWrap}
            style={{ transformStyle: "preserve-3d" }}
            className="grid_wrap grid h-auto w-full grid-cols-4 gap-[2vw]"
          >
            {Array(7)
              .fill(images)
              .flat()
              .map((src, index) => (
                <div
                  key={index}
                  className="grid_item relative grid aspect-[1.5] h-auto w-full place-items-center overflow-hidden rounded-md"
                >
                  <img
                    src={src}
                    alt={`Gallery image ${index + 1}`}
                    className="grid_item-inner relative h-full w-full object-cover min-w-[300px]"
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerspectiveGrid;