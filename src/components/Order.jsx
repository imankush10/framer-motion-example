import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 73,
      damping: 7,
      mass: 0.4,
      staggerChildren: 0.1,
      when: "beforeChildren",
    },
  },
};

const childrenVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    transition: { type: "spring", stiffness: 300 },
    opacity: 1,
  },
};

const Order = ({ pizza }) => {
  return (
    <motion.div
      className="container order"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <h2>Thank you for your order :)</h2>
      <p>You ordered a {pizza.base} pizza with:</p>
      {pizza.toppings.map((topping) => (
        <motion.div key={topping} variants={childrenVariants}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
