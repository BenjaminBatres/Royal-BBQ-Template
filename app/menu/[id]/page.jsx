"use client";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import bbqMenu from "../../data/bbq-menu";
import Footer from "@/app/components/Sections/Footer";
import BBQItem from "@/app/components/ui/BBQItem";
import { motion } from "motion/react";
import MenuItem from "@/app/components/ui/MenuItem";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Link from "next/link";

export default function Page() {
  const { id } = useParams();
  const [range, setRange] = useState([0, 3]);
  useEffect(() => {
    const random = Math.random() < 0.5 ? [0, 3] : [5, 8];
    setRange(random);
  }, []);
  const [start, end] = range;

  const productName = bbqMenu.find((item) => item.id === id)?.name;
  return (
    <>
      <Header />
      <section className="pt-15 pb-30 px-5">
        <div className="max-w-3xl laptop:max-w-7xl mx-auto w-full">
          <div className="mb-13 flex flex-wrap items-center gap-1">
            <Link href={"/"} className="uppercase sm:text-xl font-semibold">
              Royal BBQ
            </Link>
            <MdOutlineKeyboardArrowRight className="text-lg sm:text-[22px]" />
            <Link href={"/menu"} className="uppercase sm:text-xl font-semibold">
              Menu
            </Link>
            <MdOutlineKeyboardArrowRight className="text-lg sm:text-[22px]" />
            <p className="sm:text-xl font-medium uppercase">{productName}</p>
          </div>
          {bbqMenu
            .filter((menuItem) => menuItem.id === id)
            .map((menuItem) => (
              <MenuItem key={menuItem.id} menuItem={menuItem} />
            ))}
          <motion.div
            initial={{ opacity: 0, x: -75 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
            }}
          >
            <h2 className="text-3xl font-semibold uppercase mt-15 mb-2.5">
              Overview
            </h2>
            <p className="mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem
              labore eveniet quo recusandae, necessitatibus quidem non libero.
              Iusto, nihil error, facere ipsum magnam eos vitae consequatur
              delectus eligendi aspernatur obcaecati ratione amet fugiat ut
              nesciunt nisi dignissimos inventore? Nostrum, officiis. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
              nisi? Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Ipsam, laboriosam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Sed impedit deserunt, blanditiis temporibus
              libero numquam velit. Amet quae nesciunt ipsum? Recusandae quae
              quia obcaecati, laudantium accusamus voluptatem commodi placeat
              deleniti?
            </p>

            <h2 className="text-3xl uppercase font-semibold mb-10">
              Try our other options
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.7,
            }}
            className="grid tablet:grid-cols-2 laptop:grid-cols-3 gap-8 "
          >
            {bbqMenu
              .filter((item) => item.id !== id)
              .slice(start, end)
              .map((menuItem) => (
                <div key={menuItem.id}>
                  <BBQItem menuItem={menuItem} />
                </div>
              ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
