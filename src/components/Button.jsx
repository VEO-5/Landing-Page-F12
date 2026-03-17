import { motion } from 'framer-motion';
import './Button.css';

export default function Button({ text = "Get started", variant = "yellow" }) {
  return (
    <motion.button 
      className={`framer-button ${variant}`}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
    >
      <span className="button-text">{text}</span>
      <motion.div 
        className="button-icon-wrapper"
        variants={{
          initial: { x: 0 },
          hover: { x: 5 }
        }}
        transition={{ type: "spring", stiffness: 400, damping: 25 }}
      >
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </motion.div>
    </motion.button>
  );
}
