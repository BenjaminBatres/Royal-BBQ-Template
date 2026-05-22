import React from "react";
import Header from "./components/Header";
import Footer from "./components/Sections/Footer";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

export default function NotFound() {
  return (
    <>
      <Header />
      <div className="pt-28 pb-95 px-5 overflow-hidden relative">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-[64px] tablet:text-[112px] leading-none 2xl:text-[140px] uppercase font-bold text-center mb-10">
            Page not found
          </h2>
          <p className="text-center max-w-md mx-auto text-lg">
            Sorry, the page you are looking for doesn't exist or has been moved.
            Try searching our site
          </p>
          <div className="flex justify-center">
            <Link
              href={"/"}
              className="group mt-8 flex items-center gap-3 rounded-full bg-orange px-6 py-3 text-sm font-semibold uppercase sm:text-lg"
            >
              Back to home
              <div className="relative h-8 w-8 overflow-hidden text-2xl">
                <span className="absolute inset-0 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-full">
                  <BsArrowRight />
                </span>

                <span className="absolute inset-0 flex items-center justify-center -translate-x-full transition-transform duration-300 group-hover:translate-x-0">
                  <BsArrowRight />
                </span>
              </div>
            </Link>
            <div className="absolute left-1/2 -translate-x-1/2 -bottom-15 tablet:-bottom-30">
              <p className="text-[195px] sm:text-[249px] md:text-[400px] leading-none tracking-tighter font-bold">
                404
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
