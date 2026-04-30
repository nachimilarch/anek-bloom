import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle, Sparkles, Award, Heart, BookOpen, GraduationCap, Star } from "lucide-react";

const floatVariant = (delay = 0, y = 12) => ({
  animate: {
    y: [0, -y, 0],
    transition: { duration: 3.5 + delay, repeat: Infinity, ease: "easeInOut", delay },
  },
});

const pulseVariant = (delay = 0) => ({
  animate: {
    scale: [1, 1.08, 1],
    opacity: [0.7, 1, 0.7],
    transition: { duration: 2.8, repeat: Infinity, ease: "easeInOut", delay },
  },
});

const AnekGraphic = () => (
  <div className="relative w-full h-full flex items-center justify-center min-h-[420px]">

    {/* Outer soft glow ring */}
    <motion.div
      className="absolute w-80 h-80 rounded-full"
      style={{ background: "radial-gradient(circle, hsl(345 60% 78% / 0.22) 0%, transparent 70%)" }}
      animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    />

    {/* Rotating dashed ring */}
    <motion.div
      className="absolute w-72 h-72 rounded-full border-2 border-dashed"
      style={{ borderColor: "hsl(345 55% 68% / 0.3)" }}
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    />

    {/* Inner solid ring */}
    <motion.div
      className="absolute w-52 h-52 rounded-full border"
      style={{ borderColor: "hsl(280 35% 72% / 0.35)" }}
      animate={{ rotate: -360 }}
      transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
    />

    {/* Central circle */}
    <motion.div
      className="relative z-10 w-36 h-36 rounded-full flex items-center justify-center shadow-glow"
      style={{ background: "linear-gradient(135deg, hsl(345 60% 62%) 0%, hsl(280 38% 58%) 100%)" }}
      {...pulseVariant(0)}
    >
      <GraduationCap className="w-14 h-14 text-white drop-shadow-lg" />
    </motion.div>

    {/* Orbiting icon — Book (top-right) */}
    <motion.div
      className="absolute top-10 right-16 w-12 h-12 rounded-2xl flex items-center justify-center shadow-card"
      style={{ background: "linear-gradient(135deg, hsl(350 75% 91%), hsl(345 65% 82%))" }}
      {...floatVariant(0, 10)}
    >
      <BookOpen className="w-6 h-6" style={{ color: "hsl(345 55% 48%)" }} />
    </motion.div>

    {/* Orbiting icon — Speech bubble (left) */}
    <motion.div
      className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-2xl flex items-center justify-center shadow-card"
      style={{ background: "linear-gradient(135deg, hsl(205 55% 88%), hsl(205 60% 78%))" }}
      {...floatVariant(0.8, 8)}
    >
      <MessageCircle className="w-6 h-6" style={{ color: "hsl(205 65% 42%)" }} />
    </motion.div>

    {/* Orbiting icon — Award (bottom-right) */}
    <motion.div
      className="absolute bottom-14 right-12 w-12 h-12 rounded-2xl flex items-center justify-center shadow-card"
      style={{ background: "linear-gradient(135deg, hsl(280 35% 88%), hsl(280 38% 78%))" }}
      {...floatVariant(1.2, 10)}
    >
      <Award className="w-6 h-6" style={{ color: "hsl(280 38% 45%)" }} />
    </motion.div>

    {/* Orbiting icon — Heart (bottom-left) */}
    <motion.div
      className="absolute bottom-16 left-14 w-10 h-10 rounded-xl flex items-center justify-center shadow-card"
      style={{ background: "linear-gradient(135deg, hsl(350 80% 91%), hsl(345 70% 82%))" }}
      {...floatVariant(0.5, 7)}
    >
      <Heart className="w-5 h-5" style={{ color: "hsl(345 58% 50%)" }} />
    </motion.div>

    {/* Orbiting icon — Sparkles (top-left) */}
    <motion.div
      className="absolute top-12 left-12 w-10 h-10 rounded-xl flex items-center justify-center shadow-card"
      style={{ background: "linear-gradient(135deg, hsl(205 60% 88%), hsl(280 35% 85%))" }}
      {...floatVariant(1.6, 9)}
    >
      <Sparkles className="w-5 h-5" style={{ color: "hsl(280 35% 48%)" }} />
    </motion.div>

    {/* Floating label chips */}
    <motion.div
      className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium shadow-soft"
      style={{
        background: "hsl(350 80% 93%)",
        color: "hsl(345 55% 40%)",
        border: "1px solid hsl(345 55% 82%)",
      }}
      {...floatVariant(0.3, 6)}
    >
      ✦ IELTS · PTE · BPO
    </motion.div>

    <motion.div
      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium shadow-soft"
      style={{
        background: "hsl(280 35% 92%)",
        color: "hsl(280 35% 38%)",
        border: "1px solid hsl(280 35% 80%)",
      }}
      {...floatVariant(1, 6)}
    >
      ✦ Behavioural · Pharma Communication
    </motion.div>

    {/* Scattered mini dots */}
    {[
      { top: "20%", left: "20%", color: "hsl(345 60% 68%)" },
      { top: "75%", left: "72%", color: "hsl(280 38% 65%)" },
      { top: "30%", left: "78%", color: "hsl(205 60% 60%)" },
      { top: "65%", left: "18%", color: "hsl(345 55% 72%)" },
    ].map((dot, i) => (
      <motion.div
        key={i}
        className="absolute w-2.5 h-2.5 rounded-full"
        style={{ top: dot.top, left: dot.left, background: dot.color, opacity: 0.55 }}
        animate={{ scale: [1, 1.6, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 2.5 + i * 0.4, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
      />
    ))}
  </div>
);

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero pt-20">
      {/* Decorative blurred orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full blur-3xl opacity-40"
          style={{ background: "hsl(345 70% 82%)" }} />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-3xl opacity-30"
          style={{ background: "hsl(280 40% 82%)" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-20"
          style={{ background: "hsl(205 60% 78%)" }} />
      </div>

      <div className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* Left column — text */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium shadow-soft"
            style={{
              background: "hsl(350 75% 91%)",
              color: "hsl(345 55% 40%)",
              border: "1px solid hsl(345 55% 80%)",
            }}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-4 h-4" />
            Pearson-Certified PTE Trainer · Dentist · Behavioural Coach
          </motion.span>

          <h1 className="text-5xl lg:text-6xl font-serif leading-tight">
            Transform your{" "}
            <span className="text-gradient-rose">confidence,</span>
            <br />communication &amp; career.
          </h1>

          <p className="text-lg leading-relaxed" style={{ color: "hsl(340 12% 42%)" }}>
            Learn with care, confidence and clarity. Anek Learning Solutions offers premium training
            in IELTS, PTE, BPO, pharma communication and behavioural growth — guided personally by
            Dr. Vidya Malve.
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" className="bg-gradient-rose text-white shadow-elegant hover:shadow-glow transition-smooth">
              Book Consultation <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 transition-smooth"
              style={{ borderColor: "hsl(345 55% 65%)", color: "hsl(345 55% 45%)" }}>
              <MessageCircle className="w-4 h-4 mr-2" /> WhatsApp Now
            </Button>
            <Button size="lg" variant="ghost" style={{ color: "hsl(345 55% 45%)" }}>
              View Programs
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 pt-4">
            {[
              { n: "1000+", l: "Students Mentored" },
              { n: "9+ Yrs", l: "Training Expertise" },
              { n: "98%", l: "Score Improvement" },
            ].map((s, i) => (
              <motion.div
                key={i}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                <div className="text-2xl font-serif font-bold text-gradient-rose">{s.n}</div>
                <div className="text-xs mt-0.5" style={{ color: "hsl(340 12% 50%)" }}>{s.l}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right column — Animated Graphic */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
        >
          <AnekGraphic />

          {/* Floating credential cards */}
          <motion.div
            className="absolute -bottom-4 -left-4 px-4 py-3 rounded-2xl shadow-card text-sm font-medium"
            style={{
              background: "hsl(0 0% 100%)",
              border: "1px solid hsl(340 25% 90%)",
              color: "hsl(340 20% 25%)",
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            {...floatVariant(0.2, 5)}
          >
            <div className="text-xs font-normal mb-0.5" style={{ color: "hsl(340 12% 55%)" }}>Certified by</div>
            <div className="font-semibold" style={{ color: "hsl(345 55% 45%)" }}>Pearson PTE</div>
          </motion.div>

          <motion.div
            className="absolute -top-4 -right-4 px-4 py-3 rounded-2xl shadow-card text-sm font-medium"
            style={{
              background: "hsl(0 0% 100%)",
              border: "1px solid hsl(340 25% 90%)",
              color: "hsl(340 20% 25%)",
            }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            {...floatVariant(0.6, 5)}
          >
            <div className="text-xs font-normal mb-0.5" style={{ color: "hsl(340 12% 55%)" }}>Approach</div>
            <div className="font-semibold" style={{ color: "hsl(280 35% 48%)" }}>Care + Clarity</div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};