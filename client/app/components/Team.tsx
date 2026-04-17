"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const teamMembers = [
  { name: "Jaden Seangmany", role: "Developer", image: "/linkedin-pfp.jpeg", link: "https://www.linkedin.com/in/jadenseangmany" },
  { name: "Khang Nguyen", role: "Developer", image: "/linkedin-khang.jpeg", link: "https://www.linkedin.com/in/khangnguyen05/" },
  { name: "Alice Lan", role: "Designer", image: "/linkedin-alice.jpeg", link: "https://www.linkedin.com/in/alice-lan06/" },
  { name: "Manjusri Gobiraj", role: "Designer", image: "/linkedin-manu.jpeg", link: "https://www.linkedin.com/in/manjusri-gobiraj/" },
];

const experiences = [
  {
    title: "The Hackathon Experience",
    image: "/teamphoto_svg.svg",
    description:
      "We worked so hard on this project and honestly thought we didn't win because every other track was awarded during the closing ceremony. Then ours was the last one called, and we were so excited we couldn't hold back our screams.",
  },
  {
    title: "24 Hours of Innovation",
    image: "/sitting-down.svg",
    description:
      "We were debugging while waiting in line for food because we were so close to squashing a few bugs. We also didn't want to miss all the free food, so we just brought our laptops with us.",
  },
  {
    title: "Building Together",
    image: "/building-together.svg",
    description:
      "This is us during judging. We were super nervous about pitching our idea, but being together made it a lot easier to handle the stress.",
  },
  {
    title: "Bringing Ideas to Life",
    image: "/bringing-ideas.svg",
    description:
      "This was us working with one of the mentors to refine our project. His feedback was crucial in helping us win and making our product feel a lot more polished.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

const memberVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export default function Team() {
  return (
    <section id="team" className="py-24 bg-dark-surface">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Meet the Team
          </h2>
        </motion.div>

        {/* Experience Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="grid md:grid-cols-2 gap-6 mb-16"
        >
          {experiences.map((exp) => (
            <motion.div
              key={exp.title}
              variants={cardVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-dark-card border border-dark-border rounded-xl overflow-hidden group hover:border-blue-primary/30 transition-colors"
            >
              <div className="p-4 pb-0">
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-6 pt-4">
                <h3 className="text-lg font-semibold mb-2">{exp.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Members */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="flex flex-wrap justify-center gap-12"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="flex flex-col items-center group"
            >
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-dark-border group-hover:border-blue-primary/50 transition-colors">
                {member.image ? (
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={96}
                    height={96}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-dark-card flex items-center justify-center">
                    <span className="text-2xl text-text-muted">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                )}
              </div>
              <h4 className="font-semibold text-sm">{member.name}</h4>
              <p className="text-text-muted text-xs mb-2">{member.role}</p>
              <div className="flex items-center gap-1 text-blue-light hover:text-blue-primary transition-colors cursor-pointer">
                <ExternalLink className="w-3.5 h-3.5" />
                <a href={member.link} className="text-xs">LinkedIn</a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
