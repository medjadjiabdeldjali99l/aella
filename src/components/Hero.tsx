"use client";

import { useState } from "react";
import Image from "next/image";

export default function Hero() {
  const [logoError, setLogoError] = useState(false);

  return (
    <section className="relative w-full flex flex-col items-center">
      {/* ── Logo ──────────────────────────────────────────────────── */}
      <header className="w-full flex justify-center pt-14 pb-6 px-5">
        <div className="flex flex-col items-center select-none">
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
        </div>
      </header>

      {/* ── Hero Glass Card ────────────────────────────────────────── */}
      <div className="w-full max-w-2xl px-5 md:px-0">
        <div className="glass-card rounded-[2rem] p-8 md:p-14 flex flex-col items-center gap-7 relative overflow-hidden text-center">
          {/* Top accent line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container to-transparent opacity-70" />

          {/* Subtitle tag */}
          <div>
            <span className="pearl-chip inline-flex items-center px-5 py-1.5 rounded-full font-sans text-label-md uppercase text-aella-text">
              ✦ &nbsp; Luxury Skincare
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-headline-lg-mobile md:text-display-lg text-primary leading-tight tracking-tight">
            L&apos;essence de la<br />
            <em className="not-italic text-primary-container" style={{ WebkitTextStroke: "1px #D8B4A2", WebkitTextFillColor: "transparent" }}>
              beauté naturelle
            </em>
          </h1>

          {/* Body */}
          <p className="font-sans text-body-lg text-on-surface-variant max-w-md mx-auto">
            Discover a new standard of luxury skincare. Crafted with pristine
            ingredients to reveal your skin&apos;s innate luminescence.
            <br />
            <span className="text-aella-text font-medium mt-2 inline-block">
              We are preparing something extraordinary.
            </span>
          </p>

          {/* Divider */}
          <hr className="fade-divider w-2/3" />

          {/* CTA chip */}
          <div className="relative">
            <div className="relative inline-flex items-center gap-2 px-9 py-3.5 rounded-full bg-surface-container-low text-primary border border-outline-variant font-sans text-label-md tracking-widest uppercase nacre-glow">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container" />
              Arriving Soon
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
