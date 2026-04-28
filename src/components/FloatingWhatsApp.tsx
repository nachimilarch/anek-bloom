import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export const FloatingWhatsApp = () => (
  <motion.a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noreferrer"
    aria-label="Chat on WhatsApp"
    initial={{ scale: 0, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ delay: 1.2, type: "spring" }}
    whileHover={{ scale: 1.08 }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white shadow-elegant flex items-center justify-center hover:shadow-glow transition-smooth"
  >
    <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
    <MessageCircle className="w-7 h-7 relative" />
  </motion.a>
);
