import { useState } from "react";

const links = [
  {
    icon: "✉️",
    label: "Email",
    value: "tpoonia@mail.yu.edu",
    href: "mailto:tpoonia@mail.yu.edu",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "551-362-7610",
    href: "tel:5513627610",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "linkedin.com/in/tushar-poonia",
    href: "https://www.linkedin.com/in/tushar-poonia",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "poonia2000tushar-wq",
    href: "https://github.com/poonia2000tushar-wq",
  },
];

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Wire up to your preferred form service (Formspree, EmailJS, etc.)
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-label">06 · Contact</div>
        <div className="contact-grid">
          <div>
            <h2 className="section-heading">
              Let's <em>connect</em>
            </h2>
            <p className="contact-intro">
              I'm open to new opportunities in backend engineering, ML engineering, or
              applied AI research. Whether you have a role in mind or just want to chat
              tech — my inbox is always open.
            </p>
            <div className="contact-links">
              {links.map((l) => (
                <a className="contact-link" href={l.href} key={l.label} target={l.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                  <div className="contact-link-icon">{l.icon}</div>
                  <div>
                    <div className="contact-link-label">{l.label}</div>
                    <div className="contact-link-value">{l.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
          <div>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Your Name</label>
                <input type="text" placeholder="Jane Smith" required />
              </div>
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="jane@company.com" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea rows={5} placeholder="Tell me about the opportunity..." required />
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
