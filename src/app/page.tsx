"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Disciplines from "@/components/Disciplines";
import Coaches from "@/components/Coaches";
import Planning from "@/components/Planning";
import Tarifs from "@/components/Tarifs";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import Inscription from "@/components/Inscription";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Disciplines />
        <Coaches />
        <Planning />
        <Tarifs />
        <Gallery />
        <Testimonials />
        <CTABanner />
        <Inscription />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
