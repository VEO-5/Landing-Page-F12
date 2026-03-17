import { motion } from 'framer-motion';
import './HowItWorks.css';

export default function HowItWorks() {
  const steps = [
    {
      title: 'No complex setup or technical expertise required.',
      desc: 'Sign up, connect your data, and start discovering valuable insights right away.',
      visual: (
        <div className="hiw-visual hiw-onboarding-visual">
          <div className="hiw-onboarding-line" />
          {[
            { icon: '✓', text: 'Registration complete', active: true },
            { icon: '✎', text: 'Fill in the details', active: false },
            { icon: '🖥', text: 'Up and running!', active: false },
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className={`hiw-status-pill ${item.active ? 'active' : 'muted'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="hiw-status-box">
                <span className="hiw-pill-icon">{item.icon}</span>
                <span className="hiw-pill-text">{item.text}</span>
              </div>
            </motion.div>
          ))}
        </div>
      )
    },
    {
      title: 'Create it, until you make it.',
      desc: 'Shape Feature to match what you actually need and how your brand looks.',
      visual: (
        <div className="hiw-visual hiw-design-mockup">
          <motion.div 
            className="framer-panel right-panel"
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="panel-header">Edit Heading 1</div>
            <div className="panel-row">
              <span className="label">Font</span>
              <span className="value">Inter Display</span>
            </div>
            <div className="panel-row">
              <span className="label">Weight</span>
              <span className="value">Regular</span>
            </div>
            <div className="panel-row">
              <span className="label">Styles</span>
              <div className="style-chips">
                <span className="chip active">B</span>
                <span className="chip">I</span>
                <span className="chip">U</span>
              </div>
            </div>
            <div className="panel-row">
              <span className="label">Color</span>
              <div className="color-swatch-box">
                <div className="swatch" />
                <span className="value">Title</span>
              </div>
            </div>
          </motion.div>
          <motion.div 
            className="framer-panel left-panel"
            initial={{ x: -30, y: 40, opacity: 0 }}
            whileInView={{ x: 0, y: 40, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="panel-header">Fill</div>
            <div className="color-picker-mock">
              <div className="gradient-area" />
              <div className="hue-slider" />
            </div>
          </motion.div>
        </div>
      )
    },
    {
      title: 'Reach a product expert in minutes, not a chatbot.',
      desc: '3-minute average response time with solutions on the first contact.',
      visual: (
        <div className="hiw-visual hiw-chat-visual">
          <motion.div 
            className="chat-bubble left"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="chat-avatar avatar-1" />
            <div className="bubble-content">Hi team, could you please help me connecting my domain?</div>
          </motion.div>
          <motion.div 
            className="chat-bubble right"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="bubble-content yellow">Sure thing! Could you please send us your ID so we can look into it.</div>
            <div className="chat-avatar avatar-2" />
          </motion.div>
          <motion.div 
            className="chat-bubble left"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 0.5 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <div className="chat-avatar avatar-1" />
            <div className="bubble-content">My user ID is 12345678</div>
          </motion.div>
        </div>
      )
    }
  ];

  return (
    <section className="how-it-works section">
      <div className="container">
        <div className="hiw-header">
          <div className="badge-pill">How it works</div>
          <h2 className="hiw-heading">
            We make data accessible and <span>actionable for teams of all sizes</span>
          </h2>
        </div>
        
        <div className="hiw-cards-grid">
          {steps.map((step, i) => (
            <div key={i} className="hiw-step-card">
              <div className="hiw-card-content">
                <p className="hiw-card-text">
                  <strong>{step.title}</strong>{' '}{step.desc}
                </p>
              </div>
              <div className="hiw-card-visual-area">
                {step.visual}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
