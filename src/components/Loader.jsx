import React from "react";
import { motion, useCycle } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [0, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
      },
      y: {
        duration: 0.25,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeOut",
      },
    },
  },
  animationTwo: {
    y: [0, -40],
    x: 0,
    transition: {
      y: {
        repeat: Infinity,
        repeatType: "reverse",
        duration: 0.25,
        ease: "easeOut",
      },
    },
  },
};

const Loader = () => {
  const [animation, cycleAnimation] = useCycle("animationOne", "animationTwo");
  return (
    <>
      <motion.div
        variants={loaderVariants}
        animate={animation}
        className="loader"
      ></motion.div>
      <div onClick={() => cycleAnimation()}>Cycle Loader</div>
    </>
  );
};

export default Loader;
