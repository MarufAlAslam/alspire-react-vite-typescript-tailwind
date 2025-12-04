import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import vSlider1 from "../assets/v-slider/v-slider-1.png";
import vSlider2 from "../assets/v-slider/v-slider-2.png";
import vSlider3 from "../assets/v-slider/v-slider-3.png";

const sliderImages = [
  {
    id: 1,
    image: vSlider1,
  },
  {
    id: 2,
    image: vSlider2,
  },
  {
    id: 3,
    image: vSlider3,
  },
];

export function CTA() {
  // Duplicate images for seamless loop (enough to cover visible area)
  const duplicatedImages = [...sliderImages, ...sliderImages];

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] rounded-[60px] overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Content */}
            <div className="relative my-auto z-10 py-12 md:py-16 pl-6 md:pl-16 pr-6 xl:pr-0">
              <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                Get Started Now!
              </span>
              <h2 className="text-[48px] xl:text-[68px] font-britti font-bold leading-[1] text-white mb-6">
                Ready to Unlock the Power of AI with AIspare?
              </h2>
              <p className="text-[18px] text-gray-400 mb-8 leading-relaxed">
                Start Using Our AI-Driven Solutions Today And Transform Your
                Business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col md:flex-row flex-wrap gap-4">
                <motion.button
                  className="w-full md:w-auto bg-white text-black rounded-[15px] py-[14px] px-[20px] text-[18px] font-semibold relative overflow-hidden group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2 h-6 overflow-hidden">
                    <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                      Get Started
                    </span>
                    <span className="absolute top-full inline-block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                      Get Started
                    </span>
                  </span>
                </motion.button>

                <motion.button
                  className="w-full md:w-auto bg-transparent text-white rounded-[15px] py-[14px] px-[20px] text-[18px] font-semibold relative overflow-hidden group flex items-center gap-2 justify-center"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Request a Demo</span>
                  <ChevronRight className="w-5 h-5 relative z-10" />
                </motion.button>
              </div>
            </div>

            {/* Right Side - Marquee (Vertical on desktop, Horizontal on mobile) */}
            <div className="relative m-auto overflow-hidden pb-8 xl:pb-0">
              {/* Horizontal slider for mobile/tablet (< 1200px) */}
              <motion.div
                className="flex xl:hidden gap-6"
                animate={{
                  x: [0, -1 * (280 + 24) * sliderImages.length],
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedImages.map((item, index) => (
                  <div
                    key={`h-${item.id}-${index}`}
                    className="flex-shrink-0 w-[280px] h-[280px] rounded-[32px] overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={`Slide ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>

              {/* Vertical slider for desktop (>= 1200px) */}
              <motion.div
                className="hidden xl:flex flex-col gap-6 justify-start h-[600px]"
                animate={{
                  y: [0, -1 * (330 + 24) * sliderImages.length],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 24,
                    ease: "linear",
                  },
                }}
              >
                {duplicatedImages.map((item, index) => (
                  <div
                    key={`${item.id}-${index}`}
                    className="flex-shrink-0 w-[330px] h-[330px] rounded-[32px] overflow-hidden"
                  >
                    <img
                      src={item.image}
                      alt={`Slide ${item.id}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
