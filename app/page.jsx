import Header from "./components/Header";
import HeroSection from "./components/Sections/HeroSection";
import InfoSection from "./components/Sections/InfoSection";
import AboutSection from "./components/Sections/AboutSection";
import MenuSection from "./components/Sections/MenuSection";
import Testimonials from "./components/Sections/Testimonials";
import GetInTouch from "./components/Sections/GetInTouch";
import Footer from "./components/Sections/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <InfoSection />
      <AboutSection />
      <MenuSection />
      <GetInTouch />
      <Testimonials />
      <Footer />
    </>
  );
}
