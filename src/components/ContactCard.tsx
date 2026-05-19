"use client";

import { motion } from "framer-motion";
import { Camera, Play, Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  }),
};

export function SocialLinks() {
  const links = [
    {
      id: "instagram-link",
      icon: Camera,
      label: "Instagram",
      href: "https://instagram.com",
      ariaLabel: "Follow AELLA BY AYA on Instagram",
    },
    {
      id: "youtube-link",
      icon: Play,
      label: "YouTube",
      href: "https://youtube.com",
      ariaLabel: "Watch AELLA BY AYA on YouTube",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ id, icon: Icon, label, href, ariaLabel }, i) => (
        <motion.a
          key={id}
          id={id}
          href={href}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={0.6 + i * 0.1}
          whileHover={{ scale: 1.1, backgroundColor: "rgba(216, 180, 162, 0.4)" }}
          whileTap={{ scale: 0.96 }}
          className="group relative w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary border border-outline-variant/40 transition-colors duration-300 nacre-glow overflow-hidden"
        >
          {/* Hover shimmer sweep */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent transition-opacity duration-300 rounded-full" />
          <Icon size={18} strokeWidth={1.5} />
          <span className="sr-only">{label}</span>
        </motion.a>
      ))}
    </div>
  );
}

export default function ContactCard() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      custom={0.5}
      aria-label="Contact and social links"
      className="w-full max-w-md px-5 md:px-0"
    >
      <div className="glass-card rounded-[1.5rem] p-6 md:p-8 flex flex-col gap-6 nacre-glow relative overflow-hidden">
        {/* Top accent */}
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary-container/60 to-transparent" />

        {/* Social row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="flex flex-col items-center sm:items-start gap-1">
            <p className="font-sans text-label-md uppercase tracking-widest text-aella-text">
              Follow the Journey
            </p>
            <SocialLinks />
          </div>

          {/* Contact button */}
          <motion.a
            id="contact-us-btn"
            href="mailto:hello@aellabyaya.com"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="group flex items-center gap-2 bg-primary-container text-on-secondary-container px-6 py-3 rounded-full font-sans text-label-md border border-on-secondary-container/20 hover:bg-primary-container/80 transition-colors nacre-glow w-full sm:w-auto justify-center"
          >
            <Mail size={16} strokeWidth={1.5} />
            Contact Us
            <ArrowRight
              size={14}
              strokeWidth={2}
              className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
            />
          </motion.a>
        </div>

        {/* Divider */}
        <hr className="fade-divider" />

        {/* Email notify form */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-label-md uppercase tracking-widest text-aella-text text-center">
            Notify me at launch
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-center gap-2 py-3 text-primary font-sans text-body-md"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              You&apos;re on the list — merci! ✦
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              id="notify-form"
              className="flex gap-2 w-full"
            >
              <div className="relative flex-1">
                <input
                  id="notify-email-input"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full bg-surface-container-low/60 border-b border-aella-text/50 focus:border-primary px-3 py-2.5 text-on-surface font-sans text-body-md placeholder:text-on-surface-variant/40 outline-none transition-colors duration-200 rounded-t-sm"
                />
              </div>
              <motion.button
                id="notify-submit-btn"
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-surface-dim text-primary font-sans text-label-md border border-outline-variant hover:bg-primary-container/30 transition-colors nacre-glow whitespace-nowrap"
              >
                Notify Me
                <ArrowRight size={13} strokeWidth={2} />
              </motion.button>
            </form>
          )}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      </div>
    </motion.section>
  );
}
