const jobs = [
  {
    period: "Jun 2022 – Aug 2025",
    role: "Software Product Developer",
    company: "Tata Consultancy Services · CTBC Bank (Taiwan)",
    bullets: [
      "Designed and implemented <strong>60+ REST APIs</strong> powering scalable data pipelines across 8+ distributed platforms, cutting integration time by <strong>25%</strong>.",
      "Optimized 15+ large-scale data pipelines and complex SQL queries, reducing latency by <strong>30%</strong> and improving query throughput by <strong>2×</strong> for 100M+ row datasets.",
      "Led 5+ ML data pipelines, increasing real-time analytics throughput by <strong>40%</strong> across 10+ banking modules.",
      "Earned <strong>Employee of the Month (3×)</strong> for delivery excellence across cross-functional analytics teams.",
    ],
  },
  {
    period: "Dec 2021 – May 2022",
    role: "Assistant Software Engineer",
    company: "Tata Consultancy Services · ING Bank (Netherlands)",
    bullets: [
      "Engineered <strong>10+ modular microservices</strong> for ING Bank's core platform, reducing deployment cycle time by <strong>40%</strong>.",
      "Integrated 8+ backend services with Oracle & PostgreSQL via Hibernate (JPA), achieving <strong>99.9% transactional accuracy</strong> across 50M+ daily records.",
      "Built 3+ Kafka pipelines processing <strong>1M+ daily events</strong>, reducing latency by 35%.",
      "Received <strong>Client Appreciation Award</strong> for exceptional service delivery.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <div className="container">
        <div className="section-label">02 · Experience</div>
        <h2 className="section-heading">
          Where I've <em>built</em>
        </h2>
        <div className="experience-list">
          {jobs.map((job) => (
            <div className="card exp-card" key={job.role}>
              <div className="exp-dot" />
              <div className="exp-period">{job.period}</div>
              <div className="exp-role">{job.role}</div>
              <div className="exp-company">{job.company}</div>
              <ul className="exp-bullets">
                {job.bullets.map((b, i) => (
                  <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
