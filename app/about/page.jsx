import React from "react";
import Header from "../components/Header";
import PageHeroSection from "../components/Sections/PageHeroSection";
import AboutCompanySection from "../components/Sections/AboutCompanySection";
import Footer from "../components/Sections/Footer";
import AboutHeroImg from "../assets/About-Hero-img.jpg"
export default function page() {
  return (
    <>
      <Header />
      <PageHeroSection image={AboutHeroImg} title={'About'}/>
      <AboutCompanySection />
      <Footer />
    </>
  );
}
