"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: false }}
      transition={{ duration: 0.6 }}
      className="bg-dark-bg border-t border-dark-border py-8"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/top_left_logo.png"
            alt="AgentUX Logo"
            width={128}
            height={128}
            className="rounded-full"
          />
          <span className="text-text-muted text-xs ml-2">
            &copy; 2026 AgentUX. Making great UX accessible to everyone.
          </span>
        </div>

      </div>
    </motion.footer>
  );
}
