"use client";

import { useState, useEffect } from "react";
import { Card } from "./ui/card";
import { useLanguage } from "@/context/LanguageContext";

// Card is intentionally kept imported (project style consistency)
void Card;

const stats = [
  { num: 5, textKey: "home.stats.years" as const, startFrom: 0 },
  { num: 93, textKey: "home.stats.projects" as const, startFrom: 63 },
  { num: 14, textKey: "home.stats.technologies" as const, startFrom: 0 },
  { num: 1676, textKey: "home.stats.commits" as const, startFrom: 1636 },
];

interface AnimatedCounterProps {
  target: number;
  startFrom?: number;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({
  target,
  startFrom,
  duration = 5000,
  className = "",
}: AnimatedCounterProps) => {
  // Use provided startFrom, or calculate default if not provided
  const startValue =
    startFrom ??
    (target > 100 ? Math.max(0, target - 20) : Math.max(0, target - 5));
  const [current, setCurrent] = useState(startValue);

  useEffect(() => {
    let startTime: number;
    let animationId: number;
    const animationStartValue = startValue;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease-out animation curve for smoother effect
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newValue = Math.floor(
        animationStartValue + (target - animationStartValue) * easeOut,
      );

      setCurrent(newValue);

      if (progress < 1) {
        animationId = requestAnimationFrame(animate);
      }
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, [target, duration, startValue]);

  return <span className={className}>{current}</span>;
};

const Stats = () => {
  const { t } = useLanguage();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section className="pt-8 pb-8 xl:pt-0 xl:pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mx-auto max-w-none">
          {stats.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-center justify-center lg:justify-start animate-fade-in"
                style={{
                  animationDelay: `${0.5 + index * 0.2}s`,
                  contain: "layout style paint",
                }}
              >
                {!isClient ? (
                  <span className="text-4xl text-accent xl:text-6xl font-extrabold tabular-nums">
                    {item.num}
                  </span>
                ) : (
                  <AnimatedCounter
                    target={item.num}
                    startFrom={item.startFrom}
                    duration={7000}
                    className="text-4xl text-accent xl:text-6xl font-extrabold tabular-nums"
                  />
                )}
                <p
                  className={`${
                    t(item.textKey).length < 15
                      ? "max-w-[100px]"
                      : "max-w-[150px]"
                  } leading-snug text-md sm:text-lg text-white/80 text-center sm:text-left`}
                >
                  {t(item.textKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
