"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

type MotionFadeProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function MotionFade({ children, className, delay = 0 }: MotionFadeProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  );
}
