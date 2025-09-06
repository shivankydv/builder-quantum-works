export default function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-6 md:grid-cols-3">
        <div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} AquaSynth AI. Advancing oceanography, fisheries, and molecular biodiversity through AI.
          </p>
        </div>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>
            Built for accessibility and real-time insights. Data privacy and ethical AI by design.
          </p>
          <p>
            Contact: hello@aquasynth.ai
          </p>
        </div>
        <div className="flex md:justify-end gap-4 text-sm">
          <a href="#overview" className="hover:text-foreground">Overview</a>
          <a href="#architecture" className="hover:text-foreground">Architecture</a>
          <a href="#components" className="hover:text-foreground">Components</a>
        </div>
      </div>
    </footer>
  );
}
