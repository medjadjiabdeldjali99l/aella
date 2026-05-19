"use client";

import { motion } from "framer-motion";

/** Full-viewport ambient background blobs — fixed, behind all content */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
    >
      {/* Top-left warm orb */}
      <motion.div
        animate={{ scale: [1, 1.08, 1], opacity: [0.18, 0.28, 0.18] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-secondary-container blur-[110px]"
      />

      {/* Bottom-right rose orb */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute -bottom-[20%] -right-[10%] w-[65vw] h-[65vw] rounded-full bg-primary-container blur-[130px]"
      />

      {/* Center subtle glow */}
      <motion.div
        animate={{ opacity: [0.05, 0.12, 0.05] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-tertiary-container blur-[100px]"
      />
    </div>
  );
}
