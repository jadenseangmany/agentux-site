"use client";

import { motion } from "framer-motion";
import { Building2, Heart, GraduationCap } from "lucide-react";

const audiences = [
  {
    icon: Building2,
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    title: "Small Businesses",
    description:
      "You don't need to hire a UX consultant to compete with bigger companies. Get the same quality insights on your own.",
  },
  {
    icon: Heart,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    title: "Nonprofits",
    description:
      "Make sure donors and volunteers can actually find what they need on your site so you can focus on your mission.",
  },
  {
    icon: GraduationCap,
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    title: "Students & Creators",
    description:
      "Make your portfolio or side project feel polished and professional. Great UX goes a long way when you're trying to stand out.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function WhoItsFor() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Who It&apos;s For
          </h2>
          <p className="text-text-secondary">
            Making great UX accessible to everyone
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {audiences.map((item) => (
            <motion.div
              key={item.title}
              variants={itemVariants}
              whileHover={{ x: 8, transition: { duration: 0.2 } }}
              className="flex items-start gap-5 bg-dark-card border border-dark-border rounded-xl p-6 hover:border-blue-primary/30 transition-colors"
            >
              <div
                className={`w-10 h-10 ${item.bgColor} rounded-lg flex items-center justify-center shrink-0`}
              >
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
