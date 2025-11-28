import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Alex",
    text: "AIspare's predictive insights helped us optimize our marketing strategy and boosted our ROI significantly. It's been a game changer.",
    image: "/src/assets/testimonial/testimonial-1.png",
  },
  {
    id: 2,
    name: "Emily",
    text: "AIspare automated our processes, saving us hours weekly. It's intuitive and allowed us to focus on strategic goals.",
    image: "/src/assets/testimonial/testimonial-2.png",
  },
  {
    id: 3,
    name: "John",
    text: "AIspare revolutionized our data analytics. It boosted our decision-making speed and improved efficiency by 25%. Highly recommended!",
    image: "/src/assets/testimonial/testimonial-3.png",
  },
  {
    id: 4,
    name: "Sara",
    text: "AIspare transformed our data into actionable insights that boosted our sales by 30%!",
    image: "/src/assets/testimonial/testimonial-4.png",
  },
];

export function Testimonials() {
  // Duplicate testimonials multiple times for seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials, ...testimonials];

  return (
    <section className="py-20 bg-[#F5F5F5] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            Testimonials
          </span>
          <h2 className="text-[48px] xl:text-[68px] font-bold leading-[1] text-black font-britti">
            What Our Clients Say
          </h2>
        </div>
      </div>

      {/* Marquee Container */}
      <div className="relative">
        <motion.div
          className="flex gap-6"
          animate={{
            x: [0, -1 * (400 + 24) * testimonials.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
        >
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-shrink-0 w-[400px] h-[520px] rounded-[32px] overflow-hidden relative"
            >
              {/* Background Image */}
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              {/* Gradient Overlay */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" /> */}
              
              {/* Content */}
              {/* <div className="relative h-full flex flex-col justify-end p-8">
                <p className="text-white text-[18px] font-medium leading-relaxed mb-4">
                  {testimonial.text}
                </p>
                <p className="text-white text-[24px] font-bold">
                  {testimonial.name}
                </p>
              </div> */}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
