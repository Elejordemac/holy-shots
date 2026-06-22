import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Equipment from "@/components/Equipment";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Terms from "@/components/Terms";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Equipment />
        <About />
        <Testimonials />
        <FAQ />
        <Contact />
        <Terms />
      </main>
      <Footer />
    </>
  );
}
