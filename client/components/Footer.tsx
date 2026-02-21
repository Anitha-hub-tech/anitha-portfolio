import React from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
          <div className="flex flex-col gap-4">
            <Link to="/" className="text-2xl font-bold tracking-tight">
              ANITHA<span className="text-primary">.</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
              A Software Designer and Frontend Developer dedicated to crafting exceptional digital experiences.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
            <div className="flex flex-col gap-4">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary">Quick Links</h5>
              <div className="flex flex-col gap-2">
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">About</a>
                <a href="#skills" className="text-sm text-muted-foreground hover:text-primary transition-colors">Skills</a>
                <a href="#resume" className="text-sm text-muted-foreground hover:text-primary transition-colors">Resume</a>
                <a href="#gallery" className="text-sm text-muted-foreground hover:text-primary transition-colors">Process</a>
                <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">Projects</a>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h5 className="text-sm font-bold uppercase tracking-widest text-primary">Legal</h5>
              <div className="flex flex-col gap-2">
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Privacy Policy</a>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">Terms of Service</a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-muted-foreground">
            © {2026} IRAKOZE GIKUNDIRO ANITHA. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            Made by <span className="text-foreground font-semibold">Anitha</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
