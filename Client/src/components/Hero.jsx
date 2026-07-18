import { useTheme } from "../context/ThemeContext";
import { FolderOpen, Copy, Github, Linkedin, Download, Phone, MapPin, GraduationCap } from "lucide-react";
import profile from "../assets/images/profile.jpg";

export default function Hero() {
  const { isDark } = useTheme();

  const showToast = (message) => {
    const toast = document.getElementById("toast");
    if (toast) {
      toast.textContent = message;
      toast.classList.remove("hidden");
      setTimeout(() => toast.classList.add("hidden"), 2200);
    }
  };

  const handleCopyEmail = async () => {
    const EMAIL = "gauravathode123@gmail.com";
    try {
      await navigator.clipboard.writeText(EMAIL);
      showToast("Email copied!");
    } catch {
      showToast("Copy failed — email is gauravathode123@gmail.com");
    }
  };

  return (
    <section id="home" className="relative overflow-hidden">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="container-page relative grid gap-12 py-16 md:grid-cols-[1.15fr_0.85fr] md:items-center md:py-24">
        <div>
          <p className="eyebrow animate-fadeInUp">
            ~/gaurav-athode <span style={{ color: "var(--ink)" }}>$</span> whoami
            <span className="caret" />
          </p>

          <h1
            className="mt-5 text-4xl font-semibold leading-[1.1] md:text-5xl animate-fadeInUp"
            style={{ animationDelay: "0.08s", fontFamily: "var(--font-display)" }}
          >
            Gaurav Athode
          </h1>
          <p
            className="mt-2 text-xl font-medium md:text-2xl animate-fadeInUp"
            style={{ animationDelay: "0.14s", color: "var(--ink-muted)", fontFamily: "var(--font-display)" }}
          >
            Full Stack Developer, MERN
          </p>

          <p
            className="mt-5 max-w-xl leading-relaxed animate-fadeInUp"
            style={{ animationDelay: "0.2s", color: "var(--ink-muted)" }}
          >
            I build scalable, clean web applications — from route-planning
            platforms to real-time chat systems. Strong foundation in DSA and
            OOP, with a habit of writing code I'm not embarrassed to revisit
            six months later.
          </p>

          <div className="mt-7 flex flex-wrap gap-3 animate-fadeInUp" style={{ animationDelay: "0.26s" }}>
            <a className="btn-solid" href="#projects">
              <FolderOpen size={16} className="mr-2" />
              View projects
            </a>
            <a className="btn-outline" href="/resume.pdf" download="Gaurav-Athode-Resume.pdf">
              <Download size={16} className="mr-2" />
              Resume
            </a>
            <button className="btn-outline" onClick={handleCopyEmail} type="button">
              <Copy size={16} className="mr-2" />
              Copy email
            </button>
            <a className="btn-outline" target="_blank" rel="noreferrer" href="https://github.com/GauravAthode">
              <Github size={16} className="mr-2" />
              GitHub
            </a>
            <a
              className="btn-outline"
              target="_blank"
              rel="noreferrer"
              href="https://linkedin.com/in/gaurav-athode-6b435a289"
            >
              <Linkedin size={16} className="mr-2" />
              LinkedIn
            </a>
          </div>

          <div
            className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm animate-fadeInUp"
            style={{ animationDelay: "0.32s", color: "var(--ink-faint)" }}
          >
            <span className="inline-flex items-center gap-1.5">
              <Phone size={14} /> +91-9755784190
            </span>
            <span className="inline-flex items-center gap-1.5">
              <MapPin size={14} /> Bhopal, MP
            </span>
            <span className="inline-flex items-center gap-1.5">
              <GraduationCap size={14} /> B.Tech CSE (2022–2026)
            </span>
          </div>

          <div id="toast" className="toast hidden" />
        </div>

        <div className="relative animate-fadeInUp" style={{ animationDelay: "0.2s" }}>
          <div className="card overflow-hidden">
            <div className="aspect-[4/5] w-full overflow-hidden" style={{ background: "var(--surface-2)" }}>
              <img src={profile} alt="Gaurav Athode" className="h-full w-full object-cover" />
            </div>
            <div className="flex items-center justify-between border-t p-4" style={{ borderColor: "var(--border)" }}>
              <span className="eyebrow inline-flex items-center gap-2">
                <span className="status-dot" /> available — training till mar&nbsp;2026
              </span>
              <span className="tag">{isDark ? "dark" : "light"}</span>
            </div>
          </div>

          <div
            className="mt-4 grid grid-cols-2 gap-2.5 md:grid-cols-4"
          >
            {["MongoDB", "Express", "React", "Node"].map((tech) => (
              <div key={tech} className="mini-card text-center">
                <p className="text-xs font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

