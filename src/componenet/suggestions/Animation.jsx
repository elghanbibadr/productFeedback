import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  const increment = () => {
    controls.start({
      x: 100,
      opacity: 0,
      transition: { duration: 0.5 },
    });
    setCount(count + 1);
  };



  return (
    <div>
      <motion.div
        animate={controls}
        style={{ x: 0, opacity: 1 }}
        onAnimationComplete={increment}
      >
        {count}
      </motion.div>
    </div>
  );
};

export default Counter;
