"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import ContactModal from "./ContactModal";

const navLinks = [
  { label: "Intro", href: "#intro" },
  { label: "Our Vision", href: "#vision" },
  { label: "Team", href: "#team" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showContact, setShowContact] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/80 backdrop-blur-md border-b border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Image
            src="/top_left_logo.png"
            alt="AgentUX Logo"
            width={128}
            height={128}
            className="rounded-full"
          />
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-text-secondary hover:text-text-primary transition-colors text-sm"
            >
              {link.label}
            </a>
          ))}
          <button
            onClick={() => setShowContact(true)}
            className="bg-blue-primary hover:bg-blue-light text-white px-5 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer"
          >
            Contact Us
          </button>
        </div>

        <button
          className="md:hidden text-text-primary"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-dark-surface border-t border-dark-border"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-text-secondary hover:text-text-primary transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className="bg-blue-primary hover:bg-blue-light text-white px-5 py-2 rounded-full text-sm font-medium transition-colors text-center"
              onClick={() => {
                setMobileOpen(false);
                setShowContact(true);
              }}
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
      <ContactModal
        open={showContact}
        onClose={() => setShowContact(false)}
      />
    </motion.nav>
  );
}
