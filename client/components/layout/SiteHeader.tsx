import { Link } from "react-router-dom";

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <span className="relative grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-primary to-accent text-white shadow-sm">
            <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
              <path
                d="M3 12c3-6 15-6 18 0-3 6-15 6-18 0Z"
                fill="currentColor"
              />
            </svg>
          </span>
          <span className="text-lg font-extrabold tracking-tight text-foreground">
            AquaSynth AI
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            href="#overview"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Overview
          </a>
          <a
            href="#architecture"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Architecture
          </a>
          <a
            href="#components"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Components
          </a>
          <a
            href="#ethics"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Ethics
          </a>
          <a
            href="#outcomes"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            Outcomes
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:inline-flex h-9 items-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow hover:opacity-90 transition-opacity"
          >
            Contact
          </a>
          <button
            className="inline-flex h-9 items-center rounded-md border px-3 text-sm font-medium hover:bg-secondary/60"
            onClick={() => {
              const el = document.querySelector("html");
              el?.classList.toggle("dark");
            }}
            aria-label="Toggle theme"
          >
            Theme
          </button>
        </div>
      </div>
    </header>
  );
}
