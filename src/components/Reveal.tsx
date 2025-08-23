import type { PropsWithChildren } from "react";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

type RevealProps = {
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  delay = 0,
  y = 16,
}: PropsWithChildren<RevealProps>) {
  const ref = useRef<HTMLDivElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
