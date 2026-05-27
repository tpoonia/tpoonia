export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-label" style={{ textAlign: "center" }}>05 · Resume</div>
        <div className="card resume-card">
          <div className="resume-icon">📄</div>
          <div className="resume-title">Download My Resume</div>
          <p className="resume-desc">
            Full details on my experience at Tata Consultancy Services, academic background,
            ML projects, and technical skill set — all in one page.
          </p>
          <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
            {/* Update the href below with your actual resume file path in /public */}
            <a
              href="/Portfolio/Tushar_Poonia_Resume.pdf"
              download="Tushar_Poonia_Resume.pdf"
              className="btn btn-primary"
            >
              <span>⬇</span>
              <span>Download PDF</span>
            </a>
            <a
              href="/Portfolio/Tushar_Poonia_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              View Online
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
