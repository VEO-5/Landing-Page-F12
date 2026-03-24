import { Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import './App.css';

// Lazy load components that are not immediately visible
const HowItWorks = lazy(() => import('./components/HowItWorks'));
const FeaturedOn = lazy(() => import('./components/FeaturedOn'));
const USPSection = lazy(() => import('./components/USPSection'));
const SmartDataIllustration = lazy(() => import('./components/SmartDataIllustration'));
const SmartAnalysisIllustration = lazy(() => import('./components/SmartAnalysisIllustration'));
const Reviews = lazy(() => import('./components/Reviews'));
const FAQ = lazy(() => import('./components/FAQ'));
const Pricing = lazy(() => import('./components/Pricing'));
const Blog = lazy(() => import('./components/Blog'));
const CTA = lazy(() => import('./components/CTA'));

// Loading fallback component
const LoadingSpinner = () => (
  <div style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <div className="spinner" />
  </div>
);

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        
        <Suspense fallback={<LoadingSpinner />}>
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
        </Suspense>
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
