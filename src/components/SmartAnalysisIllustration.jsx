import { motion } from 'framer-motion';
import './SmartAnalysisIllustration.css';

export default function SmartAnalysisIllustration() {
  // Using consistent avatars from the Reviews section
  const clients = [
    { name: 'Eliza Thornton', avatar: 'https://framerusercontent.com/images/3GAtV9Wnt9tYvVwLp7Z7S2s3k.jpeg', progress: 80 },
    { name: 'Javier Ramirez', avatar: 'https://framerusercontent.com/images/xCjesZlpNiv5Na63YdTeQRVsOhI.jpeg', progress: 65 },
    { name: 'Zara Mahmood', avatar: 'https://framerusercontent.com/images/BzQBW3kfyCoemZuha7QYnaMBqE.jpeg', progress: 50 },
    { name: 'Freya Lindholm', avatar: 'https://framerusercontent.com/images/F41TjDB4uXFd3yzkfLpUSjdhk.jpeg', progress: 40 },
  ];

  return (
    <div className="analysis-dashboard">
      <div className="ad-inner">
        <div className="ad-top-row">
          <div className="ad-empty-card" />
          <motion.div 
            className="ad-stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="ad-label">Conversion Rate</span>
            <div className="ad-value-group">
              <span className="ad-value">2.5%</span>
              <span className="ad-delta">+3%</span>
            </div>
          </motion.div>
        </div>

        <motion.div 
          className="ad-clients-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <span className="ad-label">New clients</span>
          <div className="ad-client-list">
            {clients.map((client, i) => (
              <div key={i} className="ad-client-item">
                <div className="client-info">
                  <img 
                    src={client.avatar} 
                    alt={client.name} 
                    className="client-avatar"
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random`; }}
                  />
                  <span className="client-name">{client.name}</span>
                </div>
                <div className="client-progress-track">
                  <motion.div 
                    className="client-progress-bar"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${client.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 + (i * 0.1) }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
