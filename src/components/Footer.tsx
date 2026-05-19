"use client";

import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <motion.footer
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.75}
      className="w-full flex flex-col items-center gap-3 py-10 text-center border-t border-outline-variant/20 mt-auto px-5"
      role="contentinfo"
    >
      {/* Brand name */}
      <h2 className="font-serif text-headline-md text-primary tracking-[0.25em] uppercase">
        AELLA BY AYA
      </h2>

      <p className="font-sans text-body-md text-on-surface-variant">
        Coming Soon.
      </p>

      {/* Divider */}
      <hr className="fade-divider w-32 my-1" />

      {/* Footer links */}
      <nav aria-label="Footer navigation" className="flex items-center gap-6">
        <a
          id="footer-privacy-link"
          href="#"
          className="font-sans text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          Privacy Policy
        </a>
        <span className="text-outline-variant" aria-hidden>·</span>
        <a
          id="footer-contact-link"
          href="mailto:hello@aellabyaya.com"
          className="font-sans text-body-md text-on-surface-variant hover:text-primary transition-colors duration-200"
        >
          Contact Us
        </a>
      </nav>

      <p className="font-sans text-label-sm text-on-surface-variant/50 mt-2">
        © {year} AELLA BY AYA. All rights reserved.
      </p>
    </motion.footer>
  );
}
