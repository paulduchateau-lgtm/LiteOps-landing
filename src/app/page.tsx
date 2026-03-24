import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import Features from "@/components/Features";
import Platform from "@/components/Platform";
import Industries from "@/components/Industries";
import Models from "@/components/Models";
import Developers from "@/components/Developers";
import Testimonial from "@/components/Testimonial";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoCloud />
        <Features />
        <Platform />
        <Industries />
        <Models />
        <Developers />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
