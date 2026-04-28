import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { LanguageProvider } from "@/context/language-context";

const inter = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-inter" });

export const metadata = {
  title: {
    default: "Ilyos Suyunov | Fullstack Developer",
    template: "%s | Ilyos Suyunov",
  },
  description:
    "Fullstack Developer building modern web applications with React, Next.js, Node.js, and MongoDB.",
  keywords: [
    "Fullstack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Tailwind CSS",
    "Ilyos Suyunov",
  ],
  authors: [{ name: "Ilyos Suyunov" }],
  openGraph: {
    title: "Ilyos Suyunov | Fullstack Developer",
    description:
      "Fullstack Developer building modern web applications with React, Next.js, Node.js, and MongoDB.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                var saved = localStorage.getItem('theme');
                var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (saved === 'dark' || (!saved && prefersDark)) {
                  document.documentElement.classList.add('dark');
                }
                var lang = localStorage.getItem('lang');
                if (lang) document.documentElement.lang = lang;
              })();
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} font-sans`}>
        <LanguageProvider>
          <Header />
          <main className="min-h-screen pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
