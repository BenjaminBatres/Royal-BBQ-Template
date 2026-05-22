"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import Sidebar from "./Sidebar";

import { motion } from "motion/react";

export default function Header() {
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

  const socials = [<FaFacebookF />, <FaTwitter />, <FaInstagram />];
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="p-4 bg-orange">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10px" }}
          transition={{
            duration: 0.4,
          }}
          className="max-w-7xl mx-auto flex flex-wrap gap-3 sm:gap-0 justify-center sm:justify-between items-start ease-linear duration-200 transition-all"
        >
          <div className="flex gap-5 items-center">
            <h3 className="sm:text-[17px] font-semibold">Mon-Wed: 11a-9p</h3>
            <div className="italic">/</div>
            <h3 className="sm:text-[17px] font-semibold">Thru-Sat: 11a-10p</h3>
          </div>
          <div className="flex sm:flex-col md:flex-row gap-4 items-center">
            <h3 className="sm:text-[17px] font-semibold">123 456 7899</h3>
            <div className="flex gap-4">
              <div className="italic">/</div>
              <h3 className="sm:text-[17px] font-semibold">
                1830 E Parks Hwy 99654
              </h3>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="py-5 px-4 bg-[#141414]">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.4,
            delay: 0.2,
          }}
          className="max-w-7xl mx-auto flex flex-wrap gap-2 justify-between items-center ease-linear transition-all duration-200"
        >
          <h1 className="text-4xl sm:text-5xl font-bold uppercase">
            Royal BBQ
          </h1>
          <ul className="hidden md:flex gap-11">
            {links.map((link, id) => (
              <li key={id}>
                <Link
                  href={link.path}
                  key={id}
                  className="text-[17px] font-semibold uppercase hover:text-orange duration-300 ease-linear"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden md:flex gap-4">
            {socials.map((social, id) => (
              <div
                key={id}
                className="bg-[#1a1a1a] h-10 w-10 flex items-center justify-center cursor-not-allowed hover:bg-orange ease-linear duration-300"
              >
                {social}
              </div>
            ))}
          </div>
          <button
            className="md:hidden cursor-pointer hover:text-orange duration-300 ease-linear"
            onClick={() => setIsOpen(!isOpen)}
          >
            <IoMdMenu className="text-[42px]" />
          </button>
        </motion.div>
      </div>
      <Sidebar
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        links={links}
        socials={socials}
      />
    </>
  );
}
