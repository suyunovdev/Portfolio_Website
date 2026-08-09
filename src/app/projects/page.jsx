"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiExternalLink,
  FiGithub,
  FiStar,
  FiGitBranch,
  FiSearch,
  FiLoader,
} from "react-icons/fi";
import { featuredRepos } from "@/data/projects";
import SectionHeading from "@/components/ui/section-heading";
import MotionWrapper from "@/components/ui/motion-wrapper";
import { useLang } from "@/context/language-context";
import t from "@/data/translations";

const GITHUB_API = "https://api.github.com/repos";

const categoryKeys = ["all", "featured", "fullstack", "frontend", "backend", "tools"];

export default function ProjectsPage() {
  const { lang } = useLang();
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState("all");
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const results = await Promise.allSettled(
          featuredRepos.map(async (project) => {
            const res = await fetch(`${GITHUB_API}/${project.repo}`, {
              headers: { Accept: "application/vnd.github.v3+json" },
              next: { revalidate: 3600 },
            });
            if (!res.ok) throw new Error("Failed to fetch");
            const data = await res.json();
            return {
              ...project,
              stars: data.stargazers_count,
              forks: data.forks_count,
              language: data.language,
              updatedAt: data.updated_at,
              githubUrl: data.html_url,
              topics: data.topics || [],
            };
          })
        );

        const merged = results.map((result, i) => {
          if (result.status === "fulfilled") return result.value;
          return {
            ...featuredRepos[i],
            stars: 0,
            forks: 0,
            language: null,
            updatedAt: null,
            githubUrl: `https://github.com/${featuredRepos[i].repo}`,
            topics: [],
          };
        });

        setProjects(merged);
      } catch {
        setProjects(
          featuredRepos.map((p) => ({
            ...p,
            stars: 0,
            forks: 0,
            language: null,
            updatedAt: null,
            githubUrl: `https://github.com/${p.repo}`,
            topics: [],
          }))
        );
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, []);

  const filtered = projects.filter((p) => {
    const matchesCategory =
      activeCategory === "all" ||
      (activeCategory === "featured" ? p.featured : p.category === activeCategory);
    const matchesSearch =
      !search ||
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      (p.language && p.language.toLowerCase().includes(search.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const langColors = {
    JavaScript: "#F7DF1E",
    TypeScript: "#3178C6",
    SCSS: "#CC6699",
    CSS: "#1572B6",
    HTML: "#E34F26",
    Python: "#3776AB",
  };

  const timeAgo = (date) => {
    if (!date) return "";
    const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
    const intervals = [
      { label: "y", seconds: 31536000 },
      { label: "mo", seconds: 2592000 },
      { label: "d", seconds: 86400 },
      { label: "h", seconds: 3600 },
    ];
    for (const { label, seconds: s } of intervals) {
      const count = Math.floor(seconds / s);
      if (count > 0) return `${count}${label} ago`;
    }
    return "just now";
  };

  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title={t.projects.title[lang]}
          subtitle={t.projects.subtitle[lang]}
        />

        {/* Search & Filters */}
        <MotionWrapper className="mb-10 space-y-4">
          <div className="relative max-w-md mx-auto">
            <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[var(--text-secondary)]" />
            <input
              type="text"
              placeholder={t.projects.search[lang]}
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="input-field pl-12"
            />
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            {categoryKeys.map((key) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === key
                    ? "bg-primary-500 text-white shadow-lg shadow-primary-500/25"
                    : "glass text-[var(--text-secondary)] hover:text-primary-500"
                }`}
              >
                {t.projects.categories[key][lang]}
              </button>
            ))}
          </div>
        </MotionWrapper>

        {/* Loading */}
        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <FiLoader className="w-8 h-8 text-primary-500 animate-spin" />
            <p className="text-[var(--text-secondary)] text-sm">
              {t.projects.loading[lang]}
            </p>
          </div>
        ) : (
          <>
            {/* Results Count */}
            <div className="text-center mb-8">
              <p className="text-sm text-[var(--text-secondary)]">
                {t.projects.showing[lang]}{" "}
                <span className="font-semibold text-[var(--text-primary)]">
                  {filtered.length}
                </span>{" "}
                {t.projects.of[lang]} {projects.length}
              </p>
            </div>

            {/* Project Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <motion.div
                    key={project.repo}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="glass rounded-2xl p-6 h-full flex flex-col hover-lift group relative overflow-hidden">
                      {project.featured && (
                        <div className="absolute top-4 right-4">
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider gradient-bg text-white">
                            {t.projects.categories.featured[lang]}
                          </span>
                        </div>
                      )}

                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2.5 rounded-xl bg-primary-500/10 shrink-0">
                          <FiGithub className="w-5 h-5 text-primary-500" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-lg font-bold truncate group-hover:text-primary-500 transition-colors">
                            {project.name}
                          </h3>
                          {project.language && (
                            <div className="flex items-center gap-1.5 mt-1">
                              <span
                                className="w-3 h-3 rounded-full shrink-0"
                                style={{
                                  backgroundColor:
                                    langColors[project.language] || "#6b7280",
                                }}
                              />
                              <span className="text-xs text-[var(--text-secondary)]">
                                {project.language}
                              </span>
                              {project.updatedAt && (
                                <span className="text-xs text-[var(--text-secondary)] ml-2">
                                  {t.projects.updated[lang]} {timeAgo(project.updatedAt)}
                                </span>
                              )}
                            </div>
                          )}
                        </div>
                      </div>

                      <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-5 flex-1">
                        {project.description}
                      </p>

                      {project.topics?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.topics.slice(0, 4).map((topic) => (
                            <span
                              key={topic}
                              className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-primary-500/10 text-primary-500"
                            >
                              {topic}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                        <div className="flex items-center gap-4 text-[var(--text-secondary)] text-sm">
                          <span className="flex items-center gap-1">
                            <FiStar className="w-4 h-4" />
                            {project.stars}
                          </span>
                          <span className="flex items-center gap-1">
                            <FiGitBranch className="w-4 h-4" />
                            {project.forks}
                          </span>
                        </div>

                        <div className="flex items-center gap-2">
                          {!project.private && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.name} source code`}
                              className="p-2 rounded-lg hover:bg-primary-500/10 text-[var(--text-secondary)] hover:text-primary-500 transition-all"
                            >
                              <FiGithub className="w-4 h-4" />
                            </a>
                          )}
                          {project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`${project.name} live demo`}
                              className="p-2 rounded-lg hover:bg-primary-500/10 text-[var(--text-secondary)] hover:text-primary-500 transition-all"
                            >
                              <FiExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {filtered.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-16"
              >
                <p className="text-lg text-[var(--text-secondary)]">
                  {t.projects.noResults[lang]}
                </p>
                <button
                  onClick={() => {
                    setSearch("");
                    setActiveCategory("all");
                  }}
                  className="mt-4 text-primary-500 hover:underline text-sm font-medium"
                >
                  {t.projects.clearFilters[lang]}
                </button>
              </motion.div>
            )}

            <MotionWrapper variant="fadeUp" className="text-center mt-16">
              <a
                href="https://github.com/suyunovdev?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
              >
                <FiGithub className="w-5 h-5" />
                {t.projects.viewAll[lang]}
              </a>
            </MotionWrapper>
          </>
        )}
      </div>
    </section>
  );
}
