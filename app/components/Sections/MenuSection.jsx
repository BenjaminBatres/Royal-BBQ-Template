"use client";
import React, { useEffect, useRef } from "react";
import { BsArrowRight } from "react-icons/bs";
import BBQItem from "../ui/BBQItem";
import bbqMenu from "../../data/bbq-menu";
import { motion, useAnimation, useInView } from "motion/react";

export default function MenuSection() {
  const containerRef = useRef(null);
  const containerRef2 = useRef(null);
  const containerRef3 = useRef(null);
  const isInView = useInView(containerRef);
  const isInView2 = useInView(containerRef2);
  const isInView3 = useInView(containerRef3);
  const mainControls = useAnimation();
  const mainControls2 = useAnimation();
  const mainControls3 = useAnimation();

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
    if (isInView2) {
      mainControls2.start("show");
    }
    if (isInView3) {
      mainControls3.start("show");
    }
  }, [isInView, isInView2, isInView3]);
  return (
    <section className="py-20 px-5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, x: -120 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
          }}
          className="text-orange uppercase font-semibold mb-4"
        >
          Our Menu
        </motion.h3>
        <div className="flex flex-col gap-7 md:flex-row justify-between items-center border-b border-zinc-600 pb-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, x: -120 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
            }}
            className="text-5xl uppercase font-bold font-cormorant-garamond "
          >
            Delicious food menu
          </motion.h2>
          <motion.a
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.5,
            }}
            href={"/"}
            className='uppercase font-semibold py-3 px-6 bg-orange rounded-full overflow-hidden group flex gap-2 items-center z-1 relative transition-all duration-250 ease-linear before:content-[""] before:absolute before:top-0 before:left-0 before:h-full before:w-0 before:rounded-full before:bg-white before:transition-all before:-z-1 before:duration-300 before:ease-linear hover:before:w-full hover:text-orange w-fit'
          >
            View All Menu
            <div className="h-8 w-8 relative  overflow-hidden text-2xl">
              <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                <BsArrowRight />
              </span>
              <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                <BsArrowRight />
              </span>
            </div>
          </motion.a>
        </div>

        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="grid md:grid-cols-2 lg:grid-cols-3 items-center gap-8 mb-8"
        >
          {/* Displays the first set of menu items */}
          {bbqMenu.slice(0, 3).map((menuItem) => (
            <BBQItem menuItem={menuItem} item={item} key={menuItem.id} />
          ))}
          {/* Displays the fourth menu item only on smaller screens */}
          <div className="lg:hidden">
            {bbqMenu.slice(3, 4).map((menuItem) => (
              <BBQItem menuItem={menuItem} item={item} key={menuItem.id} />
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={containerRef2}
          initial="hidden"
          variants={container}
          animate={mainControls2}
          className="hidden lg:grid md:grid-cols-2 gap-8"
        >
          {/* Displays the fifth and sixth menu items */}
          {bbqMenu.slice(3, 5).map((menuItem) => (
            <BBQItem menuItem={menuItem} item={item} key={menuItem.id} />
          ))}
        </motion.div>
        <motion.div
          ref={containerRef3}
          initial="hidden"
          variants={container}
          animate={mainControls3}
          className="grid md:grid-cols-2 gap-8 lg:hidden"
        >
          {/* Mobile Screen */}
          {bbqMenu.slice(4, 6).map((menuItem) => (
            <BBQItem menuItem={menuItem} item={item} key={menuItem.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
