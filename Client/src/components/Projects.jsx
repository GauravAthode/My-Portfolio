import { Github, Globe, UtensilsCrossed, MessageCircle, Car } from "lucide-react";

const FEATURED = {
  title: "VoltPath",
  tagline: "Smart EV Route Planning & Charging Station Platform",
  period: "Mar 2026 – May 2026",
  description:
    "A full-stack platform that plans EV-friendly routes with live charging-station discovery, weather-aware range estimates, and trip simulations — solving the range-anxiety problem traditional GPS tools ignore.",
  stack: ["React", "Node.js", "MongoDB", "Leaflet", "TomTom API", "OpenWeather API", "Google OAuth", "JWT"],
  bullets: [
    "Interactive route planning with real-time EV charging station discovery.",
    "Weather-aware range estimation and multi-scenario trip simulations.",
    "Secure auth via Google OAuth 2.0 + JWT session management.",
  ],
  links: [
    { label: "Live", icon: Globe, url: "https://volt-path.vercel.app/" },
    { label: "Code", icon: Github, url: "https://github.com/GauravAthode/VoltPath" },
  ],
};

const PROJECTS = [
  {
    title: "Cravings",
    tagline: "Food Ordering Web App",
    period: "Dec 2025 – Feb 2026",
    icon: UtensilsCrossed,
    stack: ["MongoDB", "Express", "React", "Node.js"],
    bullets: [
      "User auth, restaurant listings, responsive UI.",
      "Scalable REST APIs + future-ready payment/order tracking.",
    ],
    links: [{ label: "Code", icon: Github, url: "https://github.com/GauravAthode/Cravings" }],
  },
  {
    title: "ChatApp",
    tagline: "Real-Time Chat Application",
    period: "Jun 2026 – Jul 2026",
    icon: MessageCircle,
    stack: ["MongoDB", "Express", "React", "Socket.IO"],
    bullets: [
      "Real-time messaging with Socket.IO and live delivery updates.",
      "User authentication and persistent conversation history.",
    ],
    links: [{ label: "Code", icon: Github, url: "https://github.com/GauravAthode/ChatApp" }],
  },
  {
    title: "Car Rental Management System",
    tagline: "Java Console Application",
    period: "Aug 2024 – Sep 2024",
    icon: Car,
    stack: ["Java", "OOP"],
    bullets: [
      "Console app to manage inventory, bookings, rentals.",
      "Modular OOP design + dynamic rental cost calculation.",
    ],
    links: [{ label: "Code", icon: Github, url: "https://github.com/GauravAthode/car-rental-system" }],
  },
];

function LinkButton({ link }) {
  const Icon = link.icon;
  return (
    <a className="btn-outline" target="_blank" rel="noreferrer" href={link.url}>
      <Icon size={15} className="mr-2" />
      {link.label}
    </a>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-16 md:py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="section-title" data-eyebrow="06 /">
              Projects
            </h2>
            <p className="mt-3 animate-fadeInUp" style={{ color: "var(--ink-muted)" }}>
              Selected work — from route planning to real-time systems.
            </p>
          </div>
          <a className="btn-outline" target="_blank" rel="noreferrer" href="https://github.com/GauravAthode">
            <Github size={15} className="mr-2" />
            More on GitHub
          </a>
        </div>

        {/* Featured project */}
        <article className="card mt-8 overflow-hidden animate-fadeInUp">
          <div
            className="relative flex items-center justify-center overflow-hidden px-6 py-10"
            style={{ background: "var(--accent-soft)" }}
          >
            <RouteGraphic />
            <span
              className="absolute left-5 top-5 tag"
              style={{ background: "var(--surface)", borderRadius: "999px", border: "1px solid var(--border)" }}
            >
              featured
            </span>
          </div>
          <div className="p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h3 className="text-2xl font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                  {FEATURED.title}
                </h3>
                <p style={{ color: "var(--ink-muted)" }}>{FEATURED.tagline}</p>
              </div>
              <span className="pill">{FEATURED.period}</span>
            </div>

            <p className="mt-4 max-w-2xl leading-relaxed" style={{ color: "var(--ink-muted)" }}>
              {FEATURED.description}
            </p>

            <ul className="mt-4 grid gap-2 md:grid-cols-2" style={{ color: "var(--ink-muted)" }}>
              {FEATURED.bullets.map((bullet) => (
                <li key={bullet} className="bullet">
                  {bullet}
                </li>
              ))}
            </ul>

            <div className="mt-5 flex flex-wrap gap-2">
              {FEATURED.stack.map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {FEATURED.links.map((link) => (
                <LinkButton key={link.label} link={link} />
              ))}
            </div>
          </div>
        </article>

        {/* Other projects */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {PROJECTS.map((project, i) => {
            const Icon = project.icon;
            return (
              <article
                key={project.title}
                className="card flex flex-col overflow-hidden animate-fadeInUp"
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                <div
                  className="flex items-center justify-center py-8"
                  style={{ background: "var(--surface-2)" }}
                >
                  <Icon size={32} style={{ color: "var(--accent)" }} strokeWidth={1.5} />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
                        {project.title}
                      </h3>
                      <p className="text-sm" style={{ color: "var(--ink-muted)" }}>
                        {project.tagline}
                      </p>
                    </div>
                  </div>
                  <span className="pill mt-3 w-fit">{project.period}</span>

                  <ul className="mt-4 grid gap-2 text-sm" style={{ color: "var(--ink-muted)" }}>
                    {project.bullets.map((bullet) => (
                      <li key={bullet} className="bullet">
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <LinkButton key={link.label} link={link} />
                    ))}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* Small route-line motif reused from the site's timeline signature —
   a nod to VoltPath's own subject matter. */
function RouteGraphic() {
  return (
    <svg viewBox="0 0 320 90" className="h-20 w-full max-w-md" fill="none" aria-hidden="true">
      <path
        d="M8 70 C 60 70, 60 20, 110 20 S 170 70, 220 70 S 280 20, 312 20"
        stroke="var(--accent)"
        strokeWidth="2.5"
        strokeDasharray="1 12"
        strokeLinecap="round"
        style={{ animation: "dashTravel 1.6s linear infinite" }}
      />
      <circle cx="8" cy="70" r="5" fill="var(--accent)" />
      <circle cx="110" cy="20" r="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="220" cy="70" r="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="2" />
      <circle cx="312" cy="20" r="5" fill="var(--accent)" />
    </svg>
  );
}
