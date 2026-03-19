import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <div className="navbar-logo">
           <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="rgb(255,223,125)" />
            <path d="M7 7h10v5H7z" fill="black" />
            <path d="M7 14h5v3H7z" fill="black" />
          </svg>
          <span>Feature</span>
        </div>
      </div>
    </nav>
  );

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <a href="/" className="navbar-logo">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <rect width="24" height="24" rx="6" fill="rgb(255,223,125)" />
            <path d="M7 7h10v5H7z" fill="black" />
            <path d="M7 14h5v3H7z" fill="black" />
          </svg>
          <span>Feature</span>
        </a>

        <ul className="navbar-links">
          <li><a href="/product">Product</a></li>
          <li><a href="/blog">Blog</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/faq">FAQ</a></li>
        </ul>

        <div className="navbar-actions">
          <button 
            className="theme-toggle" 
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a href="/contact" className="btn btn-ghost btn-sm">Log in</a>
          <a href="/contact" className="btn btn-primary btn-sm">Start free trial</a>
        </div>

        <button className="navbar-hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>
      {menuOpen && (
        <div className="navbar-mobile">
          <div className="navbar-mobile-header">
            <button 
              className="theme-toggle" 
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
            </button>
          </div>
          <a href="/product" onClick={() => setMenuOpen(false)}>Product</a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>Blog</a>
          <a href="/about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="/faq" onClick={() => setMenuOpen(false)}>FAQ</a>
          <a href="/contact" className="btn btn-primary" onClick={() => setMenuOpen(false)}>Start free trial</a>
        </div>
      )}

    </nav>
  );
}
