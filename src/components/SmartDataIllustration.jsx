import { motion } from 'framer-motion';
import './SmartDataIllustration.css';

export default function SmartDataIllustration() {
  const NavIcon = ({ path }) => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  );

  const icons = {
    dashboard: <NavIcon path={<><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></>} />,
    reports: <NavIcon path={<><path d="M21.21 15.89A10 10 0 1 1 8 2.83"></path><path d="M22 12A10 10 0 0 0 12 2v10z"></path></>} />,
    settings: <NavIcon path={<><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></>} />,
    help: <NavIcon path={<><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></>} />,
  };

  return (
    <div className="mini-dashboard">
      <div className="md-inner">
        {/* Sidebar */}
        <div className="md-sidebar">
          <div className="md-logo">FEATURE</div>
          <div className="md-nav">
            <div className="md-nav-item active">
              <span className="md-icon">{icons.dashboard}</span>
              <span>Dashboard</span>
            </div>
            <div className="md-nav-item">
              <span className="md-icon">{icons.reports}</span>
              <span>Reports</span>
            </div>
            <div className="md-nav-item">
              <span className="md-icon">{icons.settings}</span>
              <span>Settings</span>
            </div>
            <div className="md-nav-item">
              <span className="md-icon">{icons.help}</span>
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
