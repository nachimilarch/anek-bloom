import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { WhyUs } from "@/components/WhyUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Contact } from "@/components/Contact";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    document.title = "Anek Learning Solutions · IELTS, PTE & Communication Training by Dr. Vidya Malve";
    const meta = document.querySelector('meta[name="description"]') || (() => {
      const m = document.createElement("meta");
      m.setAttribute("name", "description");
      document.head.appendChild(m);
      return m;
    })();
    meta.setAttribute("content", "Premium IELTS, PTE, BPO and communication training by Dr. Vidya Malve — Pearson-certified PTE trainer, dentist and behavioural coach. Confidence, clarity and career growth.");
  }, []);

  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <About />
      <Services />
      <WhyUs />
      <Testimonials />
      <FAQ />
      <Contact />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
};

export default Index;
