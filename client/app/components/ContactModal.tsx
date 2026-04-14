"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
import Image from "next/image";

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
  prefillEmail?: string;
}

export default function ContactModal({
  open,
  onClose,
  prefillEmail = "",
}: ContactModalProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative w-full max-w-lg mx-4 bg-dark-surface border border-dark-border rounded-2xl p-8"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-text-muted hover:text-text-primary transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/MascotHappyHi.svg"
                  alt="AgentUX Mascot"
                  width={48}
                  height={48}
                />
              </motion.div>
              <h2 className="text-2xl font-bold">Get in Touch</h2>
            </div>
            <p className="text-text-secondary text-sm mb-8">
              Interested in a demo or just want to say hi? Fill out the form and
              we&apos;ll get back to you.
            </p>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.currentTarget;
                const firstName = (form.elements.namedItem("modal-firstName") as HTMLInputElement).value;
                const lastName = (form.elements.namedItem("modal-lastName") as HTMLInputElement).value;
                const email = (form.elements.namedItem("modal-email") as HTMLInputElement).value;
                const message = (form.elements.namedItem("modal-message") as HTMLTextAreaElement).value;

                const subject = encodeURIComponent(`AgentUX Contact: ${firstName} ${lastName}`);
                const body = encodeURIComponent(
                  `First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}${message ? `\n\nMessage:\n${message}` : ""}`
                );

                window.open(`mailto:agentux.contact@gmail.com?subject=${subject}&body=${body}`, "_blank");
                onClose();
              }}
            >
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="modal-firstName"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    First name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="modal-firstName"
                    type="text"
                    required
                    className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-primary transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label
                    htmlFor="modal-lastName"
                    className="block text-sm font-medium text-text-secondary mb-2"
                  >
                    Last name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="modal-lastName"
                    type="text"
                    required
                    className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-primary transition-colors"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="modal-email"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  id="modal-email"
                  type="email"
                  required
                  key={prefillEmail}
                  defaultValue={prefillEmail}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-primary transition-colors"
                  placeholder="jane@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="modal-message"
                  className="block text-sm font-medium text-text-secondary mb-2"
                >
                  Message{" "}
                  <span className="text-text-muted font-normal">(optional)</span>
                </label>
                <textarea
                  id="modal-message"
                  rows={4}
                  className="w-full bg-dark-card border border-dark-border rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-primary transition-colors resize-none"
                  placeholder="Tell us what you're working on or any questions you have..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-blue-primary hover:bg-blue-light text-white px-6 py-3 rounded-lg font-medium text-sm transition-colors flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body
  );
}
