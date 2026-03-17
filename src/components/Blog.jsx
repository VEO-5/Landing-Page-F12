import './Blog.css';

const posts = [
  {
    title: "How to set rates that reflect your true value",
    category: "Culture & Growth",
    author: "Zahra Nakamura",
    image: "https://framerusercontent.com/images/kvIwxBEXQFpqbHHw4Lm8HYzg3Yc.png"
  },
  {
    title: "The power of automated data cleaning",
    category: "Engineering",
    author: "Zahra Nakamura",
    image: "https://framerusercontent.com/images/kvIwxBEXQFpqbHHw4Lm8HYzg3Yc.png"
  },
  {
    title: "Building a culture of data-informed decisions",
    category: "Product",
    author: "Zahra Nakamura",
    image: "https://framerusercontent.com/images/kvIwxBEXQFpqbHHw4Lm8HYzg3Yc.png"
  }
];

export default function Blog() {
  return (
    <section className="blog section">
      <div className="container">
        <div className="blog-header">
          <h2 className="heading-2">FeatureInsights</h2>
          <a href="/blog" className="btn btn-ghost">See all</a>
        </div>
        <div className="blog-grid">
          {posts.map((post, i) => (
            <div key={i} className="blog-item">
              <div className="blog-image-wrapper">
                <img src={post.image} alt={post.title} className="blog-image" />
              </div>
              <div className="blog-content">
                <div className="badge blog-category">{post.category}</div>
                <h3 className="blog-title">{post.title}</h3>
                <div className="blog-author">{post.author}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
