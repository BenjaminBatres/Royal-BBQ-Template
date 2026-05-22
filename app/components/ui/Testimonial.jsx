import Image from "next/image";
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import Rating from "./Rating";
import { motion } from "motion/react";

export default function Testimonial({ testimonial, item }) {
  return (
    <motion.div variants={item} className={`flex ${testimonial.flexDirection} gap-8`}>
      <div className={`bg-[#181714] px-5 py-8 rounded-[10px] h-111 flex ${testimonial.flexDirection} justify-between`}>
        <FaQuoteLeft className="text-6xl text-[#ededed]" />
        <div>
          <div className="space-y-6">
            <Rating rating={5} fontSize={"text-xl"} />
            <p className="text-2xl xl:text-[28px] leading-tight">{testimonial.review}</p>
          </div>
        </div>
      </div>
      <div className="bg-[#181714] px-5 py-6 flex items-center gap-6 rounded-[10px]">
        <div className="">
          <Image
            src={testimonial.pfp}
            alt=""
            className="h-18 w-18 rounded-sm object-cover"
          />
        </div>
        <div>
          <h3 className="text-xl">{testimonial.name}</h3>
          <p>{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
}
