const projects = [
  {
    tag: "Machine Learning · Explainability",
    title: "Explainable Credit Risk Model",
    desc: "Built an ensemble ML pipeline on 50K+ loan records achieving 92% accuracy and AUC-ROC 0.96. Deployed SHAP & LIME explainability layers, cutting auditor review time by 40%.",
    metrics: ["92% Accuracy", "AUC-ROC 0.96", "40% Faster Audits"],
    stack: ["XGBoost", "Random Forest", "SHAP", "LIME", "Python"],
  },
  {
    tag: "Healthcare AI · Classification",
    title: "Medical Disease Prediction System",
    desc: "Multi-disease classifier using SVM, Random Forest, and Neural Networks on 20K+ patient records, achieving 95% accuracy and 98% recall with engineered features across 30+ clinical variables.",
    metrics: ["95% Accuracy", "98% Recall", "18% ↓ False Negatives"],
    stack: ["SVM", "Neural Networks", "Scikit-learn", "Feature Engineering"],
  },
  {
    tag: "Optimization · Algorithms",
    title: "Genetic Algorithm — Knapsack Optimizer",
    desc: "Implemented DEAP Genetic Algorithm across 1,000+ combinations achieving 97% optimal solution rate within 50 generations, outperforming brute-force by 60× with 45% faster convergence.",
    metrics: ["97% Optimal Rate", "60× Faster", "50 Generations"],
    stack: ["Python", "DEAP", "Genetic Algorithms", "Combinatorics"],
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <div className="section-label">03 · Projects</div>
        <h2 className="section-heading">
          Things I've <em>built</em>
        </h2>
        <div className="projects-grid">
          {projects.map((p) => (
            <div className="card project-card" key={p.title}>
              <div className="project-tag">{p.tag}</div>
              <div className="project-title">{p.title}</div>
              <div className="project-desc">{p.desc}</div>
              <div className="project-metrics">
                {p.metrics.map((m) => (
                  <span className="metric" key={m}>{m}</span>
                ))}
              </div>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
