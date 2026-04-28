import { motion } from "framer-motion";
import {
  Accordion, AccordionContent, AccordionItem, AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  { q: "Who is Anek Learning Solutions for?",
    a: "Students preparing for IELTS or PTE, job seekers entering BPO or pharma roles, working professionals refining their communication, and anyone seeking confidence and behavioural growth." },
  { q: "Are the classes online or offline?",
    a: "Both. We offer flexible online batches for learners across India and personalised offline sessions where available. Schedules are tailored around students and working professionals." },
  { q: "Is Vidya ma'am personally involved in training?",
    a: "Yes. Every program is led or directly mentored by Dr. Vidya Malve to ensure consistent quality, personal attention and accountability." },
  { q: "How long does a typical program take?",
    a: "Most language and communication programs run between 4 to 12 weeks depending on your starting level and target. Consultation sessions help us define a clear timeline upfront." },
  { q: "Do you guarantee a particular IELTS or PTE score?",
    a: "We don't promise scores — we promise structured preparation, honest feedback and proven strategies. Most committed learners see significant band/score improvement." },
  { q: "How do I get started?",
    a: "Book a free consultation through the form below or message us directly on WhatsApp. We'll understand your goals and recommend the right program." },
];

export const FAQ = () => {
  return (
    <section id="faq" className="py-28 bg-gradient-soft">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">FAQ</div>
          <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight">
            Questions, <span className="italic text-gradient-rose">answered with care.</span>
          </h2>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card border border-border rounded-2xl px-6 shadow-soft data-[state=open]:shadow-elegant transition-smooth"
            >
              <AccordionTrigger className="text-left font-serif text-lg font-semibold hover:no-underline py-5">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
