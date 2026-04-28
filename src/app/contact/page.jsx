"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { FiSend, FiMail, FiUser, FiMessageSquare } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { socialLinks } from "@/data/social-links";
import SectionHeading from "@/components/ui/section-heading";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { useLang } from "@/context/language-context";
import t from "@/data/translations";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

export default function ContactPage() {
  const { lang } = useLang();
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (sending) return;
    setSending(true);

    try {
      if (EMAILJS_SERVICE_ID === "YOUR_SERVICE_ID") {
        await new Promise((r) => setTimeout(r, 1000));
        toast.success(t.contact.successDemo[lang]);
      } else {
        await emailjs.sendForm(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          formRef.current,
          EMAILJS_PUBLIC_KEY
        );
        toast.success(t.contact.success[lang]);
      }
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error(t.contact.error[lang]);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title={t.contact.title[lang]}
          subtitle={t.contact.subtitle[lang]}
        />

        <div className="grid md:grid-cols-5 gap-12">
          {/* Info Side */}
          <div className="md:col-span-2 space-y-8">
            <MotionWrapper variant="slideLeft">
              <div className="glass rounded-2xl p-6 space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-1">
                    {t.contact.talkTitle[lang]}
                  </h3>
                  <p className="text-sm text-[var(--text-secondary)]">
                    {t.contact.talkDesc[lang]}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary-500/10">
                      <FiMail className="w-5 h-5 text-primary-500" />
                    </div>
                    <div>
                      <p className="text-xs text-[var(--text-secondary)]">Email</p>
                      <p className="text-sm font-medium">ilyossuyunov416@gmail.com</p>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-2">
                  {socialLinks.slice(0, 4).map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      className="p-2.5 rounded-xl glass text-[var(--text-secondary)] hover:text-primary-500 hover:scale-110 transition-all"
                    >
                      <link.icon className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>
            </MotionWrapper>
          </div>

          {/* Form Side */}
          <div className="md:col-span-3">
            <MotionWrapper variant="slideRight">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="glass rounded-2xl p-6 sm:p-8 space-y-5"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    {t.contact.name[lang]}
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.namePlaceholder[lang]}
                      className="input-field pl-11"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    {t.contact.email[lang]}
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--text-secondary)]" />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.emailPlaceholder[lang]}
                      className="input-field pl-11"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    {t.contact.message[lang]}
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-4 top-4 w-4 h-4 text-[var(--text-secondary)]" />
                    <textarea
                      name="message"
                      id="message"
                      rows="5"
                      value={form.message}
                      onChange={handleChange}
                      required
                      placeholder={t.contact.messagePlaceholder[lang]}
                      className="input-field pl-11 resize-none"
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={sending}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  whileTap={{ scale: 0.98 }}
                >
                  {sending ? (
                    <>
                      <svg
                        className="animate-spin w-5 h-5"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      {t.contact.sending[lang]}
                    </>
                  ) : (
                    <>
                      <FiSend className="w-5 h-5" />
                      {t.contact.send[lang]}
                    </>
                  )}
                </motion.button>
              </form>
            </MotionWrapper>
          </div>
        </div>
      </div>

      <ToastContainer
        position="bottom-right"
        theme="colored"
        autoClose={3000}
      />
    </section>
  );
}
