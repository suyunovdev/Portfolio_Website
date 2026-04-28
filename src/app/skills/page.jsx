"use client";

import { skillCategories } from "@/data/skills";
import MotionWrapper from "@/components/ui/motion-wrapper";
import SectionHeading from "@/components/ui/section-heading";

export default function SkillsPage() {
  return (
    <section className="section-padding">
      <div className="max-w-5xl mx-auto">
        <SectionHeading
          title="My Skills"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <div className="space-y-16">
          {skillCategories.map((category, catIdx) => (
            <div key={category.title}>
              <MotionWrapper custom={catIdx}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <span className="w-8 h-1 rounded-full gradient-bg" />
                  {category.title}
                </h3>
              </MotionWrapper>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {category.skills.map((skill, i) => (
                  <MotionWrapper
                    key={skill.name}
                    variant="scaleIn"
                    custom={i}
                  >
                    <div className="group glass rounded-xl p-5 flex flex-col items-center gap-3 hover-lift cursor-default">
                      <div
                        className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110"
                        style={{
                          backgroundColor: `${skill.color}15`,
                        }}
                      >
                        <skill.icon
                          className="w-8 h-8 transition-colors duration-300"
                          style={{ color: skill.color }}
                        />
                      </div>
                      <span className="text-sm font-medium text-center">
                        {skill.name}
                      </span>
                    </div>
                  </MotionWrapper>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
