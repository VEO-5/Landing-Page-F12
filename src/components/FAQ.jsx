import { useState } from 'react';
import './FAQ.css';

const faqItems = [
  {
    q: "How long does it take to get started with Feature?",
    a: "Most customers are up and running in less than a day. We'll help you move your existing data over and show you how everything works."
  },
  {
    q: "Can I make Feature work the way my business operates?",
    a: "Yes, the template is based on color and text styles, so you can change colors and fonts in just a few clicks."
  },
  {
    q: "What if I need help?",
    a: "No you don't :) Framer is a no-code page builder. You can use the templates without a single line of code."
  },
  {
    q: "How do you keep my data safe?",
    a: "We use serious security measures that banks would approve of. Your information is encrypted, backed up regularly, and we follow all major privacy laws including GDPR and CCPA."
  },
  {
    q: "Do I need to be tech-savvy to use Feature?",
    a: "Not at all. We designed Feature to be straightforward and easy to use. If you can use a smartphone, you can use our product."
  },
  {
    q: "How often do you improve the product?",
    a: "We make small improvements every two weeks based on customer feedback, with bigger updates every three months. You get all these improvements automatically."
  },
  {
    q: "Can I try before I buy?",
    a: "Of course! Try everything free for 14 days, no credit card needed. We want you to be sure it's right for you before you spend a penny."
  }
];

export default function FAQ() {
  return (
    <section className="faq section">
      <div className="container-md">
        <div className="faq-header">
          <div className="badge">FAQ</div>
          <h2 className="heading-2">Any questions?</h2>
          <p className="body-lg">
            See the info below or <a href="/contact" style={{color: 'var(--color-white)', textDecoration: 'underline'}}>drop me a line</a> via the support page.
          </p>
        </div>
        <div className="faq-list">
          {faqItems.map((item, i) => (
            <FAQItem key={i} question={item.q} answer={item.a} index={i + 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);
  const numStr = index.toString().padStart(2, '0');

  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
      <div className="faq-question">
        <span className="faq-number">({numStr})</span>
        <span className="body-md-bold">{question}</span>
        <div className="faq-icon">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
      {isOpen && (
        <div className="faq-answer body-md">
          {answer}
        </div>
      )}
    </div>
  );
}
