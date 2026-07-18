const SKILLS = [
  { category: "Languages", content: "Java, JavaScript" },
  { category: "Front-End", content: "ReactJS, Tailwind, Bootstrap" },
  { category: "Back-End", content: "NodeJS, ExpressJS" },
  { category: "Databases", content: "MongoDB, SQL" },
  { category: "Tools", content: "GitHub, VS Code, Eclipse" },
  { category: "Cloud", content: "Netlify, Vercel" },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-16 md:py-20">
        <h2 className="section-title" data-eyebrow="02 /">
          Skills
        </h2>
        <p className="mt-3 animate-fadeInUp" style={{ color: "var(--ink-muted)" }}>
          Tech I use most frequently.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill, i) => (
            <div
              key={skill.category}
              className="card p-5 animate-fadeInUp"
              style={{ animationDelay: `${i * 0.06}s` }}
            >
              <p className="eyebrow">{skill.category}</p>
              <p className="mt-2 font-semibold">{skill.content}</p>
            </div>
          ))}
          <div className="card p-5 sm:col-span-2 animate-fadeInUp" style={{ animationDelay: "0.4s" }}>
            <p className="eyebrow">Core Competencies</p>
            <p className="mt-2 font-semibold">DSA, Core Java, OOP, MERN Stack, Problem Solving</p>
          </div>
        </div>
      </div>
    </section>
  );
}
