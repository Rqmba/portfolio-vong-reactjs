import { motion } from "framer-motion";

function AnimatedButton({ children, className, onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className={`btn btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

export default AnimatedButton;
