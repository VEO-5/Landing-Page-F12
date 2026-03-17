import { motion } from 'framer-motion';
import './SmartDataIllustration.css';

export default function SmartDataIllustration() {
  return (
    <div className="mini-dashboard">
      <div className="md-inner">
        {/* Sidebar */}
        <div className="md-sidebar">
          <div className="md-logo">FEATURE</div>
          <div className="md-nav">
            <div className="md-nav-item active">
              <span className="md-icon">▤</span>
              <span>Dashboard</span>
            </div>
            <div className="md-nav-item">
              <span className="md-icon">◔</span>
              <span>Reports</span>
            </div>
            <div className="md-nav-item">
              <span className="md-icon">⚙</span>
              <span>Settings</span>
            </div>
            <div className="md-nav-item">
              <span className="md-icon">?</span>
              <span>Help</span>
            </div>
          </div>
        </div>

        {/* Content Area */}
        <div className="md-content">
          <motion.div 
            className="md-stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="md-label">Revenue</span>
            <div className="md-value-group">
              <span className="md-value">$38K</span>
              <span className="md-delta">+5%</span>
            </div>
          </motion.div>

          <motion.div 
            className="md-chart-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="md-label">Product sales</span>
            <div className="md-value-group">
              <span className="md-value">90</span>
              <span className="md-delta">+8%</span>
            </div>
            <div className="md-simple-chart">
              <div className="chart-line" />
              <div className="chart-line" />
              <div className="chart-line" />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
