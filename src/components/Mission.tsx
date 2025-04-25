"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import "../pages/Main.css";

export default function MissionSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section
      ref={ref}
      className="py-20 sm:py-24 md:py-28 bg-black text-white px-6 flex items-center justify-center"
    >
      <motion.div
        style={{ opacity }}
        className="max-w-3xl text-center space-y-6"
      >
        <h2 className="font-montserrat text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          We grow Brands with creativity and innovation.
        </h2>
        <p className="text-gray-300 text-base sm:text-lg md:text-xl">
          From stunning websites to immersive digital experiences — our
          solutions are designed to make you{" "}
          <span className="relative inline-block after:block after:h-[3px] after:w-full after:bg-[#6f0fa7] after:absolute after:bottom-[-5px] after:left-0">
            timeless
          </span>
        </p>
      </motion.div>
    </section>
  );
}
