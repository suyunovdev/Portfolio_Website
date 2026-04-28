"use client";

import Image from "next/image";
import { socialLinks } from "@/data/social-links";
import shaxsiy from "../../../public/shaxsiy.jpg";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-[var(--bg-secondary)]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Image
              src={shaxsiy}
              alt="Ilyos Suyunov"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-bold gradient-text">Suyunovdev</span>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="p-2.5 rounded-xl text-[var(--text-secondary)] hover:text-primary-500 hover:bg-primary-500/10 transition-all"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-6 border-t border-[var(--border)] text-center">
          <p className="text-sm text-[var(--text-secondary)]">
            &copy; {new Date().getFullYear()} Ilyos Suyunov. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
