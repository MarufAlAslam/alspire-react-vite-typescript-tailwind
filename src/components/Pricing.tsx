import { motion } from "framer-motion";

const plans = [
  {
    id: 1,
    badge: "Pro",
    price: "$59",
    period: "/year",
    description: "Ideal for small businesses looking to get started with AI.",
    features: [
      "Basic AI tools",
      "limited API calls",
      "support via email",
    ],
  },
  {
    id: 2,
    badge: "Pro",
    badgeBg: "#E5EEFF",
    price: "$159",
    period: "/year",
    description: "Advanced features and dedicated support for growing teams.",
    features: [
      "Full AI suite",
      "advanced analytics",
      "API access",
      "priority support",
    ],
  },
];

export function Pricing() {
  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-[60px] px-3 py-12 md:p-16"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              Pricing
            </span>
            <h2 className="text-[40px] xl:text-[60px] font-bold leading-[1.1]">
              <span className="text-black">Simple Pricing,</span>
              <br />
              <span className="text-black">Powerful AI</span>
            </h2>
          </div>

          {/* Pricing Cards */}
          <div className="grid xl:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border-2 border-[#F5F5F5] rounded-[40px] p-6 md:p-8 relative"
              >
                {/* Badge */}
                <div className="flex justify-end mb-6">
                  <span
                    className="px-4 py-1 rounded-full text-sm font-medium"
                    style={{
                      backgroundColor: plan.badgeBg || "#1E1E1E",
                      color: plan.badgeBg ? "#1E1E1E" : "#FFFFFF",
                    }}
                  >
                    {plan.badge}
                  </span>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-[60px] font-bold leading-none" style={{ color: "#1E1E1E" }}>
                      {plan.price}
                    </span>
                    <span className="text-[40px] font-medium" style={{ color: "#B3B3B3" }}>
                      {plan.period}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-[18px] font-medium mb-8" style={{ color: "#1E1E1E" }}>
                  {plan.description}
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div
                      key={idx}
                      className="inline-block bg-[#F5F5F5] px-4 py-2 rounded-full text-[18px] font-semibold mr-2 mb-2"
                      style={{ color: "#1E1E1E" }}
                    >
                      {feature}
                    </div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  className="w-full bg-black text-white rounded-full py-4 px-8 text-[16px] font-semibold relative overflow-hidden group"
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
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
