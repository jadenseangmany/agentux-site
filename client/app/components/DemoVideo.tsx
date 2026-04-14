"use client";

import { motion } from "framer-motion";

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
          <div className="relative bg-dark-bg border border-dark-border rounded-2xl overflow-hidden aspect-video">
            <iframe
              src="https://www.youtube.com/embed/AN_QnUUL0Mg"
              title="AgentUX Demo"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
