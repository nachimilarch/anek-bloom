import { motion } from "framer-motion";
import { Stethoscope, Brain, GraduationCap, CheckCircle2 } from "lucide-react";
import vidyaImg from "@/assets/vidya-portrait.jpg";

const credentials = [
  { icon: Stethoscope, title: "Dentist by Profession", desc: "A medical foundation that brings precision, empathy and discipline to every training session." },
  { icon: Brain, title: "Psychological & Behavioural Trainer", desc: "Trained in human behaviour to help you build confidence, presence and emotional fluency." },
  { icon: GraduationCap, title: "Pearson-Certified PTE Trainer", desc: "Officially certified to coach PTE Academic and General — strategy-led, score-focused." },
];

export const About = () => {
  return (
    <section id="about" className="py-28 bg-gradient-soft relative overflow-hidden">
      <div className="absolute top-1/4 -right-32 w-96 h-96 rounded-full bg-primary-soft/40 blur-3xl" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-elegant">
              <img src={vidyaImg} alt="Dr. Vidya Malve" className="w-full h-[600px] object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/30 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 bg-card rounded-2xl shadow-elegant p-6 max-w-xs border border-border">
              <div className="text-xs uppercase tracking-widest text-primary font-medium mb-2">Founder</div>
              <div className="font-serif text-2xl font-semibold">Dr. Vidya Malve</div>
              <div className="text-sm text-muted-foreground mt-1">BDS · PTE Certified · Behavioural Trainer</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">About the Founder</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-6">
              Where medical precision meets <span className="italic text-gradient-rose">human warmth.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Vidya Malve is a dentist, a psychological and behavioural trainer, and a Pearson-certified PTE
              coach for Academic and General. Her journey across medicine, behaviour science and language
              training shapes a rare style of teaching — confident, clear, deeply human.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              At Anek Learning Solutions, she mentors students, job seekers and working professionals
              to communicate with authority, perform with poise, and grow with intention.
            </p>

            <div className="space-y-4">
              {credentials.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  className="flex gap-4 p-5 rounded-2xl bg-card/70 backdrop-blur border border-border hover:shadow-soft transition-smooth"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                    <c.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold mb-1">{c.title}</div>
                    <div className="text-sm text-muted-foreground">{c.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
