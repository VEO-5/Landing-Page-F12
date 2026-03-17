import { motion } from 'framer-motion';
import Button from './Button';
import HeroIllustration from './HeroIllustration';
import './Hero.css';

export default function Hero() {
  return (
    <section className="hero section">
      {/* Dynamic Background Glow Animation */}
      <motion.div 
        className="hero-glow-animated"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.08, 0.15, 0.08],
          x: [-50, 50, -50],
          y: [-50, 50, -50]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <div className="hero-content">
        <motion.div 
          className="hero-top"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="heading-1 hero-title">
            <span>Turn data</span>
            <span>into <span className="highlight-pill">decisions</span></span>
          </h1>
          <p className="body-lg hero-subtitle">
            Powerful analytics and reporting that empowers your <br/> team to make smarter business choices.
          </p>
          <div className="hero-cta">
            <Button variant="yellow">
              Start 14-day trial
            </Button>
          </div>
          <p className="hero-note">No credit card required · Free for 14 days</p>
        </motion.div>

        {/* Hero Illustration Wrapper */}
        <motion.div 
          className="hero-illustration-wrapper"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <HeroIllustration />
          
          {/* Floating badge animation from XML analysis */}
          <motion.div 
            className="hero-float-badge"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M8 2l1.5 3.5L13 6.5l-2.5 2.5.5 3.5L8 11l-3 1.5.5-3.5L3 6.5 6.5 5.5z" fill="rgb(255,223,125)" />
            </svg>
            <span>+24% growth this month</span>
          </motion.div>
        </motion.div>
      </div>

      <div className="hero-fade" />
    </section>
  );
}
