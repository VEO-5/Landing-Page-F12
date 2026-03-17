import { motion } from 'framer-motion';
import './HeroIllustration.css';

export default function HeroIllustration() {
  const bars = [87, 111, 174, 119, 160, 139]; 
  const clients = [
    { name: 'Eliza Thornton', avatar: 'https://framerusercontent.com/images/3GAtV9Wnt9tYvVwLp7Z7S2s3k.jpeg', progress: 85 },
    { name: 'Javier Ramirez', avatar: 'https://framerusercontent.com/images/xCjesZlpNiv5Na63YdTeQRVsOhI.jpeg', progress: 65 },
    { name: 'Zara Mahmood', avatar: 'https://framerusercontent.com/images/BzQBW3kfyCoemZuha7QYnaMBqE.jpeg', progress: 45 },
    { name: 'Freya Lindholm', avatar: 'https://framerusercontent.com/images/F41TjDB4uXFd3yzkfLpUSjdhk.jpeg', progress: 75 },
    { name: 'Marcus Blackwood', avatar: 'https://framerusercontent.com/images/M4RGMCtWRViXq3Zh8FmDvdJkkiI.jpeg', progress: 55 },
    { name: 'Emma T.', avatar: 'https://framerusercontent.com/images/F41TjDB4uXFd3yzkfLpUSjdhk.jpeg', progress: 40 },
  ];

  const NavIcon = ({ path }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
    <div className="hi-dashboard">
      <div className="hi-glow hi-glow-yellow" />
      <div className="hi-glow hi-glow-purple" />

      <aside className="hi-sidebar">
        <div className="hi-logo">FEATURE</div>
        <nav className="hi-nav">
          <div className="hi-nav-item active">
            <span className="hi-icon">{icons.dashboard}</span>
            <span>Dashboard</span>
          </div>
          <div className="hi-nav-item">
            <span className="hi-icon">{icons.reports}</span>
            <span>Reports</span>
          </div>
          <div className="hi-nav-item">
            <span className="hi-icon">{icons.settings}</span>
            <span>Settings</span>
          </div>
          <div className="hi-nav-item">
            <span className="hi-icon">{icons.help}</span>
            <span>Help</span>
          </div>
        </nav>
      </aside>

      <main className="hi-main">
        <header className="hi-stats-grid">
          <div className="hi-card hi-stat-card">
            <span className="hi-label">Revenue</span>
            <div className="hi-stat-value-group">
              <span className="hi-value">$38K</span>
              <span className="hi-delta positive">+5%</span>
            </div>
          </div>
          <div className="hi-card hi-stat-card">
            <span className="hi-label">Users</span>
            <div className="hi-stat-value-group">
              <span className="hi-value">850</span>
              <span className="hi-delta positive">+12%</span>
            </div>
          </div>
          <div className="hi-card hi-stat-card">
            <span className="hi-label">Conversion Rate</span>
            <div className="hi-stat-value-group">
              <span className="hi-value">2.5%</span>
              <span className="hi-delta positive">+3%</span>
            </div>
          </div>
        </header>

        <section className="hi-content-grid">
          <div className="hi-card hi-chart-wrapper">
            <div className="hi-chart-header">
              <div className="hi-chart-titles">
                <span className="hi-label">Product sales</span>
                <div className="hi-value-group">
                  <span className="hi-value">90</span>
                  <span className="hi-delta positive">+8%</span>
                </div>
              </div>
              <div className="hi-toggle">
                <span className="hi-toggle-item active">Last year</span>
                <span className="hi-toggle-item">This year</span>
              </div>
            </div>

            <div className="hi-chart-area">
              <div className="hi-chart-y-axis">
                <span>25</span>
                <span>20</span>
                <span>15</span>
                <span>10</span>
                <span>5</span>
              </div>
              <div className="hi-chart-bars">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="hi-grid-line" style={{ bottom: `${(i + 1) * 20}%` }} />
                ))}
                <div className="hi-bars-container">
                  {bars.map((h, i) => (
                    <motion.div
                      key={i}
                      className="hi-bar"
                      initial={{ height: 0 }}
                      whileInView={{ height: `${(h / 200) * 100}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="hi-card hi-clients-wrapper">
            <div className="hi-clients-header">
              <span className="hi-label">New clients</span>
              <button className="hi-use-free-btn">
                <span>☁</span> Use for free
              </button>
            </div>
            <div className="hi-clients-list">
              {clients.map((client, i) => (
                <div key={i} className="hi-client-item">
                  <img 
                    src={client.avatar} 
                    alt={client.name} 
                    className="hi-avatar" 
                    onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(client.name)}&background=random`; }}
                  />
                  <span className="hi-client-name">{client.name}</span>
                  <div className="hi-progress-bg">
                    <motion.div
                      className="hi-progress-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${client.progress}%` }}
                      transition={{ duration: 1, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="hi-see-all">See all</div>
          </div>
        </section>
      </main>
    </div>
  );
}
