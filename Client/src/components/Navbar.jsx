import { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Send } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const { isDark, setIsDark } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 border-b backdrop-blur-md"
      style={{ borderColor: "var(--border)", background: "color-mix(in srgb, var(--bg) 82%, transparent)" }}
    >
      <div className="container-page flex items-center justify-between py-3.5">
        <a href="#home" className="flex items-center gap-3">
          <div className="logo-circle">
            <span className="logo-letter">G</span>
          </div>
          <div className="leading-tight">
            <p className="eyebrow">gaurav athode</p>
            <p className="font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              full stack dev
            </p>
          </div>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {LINKS.map((link) => (
            <a key={link.href} className="nav-link" href={link.href}>
              {link.label}
            </a>
          ))}

          <button
            onClick={() => setIsDark(!isDark)}
            className={`theme-toggle ${isDark ? "dark" : ""}`}
            aria-label="Toggle theme"
            type="button"
          >
            <div className="theme-toggle-circle">{isDark ? "🌙" : "☀"}</div>
          </button>

          <a className="btn-solid" href="mailto:gauravathode123@gmail.com" title="Email me">
            <Send size={15} className="mr-2" />
            Hire me
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setIsDark(!isDark)}
            className={`theme-toggle ${isDark ? "dark" : ""}`}
            aria-label="Toggle theme"
            type="button"
          >
            <div className="theme-toggle-circle">{isDark ? "🌙" : "☀"}</div>
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn-outline !px-2.5 !py-2.5"
            aria-label="Open menu"
            aria-expanded={menuOpen}
            type="button"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t md:hidden" style={{ borderColor: "var(--border)", background: "var(--surface)" }}>
          <div className="container-page grid gap-1 py-4">
            {LINKS.map((link) => (
              <a
                key={link.href}
                className="nav-link block py-2"
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              className="btn-solid mt-2 justify-center"
              href="mailto:gauravathode123@gmail.com"
              onClick={() => setMenuOpen(false)}
            >
              <Send size={15} className="mr-2" />
              Hire me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
