import React from "react";
import { ExternalLink, Github, Eye, Heart, Droplets, Laptop, Sparkles, Box } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const projects = [
  {
    title: "BeFree - Online Rehabilitation Center",
    category: "Full Stack Development / UX Design",
    description: "A comprehensive online rehabilitation platform designed to provide support and resources for individuals seeking recovery and mental wellness. Features include secure user accounts, resource libraries, and community support integration.",
    icon: <Heart className="h-16 w-16" />,
    gradient: "from-rose-500/20 to-orange-500/20",
    color: "text-rose-500",
    demo: "#",
    github: "#",
    tags: ["React", "TypeScript", "Tailwind CSS", "Node.js", "HealthTech"],
  },
  {
    title: "AquaSure - Water Purity Checker",
    category: "Embedded Systems / Frontend Development",
    description: "An embedded system oriented tool designed to monitor and check water purity in real-time. Features a specialized dashboard to visualize purity levels and system status using IoT-integrated sensors.",
    icon: <Droplets className="h-16 w-16" />,
    gradient: "from-blue-500/20 to-cyan-500/20",
    color: "text-blue-500",
    demo: "#",
    github: "#",
    tags: ["Embedded Systems", "IoT", "React", "Data Visualization", "Sensors"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-card relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase mb-4"
          >
            My Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Featured Projects
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Showcasing specialized solutions in health, sustainability, and high-performance embedded technologies.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group relative flex flex-col gap-8"
            >
              {/* Project Card Image (Icon and Gradient Focus) */}
              <div className={`relative aspect-[16/9] rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${project.gradient} border border-border/50 group-hover:border-primary/30 transition-all duration-500 shadow-xl flex items-center justify-center p-12`}>
                <div className={`transition-transform duration-700 group-hover:scale-125 ${project.color} group-hover:rotate-6`}>
                   {project.icon}
                </div>
                
                {/* Overlay with buttons */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <Button variant="outline" size="lg" className="rounded-full bg-white text-black border-none hover:bg-white/90" asChild>
                    <a href={project.demo}>
                      <Eye className="mr-2 h-5 w-5" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-full bg-white text-black border-none hover:bg-white/90" asChild>
                    <a href={project.github}>
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="flex flex-col gap-4 px-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-primary px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-3xl font-extrabold group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs font-bold px-4 py-2 bg-muted/50 rounded-xl text-muted-foreground border border-border/50 group-hover:border-primary/20 transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 text-center"
        >
          <Button size="lg" variant="outline" className="rounded-full h-16 px-12 text-lg font-bold hover:bg-primary/5 transition-all duration-300 border-2" asChild>
            <a href="https://github.com/ANITHA-IRAKOZE" target="_blank" rel="noopener noreferrer">
              <Github className="mr-3 h-6 w-6" />
              View More Experience
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
