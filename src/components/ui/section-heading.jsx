"use client";

import MotionWrapper from "./motion-wrapper";

export default function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-16">
      <MotionWrapper>
        <h2 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          {title}
        </h2>
      </MotionWrapper>
      {subtitle && (
        <MotionWrapper custom={1}>
          <p className="text-lg text-[var(--text-secondary)] max-w-2xl mx-auto">
            {subtitle}
          </p>
        </MotionWrapper>
      )}
    </div>
  );
}
