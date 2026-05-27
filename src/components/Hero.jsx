export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid" />
      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">Software Developer · AI Engineer · Jersey City, NJ</div>
          <h1 className="hero-name">Tushar Poonia</h1>
          <div className="hero-title">Backend & ML Engineer</div>
          <p className="hero-bio">
            3+ years building high-scale APIs and data pipelines at Tata Consultancy Services,
            now pursuing an M.S. in AI at Yeshiva University. I turn complex engineering
            challenges into measurable, production-ready solutions.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              <span>Get in Touch</span>
              <span>→</span>
            </a>
            <a href="#projects" className="btn btn-outline">View Projects</a>
          </div>
          <div className="hero-stats">
            <div>
              <div className="stat-num">3<span>+</span></div>
              <div className="stat-label">Years at TCS</div>
            </div>
            <div>
              <div className="stat-num">60<span>+</span></div>
              <div className="stat-label">REST APIs Built</div>
            </div>
            <div>
              <div className="stat-num">100M<span>+</span></div>
              <div className="stat-label">Rows Optimized</div>
            </div>
            <div>
              <div className="stat-num">3<span>×</span></div>
              <div className="stat-label">Employee of Month</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
