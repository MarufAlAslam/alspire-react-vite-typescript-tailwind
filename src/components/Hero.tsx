import { motion } from "framer-motion";
import slider1 from "../assets/hero-slider/1.png";
import slider2 from "../assets/hero-slider/2.png";
import slider3 from "../assets/hero-slider/3.png";
import slider4 from "../assets/hero-slider/4.png";

const sliderImages = [slider1, slider2, slider3, slider4];

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-0 pb-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="max-w-5xl mx-auto text-center mb-12 space-y-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center bg-blue-600 text-white rounded-full text-sm font-medium overflow-hidden border-2 border-blue-600 mt-28"
        >
          <span className="bg-white text-blue-600 px-4 py-2">New Feature</span>
          <span className="px-4 py-2">Predictive Insights</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[50px] xl:text-[90px] font-bold leading-[1.1]"
        >
          Improve Your
          <br />
          Business with AI
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-[24px] font-medium text-gray-600 max-w-3xl mx-auto leading-[1.4]"
        >
          Unlock the potential of AI to streamline processes, boost productivity,
          and drive innovation with AIspire.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row flex-wrap gap-4 justify-center pt-2 w-full max-w-md mx-auto md:max-w-none"
        >
          <button className="w-full md:w-auto bg-black text-white text-[16px] font-semibold px-8 py-[14px] rounded-[15px] transition-all duration-200 relative overflow-hidden group flex items-center justify-center">
            <span className="inline-block transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] whitespace-nowrap">
              Get Started
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 whitespace-nowrap">
              Get Started
            </span>
          </button>

          <button className="w-full md:w-auto bg-white border-2 border-gray-200 text-black text-[16px] font-semibold px-8 py-[14px] rounded-[15px] transition-all duration-200 relative overflow-hidden group flex items-center justify-center">
            <span className="transition-transform duration-300 ease-in-out group-hover:-translate-y-[150%] whitespace-nowrap flex items-center gap-2">
              Request a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
            <span className="absolute inset-0 flex items-center justify-center translate-y-[150%] transition-transform duration-300 ease-in-out group-hover:translate-y-0 whitespace-nowrap gap-2">
              Request a Demo
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </button>
        </motion.div>
      </div>

      {/* Infinite Slider */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="w-full overflow-hidden relative"
      >
        <div className="flex mt-20 animate-scroll gap-6">
          {/* Repeat images multiple times for seamless loop */}
          {[...sliderImages, ...sliderImages].map((img, index) => (
            <div
              key={index}
              className="flex-shrink-0 h-[330px] w-auto"
            >
              <img
                src={img}
                alt={`Slider ${(index % 4) + 1}`}
                className="h-full w-auto object-cover rounded-3xl"
              />
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
        
        @media (max-width: 768px) {
          .animate-scroll {
            animation: scroll 12s linear infinite;
          }
        }
        
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
