import React from "react";
import { motion } from "motion/react";
import Rating from "./Rating";
import Image from "next/image";
export default function MenuItem({ menuItem }) {
  return (
    <div className="grid laptop:grid-cols-2 gap-10">
      <motion.figure
        initial={{ opacity: 0, scale: 0.75 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.7,
        }}
      >
        <Image
          src={menuItem.image}
          alt=""
          loading="eager"
          className="size-full object-cover"
        />
      </motion.figure>
      <motion.div
        initial={{ opacity: 0, y: -120 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{
          duration: 0.7,
        }}
      >
        <h2 className="text-3xl sm:text-[40px] font-medium uppercase mb-2">
          {menuItem.name}
        </h2>
        <Rating rating={menuItem.rating} />
        <p className="mt-4 text-2xl pb-4 border-b border-zinc-600">
          {menuItem.price}
        </p>
        <p className="py-4 border-y mb-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
          nesciunt! Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Incidunt, velit!
        </p>
        <h3 className="text-xl mb-2 font-semibold">Ingredients</h3>
        <div className="space-y-2 pl-4">
          {menuItem.ingredients.map((ingredient, id) => (
            <li key={id} className="capitalize">
              {ingredient}
            </li>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
