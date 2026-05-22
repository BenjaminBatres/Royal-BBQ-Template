import Image from "next/image";
import Link from "next/link";
import React from "react";
import Rating from "./Rating";
import * as motion from "motion/react-client"
export default function BBQItem({ menuItem }) {
  return (
    <Link href={`/menu/${menuItem.id}`} className="group">
      <figure className="h-95 overflow-hidden">
        <Image
          src={menuItem.image}
          loading="eager"
          alt={menuItem.name}
          className="w-full h-full object-cover rounded-lg group-hover:scale-110 transition-all ease-linear duration-250"
        />
      </figure>
      <div className="pt-6 pb-2 border-b border-zinc-600 mb-4">
        <h2 className="text-2xl mb-2 font-semibold uppercase">{menuItem.name}</h2>
        <p className="text-xl">{menuItem.price}</p>
      </div>
      <div className="flex gap-2">
      <Rating rating={menuItem.rating} fontSize={'text-sm'}/>
        <p>{menuItem.rating} Stars</p>
      </div>
    </Link>
  );
}
