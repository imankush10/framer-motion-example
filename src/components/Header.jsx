import React from "react";
import { motion } from "framer-motion";

const svgVariant = {
  hidden: {
    rotation: -180,
  },
  visible: {
    rotate: 0,
    transition: { duration: 1 },
  },
};

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <header>
      <motion.div
        drag
        dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
        dragElastic={0.1}
        className="logo"
      >
        <motion.svg
          variants={svgVariant}
          initial="hidden"
          animate="visible"
          className="pizza-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 100 100"
        >
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M40 40 L80 40 C80 40 80 80 40 80 C40 80 0 80 0 40 C0 40 0 0 40 0Z"
          />
          <motion.path
            variants={pathVariants}
            fill="none"
            d="M50 30 L50 -10 C50 -10 90 -10 90 30 Z"
          />
        </motion.svg>
      </motion.div>
      <div className="title">
        <motion.h1
          initial={{ y: -250 }}
          animate={{ y: -22 }}
          transition={{
            type: "spring",
            delay: 0.1,
            damping: 10,
            stiffness: 73,
          }}
        >
          Pizza Joint
        </motion.h1>
      </div>
    </header>
  );
};

export default Header;
