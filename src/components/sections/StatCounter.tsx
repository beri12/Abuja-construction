"use client";

import {
  animate,
  useInView,
  useReducedMotion,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import type { Stat } from "@/types/content";

/** Animated count-up statistic that respects reduced-motion preferences. */
export function StatCounter({ stat }: { stat: Stat }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    // A single code path for both cases: reduced motion simply uses duration 0,
    // so the only setState happens inside the animation callback (not the effect body).
    const controls = animate(0, stat.value, {
      duration: reduce ? 0 : 1.4,
      ease: "easeOut",
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, reduce, stat.value]);

  return (
    <div className="text-center">
      <p
        ref={ref}
        className="font-display text-4xl font-bold text-primary sm:text-5xl"
      >
        {value}
        {stat.suffix}
      </p>
      <p className="mt-2 text-sm font-medium text-muted-foreground">
        {stat.label}
      </p>
    </div>
  );
}
