import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const links = [
  { label: "About", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Why Us", href: "#why-us" },
  { label: "Stories", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-smooth ${
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container flex items-center justify-between h-20">
        <a href="#home" className="flex items-center shrink-0">
          <img
            src="/og-image.png"
            alt="Anek Learning Solutions"
            className="h-20 w-auto object-contain"
          />
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button variant="hero" size="sm" className="hidden md:inline-flex" asChild>
            <a href="#contact">Book Consultation</a>
          </Button>
          <button
            className="lg:hidden p-2 rounded-full hover:bg-primary-soft transition-smooth"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border"
        >
          <div className="container py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-foreground hover:text-primary transition-smooth"
              >
                {l.label}
              </a>
            ))}
            <Button variant="hero" asChild>
              <a href="#contact">Book Consultation</a>
            </Button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
};
