"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface FloatingPastryProps {
  className: string;
}

export default function FloatingPastry({ className }: FloatingPastryProps) {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  return (
    <motion.div
      className={`absolute cursor-pointer ${className}`}
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: 3,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        },
      }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotate: isSpinning ? 360 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        <div className="bg-yellow-400 w-5 h-5"></div>
      </motion.div>
    </motion.div>
  );
}
