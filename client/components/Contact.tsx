import React from "react";
import { Mail, Send, Linkedin, Github, Instagram, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const socialLinks = [
    { icon: <Linkedin className="h-6 w-6" />, href: "#", name: "LinkedIn" },
    { icon: <Github className="h-6 w-6" />, href: "#", name: "GitHub" },
    { icon: <Twitter className="h-6 w-6" />, href: "#", name: "Twitter" },
    { icon: <Instagram className="h-6 w-6" />, href: "#", name: "Instagram" },
  ];

  return (
    <section id="contact" className="py-24 bg-background relative overflow-hidden">
      <div className="container px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-10"
          >
            <div>
              <h2 className="text-primary font-bold tracking-widest uppercase mb-4">Contact Me</h2>
              <h3 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                Let's discuss your next project
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm always open to new opportunities, collaborations, or just a friendly chat. Whether you have a project in mind or just want to connect, I'd love to hear from you.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              <a
                href="mailto:irakozegikundiroanitha@gmail.com"
                className="flex items-center gap-6 p-6 rounded-2xl bg-card border border-border/50 group hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
              >
                <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Mail className="h-8 w-8" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">Email Me</span>
                  <span className="text-xl font-bold group-hover:text-primary transition-colors">irakozegikundiroanitha@gmail.com</span>
                </div>
              </a>
            </div>

            <div className="flex flex-col gap-6">
              <h4 className="text-xl font-bold uppercase tracking-widest text-muted-foreground">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="p-4 rounded-xl bg-card border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/20 hover:bg-primary/5 transition-all duration-300"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="p-8 md:p-12 rounded-3xl bg-card border border-border/50 shadow-2xl relative"
          >
            <form className="flex flex-col gap-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label htmlFor="name" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Name</label>
                  <Input id="name" placeholder="John Doe" className="h-14 bg-background border-none ring-1 ring-border/50 focus-visible:ring-primary/50 rounded-xl" />
                </div>
                <div className="space-y-3">
                  <label htmlFor="email" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Email</label>
                  <Input id="email" type="email" placeholder="john@example.com" className="h-14 bg-background border-none ring-1 ring-border/50 focus-visible:ring-primary/50 rounded-xl" />
                </div>
              </div>
              <div className="space-y-3">
                <label htmlFor="subject" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Subject</label>
                <Input id="subject" placeholder="Project Inquiry" className="h-14 bg-background border-none ring-1 ring-border/50 focus-visible:ring-primary/50 rounded-xl" />
              </div>
              <div className="space-y-3">
                <label htmlFor="message" className="text-sm font-bold uppercase tracking-widest text-muted-foreground ml-1">Your Message</label>
                <Textarea id="message" placeholder="Tell me about your project..." className="min-h-[150px] bg-background border-none ring-1 ring-border/50 focus-visible:ring-primary/50 rounded-xl p-4" />
              </div>
              <Button size="lg" className="h-14 rounded-xl text-lg font-bold shadow-lg hover:shadow-primary/20 transition-all duration-300">
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
