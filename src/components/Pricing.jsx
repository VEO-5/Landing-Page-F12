import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './Button';
import './Pricing.css';

export default function Pricing() {
  const [billing, setBilling] = useState('yearly');

  const plans = [
    {
      name: 'Personal',
      price: billing === 'yearly' ? 22 : 30,
      features: [
        { name: 'Cloud storage', active: true },
        { name: 'Basic support', active: true },
        { name: 'Single user', active: true },
        { name: 'Data export', active: false },
        { name: 'API access', active: false },
      ],
      highlight: false
    },
    {
      name: 'Professional',
      price: billing === 'yearly' ? 56 : 75,
      features: [
        { name: 'Cloud storage', active: true },
        { name: 'Premium support', active: true },
        { name: 'Team access', active: true },
        { name: 'Data export', active: true },
        { name: 'API access', active: false },
      ],
      highlight: true
    },
    {
      name: 'Business',
      price: billing === 'yearly' ? 112 : 150,
      features: [
        { name: 'Cloud storage', active: true },
        { name: 'Dedicated support', active: true },
        { name: 'Unlimited users', active: true },
        { name: 'Data export', active: true },
        { name: 'API access', active: true },
      ],
      highlight: false
    }
  ];

  return (
    <section className="pricing section">
      <div className="container">
        <div className="pricing-header">
          <div className="badge">Pricing</div>
          <h2 className="heading-2">What will it cost?</h2>
          <p className="body-lg muted">Flexible monthly plans, cancel at any time.</p>
        </div>

        <div className="pricing-toggle-wrapper">
          <div className="pricing-toggle-container">
            <div className="discount-badge">-25%</div>
            <div className="pricing-toggle">
              <motion.div 
                className="toggle-backdrop"
                animate={{ x: billing === 'yearly' ? 0 : '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              />
              <button 
                className={`toggle-btn ${billing === 'yearly' ? 'active' : ''}`}
                onClick={() => setBilling('yearly')}
              >
                Yearly
              </button>
              <button 
                className={`toggle-btn ${billing === 'monthly' ? 'active' : ''}`}
                onClick={() => setBilling('monthly')}
              >
                Monthly
              </button>
            </div>
          </div>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, i) => (
            <motion.div 
              key={plan.name}
              className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className="card-top">
                <span className="plan-name">{plan.name}</span>
                <div className="plan-price">
                  <AnimatePresence mode="wait">
                    <motion.span 
                      key={plan.price}
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -10, opacity: 0 }}
                      className="price-amount"
                    >
                      ${plan.price}
                    </motion.span>
                  </AnimatePresence>
                  <span className="price-period">/mo</span>
                </div>
              </div>

              <ul className="feature-list">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className={`feature-item ${feature.active ? 'active' : 'inactive'}`}>
                    <span className="feature-icon">{feature.active ? '✓' : '×'}</span>
                    <span className="feature-text">{feature.name}</span>
                  </li>
                ))}
              </ul>

              <div className="card-footer">
                <Button variant="yellow" text="Let's talk" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
