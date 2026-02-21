import React from "react";
import { User, Mail, Globe, MapPin, ExternalLink, Lightbulb, Zap, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function About() {
  const infoItems = [
    { icon: <User className="h-4 w-4" />, label: "Full Name", value: "IRAKOZE GIKUNDIRO ANITHA" },
    { icon: <Mail className="h-4 w-4" />, label: "Email", value: "irakozegikundiroanitha@gmail.com" },
    { icon: <MapPin className="h-4 w-4" />, label: "Location", value: "Remote / On-site" },
    { icon: <Globe className="h-4 w-4" />, label: "Freelance", value: "Available" },
  ];

  const values = [
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Innovative Design",
      desc: "Creating forward-thinking solutions that push creative boundaries."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Execution",
      desc: "Building high-performance applications with clean, efficient code."
    },
    {
      icon: <Target className="h-6 w-6" />,
      title: "User-Centered",
      desc: "Putting the user's needs at the heart of every design decision."
    }
  ];

  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Abstract background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 -skew-x-12 transform origin-top-right -z-0" />
      
      <div className="container relative z-10">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 flex flex-col gap-10"
          >
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-4">About Me</h2>
              <h3 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight">
                Software Designer & <br /> <span className="text-primary">3D Web Developer</span>
              </h3>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                I am <span className="text-foreground font-semibold">IRAKOZE GIKUNDIRO ANITHA</span>, a multi-disciplinary creator who blends aesthetics with technical precision. I specialize in building digital experiences that aren't just seen—they're felt.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With a deep focus on <span className="text-foreground">Frontend Engineering</span> and <span className="text-foreground">3D Web Environments</span>, I bring complex ideas to life through interactive and immersive solutions. My work is driven by a passion for solving user problems while maintaining a high standard of visual excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {infoItems.map((item, index) => (
                <div key={index} className="flex flex-col gap-2 p-5 rounded-2xl bg-background border border-border/50 shadow-sm group hover:border-primary/20 hover:bg-primary/5 transition-all duration-300">
                  <div className="flex items-center gap-2 text-primary font-medium">
                    {item.icon}
                    <span className="text-xs uppercase tracking-widest">{item.label}</span>
                  </div>
                  <p className="text-sm font-semibold truncate group-hover:text-primary transition-colors">{item.value}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:w-1/2 grid grid-cols-1 gap-6"
          >
            <div className="p-10 rounded-3xl bg-primary text-primary-foreground shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-12 opacity-10 group-hover:scale-110 transition-transform duration-500">
                <Zap className="h-32 w-32" />
              </div>
              <h4 className="text-3xl font-bold mb-6 italic">"Design is not just what it looks like and feels like. Design is how it works."</h4>
              <div className="flex items-center gap-4">
                <div className="w-12 h-1 bg-primary-foreground rounded-full" />
                <span className="font-bold uppercase tracking-widest text-sm opacity-80">My Philosophy</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {values.map((v, i) => (
                <div key={i} className="p-6 rounded-2xl bg-background border border-border/50 flex flex-col gap-4 hover:border-primary/30 transition-colors">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary w-fit">
                    {v.icon}
                  </div>
                  <h5 className="font-bold">{v.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <Button size="lg" className="rounded-full h-14 px-10 shadow-lg hover:shadow-primary/25 transition-all duration-300" asChild>
                <a href="#projects">
                  See My Projects
                  <ExternalLink className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full h-14 px-10 hover:bg-primary/5 transition-all duration-300" asChild>
                <a href="mailto:irakozegikundiroanitha@gmail.com">Let's Talk</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
