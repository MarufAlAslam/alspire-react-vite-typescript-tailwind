import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import card1 from "../assets/cards/1.png";
import card2 from "../assets/cards/2.png";
import card3 from "../assets/cards/3.png";

const cards = [
  {
    id: 1,
    badge: "Features",
    title: "AI-Powered Analytics",
    description: "Harness the power of machine learning to analyze your data and make data-driven decisions faster with AIspire.",
    image: card1,
    bg: "#D6EDFF",
    imagePosition: "right",
  },
  {
    id: 2,
    badge: "Features",
    title: "Predictive Insights",
    description: "Forecast trends and potential outcomes with predictive analytics and deep learning models, powered by AIspire.",
    image: card2,
    bg: "#FFECD6",
    imagePosition: "left",
  },
  {
    id: 3,
    badge: "Features",
    title: "Automation",
    description: "Automate repetitive tasks and streamline workflows with intelligent AI-driven processes by AIspire.",
    image: card3,
    bg: "#FFD6EB",
    imagePosition: "right",
  },
];

function Card({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress, 
    [0, 1], 
    [0.92, 1]
  );

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        top: `calc(150px + ${index * 25}px)`,
        backgroundColor: card.bg,
      }}
      className="sticky rounded-[60px] min-h-[500px] flex items-center overflow-hidden z-10"
    >
      <div className="grid md:grid-cols-2 w-full h-full">
        {card.imagePosition === "left" ? (
          <>
            {/* Left Image */}
            <div className="h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Right Content */}
            <div className="flex flex-col justify-center px-16 py-12">
              <h2 className="text-[50px] font-bold leading-[1.1] mb-6" style={{ color: "#1e1e1e" }}>
                {card.title}
              </h2>

              <p className="text-[18px] font-medium leading-[1.6]" style={{ color: "#1e1e1e" }}>
                {card.description}
              </p>
            </div>
          </>
        ) : (
          <>
            {/* Left Content */}
            <div className="flex flex-col justify-center px-16 py-12">
              <h2 className="text-[50px] font-bold leading-[1.1] mb-6" style={{ color: "#1e1e1e" }}>
                {card.title}
              </h2>

              <p className="text-[18px] font-medium leading-[1.6]" style={{ color: "#1e1e1e" }}>
                {card.description}
              </p>
            </div>

            {/* Right Image */}
            <div className="h-full">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
}

export function Features() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Features
          </span>
          <h2 className="text-[60px] font-bold leading-[1.1]">
            <span className="text-black">Innovative</span>
            <br />
            <span style={{ color: "#B3B3B3" }}>AI Solutions</span>
          </h2>
        </motion.div>

        {/* Stacked Cards */}
        <div className="space-y-8">
          {cards.map((card, index) => (
            <Card key={card.id} card={card} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
