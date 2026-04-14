"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Send } from "lucide-react";
import Image from "next/image";
import ContactModal from "./ContactModal";

export default function Hero() {
  const [showEmail, setShowEmail] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showContact, setShowContact] = useState(false);

  return (
    <section
      id="intro"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(37,99,235,0.15),_transparent_60%)]" />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
          >
            Usability Testing
            <br />
            for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-primary to-blue-light">
              Everyone
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg text-text-secondary mb-8 max-w-lg leading-relaxed"
          >
            A Chrome extension that brings AI-powered usability testing to any
            team, on any website, in under a minute. No research budget,
            no recruitment pipeline, and no weeks of preparation needed.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex items-center gap-3"
          >
            <button
              onClick={() => setShowEmail(true)}
              className="inline-flex items-center gap-2 bg-blue-primary hover:bg-blue-light text-white px-6 py-3 rounded-full font-medium transition-all hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]"
            >
              Book a Demo
              <ArrowRight className="w-4 h-4" />
            </button>

            <AnimatePresence>
              {showEmail && (
                <motion.form
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                      setEmailError("Please enter a valid email address.");
                      return;
                    }
                    setEmailError("");
                    setShowContact(true);
                  }}
                  className="flex flex-col gap-1 overflow-hidden"
                >
                  <div className="flex items-center gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      autoFocus
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setEmailError("");
                      }}
                      className={`bg-dark-card border rounded-full px-5 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none transition-colors w-56 ${emailError ? "border-red-400" : "border-dark-border focus:border-blue-primary"}`}
                    />
                    <button
                      type="submit"
                      className="bg-blue-primary hover:bg-blue-light text-white p-3 rounded-full transition-colors shrink-0"
                    >
                      <Send className="w-4 h-4" />
                    </button>
                  </div>
                  {emailError && (
                    <p className="text-red-400 text-xs pl-5">{emailError}</p>
                  )}
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Mascot on the right */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2"
        >
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/MascotHappyHi.svg"
              alt="AgentUX Mascot"
              width={340}
              height={340}
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      <ContactModal
        open={showContact}
        onClose={() => setShowContact(false)}
        prefillEmail={email}
      />
    </section>
  );
}
