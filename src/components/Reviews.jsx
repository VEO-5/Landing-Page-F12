import { motion } from 'framer-motion';
import Button from './Button';
import './Reviews.css';

const testimonials = [
  [
    {
      name: 'David R.',
      handle: '@davidr',
      avatar: 'https://framerusercontent.com/images/3GAtV9Wnt9tYvVwLp7Z7S2s3k.jpeg',
      text: "We've scaled from 5 to 50 employees using this software. The automation capabilities have eliminated so much busywork, letting us focus on growth. Their regular feature updates show they're committed to improvement.",
      verified: true
    },
    {
      name: 'Akash P.',
      handle: '@akashp',
      avatar: 'https://framerusercontent.com/images/xCjesZlpNiv5Na63YdTeQRVsOhI.jpeg',
      text: "Solid functionality and security features. Integration with our existing systems was more challenging than promised, but once set up, it performs well. Would appreciate more customization options.",
      verified: true
    }
  ],
  [
    {
      name: 'Rebecca H.',
      handle: '@rebeccah',
      avatar: 'https://framerusercontent.com/images/9o8rf9dBGUJ09MPEHrVO0LQY6M.jpeg',
      text: "The client portal is a game-changer. Only wish the pricing was more flexible for individual users.",
      verified: true
    },
    {
      name: 'Thomas W.',
      handle: '@thomasw',
      avatar: 'https://framerusercontent.com/images/6sxQYX9FS5raaMLxb5TeZRQ7Sug.jpeg',
      text: "Just amazing!!",
      verified: true
    },
    {
      name: 'Lisa G.',
      handle: '@lisag',
      avatar: 'https://framerusercontent.com/images/BzQBW3kfyCoemZuha7QYnaMBqE.jpeg',
      text: "Compliant with all our industry regulations and incredibly user-friendly. The template library saved us countless hours of setup time. Their customer success team truly went above and beyond.",
      verified: true
    }
  ],
  [
    {
      name: 'Carlos M.',
      handle: '@carlosm',
      avatar: 'https://framerusercontent.com/images/M4RGMCtWRViXq3Zh8FmDvdJkkiI.jpeg',
      text: "Good platform with some growing pains. The analytics are excellent, but we've experienced occasional downtime during peak seasons. Their roadmap looks promising though.",
      verified: true
    },
    {
      name: 'Emma T.',
      handle: '@emma92',
      avatar: 'https://framerusercontent.com/images/F41TjDB4uXFd3yzkfLpUSjdhk.jpeg',
      text: "Finally, software that employees actually want to use! The onboarding workflow automation has reduced our paperwork by 70%. The interface is intuitive enough that even our least tech-savvy team members adapted quickly.",
      verified: true
    }
  ]
];

export default function Reviews() {
  return (
    <section className="reviews section">
      <div className="container">
        <div className="reviews-header">
          <div className="header-left">
            <div className="badge-pill">Testimonials</div>
            <h2 className="reviews-title">
              Reviews that <br/>
              <span>make us blush</span>
            </h2>
          </div>
          <div className="header-right">
            <Button text="Leave a review" variant="yellow" />
          </div>
        </div>

        <div className="reviews-columns">
          {testimonials.map((column, colIndex) => (
            <div key={colIndex} className="reviews-column">
              {column.map((item, i) => (
                <motion.div 
                  key={i} 
                  className="review-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (colIndex * 0.1) + (i * 0.1) }}
                  whileHover={{ y: -5, borderColor: 'rgba(255, 223, 125, 0.2)' }}
                >
                  <div className="card-header">
                    <img 
                      src={item.avatar} 
                      alt={item.name} 
                      className="reviewer-avatar" 
                      onError={(e) => { e.target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=random`; }}
                    />
                    <div className="reviewer-info">
                      <div className="reviewer-name-row">
                        <span className="reviewer-name">{item.name}</span>
                        {item.verified && (
                          <span className="verified-badge">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                            </svg>
                          </span>
                        )}
                      </div>
                      <span className="reviewer-handle">{item.handle}</span>
                    </div>
                  </div>
                  <p className="review-text">{item.text}</p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
