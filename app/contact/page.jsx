import React from "react";
import Header from "../components/Header";
import AboutHeroSection from "../components/Sections/PageHeroSection";
import ContactHeroImg from "../assets/Contact-Hero-img.jpg";
import Footer from "../components/Sections/Footer";
import ContactSection from "../components/Sections/ContactSection";

export default function page() {
  return (
    <>
      <Header />
      <AboutHeroSection image={ContactHeroImg} title={"Contact"} />
      <ContactSection />
      <Footer />
    </>
  );
}
