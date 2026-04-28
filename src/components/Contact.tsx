import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { MessageCircle, Mail, Phone, MapPin, Send, Instagram, Linkedin, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(80),
  email: z.string().trim().email("Please enter a valid email").max(200),
  phone: z.string().trim().min(7, "Please enter a valid phone number").max(20),
  program: z.string().trim().min(2, "Please mention a program of interest").max(80),
  message: z.string().trim().min(5, "Please share a short message").max(800),
});

type FormValues = z.infer<typeof schema>;

const WHATSAPP_NUMBER = "919999999999"; // placeholder

export const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormValues) => {
    const text = encodeURIComponent(
      `Hello Vidya ma'am,\n\nI'd like to enquire about ${data.program}.\n\nName: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\n\n${data.message}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    toast({
      title: "Enquiry ready ✨",
      description: "We've opened WhatsApp with your message — just hit send.",
    });
    reset();
  };

  return (
    <section id="contact" className="py-28 bg-background relative overflow-hidden">
      <div className="absolute -top-20 right-0 w-96 h-96 rounded-full bg-primary-soft/40 blur-3xl" />
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs tracking-[0.25em] uppercase text-primary font-semibold mb-4">Enquire Today</div>
            <h2 className="font-serif text-4xl lg:text-5xl font-medium leading-tight mb-6">
              Let's start a <span className="italic text-gradient-rose">conversation.</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-10 max-w-md">
              Tell us about your goals — IELTS, PTE, BPO, communication, behavioural growth — and we'll
              design a learning path that fits your life.
            </p>

            <div className="space-y-5 mb-10">
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer"
                 className="flex items-center gap-4 p-5 rounded-2xl bg-gradient-card border border-border shadow-soft hover:shadow-elegant transition-smooth group">
                <div className="w-12 h-12 rounded-xl bg-[#25D366]/15 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-[#25D366]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs text-muted-foreground">WhatsApp (preferred)</div>
                  <div className="font-semibold">+91 99999 99999</div>
                </div>
                <span className="text-primary opacity-0 group-hover:opacity-100 transition-smooth">→</span>
              </a>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-primary-soft flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Email</div>
                  <div className="font-semibold">hello@aneklearning.in</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-2xl bg-card border border-border">
                <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-medical-blue" />
                </div>
                <div>
                  <div className="text-xs text-muted-foreground">Based in</div>
                  <div className="font-semibold">India · Online & In-Person</div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              {[Instagram, Linkedin, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="w-11 h-11 rounded-full bg-card border border-border flex items-center justify-center hover:bg-primary-soft hover:text-primary transition-smooth">
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-card border border-border rounded-3xl p-8 lg:p-10 shadow-elegant"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" {...register("name")} placeholder="Your name" className="mt-2 bg-background" />
                {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
              </div>
              <div>
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" {...register("phone")} placeholder="+91" className="mt-2 bg-background" />
                {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="mt-5">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" {...register("email")} placeholder="you@example.com" className="mt-2 bg-background" />
              {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
            </div>
            <div className="mt-5">
              <Label htmlFor="program">Program of Interest</Label>
              <Input id="program" {...register("program")} placeholder="e.g. PTE Academic, IELTS, BPO Training" className="mt-2 bg-background" />
              {errors.program && <p className="text-xs text-destructive mt-1">{errors.program.message}</p>}
            </div>
            <div className="mt-5">
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" rows={4} {...register("message")} placeholder="Tell us about your goals..." className="mt-2 bg-background" />
              {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
            </div>
            <Button type="submit" variant="hero" size="lg" className="w-full mt-7" disabled={isSubmitting}>
              <Send className="w-5 h-5" /> Send Enquiry
            </Button>
            <p className="text-xs text-muted-foreground text-center mt-4">
              Your details open WhatsApp pre-filled — we'll respond within a few hours.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
