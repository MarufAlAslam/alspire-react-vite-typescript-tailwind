import { useState } from "react";
import { motion } from "framer-motion";
import image1 from "../assets/how-it-works/1.png";
import image2 from "../assets/how-it-works/2.avif";
import image3 from "../assets/how-it-works/3.avif";
import image4 from "../assets/how-it-works/4.webp";

const tabs = [
    {
        id: 1,
        number: "01.",
        title: "Data Collection",
        subtitle: "Gather Data From Multiple Sources And Integrate Seamlessly With AIspire.",
        image: image1,
    },
    {
        id: 2,
        number: "02.",
        title: "AI Training",
        subtitle: "Gather data from multiple sources and integrate seamlessly with AIspire.",
        image: image2,
    },
    {
        id: 3,
        number: "03.",
        title: "Deployment",
        subtitle: "Deploy the models within your business environment and start seeing results with AIspire.",
        image: image3,
    },
    {
        id: 4,
        number: "04.",
        title: "Optimization",
        subtitle: "Alpsire's AI continuously improves and adapts to provide even better results over time.",
        image: image4,
    },
];

export function HowItWorks() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <section className="py-20 px-4 bg-[#F5F5F5]">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mb-16"
                >
                    <span className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
                        How It Works
                    </span>
                    <div className="flex flex-col xl:flex-row xl:items-start xl:justify-between gap-8">
                        <h2 className="text-[40px] xl:text-[60px] font-bold leading-[1.1]">
                            How AIspire Works
                        </h2>
                        <p className="text-[18px] xl:max-w-xl xl:pt-2" style={{ color: "#1e1e1e" }}>
                            Automate repetitive tasks and streamline workflows with intelligent AI-driven processes by AIspire.
                        </p>
                    </div>
                </motion.div>

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Tabs */}
                    <div className="space-y-4">
                        {tabs.map((tab, index) => (
                            <motion.button
                                key={tab.id}
                                onClick={() => setActiveTab(index)}
                                className={`w-full text-left p-6 rounded-3xl transition-all duration-300 ${activeTab === index
                                        ? "bg-white"
                                        : "bg-transparent hover:bg-white/50"
                                    }`}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                animate={{
                                    height: activeTab === index ? "auto" : "auto",
                                }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                            >
                                <div className="flex items-start gap-4">
                                    <span
                                        className="text-[20px] font-bold"
                                        style={{
                                            color: activeTab === index ? "#1E1E1E" : "#B3B3B3",
                                        }}
                                    >
                                        {tab.number}
                                    </span>
                                    <div className="flex-1">
                                        <h3
                                            className={`text-[20px] font-bold ${activeTab === index ? "mb-2" : ""
                                                }`}
                                            style={{
                                                color: activeTab === index ? "#1E1E1E" : "#B3B3B3",
                                            }}
                                        >
                                            {tab.title}
                                        </h3>
                                        <motion.div
                                            initial={false}
                                            animate={{
                                                height: activeTab === index ? "auto" : 0,
                                                opacity: activeTab === index ? 1 : 0,
                                            }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <p className="text-[16px] font-medium" style={{ color: "#1E1E1E" }}>
                                                {tab.subtitle}
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.button>
                        ))}
                    </div>

                    {/* Right Side - Image */}
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="rounded-[40px] overflow-hidden h-[500px]"
                    >
                        <img
                            src={tabs[activeTab].image}
                            alt={tabs[activeTab].title}
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
