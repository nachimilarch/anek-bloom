import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock, Sparkles, HeartPulse, Target } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "Certified & Credible",
    desc: "A Pearson-certified PTE trainer and qualified dentist — credentials you can trust.",
    num: "01",
    iconBg: "linear-gradient(135deg, hsl(345 55% 52%), hsl(345 70% 40%))",
    cardBg: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(345 70% 95%) 100%)",
    accent: "hsl(345 55% 52%)",
    border: "hsl(345 55% 84%)",
  },
  {
    icon: UserCheck,
    title: "Personal Mentorship",
    desc: "Small batches, 1:1 attention and a learning plan tailored to your goal.",
    num: "02",
    iconBg: "linear-gradient(135deg, hsl(205 65% 48%), hsl(205 65% 34%))",
    cardBg: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(205 60% 93%) 100%)",
    accent: "hsl(205 65% 48%)",
    border: "hsl(205 60% 82%)",
  },
  {
    icon: HeartPulse,
    title: "Medical-Inspired Care",
    desc: "A diagnostic, empathetic approach — we understand where you are before we teach.",
    num: "03",
    iconBg: "linear-gradient(135deg, hsl(14 75% 52%), hsl(14 70% 38%))",
    cardBg: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(14 75% 94%) 100%)",
    accent: "hsl(14 75% 52%)",
    border: "hsl(14 70% 82%)",
  },
  {
    icon: Target,
    title: "Outcome-Focused",
    desc: "Score targets, interview wins, fluency milestones — every session has a purpose.",
    num: "04",
    iconBg: "linear-gradient(135deg, hsl(174 55% 42%), hsl(174 55% 30%))",
    cardBg: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(174 55% 92%) 100%)",
    accent: "hsl(174 55% 42%)",
    border: "hsl(174 50% 80%)",
  },
  {
    icon: Sparkles,
    title: "Behavioural Edge",
    desc: "Confidence, body language and mindset coaching woven into every program.",
    num: "05",
    iconBg: "linear-gradient(135deg, hsl(280 38% 52%), hsl(280 38% 38%))",
    cardBg: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(280 38% 93%) 100%)",
    accent: "hsl(280 38% 52%)",
    border: "hsl(280 35% 82%)",
  },
  {
    icon: Clock,
    title: "Flexible Schedules",
    desc: "Online and offline batches designed for students, job seekers and working professionals.",
    num: "06",
    iconBg: "linear-gradient(135deg, hsl(38 85% 48%), hsl(38 80% 35%))",
    cardBg: "linear-gradient(160deg, hsl(0 0% 100%) 0%, hsl(38 85% 93%) 100%)",
    accent: "hsl(38 85% 48%)",
    border: "hsl(38 80% 78%)",
  },
];

export const WhyUs = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-whyus-bg)" }}>

      {/* Decorative orbs */}
      <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "hsl(38 85% 80%)" }} />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "hsl(345 60% 78%)" }} />

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
            style={{ background: "hsl(38 85% 90%)", color: "hsl(38 80% 38%)", border: "1px solid hsl(38 80% 76%)" }}>
            ✦ Why Anek
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-4" style={{ color: "hsl(340 20% 14%)" }}>
            Built on trust, shaped by science,<br />
            <span className="text-gradient-amber">delivered with grace.</span>
          </h2>
          <p className="max-w-xl mx-auto text-base" style={{ color: "hsl(340 12% 45%)" }}>
            Six reasons women, students and professionals across India choose Anek Learning Solutions.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl p-7 overflow-hidden"
              style={{
                background: r.cardBg,
                border: `1px solid ${r.border}`,
                boxShadow: "0 4px 24px -6px hsl(340 30% 55% / 0.10)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.09 }}
              whileHover={{ y: -4, boxShadow: `0 16px 40px -8px ${r.border}` }}
            >
              {/* Big background number */}
              <div className="absolute top-3 right-4 font-serif text-6xl font-bold select-none pointer-events-none"
                style={{ color: r.accent, opacity: 0.08 }}>
                {r.num}
              </div>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md"
                style={{ background: r.iconBg }}>
                <r.icon className="w-6 h-6 text-white" />
              </div>

              {/* Left accent bar */}
              <div className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
                style={{ background: r.iconBg }} />

              <h3 className="font-serif text-lg font-semibold mb-2" style={{ color: "hsl(340 20% 14%)" }}>
                {r.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "hsl(340 12% 42%)" }}>
                {r.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};