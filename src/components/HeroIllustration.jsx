import { motion } from 'framer-motion';
import './HeroIllustration.css';

export default function HeroIllustration() {
  const bars = [87, 111, 174, 119, 160, 139]; // bar heights from bLETU7bvk XML
  const clients = [
    { name: 'Eliza Thornton', avatar: 'https://framerusercontent.com/images/6sxQYX9FS5raaMLxb5TeZRQ7Sug.jpeg', progress: 85 },
    { name: 'Javier Ramirez', avatar: 'https://framerusercontent.com/images/9o8rf9dBGUJ09MPEHrVO0LQY6M.jpeg', progress: 65 },
    { name: 'Zara Mahmood', avatar: 'https://framerusercontent.com/images/xCjesZlpNiv5Na63YdTeQRVsOhI.jpeg', progress: 45 },
    { name: 'Freya Lindholm', avatar: 'https://framerusercontent.com/images/F41TjDB4uXFd3yzkfLpUSjdhk.jpeg', progress: 75 },
    { name: 'Marcus Blackwood', avatar: 'https://framerusercontent.com/images/M4RGMCtWRViXq3Zh8FmDvdJkkiI.jpeg', progress: 55 },
    { name: 'Marcus Blackwood', avatar: 'https://framerusercontent.com/images/BzQBW3kfyCoemZuha7QYnaMBqE.jpeg', progress: 40 },
  ];

  return (
    <div className="hi-dashboard">
      {/* Background Glows */}
      <div className="hi-glow hi-glow-yellow" />
      <div className="hi-glow hi-glow-purple" />

      {/* Sidebar */}
      <aside className="hi-sidebar">
        <div className="hi-logo">FEATURE</div>
        <nav className="hi-nav">
          <div className="hi-nav-item active">
            <span className="hi-icon">▤</span>
            <span>Dashboard</span>
          </div>
          <div className="hi-nav-item">
            <span className="hi-icon">◔</span>
            <span>Reports</span>
          </div>
          <div className="hi-nav-item">
            <span className="hi-icon">⚙</span>
            <span>Settings</span>
          </div>
          <div className="hi-nav-item">
            <span className="hi-icon">?</span>
            <span>Help</span>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="hi-main">
        {/* Top Row: Stats */}
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

        {/* Middle Row: Content */}
        <section className="hi-content-grid">
          {/* Product Sales Card */}
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

          {/* New Clients Card */}
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
                  <img src={client.avatar} alt={client.name} className="hi-avatar" />
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
