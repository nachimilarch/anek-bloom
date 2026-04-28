import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";

export const FinalCTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[3rem] bg-gradient-rose p-12 lg:p-20 text-center shadow-elegant"
        >
          <div className="absolute -top-20 -left-20 w-72 h-72 rounded-full bg-white/15 blur-3xl" />
          <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-white/10 blur-3xl" />

          <div className="relative max-w-3xl mx-auto">
            <Sparkles className="w-10 h-10 text-primary-foreground mx-auto mb-6 opacity-80" />
            <h2 className="font-serif text-4xl lg:text-6xl font-medium text-primary-foreground leading-tight mb-6">
              Build the skills to <span className="italic">speak, perform &amp; succeed.</span>
            </h2>
            <p className="text-primary-foreground/90 text-lg max-w-xl mx-auto mb-10">
              Your next chapter — clearer voice, stronger presence, real results — starts with one conversation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="xl" variant="soft" className="bg-card text-primary hover:bg-card/90" asChild>
                <a href="#contact">Book Consultation <ArrowRight className="w-5 h-5" /></a>
              </Button>
              <Button size="xl" variant="whatsapp" asChild>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
