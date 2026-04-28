import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Award, Heart } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden bg-gradient-hero">
      {/* Decorative blurred orbs */}
      <div className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary-glow/30 blur-3xl animate-float" />
      <div className="absolute bottom-10 -right-20 w-[28rem] h-[28rem] rounded-full bg-lavender/40 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-1/4 w-72 h-72 rounded-full bg-accent/40 blur-3xl animate-float" style={{ animationDelay: "4s" }} />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/70 backdrop-blur border border-primary/20 shadow-soft mb-8">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-xs tracking-wider uppercase font-medium text-foreground/80">
                Pearson-Certified PTE Trainer · Dentist · Behavioural Coach
              </span>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] font-medium text-foreground mb-6">
              Transform your{" "}
              <span className="text-gradient-rose italic">confidence,</span>
              <br />
              communication &amp; career.
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mb-10 leading-relaxed">
              Learn with care, confidence and clarity. Anek Learning Solutions offers premium training
              in IELTS, PTE, BPO, pharma communication and behavioural growth — guided personally by
              <span className="text-foreground font-medium"> Dr. Vidya Malve.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <a href="#contact">
                  Book Consultation <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button variant="whatsapp" size="xl" asChild>
                <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer">
                  <MessageCircle className="w-5 h-5" /> WhatsApp Now
                </a>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <a href="#programs">View Programs</a>
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-6 max-w-lg">
              {[
                { n: "1000+", l: "Students Mentored" },
                { n: "9+ Yrs", l: "Training Expertise" },
                { n: "98%", l: "Score Improvement" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.1 }}
                >
                  <div className="font-serif text-3xl font-semibold text-primary">{s.n}</div>
                  <div className="text-xs text-muted-foreground mt-1">{s.l}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-rose rounded-[3rem] blur-2xl opacity-30" />
              <div className="relative rounded-[2.5rem] overflow-hidden shadow-elegant border border-card bg-gradient-card p-2">
                <img
                  src="/src/assets/vidya-portrait.jpg"
                  alt="Dr. Vidya Malve, founder of Anek Learning Solutions"
                  className="w-full h-[560px] object-cover rounded-[2rem]"
                  width={896}
                  height={1152}
                />
              </div>

              {/* Floating credential cards */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -left-6 top-12 bg-card/95 backdrop-blur rounded-2xl shadow-card p-4 flex items-center gap-3 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-primary-soft flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Certified by</div>
                  <div className="text-sm font-semibold">Pearson PTE</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute -right-4 bottom-16 bg-card/95 backdrop-blur rounded-2xl shadow-card p-4 flex items-center gap-3 border border-border"
              >
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Heart className="w-5 h-5 text-medical-blue" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Approach</div>
                  <div className="text-sm font-semibold">Care + Clarity</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
