import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const sliderImages = [
  {
    id: 1,
    image: "/src/assets/v-slider/v-slider-1.png",
  },
  {
    id: 2,
    image: "/src/assets/v-slider/v-slider-2.png",
  },
  {
    id: 3,
    image: "/src/assets/v-slider/v-slider-3.png",
  },
];

export function CTA() {
  // Duplicate images for seamless loop
  const duplicatedImages = [...sliderImages, ...sliderImages, ...sliderImages];

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="bg-[#141414] rounded-[60px] overflow-hidden relative">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Content */}
            <div className="relative my-auto z-10 py-12 md:py-16 pl-12 md:pl-16">
              <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                Get Started Now!
              </span>
              <h2 className="text-[60px] font-bold leading-[1.1] text-white mb-6">
                Ready to Unlock the Power of AI with Alspire?
              </h2>
              <p className="text-[18px] text-gray-400 mb-8 leading-relaxed">
                Start Using Our AI-Driven Solutions Today And Transform Your
                Business.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4">
                <motion.button
                  className="bg-white text-black rounded-[15px] py-[14px] px-[20px] text-[18px] font-semibold relative overflow-hidden group"
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
                  className="bg-transparent border-2 border-white text-white rounded-[15px] py-[14px] px-[20px] text-[18px] font-semibold relative overflow-hidden group flex items-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Request a Demo</span>
                  <ChevronRight className="w-5 h-5 relative z-10" />
                </motion.button>
              </div>
            </div>

            {/* Right Side - Vertical Marquee */}
            <div className="relative h-[600px] mx-auto overflow-hidden flex justify-end">
              <motion.div
                className="flex flex-col gap-6"
                animate={{
                  y: [0, -1 * (330 + 24) * sliderImages.length],
                }}
                transition={{
                  y: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
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
