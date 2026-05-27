export default function Navbar({ scrolled }) {
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <a href="#hero" className="nav-logo">
        T<span>.</span>Poonia
      </a>
      <ul className="nav-links">
        {["About", "Experience", "Projects", "Skills", "Resume", "Contact"].map((item) => (
          <li key={item}>
            <a href={`#${item.toLowerCase()}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
