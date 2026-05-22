"use client";
import React, { useEffect, useRef } from "react";
import TestimonialImg1 from "../../assets/Testimonials-Images/Testimonial-img1.jpg";
import TestimonialImg2 from "../../assets/Testimonials-Images/Testimonial-img2.jpg";
import TestimonialImg3 from "../../assets/Testimonials-Images/Testimonial-img3.jpg";
import Testimonial from "../ui/Testimonial";
import { motion, useAnimation, useInView } from "motion/react";
export default function Testimonials() {
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
    hidden: { opacity: 0, y: 75 },
    show: {
      opacity: 1,
      y: 0,
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

  const testimonials = [
    {
      pfp: TestimonialImg1,
      name: "Sakura Tanaka",
      role: "Business Executive",
      review:
        "The flavors at Dinevo are simply unforgettable! Every single dish feels like a journey through authentic taste.",
      flexDirection: "flex-col",
    },
    {
      pfp: TestimonialImg2,
      name: "Aiko Matsuda",
      role: "Business Executive",
      review:
        "The talented chefs at Dinevo truly know how to perfectly balance authentic flavor with modern style and experience.",
      flexDirection: "flex-col tablet:flex-col-reverse",
    },
    {
      pfp: TestimonialImg3,
      name: "Emi Suzuki",
      role: "Business Executive",
      review:
        "From the warm ambiance to the friendly staff, Royal BBQ made our evening truly memorable and special experience.",
      flexDirection: "flex-col",
    },
  ];
  return (
    <section className="py-20 px-5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.5,
            ease: "linear",
          }}
        >
          <h3 className="text-orange uppercase font-semibold mb-4">
            Our Testimonials
          </h3>
          <h2 className="text-5xl uppercase font-bold font-cormorant-garamond max-w-md mb-12">
            Discover the art of taste
          </h2>
        </motion.div>

        <motion.div
          ref={containerRef}
          initial="hidden"
          variants={container}
          animate={mainControls}
          className="grid tablet:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial, id) => (
            <Testimonial key={id} item={item} testimonial={testimonial} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
