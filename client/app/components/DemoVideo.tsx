"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export default function DemoVideo() {
  return (
    <section className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          See AgentUX in Action
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <div className="relative bg-dark-bg border border-dark-border rounded-2xl overflow-hidden aspect-video flex flex-col items-center justify-center">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(37,99,235,0.08),_transparent_70%)]" />

            <motion.div
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative mb-6"
            >
              <div className="w-24 h-24 bg-blue-primary rounded-full flex items-center justify-center mx-auto">
                <Zap className="w-10 h-10 text-white" />
              </div>
            </motion.div>

            <p className="text-xl font-semibold text-text-primary relative z-10">
              Demo Video Coming Soon
            </p>
            <p className="text-sm text-text-muted mt-2 relative z-10">
              Watch AgentUX automatically navigate a website&#39;s UX
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
