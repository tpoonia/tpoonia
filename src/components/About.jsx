const highlights = [
  {
    icon: "🎓",
    title: "M.S. Artificial Intelligence",
    sub: "Yeshiva University · GPA 3.8 · 2025–2027",
  },
  {
    icon: "🎓",
    title: "M.Sc. Computer Science (AI & ML Honors)",
    sub: "Savitribai Phule Pune University · GPA 3.63",
  },
  {
    icon: "🏆",
    title: "Employee of the Month — 3×",
    sub: "Tata Consultancy Services · 2022–2025",
  },
  {
    icon: "🏅",
    title: "Client Appreciation Award",
    sub: "ING Bank Project · Tata Consultancy Services",
  },
];

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="section-label">01 · About</div>
        <div className="about-grid">
          <div className="about-text">
            <h2 className="section-heading">
              Engineering at <em>scale</em>,<br />thinking in <em>models</em>
            </h2>
            <p>
              I'm a software developer turned AI graduate student — equal parts backend
              engineer and machine learning practitioner. At TCS, I designed and shipped
              systems that processed <strong>100M+ rows daily</strong> for global banking clients.
            </p>
            <p>
              Today, I apply that same rigor to AI: building explainable ML models, optimizing
              pipelines for real-time analytics, and bridging the gap between research and
              production engineering.
            </p>
            <p>
              I believe good software is <strong>measurable</strong> — every system I touch should
              be faster, more reliable, or more accessible than it was before.
            </p>
          </div>
          <div className="about-highlights">
            {highlights.map((h) => (
              <div className="highlight-item" key={h.title}>
                <div className="highlight-icon">{h.icon}</div>
                <div>
                  <div className="highlight-title">{h.title}</div>
                  <div className="highlight-sub">{h.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
