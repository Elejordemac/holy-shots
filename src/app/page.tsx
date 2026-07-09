import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Equipment from "@/components/Equipment";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";
import FloatingChat from "@/components/FloatingChat";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Equipment />
        <Gallery />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Terms />
      </main>
      <Footer />
      <FloatingChat />
      <BackToTop />
    </>
  );
}
