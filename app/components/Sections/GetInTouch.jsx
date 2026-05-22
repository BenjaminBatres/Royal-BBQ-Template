"use client";
import React, { useEffect, useRef } from "react";
import GetInTouchImg from "../../assets/GetInTouch-img.jpg";
import Image from "next/image";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";
import { useAnimation, useInView } from "motion/react";
import CompanyInfo from "../ui/CompanyInfo";
export default function GetInTouch() {
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

  const companyInfo = [
    {
      type: "contact",
      title: "Find us",
      infos: [
        { icon: <IoLocationSharp />, name: "1830 E Parks Hwy 99654" },
        { icon: <FaPhoneAlt />, name: "123 456 7899" },
        { icon: <MdEmail />, name: "RoyalBBQ@gmail.com" },
      ],
    },
    {
      title: "Opening hours",
      infos: ["Mon: 11am-9pm", "Thru-Sat: 11a-10pm", "Sun: CLOSED"],
    },
  ];

  useEffect(() => {
    if (isInView) {
      mainControls.start("show");
    }
  }, [isInView]);
  return (
    <section className="py-20 md:py-40 md:px-6">
      <div className="max-w-7xl mx-auto w-full relative py-10 md:py-20 px-5 md:px-8 h-min">
        <div className="h-full bg-[#181714] max-w-182 py-10 md:py-20 px-6 md:px-12 rounded-lg">
          <motion.div 
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.7,
            ease: "linear",
          }}>
          <h3 className="text-xl font-medium mb-6 text-orange">Get in Touch</h3>
          <h2 className="text-5xl md:text-6xl font-bold uppercase tracking-tight leading-16 mb-6">
            Flavors that bring joy to every bite
          </h2>
          <p className="mb-10">
            Our dishes are made with only fresh and local ingredients.
          </p>

          </motion.div>

          <motion.div
            ref={containerRef}
            initial="hidden"
            variants={container}
            animate={mainControls}
            className="grid md:grid-cols-2 gap-6"
          >
            {companyInfo.map((info, id) => (
              <CompanyInfo info={info} item={item} key={id} />
            ))}
          </motion.div>
        </div>
        <figure className="absolute inset-0 -z-10">
          <Image
            src={GetInTouchImg}
            alt=""
            className="rounded-lg h-full object-cover w-full"
          />
        </figure>
      </div>
    </section>
  );
}
