import { ArrowUpRight } from "lucide-react";

const EXPERIENCES = [
  {
    company: "RICR — Raj Institute of Coding & Robotics",
    role: "Full Stack Web Development Training",
    period: "Nov 2024 – Mar 2026",
    bullets: [
      "Intensive MERN training: REST APIs, auth, DB design.",
      "Built and deployed full-stack apps following industry best practices.",
    ],
    link: "https://ricr.in/",
    current: true,
  },
  {
    company: "Horizon Flare India",
    role: "Full Stack Web Development Intern",
    period: "Mar 2025 – May 2025",
    bullets: [
      "8-week internship building responsive MERN applications.",
      "Collaborated with a team to deliver production-ready solutions.",
    ],
    link: "https://horizonflare.in/",
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-16 md:py-20">
        <h2 className="section-title" data-eyebrow="03 /">
          Experience
        </h2>
        <p className="mt-3 animate-fadeInUp" style={{ color: "var(--ink-muted)" }}>
          Training + internship experience.
        </p>

        <div className="route-line mt-9">
          {EXPERIENCES.map((exp, i) => (
            <div
              key={exp.company}
              className={`route-stop animate-fadeInUp ${exp.current ? "is-current" : ""}`}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="card p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                      {exp.company}
                    </h3>
                    <p style={{ color: "var(--ink-muted)" }}>{exp.role}</p>
                  </div>
                  <span className="pill">{exp.period}</span>
                </div>
                <ul className="mt-4 grid gap-2" style={{ color: "var(--ink-muted)" }}>
                  {exp.bullets.map((bullet) => (
                    <li key={bullet} className="bullet">
                      {bullet}
                    </li>
                  ))}
                </ul>
                <a
                  className="mt-4 inline-flex items-center gap-1.5 text-sm hover:underline"
                  style={{ color: "var(--accent)" }}
                  target="_blank"
                  rel="noreferrer"
                  href={exp.link}
                >
                  Visit website <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
