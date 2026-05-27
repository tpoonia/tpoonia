const categories = [
  {
    title: "Languages",
    skills: ["Python", "Java", "R", "SQL"],
  },
  {
    title: "ML & AI",
    skills: ["PyTorch", "TensorFlow", "Scikit-learn", "Deep Learning", "CNNs", "Transformers", "Reinforcement Learning", "Computer Vision"],
  },
  {
    title: "Backend & Data",
    skills: ["Spring Boot", "Apache Kafka", "REST APIs", "Hibernate (JPA)", "Microservices"],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "Oracle", "MySQL"],
  },
  {
    title: "Cloud & DevOps",
    skills: ["AWS (EC2, S3)", "GCP", "Jenkins", "Kubernetes", "Docker"],
  },
  {
    title: "Data Science",
    skills: ["Predictive Modeling", "Statistical Analysis", "Feature Engineering", "SHAP", "LIME"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="section-label">04 · Skills</div>
        <h2 className="section-heading">
          My <em>toolkit</em>
        </h2>
        <div className="skills-categories">
          {categories.map((cat) => (
            <div className="skill-category" key={cat.title}>
              <div className="skill-cat-title">{cat.title}</div>
              <div className="skill-list">
                {cat.skills.map((s) => (
                  <div className="skill-item" key={s}>
                    <div className="skill-dot" />
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
