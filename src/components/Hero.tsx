"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";


const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const floatVariants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 6,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "loop" as const,
    },
  },
};

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* ── Floating decorative orbs ───────────────────────────────── */}
      <motion.div
        variants={floatVariants}
        animate="animate"
        className="absolute -top-16 -left-10 w-40 h-40 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"
      />
      <motion.div
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
        className="absolute -bottom-10 -right-10 w-56 h-56 rounded-full bg-primary-container/20 blur-3xl pointer-events-none"
      />

      {/* ── Logo ──────────────────────────────────────────────────── */}
      <motion.header
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="w-full flex justify-center pt-14 pb-6 px-5"
      >
        <motion.div
          variants={floatVariants}
          animate="animate"
          className="flex flex-col items-center select-none"
        >
          {!logoError ? (
            <Image
              src="/logo.png"
              alt="AELLA BY AYA Logo"
              width={220}
              height={80}
              priority
              className="h-20 w-auto object-contain mix-blend-multiply opacity-90 transition-opacity duration-300"
              onError={() => setLogoError(true)}
            />
          ) : (
            <>
              <span
                className="shimmer-text font-serif text-4xl font-bold tracking-[0.3em] uppercase"
                aria-label="AELLA BY AYA"
              >
                AELLA
              </span>
              <span className="font-sans text-[11px] tracking-[0.4em] uppercase text-aella-text font-semibold mt-1">
                BY AYA
              </span>
              {/* Decorative pearl dot */}
              <span className="mt-3 w-1 h-1 rounded-full bg-primary-container opacity-60" />
            </>
          )}
        </motion.div>
      </motion.header>

      {/* ── Hero Glass Card ────────────────────────────────────────── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0.15}
        className="w-full max-w-2xl px-5 md:px-0"
      >
        <div className="glass-card rounded-[2rem] p-8 md:p-14 flex flex-col items-center gap-7 relative overflow-hidden text-center">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-70" />

          {/* Subtitle tag */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
          >
            <span className="pearl-chip inline-flex items-center px-5 py-1.5 rounded-full font-sans text-label-md uppercase text-aella-text">
              ✦ &nbsp; Luxury Skincare
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="font-serif text-headline-lg-mobile md:text-display-lg text-primary leading-tight tracking-tight"
          >
            L&apos;essence de la<br />
            <em className="not-italic text-primary-container" style={{ WebkitTextStroke: "1px #D8B4A2", WebkitTextFillColor: "transparent" }}>
              beauté naturelle
            </em>
          </motion.h1>

          {/* Body */}
          <motion.p
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.45}
            className="font-sans text-body-lg text-on-surface-variant max-w-md mx-auto"
          >
            Discover a new standard of luxury skincare. Crafted with pristine
            ingredients to reveal your skin&apos;s innate luminescence.
            <br />
            <span className="text-aella-text font-medium mt-2 inline-block">
              We are preparing something extraordinary.
            </span>
          </motion.p>

          {/* Divider */}
          <hr className="fade-divider w-2/3" />

          {/* CTA chip */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            custom={0.55}
            className="relative"
          >
            {/* Pulse ring */}
            <span
              className="absolute inset-0 rounded-full bg-primary-container/40"
              style={{
                animation: "pulseRing 2.2s ease-out infinite",
              }}
            />
            <div className="relative inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-surface-container-low text-primary border border-outline-variant font-sans text-label-md tracking-widest uppercase nacre-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              Arriving Soon
            </div>
          </motion.div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
