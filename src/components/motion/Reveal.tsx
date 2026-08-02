"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  /** Direction the element travels in from. */
  from?: "up" | "down" | "left" | "right" | "none";
  as?: "div" | "li" | "article" | "section";
}

const offset = 24;

/**
 * Subtle, hardware-accelerated scroll reveal. Fully disables movement when the
 * user prefers reduced motion, degrading to a plain fade (or nothing).
 */
export function Reveal({
  children,
  delay = 0,
  className,
  from = "up",
  as = "div",
}: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  const hidden: Record<string, number> = { opacity: 0 };
  if (!reduce) {
    if (from === "up") hidden.y = offset;
    if (from === "down") hidden.y = -offset;
    if (from === "left") hidden.x = offset;
    if (from === "right") hidden.x = -offset;
  }

  const variants: Variants = {
    hidden,
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </MotionTag>
  );
}
