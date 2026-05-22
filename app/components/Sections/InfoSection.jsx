import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaRegClock,
  FaTwitter,
} from "react-icons/fa";
import { GoMail } from "react-icons/go";
import * as motion from "motion/react-client";

export default function InfoSection() {
  const socials = [<FaFacebookF />, <FaTwitter />, <FaInstagram />];
  return (
    <section className="p-5 bg-[#232323]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.4,
          delay: 0.2,
        }}
        className="max-w-7xl mx-auto flex  flex-col sm:flex-row items-center justify-between gap-5"
      >
        <div className="flex flex-wrap sm:flex-nowrap sm:flex-col md:flex-row gap-8 sm:gap-3 md:gap-10 justify-center md:items-center">
          <div className="flex gap-2 items-center">
            <FaRegClock />
            <h2>Opening Hours: 18:00 - 2:00</h2>
          </div>
          <div className="flex gap-2 items-center">
            <GoMail />
            <h2>RoyalBBQ@gmail.com</h2>
          </div>
        </div>
        <div className="flex gap-2.5">
          {socials.map((social, id) => (
            <div
              key={id}
              className="h-12 w-12 flex items-center justify-center bg-white text-black rounded-full text-xl cursor-not-allowed hover:bg-orange duration-300 ease-linear hover:scale-110 hover:text-white"
            >
              {social}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
