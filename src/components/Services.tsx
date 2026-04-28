import { motion } from "framer-motion";
import {
  Compass, Globe2, BookOpen, Headphones, Pill, PenLine,
  HeartHandshake, Trophy, Sparkles
} from "lucide-react";

const services = [
  { icon: Compass, title: "Consultancy & Career Guidance", desc: "1:1 mentoring on study paths, career pivots, study-abroad goals and personal branding.", tone: "rose" },
  { icon: Globe2, title: "IELTS Training", desc: "Strategy-led prep for Listening, Reading, Writing and Speaking — band-targeted coaching.", tone: "blush" },
  { icon: BookOpen, title: "PTE Academic & General", desc: "Pearson-certified PTE training with templates, mock tests and score-boosting techniques.", tone: "lavender" },
  { icon: Headphones, title: "Call Center / BPO Training", desc: "Voice, accent neutralisation, soft skills and customer handling for international processes.", tone: "medical" },
  { icon: Pill, title: "Pharma & Medicine Communication", desc: "Specialised English for medical professionals, MRs and pharma support roles.", tone: "rose" },
  { icon: PenLine, title: "Content Creation & Writing", desc: "Train your voice for blogs, scripts, social media and brand storytelling.", tone: "blush" },
  { icon: HeartHandshake, title: "Customer Query & Support", desc: "Empathy-led communication for support teams across chat, email and voice.", tone: "lavender" },
  { icon: Trophy, title: "Competitive Exam Training", desc: "Structured English and reasoning prep for banking, government and academic exams.", tone: "medical" },
  { icon: Sparkles, title: "Confidence & Behavioural Training", desc: "Body language, mindset, presence and behavioural coaching for life and interviews.", tone: "rose" },
];

const toneStyles: Record<string, string> = {
  rose: "bg-primary-soft text-primary",
  blush: "bg-blush text-primary",
  lavender: "bg-lavender text-secondary-foreground",
  medical: "bg-accent text-medical-blue",
};

export const Services = () => {
  return (
    <section id="programs" className="py-28 bg-background relative">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Programs & Training</div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-5">
            Expert training for <span className="italic text-gradient-rose">every voice</span> that wants to be heard.
          </h2>
          <p className="text-muted-foreground">
            From IELTS and PTE to BPO, pharma and behavioural coaching — choose a program crafted to move you forward.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.1, duration: 0.5 }}
              whileHover={{ y: -6 }}
              className="group relative p-8 rounded-3xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 ${toneStyles[s.tone]}`}>
                <s.icon className="w-7 h-7" />
              </div>
              <h3 className="font-serif text-2xl font-semibold mb-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              <div className="mt-6 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-smooth">
                Enquire about this program →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
