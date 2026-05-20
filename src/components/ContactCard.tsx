"use client";

import { Mail, ArrowRight, Phone } from "lucide-react";
import { useState } from "react";
import { subscribeEmail } from "../app/actions";

const InstagramIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export function SocialLinks() {
  const links = [
    {
      id: "instagram-link",
      icon: InstagramIcon,
      label: "Instagram",
      href: "https://www.instagram.com/aella.cleanbeauty",
      ariaLabel: "Follow AELLA BY AYA on Instagram",
    },
    {
      id: "linkedin-link",
      icon: LinkedinIcon,
      label: "LinkedIn",
      href: "https://linkedin.com/company/aellabyaya",
      ariaLabel: "Follow AELLA BY AYA on LinkedIn",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      {links.map(({ id, icon: Icon, label, href, ariaLabel }) => (
        <a
          key={id}
          id={id}
          href={href}
          aria-label={ariaLabel}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-primary border border-outline-variant/40 hover:bg-primary-container/30 transition-colors duration-300 nacre-glow overflow-hidden"
        >
          {/* Hover shimmer sweep */}
          <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-white/30 to-transparent transition-opacity duration-300 rounded-full" />
          <Icon />
          <span className="sr-only">{label}</span>
        </a>
      ))}
    </div>
  );
}

export default function ContactCard() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const res = await subscribeEmail(email);
      if (res.success) {
        setSubmitted(true);
      } else {
        alert("Une erreur s'est produite. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      alert("Une erreur s'est produite. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
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

          {/* Contact buttons */}
          <div className="flex flex-col gap-2 w-full sm:w-auto">
            <a
              id="contact-us-btn"
              href="mailto:aellabyaya@gmail.com"
              className="group flex items-center gap-2 bg-primary-container text-on-secondary-container px-6 py-3.5 rounded-full font-sans text-label-md border border-on-secondary-container/20 hover:bg-primary-container/80 transition-colors nacre-glow justify-center"
            >
              <Mail size={16} strokeWidth={1.5} />
              Contact Us
              <ArrowRight
                size={14}
                strokeWidth={2}
                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300"
              />
            </a>

            <a
              id="contact-phone-btn"
              href="tel:+213797403226"
              className="group flex items-center gap-2 bg-surface-container-low text-primary px-6 py-3 rounded-full font-sans text-label-md border border-outline-variant/40 hover:bg-primary-container/20 transition-colors nacre-glow justify-center"
            >
              <Phone size={16} strokeWidth={1.5} />
              +213 797 40 32 26
            </a>
          </div>
        </div>

        {/* Divider */}
        <hr className="fade-divider" />

        {/* Email notify form */}
        <div className="flex flex-col gap-3">
          <p className="font-sans text-label-md uppercase tracking-widest text-aella-text text-center">
            Notify me at launch
          </p>

          {submitted ? (
            <div className="flex items-center justify-center gap-2 py-3 text-primary font-sans text-body-md">
              <span className="w-2 h-2 rounded-full bg-primary" />
              You&apos;re on the list — merci! ✦
            </div>
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
                  disabled={isSubmitting}
                  className="w-full bg-surface-container-low/60 border-b border-aella-text/50 focus:border-primary px-3 py-2.5 text-on-surface font-sans text-body-md placeholder:text-on-surface-variant/40 outline-none transition-colors duration-200 rounded-t-sm disabled:opacity-50"
                />
              </div>
              <button
                id="notify-submit-btn"
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-surface-dim text-primary font-sans text-label-md border border-outline-variant hover:bg-primary-container/30 transition-colors nacre-glow whitespace-nowrap disabled:opacity-50"
              >
                {isSubmitting ? "Saving..." : "Notify Me"}
                <ArrowRight size={13} strokeWidth={2} />
              </button>
            </form>
          )}
        </div>

        {/* Bottom accent */}
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-outline-variant/30 to-transparent" />
      </div>
    </section>
  );
}
