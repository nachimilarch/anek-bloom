import { motion } from "framer-motion";
import {
  Compass, Globe2, BookOpen, Headphones, Pill, PenLine,
  HeartHandshake, Trophy, Sparkles
} from "lucide-react";

const services = [
  {
    icon: Compass,
    title: "Consultancy & Career Guidance",
    desc: "1:1 mentoring on study paths, career pivots, study-abroad goals and personal branding.",
    gradient: "linear-gradient(135deg, hsl(345 70% 88%) 0%, hsl(345 55% 72%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(345 55% 52%) 0%, hsl(345 70% 40%) 100%)",
    tag: "rose",
    border: "hsl(345 55% 78%)",
  },
  {
    icon: Globe2,
    title: "IELTS Training",
    desc: "Strategy-led prep for Listening, Reading, Writing and Speaking — band-targeted coaching.",
    gradient: "linear-gradient(135deg, hsl(205 60% 88%) 0%, hsl(205 65% 72%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(205 65% 48%) 0%, hsl(205 65% 35%) 100%)",
    tag: "blue",
    border: "hsl(205 60% 75%)",
  },
  {
    icon: BookOpen,
    title: "PTE Academic & General",
    desc: "Pearson-certified PTE training with templates, mock tests and score-boosting techniques.",
    gradient: "linear-gradient(135deg, hsl(280 40% 88%) 0%, hsl(280 38% 74%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(280 38% 52%) 0%, hsl(280 38% 38%) 100%)",
    tag: "lavender",
    border: "hsl(280 38% 76%)",
  },
  {
    icon: Headphones,
    title: "Call Center / BPO Training",
    desc: "Voice, accent neutralisation, soft skills and customer handling for international processes.",
    gradient: "linear-gradient(135deg, hsl(174 55% 88%) 0%, hsl(174 55% 72%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(174 55% 42%) 0%, hsl(174 55% 30%) 100%)",
    tag: "teal",
    border: "hsl(174 50% 72%)",
  },
  {
    icon: Pill,
    title: "Pharma & Medical Training",
    desc: "Product knowledge, domain induction and English communication for MRs, medical reps, and pharma support teams — bridging clinical knowledge with confident customer-facing skills.",
    gradient: "linear-gradient(135deg, hsl(14 80% 90%) 0%, hsl(14 75% 74%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(14 75% 52%) 0%, hsl(14 70% 38%) 100%)",
    tag: "coral",
    border: "hsl(14 75% 76%)",
  },
  {
    icon: PenLine,
    title: "Content Creation & Writing",
    desc: "Train your voice for blogs, scripts, media and brand storytelling.",
    gradient: "linear-gradient(135deg, hsl(38 90% 90%) 0%, hsl(38 85% 74%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(38 85% 48%) 0%, hsl(38 80% 35%) 100%)",
    tag: "amber",
    border: "hsl(38 85% 72%)",
  },
  {
    icon: HeartHandshake,
    title: "Customer Query & Support",
    desc: "Empathy-led communication for support teams across chat, email and voice.",
    gradient: "linear-gradient(135deg, hsl(145 30% 88%) 0%, hsl(145 30% 72%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(145 30% 44%) 0%, hsl(145 30% 32%) 100%)",
    tag: "sage",
    border: "hsl(145 28% 72%)",
  },
  {
    icon: Trophy,
    title: "Competitive Exam Training",
    desc: "Structured English and reasoning prep for banking, government and academic exams.",
    gradient: "linear-gradient(135deg, hsl(240 50% 90%) 0%, hsl(240 48% 76%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(240 48% 52%) 0%, hsl(240 48% 38%) 100%)",
    tag: "indigo",
    border: "hsl(240 45% 76%)",
  },
  {
    icon: Sparkles,
    title: "Confidence & Behavioural Training",
    desc: "Body language, mindset, presence and behavioural coaching for life and interviews.",
    gradient: "linear-gradient(135deg, hsl(345 70% 88%) 0%, hsl(280 42% 78%) 100%)",
    iconBg: "linear-gradient(135deg, hsl(345 55% 52%) 0%, hsl(280 38% 42%) 100%)",
    tag: "rose-lavender",
    border: "hsl(310 45% 76%)",
  },
];

export const Services = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-services-bg)" }}>

      {/* Decorative background shapes */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "hsl(280 40% 80%)" }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-25 pointer-events-none"
        style={{ background: "hsl(174 55% 75%)" }} />
      <div className="absolute top-1/2 left-1/3 w-48 h-48 rounded-full blur-2xl opacity-20 pointer-events-none"
        style={{ background: "hsl(205 60% 80%)" }} />

      <div className="container mx-auto px-4 relative z-10">

        {/* Section header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "hsl(280 40% 88%)", color: "hsl(280 38% 40%)", border: "1px solid hsl(280 38% 78%)" }}>
            ✦ Programs & Training
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-4" style={{ color: "hsl(340 20% 14%)" }}>
            Expert training for every voice<br />
            <span className="text-gradient-rose">that wants to be heard.</span>
          </h2>
          <p className="max-w-2xl mx-auto text-base leading-relaxed" style={{ color: "hsl(340 12% 45%)" }}>
            From IELTS and PTE to BPO, pharma and behavioural coaching — choose a program crafted to move you forward.
          </p>
        </motion.div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group relative rounded-2xl p-6 flex flex-col gap-4 cursor-pointer overflow-hidden"
              style={{
                background: s.gradient,
                border: `1px solid ${s.border}`,
                boxShadow: "0 4px 20px -4px hsl(340 30% 60% / 0.12)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -5, boxShadow: `0 16px 40px -8px ${s.border}` }}
            >
              {/* Shine overlay on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{ background: "linear-gradient(135deg, hsl(0 0% 100% / 0.12) 0%, transparent 60%)" }} />

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md flex-shrink-0"
                style={{ background: s.iconBg }}>
                <s.icon className="w-6 h-6 text-white" />
              </div>

              {/* Text */}
              <div>
                <h3 className="font-serif text-lg font-semibold mb-1.5" style={{ color: "hsl(340 20% 14%)" }}>
                  {s.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "hsl(340 15% 35%)" }}>
                  {s.desc}
                </p>
              </div>

              <span className="mt-auto text-xs font-semibold" style={{ color: "hsl(340 20% 30%)" }}>
                Enquire about this program →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};