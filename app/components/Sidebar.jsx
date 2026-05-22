import Link from "next/link";
import React from "react";

export default function Sidebar({ isOpen, setIsOpen, links, socials }) {
  return (
    <div className="relative">
      <div
        className={`${isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"} border-0 fixed transition-all duration-500 border-r-3 border-orange top-0 left-0 h-full w-[70%] sm:w-80 bg-white z-30 md:hidden`}
      >
        <div className="pt-10 px-4 pb-7.5 bg-[#eff1f5]">
          <h2 className="text-black text-center text-[42px]/12 sm:text-5xl font-bold">
            Royal BBQ
          </h2>
        </div>
        <ul className="px-10 pt-8 max-h-[calc(100vh-200px)] overflow-y-auto">
          {links.map((link, id) => (
            <li key={id} className="border-b border-black pl-3 py-3">
              <Link
                href={link.path}
                className="text-black block text-[17px]"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="absolute bottom-20 w-full">
          <div className="px-10">
            <div className="max-w-75 mx-auto">
              <h2 className="text-xl font-semibold text-black mb-4">Socials</h2>
              <div className="flex flex-wrap gap-4">
                {socials.map((social, id) => (
                  <div
                    key={id}
                    className="bg-[#1a1a1a] h-10 w-10 flex items-center justify-center cursor-not-allowed hover:opacity-90 duration-300"
                  >
                    {social}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => setIsOpen(false)}
        className={`md:hidden fixed inset-0 flex justify-center items-center bg-[#41403b]/30 z-25 transition-all duration-700 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      ></div>
    </div>
  );
}
