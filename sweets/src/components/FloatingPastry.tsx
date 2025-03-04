import { useState, useMemo } from "react";
import { motion } from "framer-motion";

interface FloatingPastryProps {
  className: string;
  type: "donut" | "cupcake" | "croissant" | "pretzel" | "cookie";
}

export default function FloatingPastry({
  className,
  type,
}: FloatingPastryProps) {
  const [isSpinning, setIsSpinning] = useState(false);

  // Generate random values for animation to make movements unique
  const animationProps = useMemo(() => {
    return {
      duration: Math.random() * 2 + 2, // Random duration between 2 and 4 seconds
      delay: Math.random() * 2, // Random delay up to 2 seconds
    };
  }, []);

  const handleClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const getPastrySVG = () => {
    switch (type) {
      case "donut":
        return <p className="text-3xl">🍩</p>;
      case "cupcake":
        return <p className="text-3xl">🧁</p>;
      case "croissant":
        return <p className="text-3xl">🥐</p>;
      case "pretzel":
        return <p className="text-3xl">🥨</p>;
      case "cookie":
        return <p className="text-3xl">🍪</p>;
      default:
        return null;
    }
  };

  return (
    <motion.div
      className={`absolute cursor-pointer ${className}`}
      animate={{
        y: [0, -10, 0],
        transition: {
          duration: animationProps.duration,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: animationProps.delay, // Unique delay per pastry
        },
      }}
      whileHover={{ scale: 1.1 }}
      onClick={handleClick}
    >
      <motion.div
        animate={{ rotate: isSpinning ? 360 : 0 }}
        transition={{ duration: 1, ease: "easeInOut" }}
      >
        {getPastrySVG()}
      </motion.div>
    </motion.div>
  );
}
