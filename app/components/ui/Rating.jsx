import React from "react";
import { IoStarHalfSharp, IoStarSharp } from "react-icons/io5";

export default function Rating({ rating, fontSize }) {
  return (
    <div className="flex gap-1 items-center">
      {new Array(Math.floor(rating)).fill(0).map((_, id) => (
        <div key={id}>
          <IoStarSharp className={`text-orange ${fontSize}`} />
        </div>
      ))}
      {!Number.isInteger(rating) && (
        <IoStarHalfSharp className={`text-orange ${fontSize}`} />
      )}
    </div>
  );
}
