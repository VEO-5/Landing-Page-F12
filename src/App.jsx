import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import FeaturedOn from './components/FeaturedOn';
import USPSection from './components/USPSection';
import SmartDataIllustration from './components/SmartDataIllustration';
import SmartAnalysisIllustration from './components/SmartAnalysisIllustration';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import CTA from './components/CTA';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        
        <HowItWorks />
        
        <USPSection 
          badge="Smart data"
          title="Stop jumping between data tools"
          description="Our smart data connectors automatically sync information from over 200 apps, databases, and services, so you always have the most up-to-date insights when you need them."
          illustration={<SmartDataIllustration />}
        />
        
        <USPSection 
          reverse
          isNew
          badge="Pricing modal"
          title="Smart analysis, simply delivered"
          description="Our AI-powered analytics spots trends, anomalies, and opportunities, delivering clear, actionable reports—no spreadsheets or complex queries, just instant insights."
          illustration={<SmartAnalysisIllustration />}
        />

        <FeaturedOn />

        <Reviews />
        
        <FAQ />
        
        <Pricing />
        
        <Blog />
        
        <CTA />
      </main>

      <footer className="footer section">
        <div className="container">
          <div className="divider" />
          <div className="footer-bottom">
            <div className="footer-copyright body-xs">
              © 2026 Feature Inc. All rights reserved. Built with Antigravity.
            </div>
            <div className="footer-links">
              <a href="/terms" className="body-xs">Terms</a>
              <a href="/privacy" className="body-xs">Privacy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
