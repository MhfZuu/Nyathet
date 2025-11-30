"use client";

import { useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface AnimatedHeroProps {
  children: ReactNode;
  className?: string;
}

export function AnimatedHero({ children, className = "" }: AnimatedHeroProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const timeline = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      timeline
        .from(".hero-title", {
          opacity: 0,
          y: 30,
          duration: 0.8,
        })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".hero-buttons",
          {
            opacity: 0,
            y: 20,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".hero-image",
          {
            opacity: 0,
            scale: 0.9,
            duration: 0.9,
          },
          "-=0.5"
        );
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: "fadeUp" | "fadeIn" | "scale" | "slideLeft" | "fadeRight";
  delay?: number;
  duration?: number;
  stagger?: number;
  className?: string;
  triggerStart?: string;
}

export function AnimatedSection({
  children,
  animation = "fadeUp",
  delay = 0,
  duration = 1,
  stagger = 0.15,
  className = "",
  triggerStart = "top 85%",
}: AnimatedSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const elements = container.current?.children;
      if (!elements || elements.length === 0) return;

      const commonProps = {
        duration,
        ease: "power3.out",
        delay,
        stagger: elements.length > 1 ? stagger : 0,
        scrollTrigger: {
          trigger: container.current,
          start: triggerStart,
          toggleActions: "play none none none",
        },
      };

      switch (animation) {
        case "fadeUp":
          gsap.from(elements, {
            ...commonProps,
            opacity: 0,
            y: 50,
          });
          break;
        case "fadeIn":
          gsap.from(elements, {
            ...commonProps,
            opacity: 0,
          });
          break;
        case "scale":
          gsap.from(elements, {
            ...commonProps,
            opacity: 0,
            scale: 0.9,
          });
          break;
        case "slideLeft":
          gsap.from(elements, {
            ...commonProps,
            opacity: 0,
            x: 80,
          });
          break;
        case "fadeRight":
          gsap.from(elements, {
            ...commonProps,
            opacity: 0,
            x: -80,
          });
          break;
      }
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

interface ParallaxElementProps {
  children: ReactNode;
  speed?: number;
  direction?: "up" | "down";
  className?: string;
}

export function ParallaxElement({
  children,
  speed = 0.5,
  direction = "up",
  className = "",
}: ParallaxElementProps) {
  const element = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!element.current) return;

      const yMovement = direction === "up" ? -100 * speed : 100 * speed;

      gsap.to(element.current, {
        y: yMovement,
        ease: "none",
        scrollTrigger: {
          trigger: element.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    },
    { scope: element }
  );

  return (
    <div ref={element} className={className}>
      {children}
    </div>
  );
}

interface LuxuryScrollSectionProps {
  children: ReactNode;
  className?: string;
}

export function LuxuryScrollSection({
  children,
  className = "",
}: LuxuryScrollSectionProps) {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!container.current) return;

      const elements = gsap.utils.toArray(container.current.children);

      elements.forEach((element, index) => {
        const el = element as Element;

        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 60,
          scale: 0.95,
          duration: 1.2,
          ease: "power4.out",
          delay: index * 0.1,
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container} className={className}>
      {children}
    </div>
  );
}

export default AnimatedSection;
