"use client";
import Link from "next/link";
import React, { useEffect, useRef } from "react";
import { IoLocationSharp } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { motion, useAnimation, useInView } from "motion/react";
export default function Footer() {
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

  const links = [
    {
      path: "/",
      name: "Home",
    },
    {
      path: "/about",
      name: "About",
    },
    {
      path: "/menu",
      name: "Menu",
    },
    {
      path: "/contact",
      name: "Contact",
    },
  ];

  const contactInfo = [
    {
      icon: <FaPhoneAlt className="text-xl" />,
      title: "Phone",
      description: "123 456 7899",
    },
    {
      icon: <MdEmail className="text-2xl" />,
      title: "Email",
      description: "RoyalBBQ@gmail.com",
    },
    {
      icon: <IoLocationSharp className="text-3xl" />,
      title: "Location",
      description: "1830 E Parks Hwy 99654",
    },
  ];

  const year = new Date();
  return (
    <footer className="pt-20 px-5 bg-[#181714]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
          }}
          className="flex flex-wrap items-center justify-center gap-y-6 sm:justify-between border-b border-zinc-600 pb-10 mb-10"
        >
          <h2 className="text-5xl uppercase font-bold">Royal BBQ</h2>
          <ul className="flex gap-8">
            {links.map((link, id) => (
              <li key={id}>
                <Link href={link.path} className="uppercase">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -75 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="flex flex-wrap gap-y-7 justify-between items-center mb-10"
        >
          {contactInfo.map((info, id) => (
            <div key={id} className="flex items-center gap-4">
              <div className="flex justify-center items-center h-15 w-15 sm:h-17 sm:w-17 bg-orange rounded-full">
                {info.icon}
              </div>
              <div>
                <h3>{info.title}</h3>
                <p>{info.description}</p>
              </div>
            </div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            delay: 0.3,
            duration: 0.5,
          }}
          className="text-center py-10"
        >
          © {year.getFullYear()} Royal BBQ, All Rights Reserved
        </motion.div>
      </div>
    </footer>
  );
}
