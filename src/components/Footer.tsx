import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="text-[#000000]">
  {/* Connect Section - Full Width */}
  <div className="w-full bg-[#FFFFFF] py-24">
    <div className="text-center">
      <h3 className="text-2xl lg:text-3xl font-bold mb-6">
        Connect with us
      </h3>
      <div className="flex justify-center space-x-8">
        <a
          href="#"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaInstagram color="#000000" size={32} />
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaFacebookF color="#000000" size={32} />
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaXTwitter color="#000000" size={32} />
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaLinkedin color="#000000" size={32} />
        </a>
        <a
          href="#"
          className="hover:scale-110 transition-transform duration-300"
        >
          <FaYoutube color="#000000" size={32} />
        </a>
      </div>
    </div>
  </div>

  {/* Bottom Section - Balanced Padding */}
  <div className="border-t border-[#000000] py-12 px-6 sm:px-8 lg:px-12">
    <div className="flex flex-col lg:flex-row items-center justify-between text-sm text-[#414141] gap-3 max-w-7xl mx-auto">
      <div>Handcrafted by AG Software</div>
      <div>
        © {new Date().getFullYear()} AG Software. All rights reserved.
      </div>
    </div>
  </div>
</footer>


  );
};

export default Footer;
