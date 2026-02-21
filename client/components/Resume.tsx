import React from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Download, ExternalLink, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const experience = [
  {
    company: "Freelance",
    role: "Frontend Developer & 3D Web Designer",
    period: "2024 - Present",
    description: "Specializing in building immersive web experiences with React, Three.js, and modern CSS frameworks. Developed several projects including BeFree and AquaSure purity monitoring systems."
  },
  {
    company: "Project BeFree",
    role: "Lead Software Designer",
    period: "2024",
    description: "Successfully designed and launched the BeFree online rehabilitation platform, focusing on user-centered research and secure architectural design."
  }
];

const education = [
  {
    institution: "Software Development Program",
    degree: "Certificate in Software Engineering",
    period: "2023 - 2025",
    description: "Deep-diving into frontend technologies, embedded systems, and 3D web development."
  }
];

export default function Resume() {
  return (
    <section id="resume" className="py-24 bg-card relative overflow-hidden">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase mb-4"
          >
            My Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-8"
          >
            Experience & Education
          </motion.h3>
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
          >
            <Button size="lg" className="rounded-full shadow-lg hover:shadow-primary/25 transition-all duration-300">
              <Download className="mr-2 h-5 w-5" />
              Download Full Resume (PDF)
            </Button>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-wider">Experience</h4>
            </div>
            
            <div className="relative border-l-2 border-primary/20 ml-6 pl-10 space-y-12">
              {experience.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[3.1rem] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary group-hover:bg-primary transition-colors duration-300" />
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-xl font-bold group-hover:text-primary transition-colors">{item.role}</h5>
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-muted-foreground">{item.company}</p>
                    <p className="text-muted-foreground leading-relaxed mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="space-y-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 rounded-2xl bg-primary/10 text-primary">
                <GraduationCap className="h-6 w-6" />
              </div>
              <h4 className="text-2xl font-bold uppercase tracking-wider">Education</h4>
            </div>

            <div className="relative border-l-2 border-primary/20 ml-6 pl-10 space-y-12">
              {education.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative group"
                >
                  {/* Timeline Dot */}
                  <div className="absolute -left-[3.1rem] top-1.5 w-6 h-6 rounded-full bg-background border-4 border-primary group-hover:bg-primary transition-colors duration-300" />
                  
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h5 className="text-xl font-bold group-hover:text-primary transition-colors">{item.degree}</h5>
                      <span className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-widest px-3 py-1 bg-primary/10 text-primary rounded-full">
                        <Calendar className="h-3 w-3" />
                        {item.period}
                      </span>
                    </div>
                    <p className="text-lg font-semibold text-muted-foreground">{item.institution}</p>
                    <p className="text-muted-foreground leading-relaxed mt-2">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Certificates section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-8 rounded-3xl bg-background border border-border/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <h5 className="text-xl font-bold mb-4">Certifications & Awards</h5>
              <ul className="space-y-4">
                <li className="flex flex-col gap-1 border-b border-border/30 pb-3">
                  <div className="flex items-center gap-3 font-bold text-foreground">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Wavumbuzi Challenge
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-primary ml-7">
                    <Calendar className="h-3 w-3" /> 2025
                  </div>
                </li>
                <li className="flex flex-col gap-1 border-b border-border/30 pb-3">
                  <div className="flex items-center gap-3 font-bold text-foreground">
                    <ExternalLink className="h-4 w-4 text-primary" />
                    Global Generation Program
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-primary ml-7">
                    <Calendar className="h-3 w-3" /> 2025
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
