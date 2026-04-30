import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-cta-bg)" }}>

      {/* Orbs */}
      <div className="absolute -top-16 -left-16 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "hsl(345 70% 55%)" }} />
      <div className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "hsl(240 50% 58%)" }} />

      {/* Rotating dashed ring decoration */}
      <motion.div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border-2 border-dashed pointer-events-none"
        style={{ borderColor: "hsl(0 0% 100% / 0.10)" }}
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-4 text-center relative z-10 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase"
            style={{ background: "hsl(0 0% 100% / 0.12)", color: "hsl(0 0% 92%)", border: "1px solid hsl(0 0% 100% / 0.2)" }}>
            <Sparkles className="w-3.5 h-3.5" /> Start Your Journey
          </span>

          <h2 className="text-4xl lg:text-5xl font-serif text-white leading-tight">
            Build the skills to<br />
            <span style={{ color: "hsl(345 80% 78%)" }}>speak, perform & succeed.</span>
          </h2>

          <p className="text-base" style={{ color: "hsl(0 0% 75%)" }}>
            Your next chapter — clearer voice, stronger presence, real results — starts with one conversation.
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button
              size="lg"
              className="text-white shadow-elegant transition-smooth hover:scale-105"
              style={{ background: "linear-gradient(135deg, hsl(345 70% 60%), hsl(345 55% 48%))" }}
            >
              Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition-smooth hover:scale-105"
              style={{ borderColor: "hsl(0 0% 100% / 0.4)", color: "white", background: "hsl(0 0% 100% / 0.08)" }}
            >
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Now
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};