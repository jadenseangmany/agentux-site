"use client";

import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function CTA() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-dark-bg to-dark-surface"
    >
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Interested in AgentUX?
          </h2>
          <p className="text-text-secondary mb-8">
            We built this at a hackathon and we&apos;d love to tell you more
            about where it&apos;s headed. Drop us a line!
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:flex-1 bg-dark-card border border-dark-border rounded-full px-5 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-blue-primary transition-colors"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-blue-primary hover:bg-blue-light text-white px-6 py-3 rounded-full font-medium text-sm transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
            >
              Get in Touch
              <Send className="w-4 h-4" />
            </motion.button>
          </motion.div>

          <p className="text-text-muted text-xs mt-4">
            Hackathon project showcase &middot; Contact us for a live demo
          </p>
        </motion.div>
      </div>
    </section>
  );
}
