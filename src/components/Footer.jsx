export default function Footer() {
  return (
    <footer className="border-t border-border pb-[env(safe-area-inset-bottom)]">
      <div className="shell flex flex-col items-start justify-between gap-2 py-6 sm:flex-row sm:items-center sm:gap-3 sm:py-8">
        <p className="text-sm font-medium text-text">Atharva Dhumal</p>
        <p className="mono text-xs text-dim">© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
