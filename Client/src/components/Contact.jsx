import { useState } from "react";
import { api } from "../config/api";
import toast from "react-hot-toast";
import { Mail, Phone, Github, Linkedin, Send, Loader2 } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);

  const validate = () => {
    const nextErrors = {};

    if (form.name.trim().length < 3) {
      nextErrors.name = "Name should be more than 3 characters";
    } else if (!/^[A-Za-z ]+$/.test(form.name.trim())) {
      nextErrors.name = "Only letters and spaces allowed";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Enter a valid email address";
    }

    if (form.message.trim().length < 5) {
      nextErrors.message = "Message should be at least 5 characters";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending || !validate()) return;

    try {
      setIsSending(true);
      await api.post("/contact", {
        name: form.name.trim(),
        email: form.email.trim(),
        message: form.message.trim(),
      });
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } catch (err) {
      console.error(err);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="section-title" data-eyebrow="07 /">
              Contact
            </h2>
            <p className="mt-3 animate-fadeInUp" style={{ color: "var(--ink-muted)" }}>
              Want to work together? Send a message — I respond quickly.
            </p>

            <div className="mt-6 grid gap-3 animate-fadeInUp" style={{ animationDelay: "0.1s" }}>
              <a className="btn-outline inline-flex" href="mailto:gauravathode123@gmail.com">
                <Mail size={16} className="mr-2" />
                gauravathode123@gmail.com
              </a>
              <a className="btn-outline inline-flex" href="tel:+919755784190">
                <Phone size={16} className="mr-2" />
                +91-9755784190
              </a>
              <a
                className="btn-outline inline-flex"
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/gaurav-athode-6b435a289"
              >
                <Linkedin size={16} className="mr-2" />
                LinkedIn
              </a>
              <a
                className="btn-outline inline-flex"
                target="_blank"
                rel="noreferrer"
                href="https://github.com/GauravAthode"
              >
                <Github size={16} className="mr-2" />
                GitHub
              </a>
            </div>
          </div>

          <div className="card p-6 animate-fadeInUp" style={{ animationDelay: "0.15s" }}>
            <h3 className="text-lg font-semibold" style={{ fontFamily: "var(--font-display)" }}>
              Send a message
            </h3>

            <form onSubmit={handleSubmit} className="mt-5 grid gap-3" noValidate>
              <div>
                <input
                  className="input"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  disabled={isSending}
                  required
                />
                {errors.name && (
                  <p className="mt-1 text-xs" style={{ color: "#e4534b" }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <input
                  className="input"
                  type="email"
                  placeholder="Your email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  disabled={isSending}
                  required
                />
                {errors.email && (
                  <p className="mt-1 text-xs" style={{ color: "#e4534b" }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  className="input min-h-[120px]"
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  disabled={isSending}
                  required
                />
                {errors.message && (
                  <p className="mt-1 text-xs" style={{ color: "#e4534b" }}>
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                className="btn-solid justify-center"
                type="submit"
                disabled={isSending}
                style={isSending ? { opacity: 0.7, cursor: "not-allowed" } : undefined}
              >
                {isSending ? (
                  <>
                    <Loader2 size={16} className="mr-2 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send size={16} className="mr-2" />
                    Send
                  </>
                )}
              </button>

              <p className="text-xs" style={{ color: "var(--ink-faint)" }}>
                * Messages are sent directly to my inbox.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
