/** Full-viewport ambient background blobs — fixed, behind all content */
export default function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none"
    >
      {/* Top-left warm orb */}
      <div className="absolute -top-[15%] -left-[10%] w-[55vw] h-[55vw] rounded-full bg-secondary-container/20 blur-[110px]" />

      {/* Bottom-right rose orb */}
      <div className="absolute -bottom-[20%] -right-[10%] w-[65vw] h-[65vw] rounded-full bg-primary-container/20 blur-[130px]" />

      {/* Center subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] rounded-full bg-tertiary-container/10 blur-[100px]" />
    </div>
  );
}
