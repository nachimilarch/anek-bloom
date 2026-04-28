import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const stories = [
  {
    name: "Ananya R.",
    role: "PTE Academic · 84 Overall",
    text: "Vidya ma'am's strategies and patience helped me crack PTE on my second attempt. Her feedback is precise, kind and confidence-building.",
  },
  {
    name: "Dr. Mehul S.",
    role: "Pharma Communication",
    text: "As a doctor preparing for international roles, I needed medical-grade English coaching. Anek delivered exactly that — structured, professional, results-driven.",
  },
  {
    name: "Priya K.",
    role: "BPO Trainee",
    text: "I came in shy and unsure. The behavioural training transformed how I speak, listen and present myself in interviews. I cleared three rounds at a top BPO.",
  },
  {
    name: "Rohit V.",
    role: "IELTS · Band 7.5",
    text: "What stands out is the personal attention. Mock interviews, writing reviews and speaking drills — every session moved my band up.",
  },
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Student Stories</div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-5">
            Real voices, <span className="italic text-gradient-rose">real results.</span>
          </h2>
          <p className="text-muted-foreground">
            Students, professionals and aspirants who learned to speak, perform and succeed.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {stories.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-3xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-primary-soft" />
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 leading-relaxed mb-6 italic font-serif text-lg">
                "{s.text}"
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-full bg-gradient-rose flex items-center justify-center text-primary-foreground font-serif text-lg font-semibold">
                  {s.name[0]}
                </div>
                <div>
                  <div className="font-semibold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
