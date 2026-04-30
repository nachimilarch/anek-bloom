import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const stories = [
  {
    name: "Ananya R.",
    role: "PTE Academic · 84 Overall",
    text: "Vidya ma'am's strategies and patience helped me crack PTE on my second attempt. Her feedback is precise, kind and confidence-building.",
    accent: "hsl(345 60% 65%)",
    avatarBg: "linear-gradient(135deg, hsl(345 55% 52%), hsl(345 70% 40%))",
    cardBorder: "hsl(345 50% 45%)",
  },
  {
    name: "Dr. Mehul S.",
    role: "Pharma Communication",
    text: "As a doctor preparing for international roles, I needed medical-grade English coaching. Anek delivered exactly that — structured, professional, results-driven.",
    accent: "hsl(205 65% 65%)",
    avatarBg: "linear-gradient(135deg, hsl(205 65% 48%), hsl(205 65% 34%))",
    cardBorder: "hsl(205 55% 45%)",
  },
  {
    name: "Priya K.",
    role: "BPO Trainee",
    text: "I came in shy and unsure. The behavioural training transformed how I speak, listen and present myself in interviews. I cleared three rounds at a top BPO.",
    accent: "hsl(174 55% 58%)",
    avatarBg: "linear-gradient(135deg, hsl(174 55% 42%), hsl(174 55% 30%))",
    cardBorder: "hsl(174 48% 42%)",
  },
  {
    name: "Rohit V.",
    role: "IELTS · Band 7.5",
    text: "What stands out is the personal attention. Mock interviews, writing reviews and speaking drills — every session moved my band up.",
    accent: "hsl(280 40% 68%)",
    avatarBg: "linear-gradient(135deg, hsl(280 38% 52%), hsl(280 38% 38%))",
    cardBorder: "hsl(280 35% 45%)",
  },
];

export const Testimonials = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-testimonials-bg)" }}>

      {/* Decorative orbs */}
      <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "hsl(345 60% 55%)" }} />
      <div className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-15 pointer-events-none"
        style={{ background: "hsl(240 50% 60%)" }} />

      {/* Scattered dots */}
      {["10% 15%", "85% 20%", "20% 80%", "78% 75%", "50% 10%"].map((pos, i) => (
        <motion.div key={i}
          className="absolute w-1.5 h-1.5 rounded-full pointer-events-none"
          style={{ top: pos.split(" ")[0], left: pos.split(" ")[1], background: "hsl(0 0% 100% / 0.25)" }}
          animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.5, 1] }}
          transition={{ duration: 3 + i * 0.5, repeat: Infinity, delay: i * 0.6 }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "hsl(0 0% 100% / 0.12)", color: "hsl(0 0% 90%)", border: "1px solid hsl(0 0% 100% / 0.2)" }}>
            ✦ Student Stories
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-3 text-white">
            Real voices, real results.
          </h2>
          <p className="text-base" style={{ color: "hsl(0 0% 75%)" }}>
            Students, professionals and aspirants who learned to speak, perform and succeed.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {stories.map((s, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl p-7 overflow-hidden"
              style={{
                background: "hsl(0 0% 100% / 0.06)",
                border: `1px solid ${s.cardBorder}`,
                backdropFilter: "blur(12px)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ background: "hsl(0 0% 100% / 0.10)" }}
            >
              {/* Colored top bar */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full" style={{ background: s.accent }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-current" style={{ color: s.accent }} />
                ))}
              </div>

              {/* Quote */}
              <Quote className="w-6 h-6 mb-3 opacity-40" style={{ color: s.accent }} />
              <p className="text-sm leading-relaxed mb-6 italic" style={{ color: "hsl(0 0% 88%)" }}>
                "{s.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center font-serif font-bold text-white text-sm shadow-md"
                  style={{ background: s.avatarBg }}>
                  {s.name[0]}
                </div>
                <div>
                  <div className="font-semibold text-sm text-white">{s.name}</div>
                  <div className="text-xs" style={{ color: s.accent }}>{s.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};