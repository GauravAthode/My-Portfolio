export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t" style={{ borderColor: "var(--border)" }}>
      <div className="container-page flex flex-wrap items-center justify-between gap-3 py-8 text-sm" style={{ color: "var(--ink-faint)" }}>
        <p>© {year} Gaurav Athode. All rights reserved.</p>
        <p className="eyebrow">react · tailwind · node.js</p>
      </div>
    </footer>
  );
}
