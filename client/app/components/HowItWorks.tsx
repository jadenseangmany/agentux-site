"use client";

import { motion } from "framer-motion";
import { Users, Eye, Wrench } from "lucide-react";

const steps = [
  {
    icon: Users,
    title: "Choose Your Personas",
    description:
      "Pick from built-in personas like first-time visitors and elderly users, or create your own to match your real audience. Set how many tasks to run and kick off your evaluations.",
  },
  {
    icon: Eye,
    title: "Watch Agents Navigate",
    description:
      "Browser Use agents navigate your site as each persona at the same time, clicking, scrolling, and getting confused in all the right places. You can watch their live browser sessions in real time.",
  },
  {
    icon: Wrench,
    title: "Apply Fixes Instantly",
    description:
      "See your usability issues ranked with specific suggestions on how to fix them. Apply a fix with one click to preview the before and after, then copy a prompt for your AI code editor to ship it.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export default function HowItWorks() {
  return (
    <section className="py-24 bg-dark-bg">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-text-secondary max-w-xl mx-auto">
            Pick your personas, run the test, and start fixing issues. The whole
            thing takes less than 5 minutes.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((step) => (
            <motion.div
              key={step.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="bg-dark-card border border-dark-border rounded-xl p-8 group hover:border-blue-primary/40 transition-colors"
            >
              <div className="w-14 h-14 bg-blue-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-primary/20 transition-colors">
                <step.icon className="w-7 h-7 text-blue-light" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
