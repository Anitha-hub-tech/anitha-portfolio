import React from "react";
import { motion } from "framer-motion";
import { Search, PenTool, Layout, Code, Terminal, Box, Sparkles, Rocket } from "lucide-react";

const processSteps = [
  {
    icon: <Search className="h-8 w-8" />,
    title: "Research",
    desc: "Understanding the problem and user needs through data and interviews.",
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    icon: <PenTool className="h-8 w-8" />,
    title: "Ideation",
    desc: "Brainstorming and sketching innovative solutions to user pain points.",
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    icon: <Layout className="h-8 w-8" />,
    title: "UX Design",
    desc: "Creating wireframes and prototypes that define the user journey.",
    color: "text-indigo-500",
    bg: "bg-indigo-500/10"
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "UI Design",
    desc: "Designing high-fidelity interfaces that are both beautiful and intuitive.",
    color: "text-rose-500",
    bg: "bg-rose-500/10"
  },
  {
    icon: <Code className="h-8 w-8" />,
    title: "Development",
    desc: "Building the product with clean code and modern frontend frameworks.",
    color: "text-emerald-500",
    bg: "bg-emerald-500/10"
  },
  {
    icon: <Box className="h-8 w-8" />,
    title: "3D Immersive",
    desc: "Integrating 3D elements for a truly unique and engaging user experience.",
    color: "text-cyan-500",
    bg: "bg-cyan-500/10"
  },
  {
    icon: <Terminal className="h-8 w-8" />,
    title: "Embedded IoT",
    desc: "Developing specialized systems like water purity checkers with sensor data.",
    color: "text-amber-500",
    bg: "bg-amber-500/10"
  },
  {
    icon: <Rocket className="h-8 w-8" />,
    title: "Deployment",
    desc: "Launching and maintaining the final product for real-world impact.",
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  }
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase mb-4"
          >
            My Approach
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-8"
          >
            Creative & Technical Process
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-3xl mx-auto"
          >
            From discovery to deployment, I follow a rigorous and creative methodology to ensure every product is built to the highest standards of quality and performance.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-[2rem] bg-card border border-border/50 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 transition-all duration-500"
            >
              <div className={`p-4 rounded-2xl ${step.bg} ${step.color} w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {step.icon}
              </div>
              <h4 className="text-xl font-bold mb-3">{step.title}</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
