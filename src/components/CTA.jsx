import Button from './Button';
import './CTA.css';

export default function CTA() {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-card card">
          <div className="cta-glow" />
          <h2 className="heading-2 cta-title">Ready to make better decisions with your data?</h2>
          <p className="body-lg cta-desc">Try Feature free for 14 days. No credit card needed.</p>
          <div className="cta-actions">
            <Button variant="yellow" text="Start free trial" />
            <Button variant="black" text="Learn more" />

          </div>
        </div>
      </div>
    </section>
  );
}
