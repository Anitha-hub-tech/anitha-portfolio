import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Paintbrush } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-background">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -right-20 w-80 h-80 bg-primary/10 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -left-20 w-80 h-80 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container px-4 relative z-10">
        <div className="flex flex-col items-center text-center gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-semibold"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Available for new projects
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight"
          >
            I'm <span className="text-primary">IRAKOZE</span> GIKUNDIRO ANITHA
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-2xl text-muted-foreground max-w-3xl leading-relaxed"
          >
            A <span className="text-foreground font-semibold">Software Designer</span>, <span className="text-foreground font-semibold">Frontend Developer</span> & <span className="text-foreground font-semibold">3D Developer</span> dedicated to crafting exceptional, immersive digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-4"
          >
            <Button size="lg" className="h-12 px-8 rounded-full text-lg shadow-lg hover:shadow-primary/20 transition-all duration-300" asChild>
              <a href="#projects">
                View My Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 rounded-full text-lg hover:bg-primary/5 transition-all duration-300" asChild>
              <a href="#contact">Contact Me</a>
            </Button>
          </motion.div>

          {/* Icon Cards for Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-16"
          >
            <div className="flex flex-col items-center gap-4 group p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Paintbrush className="h-8 w-8" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl">UI/UX Design</h3>
                <p className="text-sm text-muted-foreground mt-1">Creating intuitive and visually stunning interfaces.</p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-4 group p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
              <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                <Code className="h-8 w-8" />
              </div>
              <div className="text-center">
                <h3 className="font-bold text-xl">Development</h3>
                <p className="text-sm text-muted-foreground mt-1">Building responsive, high-performance web applications.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
