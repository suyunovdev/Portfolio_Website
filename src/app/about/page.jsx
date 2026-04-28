"use client";

import Image from "next/image";
import { socialLinks } from "@/data/social-links";
import MotionWrapper from "@/components/ui/motion-wrapper";
import SectionHeading from "@/components/ui/section-heading";
import shaxsiy from "../../../public/shaxsiy.jpg";

const highlights = [
  { label: "Specialization", value: "Fullstack Development" },
  { label: "Frontend", value: "React & Next.js" },
  { label: "Backend", value: "Node.js & Express" },
  { label: "Database", value: "MongoDB & PostgreSQL" },
];

export default function AboutPage() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="About Me"
          subtitle="Get to know who I am and what drives my passion for web development."
        />

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <MotionWrapper variant="slideLeft">
            <div className="relative group">
              <div className="absolute -inset-4 gradient-bg rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
              <Image
                src={shaxsiy}
                alt="Ilyos Suyunov"
                width={400}
                height={400}
                className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square"
              />
            </div>
          </MotionWrapper>

          {/* Content */}
          <div>
            <MotionWrapper variant="slideRight">
              <h3 className="text-3xl font-bold mb-2">
                Ilyos <span className="gradient-text">Suyunov</span>
              </h3>
              <p className="text-primary-500 font-medium text-lg mb-6">
                Fullstack Developer
              </p>
            </MotionWrapper>

            <MotionWrapper variant="fadeUp" custom={1}>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                I&apos;m a passionate fullstack developer who builds complete web
                applications from the ground up. On the frontend I work with
                React and Next.js; on the backend I use Node.js, Express, and
                MongoDB to create robust APIs and services. I enjoy turning
                complex ideas into scalable, real-world products.
              </p>
            </MotionWrapper>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <MotionWrapper key={item.label} variant="scaleIn" custom={i + 2}>
                  <div className="glass rounded-xl p-3">
                    <p className="text-xs text-[var(--text-secondary)] mb-0.5">
                      {item.label}
                    </p>
                    <p className="font-semibold text-sm">{item.value}</p>
                  </div>
                </MotionWrapper>
              ))}
            </div>

            {/* Social Links */}
            <MotionWrapper variant="fadeUp" custom={4}>
              <div className="flex gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.name}
                    className="p-3 rounded-xl glass text-[var(--text-secondary)] hover:text-primary-500 hover:scale-110 transition-all"
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </MotionWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}
