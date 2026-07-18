const EDUCATION = [
  {
    school: "LNCT Group (LNCT Excellence)",
    degree: "B.Tech CSE • CGPA: 7.64/10",
    period: "Nov 2022 – Jun 2026",
    location: "Bhopal, Madhya Pradesh",
    current: true,
  },
  {
    school: "Jawahar Navodaya Vidyalaya",
    degree: "12th Grade • 79%",
    period: "2022",
    location: "Balaghat, Madhya Pradesh",
    current: false,
  },
];

const CERTIFICATIONS = [
  { name: "Full Stack Web Development", issuer: "RICR", year: "2026" },
  { name: "DSA using Java", issuer: "Infosys Springboard", year: "2025" },
  { name: "Programming Using Java", issuer: "Infosys Springboard", year: "2024" },
];

export default function Education() {
  return (
    <section id="education" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="section-title" data-eyebrow="04 /">
              Education
            </h2>
            <div className="route-line mt-9">
              {EDUCATION.map((edu, i) => (
                <div
                  key={edu.school}
                  className={`route-stop animate-fadeInUp ${edu.current ? "is-current" : ""}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="card p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                        {edu.school}
                      </h3>
                      <span className="pill">{edu.period}</span>
                    </div>
                    <p className="mt-1" style={{ color: "var(--ink-muted)" }}>
                      {edu.degree}
                    </p>
                    <p className="mt-2 text-sm" style={{ color: "var(--ink-faint)" }}>
                      {edu.location}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title" data-eyebrow="05 /">
              Certifications
            </h2>
            <div className="mt-9 grid gap-4">
              {CERTIFICATIONS.map((cert, i) => (
                <div
                  key={cert.name}
                  className="card p-6 animate-fadeInUp"
                  style={{ animationDelay: `${(i + 2) * 0.1}s` }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="font-semibold">{cert.name}</p>
                    <span className="pill">{cert.year}</span>
                  </div>
                  <p className="mt-2" style={{ color: "var(--ink-muted)" }}>
                    {cert.issuer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
