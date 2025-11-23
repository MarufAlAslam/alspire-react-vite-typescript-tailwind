import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import logo from "../assets/logo.png";

const navItems = ["Home", "Features", "Pricing", "Contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-8 left-0 right-0 z-50 flex justify-center px-4"
    >
      <nav
        className={`
          bg-white rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          transition-all duration-300 w-full max-w-[1200px]
          ${isScrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.16)]" : ""}
        `}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="Alspire" className="h-[22px]" />
          </div>

          {/* Navigation Links */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-[18px] font-medium text-gray-800 hover:bg-[#F5F5F5] 
                           transition-colors px-5 py-[14px] rounded-[15px] block"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

          {/* Get Started Button */}
          <button
            className="bg-[#F5F5F5] text-[16px] font-semibold px-5 py-[14px] rounded-[15px] 
                     transition-all duration-200 relative overflow-hidden group flex items-center justify-center"
          >
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] whitespace-nowrap">
              Get Started
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 whitespace-nowrap">
              Get Started
            </span>
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
