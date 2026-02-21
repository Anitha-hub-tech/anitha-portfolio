import React from "react";
import { motion } from "framer-motion";

export default function Skills() {
  const designSkills = [
    { name: "UI/UX Design", level: 95 },
    { name: "3D Modeling & Design", level: 85 },
    { name: "User Research", level: 90 },
    { name: "Prototyping (Figma)", level: 92 },
    { name: "Visual Identity", level: 88 },
  ];

  const devSkills = [
    { name: "Frontend Development", level: 98 },
    { name: "3D Web Development (Three.js)", level: 92 },
    { name: "React / Vite / Next.js", level: 95 },
    { name: "Embedded Systems (IoT)", level: 85 },
    { name: "Tailwind CSS & Modern CSS", level: 98 },
  ];

  const tools = [
    "Figma", "Three.js", "React", "TypeScript", "GitHub", "Vite", "VS Code", "Netlify", "Postman", "Spline"
  ];

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container px-4">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-primary font-bold tracking-widest uppercase mb-4"
          >
            My Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold mb-6"
          >
            Skills & Technologies
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Specializing in bridge between high-end UI design, robust frontend development, and immersive 3D web experiences.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Design Skills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h4 className="text-2xl font-bold uppercase tracking-wider">Design Skills</h4>
            </div>
            <div className="space-y-6">
              {designSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between font-medium">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Development Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-1 bg-primary rounded-full" />
              <h4 className="text-2xl font-bold uppercase tracking-wider">Development Skills</h4>
            </div>
            <div className="space-y-6">
              {devSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between font-medium">
                    <span>{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: 0.3 }}
                      className="h-full bg-primary"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-20 pt-16 border-t border-border"
        >
          <h4 className="text-xl font-bold text-center mb-8 uppercase tracking-widest text-muted-foreground">Tools I use daily</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="px-6 py-3 rounded-xl bg-card border border-border/50 text-sm font-semibold shadow-sm hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-all duration-300"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
