import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Products", path: "/products" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowHeader(false); // Hide on scroll down
      } else {
        setShowHeader(true); // Show on scroll up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 md:px-12 py-5 bg-black transition-all duration-500 ease-in-out ${
          showHeader
            ? "translate-y-0 opacity-100 shadow-md"
            : "-translate-y-full opacity-0"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 text-white">
          {/* Logo */}
          <Link to="/" className="text-xl font-bold tracking-tight">
            AG
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `group relative text-md font-bold text-white transition-colors duration-300 
         ${isActive ? "text-white" : "text-white"}`
                }
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-[#6f0fa7] transition-all duration-300 group-hover:w-full"></span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile menu toggle */}
          <div className="md:hidden">
            <button onClick={() => setMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Sidebar overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/70 transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Sidebar from right */}
      <div
        className={`fixed top-0 right-0 h-full w-61 z-50 px-6 py-6 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden bg-black/30 backdrop-blur-md backdrop-saturate-150 border-l border-white/10`}
      >
        {/* Close button aligned with burger menu */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-6 text-white z-50"
        >
          <X size={24} />
        </button>

        <nav className="space-y-4 mt-12">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `block text-md font-medium transition ${
                  isActive ? "text-white" : "text-gray-300 hover:text-white"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
