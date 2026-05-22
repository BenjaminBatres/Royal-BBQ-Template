import Image from "next/image";
import React from "react";
import * as motion from "motion/react-client";
export default function PageHeroSection({ image, title }) {
  return (
    <section className="py-50 relative">
      <Image
        loading="eager"
        src={image}
        alt=""
        className="h-full w-full object-cover absolute inset-0 -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.8,
        }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-5xl sm:text-6xl uppercase text-center font-bold">
          {title}
        </h2>
      </motion.div>
    </section>
  );
}
