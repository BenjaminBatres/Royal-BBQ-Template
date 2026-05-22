"use client";
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import MenuHeroImg from "../assets/Menu-Hero-img.jpg";
import bbqMenu from "../data/bbq-menu";
import BBQItem from "../components/ui/BBQItem";
import Footer from "../components/Sections/Footer";
import PageHeroSection from "../components/Sections/PageHeroSection";
import { motion, useAnimation, useInView } from "motion/react";
export default function Page() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef);
  const mainControls = useAnimation();

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.4, // delay between items
      },
    },
  };

  const item = {
    hidden: { opacity: 0, scale: 0.85 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);
  return (
    <>
      <Header />
      <PageHeroSection image={MenuHeroImg} title={"Menu"} />
      <div className="py-30 px-5">
        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {bbqMenu.map((menuItem) => (
            <motion.div variants={item} key={menuItem.id}>
              <BBQItem menuItem={menuItem} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}
