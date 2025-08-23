type PageHeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

import { motion } from "motion/react";

export default function PageHeader({
  title,
  subtitle = "Alpha Kappa Psi",
  image = "/images/banner.jpg",
}: PageHeaderProps) {
  return (
    <section
      className="relative h-[52vh] min-h-[320px] w-full overflow-hidden"
      style={{
        backgroundImage: `url('${image}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <motion.div
        className="absolute inset-0 bg-black/50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
      />
      <div className="relative z-10 flex h-full items-center">
        <div className="mx-auto w-full max-w-[1400px] px-8 md:px-12">
          <div className="text-center text-white">
            <motion.p
              className="text-[12px] md:text-xs tracking-[0.22em] uppercase opacity-80"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.1,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              {subtitle}
            </motion.p>
            <motion.h1
              className="mt-2 text-3xl md:text-5xl font-extrabold"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.22, 0.61, 0.36, 1],
              }}
            >
              {title}
            </motion.h1>
          </div>
        </div>
      </div>
    </section>
  );
}
