import { motion } from 'framer-motion';
import Button from './Button';
import './USPSection.css';

export default function USPSection({ 
  badge = "Badge", 
  title = "Insert Title Here", 
  description = "Insert description here.",
  reverse = false,
  isNew = false,
  illustration = null
}) {
  return (
    <section className={`usp-section section ${reverse ? 'reverse' : ''}`}>
      <div className="container">
        <div className="usp-grid">
          <motion.div 
            className="usp-content"
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={`badge ${isNew ? 'new' : ''}`}>{badge}</div>
            <h2 className="heading-2">{title}</h2>
            <p className="body-lg muted">{description}</p>
            <Button text="Learn more" variant="yellow" />
          </motion.div>
          
          <motion.div 
            className="usp-visual"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {illustration ? (
              <div className="usp-illustration-container">
                {illustration}
              </div>
            ) : (
              <div className="usp-visual-placeholder">
                <div className="usp-visual-inner" />
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
