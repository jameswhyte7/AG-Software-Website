import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Spline from "@splinetool/react-spline";

export default function HeroSection() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const xLeft = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
  const xRight = useTransform(scrollYProgress, [0, 0.2], [0, 100]);
  const overlayOpacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);

  // Header Type Effect
  const [text] = useTypewriter({
    words: ["a 360° digital solution for businesses"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 30,
    delaySpeed: 500,
  });

  return (
    <section
      ref={ref}
      className="relative bg-black pt-20 min-h-screen flex items-center text-white overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0 from-[#0a0a0a]/50 via-[#111]/40 to-transparent pointer-events-none" />

      {/* Animated Text Overlay */}
      <motion.div
        className="absolute inset-0 z-20 bg-black flex items-end justify-center"
        style={{ opacity: overlayOpacity, pointerEvents: "none" }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="text-3xl sm:text-5xl md:text-6xl pb-6 font-extrabold text-center text-white tracking-widest drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          TAKING YOU BEYOND THE FUTURE
        </motion.h2>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 sm:px-8 lg:px-10 py-10 md:py-20">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-16">
          {/* Left Content */}
          <motion.div
            style={{ x: xLeft }}
            className="w-full md:w-2/3 text-center md:text-left flex flex-col items-center md:items-start"
          >
            <h1
              className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight text-white mb-4"
              data-aos="fade-up"
            >
              TURN BUSINESS PROBLEMS INTO OPPORTUNITIES
            </h1>

            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 max-w-xl"
              data-aos="fade-right"
              data-aos-delay="500"
            >
              {text}
              <Cursor cursorStyle="_" />
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#6f0fa7] text-sm sm:text-base text-gray-100 hover:bg-[#6f0fa7]/10 transition-all duration-300 cursor-pointer">
                Our Services
              </button>
              <button className="w-full sm:w-auto px-6 py-3 rounded-full border border-[#414141] text-sm sm:text-base text-gray-100 hover:bg-[#414141]/10 transition-all duration-300 cursor-pointer">
                Contact us
              </button>
            </div>
          </motion.div>

          {/* Right Spline 3D Visual */}
          <motion.div
            style={{ x: xRight }}
            className="w-full md:w-1/3 h-[300px] sm:h-[400px] flex items-center justify-center"
          >
            <Spline scene="https://prod.spline.design/TRfTj83xgjIdHPmT/scene.spline" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
