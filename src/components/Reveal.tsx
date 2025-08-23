import type { PropsWithChildren } from "react";
import { motion, useInView } from "motion/react";
import { useMemo, useRef } from "react";

type RevealProps = {
  delay?: number;
  y?: number; // distance for vertical; also used as distance for horizontal
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  className?: string;
};

export default function Reveal({
  children,
  delay = 0,
  y = 16,
  direction = "up",
  duration = 0.6,
  className,
}: PropsWithChildren<RevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px" });

  const initial = useMemo(() => {
    switch (direction) {
      case "left":
        return { opacity: 0, x: -y };
      case "right":
        return { opacity: 0, x: y };
      case "down":
        return { opacity: 0, y: -y };
      case "none":
        return { opacity: 0 } as const;
      case "up":
      default:
        return { opacity: 0, y };
    }
  }, [direction, y]);

  return (
    <motion.div
      ref={ref}
      initial={initial}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.22, 0.61, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
