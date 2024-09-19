import React from "react";

import { motion } from "framer-motion";

function SectionTitle({
  children,
  className,
}: Readonly<{ children: React.ReactNode; className?: string }>) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`text-center text-4xl font-bold tracking-tighter text-purple-800 dark:text-purple-100 sm:text-5xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}

export default SectionTitle;
