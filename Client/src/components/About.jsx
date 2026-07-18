import { Mail, Phone, Sparkles } from "lucide-react";

const HIGHLIGHTS = [
  "Hands-on MERN training + real projects",
  "Strong DSA + problem solving mindset",
  "Experience deploying on Netlify & Vercel",
  "Comfortable with GitHub workflows",
];

export default function About() {
  return (
    <section id="about" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="section-title" data-eyebrow="01 /">
              About
            </h2>
            <p
              className="mt-4 max-w-md leading-relaxed animate-fadeInUp"
              style={{ color: "var(--ink-muted)" }}
            >
              I'm a Full Stack Developer focused on MERN stack applications with clean UI,
              scalable REST APIs, authentication, and database design. I enjoy solving DSA
              problems and writing maintainable code.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a className="btn-outline" href="mailto:gauravathode123@gmail.com">
                <Mail size={16} className="mr-2" />
                gauravathode123@gmail.com
              </a>
              <a className="btn-outline" href="tel:+919755784190">
                <Phone size={16} className="mr-2" />
                Call
              </a>
            </div>
          </div>

          <div className="card p-6 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
            <h3 className="flex items-center gap-2 text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              <Sparkles size={17} style={{ color: "var(--accent)" }} />
              Highlights
            </h3>
            <ul className="mt-4 grid gap-3" style={{ color: "var(--ink-muted)" }}>
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="bullet">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
