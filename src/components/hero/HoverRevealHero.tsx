"use client";

import React, { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import {
  ArrowRight,
  Code2,
  Terminal,
  ChevronDown,
} from "lucide-react";

export function HoverRevealHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const revealRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth cursor-following movement using spring lerp physics
  const springConfig = { stiffness: 220, damping: 25 };
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  // Directly bind smoothX and smoothY to mask-image and -webkit-mask-image
  // for 100% cross-browser fidelity (Chrome, Safari, Edge, Firefox)
  useEffect(() => {
    const updateMask = () => {
      if (!revealRef.current) return;
      const x = smoothX.get();
      const y = smoothY.get();
      const maskGradient = `radial-gradient(260px circle at ${x}px ${y}px, black 35%, transparent 100%)`;
      revealRef.current.style.maskImage = maskGradient;
      revealRef.current.style.webkitMaskImage = maskGradient;
    };

    const unsubX = smoothX.on("change", updateMask);
    const unsubY = smoothY.on("change", updateMask);

    return () => {
      unsubX();
      unsubY();
    };
  }, [smoothX, smoothY]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsHovered(true);
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Center spotlight on entry point without jumping from off-screen
    mouseX.set(x);
    mouseY.set(y);
    smoothX.jump(x);
    smoothY.jump(y);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);
    if (!isHovered) {
      setIsHovered(true);
    }
  };

  const handleMouseLeave = () => {
    // When the cursor leaves the hero container, smoothly fade the reveal layer opacity to 0
    setIsHovered(false);
  };

  return (
    <section
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-zinc-950 select-none"
    >
      {/* =========================================================================
          Layer 0 (z-0): Base Image Layer (BG_IMAGE_1)
          Static, absolute inset-0 spanning full width/height
          ========================================================================= */}
      <div className="absolute inset-0 z-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="/images/bg-base.jpg"
          alt="Base Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
        {/* Subtle dark vignette overlay for typography legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-zinc-950/70" />
      </div>

      {/* =========================================================================
          Layer 1 (z-10): Reveal Image Layer (BG_IMAGE_2)
          Static, absolute inset-0 with dynamic radial mask
          Completely invisible outside 260px soft spotlight
          pointer-events: none, no borders, no rings, pure CSS mask
          ========================================================================= */}
      <motion.div
        ref={revealRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="absolute inset-0 z-10 w-full h-full pointer-events-none overflow-hidden"
        style={{
          maskImage: `radial-gradient(260px circle at -1000px -1000px, black 35%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(260px circle at -1000px -1000px, black 35%, transparent 100%)`,
        }}
      >
        <Image
          src="/images/bg-reveal.jpg"
          alt="Reveal Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center w-full h-full"
        />
      </motion.div>

      {/* =========================================================================
          Layer 2 (z-20+): ALL text, buttons, status badges, interactive UI
          The mask remains strictly underneath all foreground content
          ========================================================================= */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-32 flex flex-col items-center text-center pointer-events-auto">
        {/* Subtle Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-20 inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-zinc-800/80 bg-zinc-950/70 backdrop-blur-xl mb-8 shadow-lg shadow-black/40 hover:border-cyan-500/40 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
          </span>
          <span className="font-mono text-xs font-medium text-zinc-300 tracking-wide">
            Available for Full Stack & Cloud Architecture
          </span>
        </motion.div>

        {/* Large Bold Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative z-20 text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.1] max-w-4xl"
        >
          Building{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-100 via-cyan-200 to-cyan-400">
            Resilient Digital Systems
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative z-20 mt-6 text-base sm:text-xl text-zinc-300 max-w-2xl leading-relaxed font-normal"
        >
          Full Stack Software Engineer specializing in distributed architectures,
          modern web, and interactive interfaces.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative z-20 mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_0_25px_rgba(6,182,212,0.3)] hover:shadow-[0_0_35px_rgba(6,182,212,0.5)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <span>Explore Work</span>
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#stack"
            className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/70 backdrop-blur-md px-5 py-3.5 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-850 hover:border-zinc-700 transition-all"
          >
            <Code2 className="h-4 w-4 text-cyan-400" />
            <span>Tech Stack</span>
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl border border-transparent px-4 py-3.5 text-sm font-medium text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            <Terminal className="h-4 w-4 text-zinc-500" />
            <span>Contact</span>
          </a>
        </motion.div>
      </div>

      {/* Down Chevron indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 hidden sm:flex flex-col items-center gap-1 text-zinc-400 hover:text-zinc-300 transition-colors pointer-events-none">
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </div>
    </section>
  );
}
export default HoverRevealHero;
