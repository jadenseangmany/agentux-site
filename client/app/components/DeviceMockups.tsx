"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const mockups = [
  { label: "Laptop Mockup 1", image: "/generate-task-mockup.svg" },
  { label: "Laptop Mockup 2", image: "/agents-mockup.svg" },
];

export default function DeviceMockups() {
  return (
    <section id="mockups" className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful UX Insights at a Glance
          </h2>
          <p className="text-text-secondary">
            Generate tasks, deploy AI agents, and uncover usability issues, all from your browser
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-1 gap-8 max-w-3xl mx-auto"
        >
          {mockups.map((mockup) => (
            <div
              key={mockup.label}
              className="aspect-[16/10] flex items-center justify-center"
            >
              {mockup.image ? (
                <Image
                  src={mockup.image}
                  alt={mockup.label}
                  width={800}
                  height={500}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="flex flex-col items-center gap-2 text-text-muted">
                  <div className="w-10 h-10 rounded-lg border-2 border-dashed border-dark-border flex items-center justify-center">
                    <span className="text-lg">+</span>
                  </div>
                  <span className="text-xs">{mockup.label}</span>
                </div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
