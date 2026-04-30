import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who is Anek Learning Solutions for?", a: "Students preparing for IELTS or PTE, job seekers entering BPO or pharma roles, working professionals refining their communication, and anyone seeking confidence and behavioural growth." },
  { q: "Are the classes online or offline?", a: "Both. We offer flexible online batches for learners across India and personalised offline sessions where available. Schedules are tailored around students and working professionals." },
  { q: "Is Vidya ma'am personally involved in training?", a: "Yes. Every program is led or directly mentored by Dr. Vidya Malve to ensure consistent quality, personal attention and accountability." },
  { q: "How long does a typical program take?", a: "Most language and communication programs run between 4 to 12 weeks depending on your starting level and target. Consultation sessions help us define a clear timeline upfront." },
  { q: "Do you guarantee a particular IELTS or PTE score?", a: "We don't promise scores — we promise structured preparation, honest feedback and proven strategies. Most committed learners see significant band/score improvement." },
  { q: "How do I get started?", a: "Book a free consultation through the form below or message us directly on WhatsApp. We'll understand your goals and recommend the right program." },
];

export const FAQ = () => {
  return (
    <section className="relative py-24 overflow-hidden" style={{ background: "var(--gradient-faq-bg)" }}>

      {/* Decorative orbs */}
      <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-30 pointer-events-none"
        style={{ background: "hsl(38 85% 78%)" }} />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 pointer-events-none"
        style={{ background: "hsl(345 60% 80%)" }} />

      <div className="container mx-auto px-4 max-w-3xl relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ background: "hsl(38 85% 88%)", color: "hsl(38 80% 35%)", border: "1px solid hsl(38 80% 72%)" }}>
            ✦ FAQ
          </span>
          <h2 className="text-4xl lg:text-5xl font-serif mb-3" style={{ color: "hsl(340 20% 14%)" }}>
            Questions, <span className="text-gradient-amber">answered with care.</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-2xl overflow-hidden border-none"
                style={{
                  background: "hsl(0 0% 100%)",
                  boxShadow: "0 2px 16px -4px hsl(38 60% 55% / 0.12)",
                  border: "1px solid hsl(38 60% 86%)",
                }}
              >
                <AccordionTrigger
                  className="px-6 py-4 text-left font-serif text-base hover:no-underline"
                  style={{ color: "hsl(340 20% 14%)" }}
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent
                  className="px-6 pb-5 text-sm leading-relaxed"
                  style={{ color: "hsl(340 12% 42%)" }}
                >
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};