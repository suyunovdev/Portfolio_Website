"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiGlobe, FiCheck } from "react-icons/fi";
import { useLang, languages } from "@/context/language-context";

export default function LanguageSwitcher() {
  const { lang, switchLang } = useLang();
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const current = languages.find((l) => l.code === lang);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 p-2.5 rounded-xl glass hover:scale-110 transition-transform"
        aria-label="Switch language"
      >
        <FiGlobe className="w-4 h-4 text-primary-500" />
        <span className="text-xs font-bold text-primary-500">
          {current?.label}
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute right-0 top-full mt-2 glass rounded-xl overflow-hidden min-w-[150px] z-50 shadow-xl"
          >
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => {
                  switchLang(l.code);
                  setOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                  lang === l.code
                    ? "bg-primary-500/10 text-primary-500 font-semibold"
                    : "text-[var(--text-secondary)] hover:bg-primary-500/5 hover:text-[var(--text-primary)]"
                }`}
              >
                <span className="text-base">{l.flag}</span>
                <span className="flex-1 text-left">{l.name}</span>
                {lang === l.code && <FiCheck className="w-4 h-4" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
