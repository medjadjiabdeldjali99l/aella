import Hero from "@/components/Hero";
import ContactCard from "@/components/ContactCard";
import Footer from "@/components/Footer";
import AmbientBackground from "@/components/AmbientBackground";

export default function Home() {
  return (
    <>
      {/* Fixed atmospheric blobs */}
      <AmbientBackground />

      {/* Main layout */}
      <main className="flex-grow flex flex-col items-center justify-center gap-8 pb-10 w-full max-w-desktop mx-auto px-0 md:px-8">
        {/* Hero — logo + glass card headline */}
        <Hero />

        {/* Social + Contact + Notify card */}
        <ContactCard />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
