import { Sparkles, MessageCircle } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background/90 py-16 mt-0">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="flex flex-col items-start gap-2 mb-4">
                <img
                  src="/og-image.png"
                  alt="Anek Learning Solutions"
                  className="h-32 w-auto object-contain rounded-xl bg-white/10 p-2"
                />
              </div>
              <div>
                <div className="font-serif text-xl font-semibold text-background">Anek Learning Solutions</div>
                <div className="text-[10px] tracking-[0.2em] uppercase text-background/60">By Dr. Vidya Malve</div>
              </div>
            </div>
            <p className="text-sm text-background/70 max-w-md leading-relaxed">
              Premium training and consultancy in IELTS, PTE, BPO, pharma communication and behavioural
              growth — for students, job seekers and professionals across India.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold text-background mb-4">Programs</div>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#programs" className="hover:text-primary-glow transition-smooth">IELTS Training</a></li>
              <li><a href="#programs" className="hover:text-primary-glow transition-smooth">PTE Academic & General</a></li>
              <li><a href="#programs" className="hover:text-primary-glow transition-smooth">BPO Training</a></li>
              <li><a href="#programs" className="hover:text-primary-glow transition-smooth">Pharma Communication</a></li>
              <li><a href="#programs" className="hover:text-primary-glow transition-smooth">Behavioural Coaching</a></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold text-background mb-4">Connect</div>
            <ul className="space-y-2 text-sm text-background/70">
              <li><a href="#about" className="hover:text-primary-glow transition-smooth">About Vidya</a></li>
              <li><a href="#testimonials" className="hover:text-primary-glow transition-smooth">Student Stories</a></li>
              <li><a href="#faq" className="hover:text-primary-glow transition-smooth">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary-glow transition-smooth">Contact</a></li>
              <li><a href="https://wa.me/919999999999" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 hover:text-primary-glow transition-smooth">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-background/60">
          <div>© {new Date().getFullYear()} Anek Learning Solutions. Crafted with care.</div>
          <div>Confidence · Communication · Career</div>
        </div>
      </div>
    </footer>
  );
};
