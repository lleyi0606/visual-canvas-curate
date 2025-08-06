"use client";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

const InfiniteText = ({ text, speed = 0.1 }) => {
  const firstText = useRef(null);
  const secondText = useRef(null);
  const slider = useRef(null);
  let xPercent = 0;
  let direction = -1;

  const { contextSafe } = useGSAP();

  const animate = contextSafe(() => {
    if (xPercent < -100) xPercent = 0;
    if (xPercent > 0) xPercent = -100;

    if (firstText.current && secondText.current) {
      gsap.set(firstText.current, { xPercent });
      gsap.set(secondText.current, { xPercent });
    }

    xPercent += speed * direction;
    requestAnimationFrame(animate);
  });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (slider.current) {
      gsap.to(slider.current, {
        scrollTrigger: {
          trigger: document.documentElement,
          start: 0,
          scrub: 0.35,
          onUpdate: (e) => (direction = e.direction * -1),
        },
        x: "-=300px",
      });
    }

    requestAnimationFrame(animate);
  }, [animate]);

  return (
    <div className="z-[10] h-[150px] w-full">
      <div className="relative flex h-full items-center overflow-hidden rounded-lg bg-gradient-to-br from-muted from-30% to-secondary dark:from-card dark:to-muted">
        <div className="absolute">
          <div
            ref={slider}
            className="relative m-0 flex whitespace-nowrap"
          >
            <p
              ref={firstText}
              className="m-0 mr-3 text-3xl font-serif font-normal text-muted-foreground md:text-5xl lg:text-6xl"
            >
              {text}
            </p>
            <p
              ref={secondText}
              className="m-0 text-3xl font-serif font-normal text-muted-foreground md:text-5xl lg:text-6xl"
            >
              {text}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfiniteText;