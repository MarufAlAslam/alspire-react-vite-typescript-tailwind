import { motion, useScroll, useTransform } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Code2, Layers, Palette } from "lucide-react";

const showcaseItems = [
  {
    icon: Code2,
    title: "TypeScript",
    description: "Type-safe code for better development experience",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Palette,
    title: "Tailwind CSS v4",
    description: "Modern utility-first CSS with the latest features",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Layers,
    title: "Component Library",
    description: "Pre-built shadcn/ui components ready to use",
    color: "from-orange-500 to-red-500",
  },
];

export function Showcase() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.8, 0.6]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <motion.section
      style={{ opacity, scale }}
      className="min-h-screen flex flex-col items-center justify-center px-4 py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 max-w-3xl"
      >
        <h2 className="text-3xl md:text-5xl font-bold mb-4">
          Built with Modern Technologies
        </h2>
        <p className="text-lg text-muted-foreground">
          Everything you need to build amazing web applications
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl mb-12">
        {showcaseItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -8 }}
          >
            <Card className="h-full relative overflow-hidden group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
              />
              <CardHeader>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <item.icon className="w-12 h-12 mb-4 text-primary" />
                </motion.div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {item.description}
                </CardDescription>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl w-full"
      >
        <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl text-center">
              Responsive Design
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <CardDescription className="text-base md:text-lg mb-6">
              This application is fully responsive and looks great on all
              devices. Try resizing your browser window to see it in action!
            </CardDescription>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="default">Mobile First</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="secondary">Tablet Ready</Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button variant="outline">Desktop Optimized</Button>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.section>
  );
}
