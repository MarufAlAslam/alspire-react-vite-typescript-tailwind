import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navItems = ["Home", "Features", "Pricing", "Contact"];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      className="sticky top-0 xl:top-8 left-0 right-0 z-50 xl:flex xl:justify-center xl:px-4 mx-auto xl:max-w-[840px]"
    >
      <nav
        className={`
          bg-white xl:rounded-[30px] shadow-[0_8px_30px_rgba(0,0,0,0.12)]
          transition-all duration-300 w-full xl:max-w-[1200px]
          ${isScrolled ? "shadow-[0_8px_40px_rgba(0,0,0,0.16)]" : ""}
        `}
      >
        <div className="flex items-center justify-between px-8 py-4">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} alt="AIspare" className="h-[22px]" />
          </div>

          {/* Navigation Links - Desktop (1200px+) */}
          <ul className="hidden xl:flex items-center gap-1">
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

          {/* Get Started Button - Desktop */}
          <button
            className="hidden xl:flex bg-[#F5F5F5] text-[16px] font-semibold px-5 py-[14px] rounded-[15px] 
                     transition-all duration-200 relative overflow-hidden group items-center justify-center"
          >
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] whitespace-nowrap">
              Get Started
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 whitespace-nowrap">
              Get Started
            </span>
          </button>

          {/* Hamburger Menu - Tablet/Mobile (< 1200px) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden w-10 h-10 flex items-center justify-center text-gray-800"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="xl:hidden overflow-hidden border-t border-gray-200"
            >
              <ul className="px-8 py-4 space-y-2">
                {navItems.map((item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-[18px] font-medium text-gray-800 hover:bg-[#F5F5F5] 
                               transition-colors px-5 py-[14px] rounded-[15px] block"
                    >
                      {item}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    className="w-full bg-[#F5F5F5] text-[16px] font-semibold px-5 py-[14px] rounded-[15px] 
                             transition-all duration-200"
                  >
                    Get Started
                  </button>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
}
