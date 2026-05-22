import React from "react";
import AboutImg1 from "../../assets/About-img1.jpg";
import AboutImg2 from "../../assets/About-img2.jpg";
import AboutImg3 from "../../assets/About-img3.jpg";
import Image from "next/image";
import Link from "next/link";
import * as motion from "motion/react-client";

export default function AboutSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8">
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            ease: "linear",
          }}
          className="border border-zinc-700 lg:pt-5 pt-10 pb-6 px-10 lg:px-5 space-y-5 w-full md:w-3/4 lg:w-2/6 "
        >
          <Image
            src={AboutImg1}
            alt=""
            className=" h-full md:w-full xl:h-55 object-cover"
          />
          <Image
            src={AboutImg2}
            alt=""
            className=" md:w-full h-full lg:h-55 object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          className="text-center flex flex-col items-center w-[90%] lg:w-1/2"
        >
          <h3 className="text-orange uppercase font-semibold mt-3 mb-2 xl:mb-8">
            About our company
          </h3>
          <h2
            className="font-cormorant-garamond font-bold uppercase text-[40px] leading-tight xl:text-5xl mb-10 max-w-md lg:max-w-full
                 mx-auto"
          >
            Delicious Food At Our Restaurant
          </h2>
          <p className="text-zinc-300 leading-loose mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
            recusandae nemo voluptas iusto sapiente neque deserunt repudiandae
            nobis adipisci dolore.
          </p>
          <div className="hidden md:block h-20 w-px bg-[#393939] mb-6"></div>
          <Link
            href={"/menu"}
            className='uppercase bg-orange py-4 px-8 overflow-hidden font-semibold relative transition-colors duration-500 z-10 before:content-[""] before:absolute before:-z-1 before:bg-white before:h-30 before:w-50 hover:before:rounded-t-[70%] before:top-full before:left-0 before:transition-all before:duration-700  hover:before:left-0 hover:before:-top-14 hover:text-orange'
          >
            Discover Menu
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 120 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{
            duration: 0.8,
            delay: 0.2,
          }}
          className="border border-zinc-700 pt-10 px-10 pb-3 lg:pb-0 lg:pt-5 lg:px-5 md:w-3/4 lg:w-2/6"
        >
          <Image src={AboutImg3} alt="" className="pb-5" />
        </motion.div>
      </div>
    </section>
  );
}
