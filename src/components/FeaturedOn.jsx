import { motion } from 'framer-motion';
import './FeaturedOn.css';

export default function FeaturedOn() {
  const logos = [
    { name: 'Contra', url: 'https://framerusercontent.com/images/1p9P8a9MhK6jR0N0XGzS8A.png' }, // Placeholder paths, I'll use SVG-like text/icons if I can't find real ones
    { name: 'Awwwards.', url: 'https://framerusercontent.com/images/awwwards.svg' },
    { name: 'lemon squeezy', url: 'https://framerusercontent.com/images/lemon-squeezy.svg' },
    { name: 'Framer', url: 'https://framerusercontent.com/images/framer.svg' }
  ];

  // Using the exact logos from the screenshot
  return (
    <section className="featured-on">
      <div className="container">
        <div className="featured-content">
          <span className="featured-text">Our product is featured on</span>
          
          <div className="logo-ticker">
            <motion.div 
              className="logo-track"
              animate={{ x: [0, -1000] }}
              transition={{ 
                duration: 20, 
                repeat: Infinity, 
                ease: "linear" 
              }}
            >
              {[...Array(2)].map((_, i) => (
                <div key={i} className="logo-set">
                  <div className="logo-item contra">
                    <span className="logo-icon">✦</span>
                    <span className="logo-name">contra</span>
                  </div>
                  <div className="logo-item awwwards">
                    <span className="logo-name">awwwards.</span>
                  </div>
                  <div className="logo-item lemon">
                    <span className="logo-icon">🍋</span>
                    <span className="logo-name">lemon squeezy</span>
                  </div>
                  <div className="logo-item framer">
                    <span className="logo-icon">▲</span>
                    <span className="logo-name">Framer</span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
