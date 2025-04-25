import "../pages/Main.css";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

export default function StatsSection() {
  const [ref, inView] = useInView({ triggerOnce: true });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) {
      setStartCount(true);
    }
  }, [inView]);

  return (
    <section className="relative text-white">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#00000]/80 via-[#00000]/60 to-[#00000]/50 z-0" />

      {/* Content */}
      <div className="relative z-10 px-6 pt-20 pb-30 sm:px-8 md:px-16 lg:px-32 xl:px-40">
        <div className="max-w-4xl mx-auto text-center space-y-5">
          <p className="text-sm uppercase tracking-wider text-gray-300">
            Our Track Record
          </p>
          <h3 className="text-balance text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Trusted by Brands & Businesses
          </h3>
          <p className="leading-relaxed mx-auto text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
            We collaborate with startups, established companies, and global
            brands to create impactful digital solutions that drive growth and
            innovation.
          </p>
        </div>

        {/* Counters */}
        <div
          ref={ref}
          className="relative z-10 stat-background mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto p-8 text-center border border-white/ rounded-2xl divide-y sm:divide-y-0 sm:divide-x divide-white/20 backdrop-blur-md bg-black/40"
        >
          <div className="py-6 px-4">
            <h4 className="text-3xl md:text-4xl font-bold">
              {startCount && <CountUp end={50} duration={3} />}+
            </h4>
            <p className="mt-2 text-sm text-gray-300">Projects Delivered</p>
          </div>
          <div className="py-6 px-4">
            <h4 className="text-3xl md:text-4xl font-bold">
              {startCount && <CountUp end={25} duration={3} />}+
            </h4>
            <p className="mt-2 text-sm text-gray-300">Happy Clients</p>
          </div>
          <div className="py-6 px-4">
            <h4 className="text-3xl md:text-4xl font-bold">
              {startCount && <CountUp end={2} duration={3} />}+
            </h4>
            <p className="mt-2 text-sm text-gray-300">Years Experience</p>
          </div>
          <div className="py-6 px-4">
            <h4 className="text-3xl md:text-4xl font-bold">
              {startCount && <CountUp end={5} duration={3} />}+
            </h4>
            <p className="mt-2 text-sm text-gray-300">Team Members</p>
          </div>
        </div>
      </div>
    </section>
  );
}
