"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Image from "next/image";

export default function Story() {
  return (
    <section id="vision" className="bg-dark-surface overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-0">
        {/* Text column */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="px-6 lg:px-12 py-24"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            The Story Behind AgentUX
          </h2>
          <h3 className="text-blue-light text-xl font-semibold italic mb-6">
            Why We Built This
          </h3>

          <a
            href="https://devpost.com/software/agent-ux?ref_content=my-projects-tab&ref_feature=my_projects"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-3 bg-amber-500/10 border border-amber-500/20 hover:border-amber-500/40 rounded-lg px-4 py-3 mb-6 transition-colors"
          >
            <Trophy className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-sm text-amber-300">
              <span className="font-semibold">Winner</span>, DiamondHacks 2026
            </p>
          </a>

          <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
            <p>
              We were working on a real project for a sports nonprofit,
              designing their website from scratch. We did everything right:
              prepared interview questions, sent out surveys, planned usability
              tests.
            </p>
            <p className="font-semibold text-text-primary">Nobody responded.</p>
            <p>
              So we did what a lot of teams end up doing. We tested on the
              people closest to us. Friends. Roommates. The feedback was okay,
              but we knew we weren&apos;t hearing from our actual users.
            </p>
            <p>
              That experience stuck with us. Usability testing is supposed to
              make products better, but the overhead can slow everything down.
              For small businesses, nonprofits, and solo developers, formal UX
              research isn&apos;t just difficult.{" "}
              <span className="font-bold text-text-primary">
                It&apos;s completely out of reach.
              </span>
            </p>
            <p>
              We built AgentUX because{" "}
              <span className="text-blue-light font-semibold decoration-blue-light">
                understanding your users shouldn&apos;t require a research
                budget, a recruitment pipeline, or weeks of preparation
              </span>
              . Every team deserves to know if their product actually works.
            </p>
          </div>
        </motion.div>

        {/* Image column — flush to the right edge */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative min-h-[400px] lg:min-h-full"
        >
          <Image
            src="/thank-small-business.png"
            alt="We can't thank you enough for supporting our small business"
            fill
            className="object-cover"
          />
        </motion.div>
      </div>
    </section>
  );
}
