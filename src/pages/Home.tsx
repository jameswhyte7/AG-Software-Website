// Updated HomePage.tsx
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

import { FaArrowUp } from "react-icons/fa";
import "./Main.css";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Mission from "../components/Mission";
import ResponsiveTabDropdown from "../components/Tabs";
import Stats from "../components/Stats";
import Faq from "../components/Faq";
import Footer from "../components/Footer";

import image1 from "../assets/Sch-Mgt-1.png";
import image2 from "../assets/Ecommerce-4.jpg";
import image3 from "../assets/ticket-1.jpg";
import image4 from "../assets/Church-2.png";
import image5 from "../assets/Shop-1.png";

import image9 from "../assets/steve-johnson-IpZAFZAv46Q-unsplash.jpg";
import image10 from "../assets/solen-feyissa-xHzAiOH00dE-unsplash.jpg";
import image11 from "../assets/bady-abbas-wGyk5XCgraE-unsplash.jpg";
import image12 from "../assets/ot-design-y8ni1P_ijKQ-unsplash.jpg";

export default function HomePage() {
  useEffect(() => {
    document.title = "AG Software | Digital Solutions Agency";
  }, []);

  const [activeTab, setActiveTab] = useState("products");
  const [showScrollButton, setShowScrollButton] = useState(false);
  // const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setShowWelcome(false);
  //   }, 3000);
  //   return () => clearTimeout(timer);
  // }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration
      once: true, // whether animation should happen only once
    });
  }, []);

  return (
    <main className="bg-[#000000] text-gray-900">
      {/* Header */}
      <div className="fixed top-6 left-0 right-0 z-50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>

      {/* Welcome Message */}
      {/* {showWelcome && (
        <div className="fixed top-20 left-1/2 -translate-x-1/2 bg-zinc-900 text-white px-4 py-2 rounded-2xl shadow-md z-50 text-sm sm:text-base">
          👋 Welcome to AG Software! Let’s build something amazing.
        </div>
      )} */}

      {/* Hero & Mission Sections */}
      <Hero />
      <div data-aos="fade-up" data-aos-delay="200">
        <Mission />
      </div>

      {/* Tabs Section */}
      <section
        id="section1"
        className="text-zinc-400 px-4 sm:px-6 md:px-16 scroll-mt-28 mb-16 sm:mb-20 md:mb-28 lg:mb-32"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center">
          {/* Responsive Dropdown */}
          <div className="sticky top-0 z-40 sm:hidden mb-4">
            <ResponsiveTabDropdown
              options={["products", "portfolio", "about us"]}
              selected={activeTab}
              onChange={setActiveTab}
            />
          </div>

          {/* Horizontal Tabs */}
          <div
            className="hidden sm:flex sticky top-0 bg-black z-40 border-b border-[#414141] mb-6 "
            data-aos="fade-down"
            data-aos-delay="100"
          >
            {["products", "portfolio", "about us"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`w-full py-4 text-md font-bold transition duration-300 ${
                  activeTab === tab
                    ? "border-b-8 border-[#414141] text-white"
                    : "border-b-8 border-transparent text-[#414141] hover:border-gray-600/30"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="text-base sm:text-lg leading-relaxed text-white">
            {/* PRODUCTS */}
            {activeTab === "products" && (
              <div className="pt-24 sm:pt-32" data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-6">
                  Recommended Products
                </h3>
                <p className="mb-10 leading-relaxed mx-auto text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl">
                  Enterprise and business solutions to fast-track your
                  operational activities—We've got you covered.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
                  {[
                    {
                      title: "School Management Solution",
                      desc: "Manage student records, fees, attendance, and communication with parents.",
                      image: image1,
                    },
                    {
                      title: "Ecommerce Solution",
                      desc: "Launch an online store with listings, mobile money & secure payments.",
                      image: image2,
                    },
                    {
                      title: "Ticketing Solution",
                      desc: "Manage event tickets, QR scanning, mobile money & notifications.",
                      image: image3,
                    },
                    {
                      title: "Church Management Solution",
                      desc: "Member records, announcements, giving & planning in one platform.",
                      image: image4,
                    },
                    {
                      title: "Shop Management Solution",
                      desc: "POS, inventory & alerts for salons, marts & more.",
                      image: image5,
                    },
                  ].map((product, i) => (
                    <div
                      key={i}
                      className="overflow-hidden text-left p-4 space-y-3 shadow-sm backdrop-blur-sm bg-white/5 border border-gray-600/30 rounded-2xl transition hover:shadow-lg hover:bg-white/10"
                      data-aos="zoom-in"
                      data-aos-delay={`${i * 100}`}
                    >
                      <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-48 object-cover rounded-xl"
                      />
                      <h4 className="text-lg font-semibold text-white">
                        {product.title}
                      </h4>
                      <p className="text-sm text-zinc-400">{product.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* PORTFOLIO */}
            {activeTab === "portfolio" && (
              <div className="pt-24 sm:pt-32" data-aos="fade-up">
                <h3 className="text-2xl font-bold mb-4">Featured Projects</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
                  {[
                    "🚗 Ride-Hailing App UI",
                    "🛒 E-Commerce Store",
                    "📱 Church Mobile App",
                    "🌐 NGO Website",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="backdrop-blur-sm bg-white/5 border border-gray-600/30 transition hover:shadow-lg hover:bg-white/10 p-4 rounded-2xl shadow-md"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ABOUT */}
            {activeTab === "about us" && (
              <div className="pt-24 sm:pt-32 space-y-16" data-aos="fade-up">
                {/* About Intro */}
                <div className="max-w-3xl mx-auto text-center">
                  <h3 className="text-2xl font-bold mb-4">About AG Software</h3>
                  <p className="leading-relaxed text-base sm:text-lg md:text-xl text-gray-300">
                    We’re at the intersection of technology and creativity. We
                    specialize in building innovative solutions that help
                    businesses thrive and stand out in competitive markets. From
                    software development to digital marketing, branding, and
                    multimedia content, AG Software provides a comprehensive
                    suite of services tailored to elevate businesses and foster
                    creative excellence.
                  </p>
                </div>

                {/* Values Grid */}
                <div
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4"
                  data-aos="zoom-in-up"
                >
                  {[
                    {
                      title: "Our Vision",
                      desc: "To become an admired leader in tech and creative innovation, and build a vibrant tech-creative ecosystem.",
                      icon: "🚀",
                    },
                    {
                      title: "Our Mission",
                      desc: "To offer high impact solutions and creative designs that drive sales and growth, while fostering a collaborative community that empowers tech and creative talents to excel.",
                      icon: "🎯",
                    },
                    {
                      title: "Our Values",
                      desc: "Creativity, Community, and Excellence.",
                      icon: "💡",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="backdrop-blur-sm bg-white/5 border border-gray-600/30 p-6 rounded-2xl shadow-md space-y-3 transition hover:shadow-lg hover:bg-white/10"
                      data-aos="fade-up"
                      data-aos-delay={`${i * 100}`}
                    >
                      <div className="text-3xl">{item.icon}</div>
                      <h4 className="text-lg font-semibold text-white">
                        {item.title}
                      </h4>
                      <p className="text-sm text-zinc-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="bg-[#000000] text-white px-4 sm:px-6 md:px-16"
        data-aos="fade-up"
      >
        <div className="max-w-7xl mx-auto text-center mb-8 sm:mb-10 md:mb-14 lg:mb-16">
          <h2 className="text-4xl font-bold mb-4 tracking-tight">
            Business growth has never been easier
          </h2>
          <p className="leading-relaxed mx-auto text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mb-10">
            Grow and transform your business with a wide range of services
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Software Development",
                subtitle: "Custom-built apps & systems",
                description:
                  "From MVPs to enterprise-level software, we craft scalable, user-focused applications tailored to your business goals.",
                image: image9,
                bg: "rgba(148, 137, 153, 0.9)",
              },
              {
                title: "Website Development",
                subtitle: "Responsive & SEO-ready sites",
                description:
                  "We design and develop responsive, high-performing websites that convert visitors into loyal customers.",
                image: image10,
                bg: "rgba(51, 18, 73, 0.9)",
              },
              {
                title: "Branding & Design",
                subtitle: "Logos, graphics & identity",
                description:
                  "Elevate your brand with creative visuals, logo design, and consistent identity systems that leave a lasting impression.",
                image: image11,
                bg: "rgba(156, 0, 21, 0.9)",
              },
              {
                title: "Digital Marketing",
                subtitle: "Ads, SEO & online growth",
                description:
                  "Drive traffic, increase conversions, and grow your business online with tailored SEO, PPC, and targeted ad campaigns.",
                image: image12,
                bg: "rgba(89, 116, 122, 0.9)",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="group relative w-full h-[424px] overflow-hidden cursor-pointer shadow-xl backdrop-blur"
                data-aos="zoom-in"
                data-aos-delay={`${i * 100}`}
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="relative z-10 h-full w-full flex flex-col items-center justify-start pt-16 text-center px-4">
                  <h3 className="text-white text-lg font-bold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-300">{service.subtitle}</p>
                </div>
                <div
                  className="absolute inset-0 flex flex-col items-center justify-start pt-36 px-4 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"
                  style={{ backgroundColor: service.bg }}
                >
                  <p className="text-sm text-gray-300 pt-6">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <Faq />

      {/* Footer */}
      <Footer />

      {/* Scroll to top */}
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-purple-700 text-white shadow-lg hover:bg-purple-800 transition"
        >
          <FaArrowUp />
        </button>
      )}
    </main>
  );
}
