"use client";

import React, { useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import { HoverRevealHero } from "./HoverRevealHero";

interface HeroScrollCurtainProps {
  children?: React.ReactNode;
}

export function HeroScrollCurtain({ children }: HeroScrollCurtainProps) {
  const shouldReduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [scrollRange, setScrollRange] = useState(600);

  useEffect(() => {
    const updateRange = () => {
      setScrollRange(Math.max(400, Math.min(window.innerHeight * 0.75, 800)));
    };
    updateRange();
    window.addEventListener("resize", updateRange);
    return () => window.removeEventListener("resize", updateRange);
  }, []);

  // Scale down the hero smoothly from 1.0 to 0.92 as sheet slides over it (depth recession)
  const scale = useTransform(
    scrollY,
    [0, scrollRange],
    [1, shouldReduceMotion ? 1 : 0.92],
    { clamp: true }
  );

  // Subtle downward parallax drift (travels slower than foreground scroll)
  const y = useTransform(
    scrollY,
    [0, scrollRange],
    [0, shouldReduceMotion ? 0 : 70],
    { clamp: true }
  );

  // Soft corner curvature as the hero recedes in 3D space
  const borderRadius = useTransform(
    scrollY,
    [0, scrollRange],
    ["0px", shouldReduceMotion ? "0px" : "32px"],
    { clamp: true }
  );

  // Smooth dimming opacity
  const opacity = useTransform(
    scrollY,
    [0, scrollRange * 0.75, scrollRange],
    [1, 0.55, 0.25],
    { clamp: true }
  );

  // Deep dark ambient vignette scrim
  const overlayOpacity = useTransform(
    scrollY,
    [0, scrollRange * 0.7],
    [0, 0.65],
    { clamp: true }
  );

  // Disable pointer events on the hero only once the sheet has fully covered it
  const pointerEvents = useTransform(scrollY, (v) =>
    v >= scrollRange ? "none" : "auto"
  );

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden z-0">
      <motion.div
        style={{
          scale,
          y,
          borderRadius,
          opacity,
          pointerEvents,
          transformOrigin: "center top",
        }}
        className="relative w-full h-full overflow-hidden will-change-transform shadow-[0_20px_60px_rgba(0,0,0,0.6)]"
      >
        {children ? children : <HoverRevealHero />}

        {/* Ambient Dark Scrim Overlay */}
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 bg-zinc-950 pointer-events-none z-30"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
}

export default HeroScrollCurtain;
