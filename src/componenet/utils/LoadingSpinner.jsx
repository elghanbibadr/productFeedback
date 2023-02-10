import { motion } from "framer-motion";

const LoadingDot = {
  display: "block",
//   width: "1rem",
//   height: "1rem",
  backgroundColor: "black",
  borderRadius: "50%"
};

const LoadingContainer = {
  width: "8rem",
  height: "5rem",
  display: "flex",
  justifyContent: "space-around"
};

const ContainerVariants = {
  initial: {
    transition: {
      staggerChildren: 0.2
    }
  },
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const DotVariants = {
  initial: {
    y: "0%"
  },
  animate: {
    y: "100%"
  }
};

const DotTransition = {
  duration: 0.5,
  yoyo: Infinity,
  ease: "easeInOut"
};

export default function LoadingSpinner() {
  return (
    <div
      style={{
        paddingTop: "10rem",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginInline:"auto",
      }}
    >
      <motion.div
        style={LoadingContainer}
        variants={ContainerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.span
          style={LoadingDot}
          className='w-2 h-2'

          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          className='w-2 h-2'
          variants={DotVariants}
          transition={DotTransition}
        />
        <motion.span
          style={LoadingDot}
          className='w-2 h-2'

          variants={DotVariants}
          transition={DotTransition}
        />
      </motion.div>
    </div>
  );
}
