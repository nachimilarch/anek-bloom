import { motion } from "framer-motion";
import { ShieldCheck, UserCheck, Clock, Sparkles, HeartPulse, Target } from "lucide-react";

const reasons = [
  { icon: ShieldCheck, title: "Certified & Credible", desc: "A Pearson-certified PTE trainer and qualified dentist — credentials you can trust." },
  { icon: UserCheck, title: "Personal Mentorship", desc: "Small batches, 1:1 attention and a learning plan tailored to your goal." },
  { icon: HeartPulse, title: "Medical-Inspired Care", desc: "A diagnostic, empathetic approach — we understand where you are before we teach." },
  { icon: Target, title: "Outcome-Focused", desc: "Score targets, interview wins, fluency milestones — every session has a purpose." },
  { icon: Sparkles, title: "Behavioural Edge", desc: "Confidence, body language and mindset coaching woven into every program." },
  { icon: Clock, title: "Flexible Schedules", desc: "Online and offline batches designed for students, job seekers and working professionals." },
];

export const WhyUs = () => {
  return (
    <section id="why-us" className="py-28 bg-gradient-medical relative overflow-hidden">
      <div className="absolute -top-20 left-1/3 w-96 h-96 rounded-full bg-primary-soft/50 blur-3xl" />
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Why Anek</div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-5">
            Built on <span className="italic text-gradient-rose">trust,</span> shaped by science,
            delivered with grace.
          </h2>
          <p className="text-muted-foreground">
            Six reasons women, students and professionals across India choose Anek Learning Solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1 }}
              className="p-7 rounded-3xl bg-card/80 backdrop-blur border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-rose flex items-center justify-center mb-5 shadow-soft">
                <r.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-serif text-xl font-semibold mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
