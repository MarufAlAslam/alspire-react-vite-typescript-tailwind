import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";

const faqs = [
  {
    id: 1,
    question: "What Is Alspire?",
    answer:
      "Alspire Is An AI-Powered SaaS Platform Designed To Help Businesses Leverage Artificial Intelligence For Data Analysis, Predictive Insights, Automation, And More.",
    defaultOpen: true,
  },
  {
    id: 2,
    question: "How Can Alspire Help My Business?",
    answer:
      "Alspire helps businesses automate processes, gain predictive insights, analyze data more efficiently, and make data-driven decisions that boost productivity and ROI.",
  },
  {
    id: 3,
    question: "Is Alspire Suitable For Small Businesses?",
    answer:
      "Yes! Alspire offers flexible pricing plans that cater to businesses of all sizes, from startups to large enterprises. Our platform scales with your needs.",
  },
  {
    id: 4,
    question: "What Kind Of Support Does Alspire Offer?",
    answer:
      "We provide email support for basic plans and priority support with dedicated account management for our premium plans. Our team is always ready to help you succeed.",
  },
  {
    id: 5,
    question: "Can I Customize AI Models To Suit My Industry Needs?",
    answer:
      "Absolutely! Alspire allows you to customize AI models and workflows to match your specific industry requirements and business processes.",
  },
];

export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(1);

  const toggleFAQ = (id: number) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 px-4 bg-[#F5F5F5]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Side - Sticky */}
          <div className="lg:sticky lg:top-[200px] h-fit">
            <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="text-[40px] xl:text-[60px] font-bold leading-[1.1] text-black mb-8">
              Frequently Asked Questions
            </h2>
            <motion.button
              className="bg-black text-white rounded-[15px] py-[14px] px-[20px] text-[18px] font-semibold relative overflow-hidden group flex items-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2 h-6 overflow-hidden">
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                  Contact Us
                </span>
                <span className="absolute top-full inline-block transition-transform duration-300 group-hover:-translate-y-full whitespace-nowrap">
                  Contact Us
                </span>
              </span>
              <ChevronRight className="w-5 h-5 relative z-10" />
            </motion.button>
          </div>

          {/* Right Side - FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`rounded-[24px] overflow-hidden transition-colors ${
                  openId === faq.id ? "bg-white" : "bg-transparent"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-white/50 transition-colors"
                >
                  <span className="text-[20px] font-bold text-black pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className="w-6 h-6 text-black" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-8 pb-6">
                        <p className="text-[18px] text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
