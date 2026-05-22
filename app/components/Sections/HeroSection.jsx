"use client";
import React, { useEffect, useState } from "react";
import Hero1 from "../../assets/Hero-img-1.jpg";
import Hero2 from "../../assets/Hero-img-2.jpg";
import { BsArrowRight } from "react-icons/bs";

import { AnimatePresence, motion } from "motion/react";

export default function HeroSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Hero1, Hero2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 6500);
    return () => clearInterval(interval);
  }, []);
  return (
    <section className="h-180 sm:h-screen w-full overflow-hidden relative">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            currentImage === index ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.src})`,
          }}
        />
      ))}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      <div className="relative z-20 pt-40 px-4">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImage}
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
                exit: {
                  opacity: 0,
                },
              }}
              className="flex flex-col items-start"
            >
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 125 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className=" max-w-xl text-5xl font-bold uppercase text-white sm:text-7xl md:text-[90px] font-cormorant-garamond"
              >
                Taste our most royal BBQ
              </motion.h2>

              <motion.a
                href="/menu"
                variants={{
                  hidden: { opacity: 0, y: 125 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.8 }}
                className="group mt-8 flex items-center gap-3 rounded-full bg-orange px-6 py-3 text-sm font-semibold uppercase sm:text-lg"
              >
                Explore Menu
                <div className="relative h-8 w-8 overflow-hidden text-2xl">
                  <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                    <BsArrowRight />
                  </span>

                  <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                    <BsArrowRight />
                  </span>
                </div>
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
