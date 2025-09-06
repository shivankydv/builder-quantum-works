import { useMemo } from "react";

function Stat({
  label,
  value,
  sub,
}: {
  label: string;
  value: string;
  sub?: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-4 shadow-sm">
      <div className="text-xs uppercase tracking-wide text-muted-foreground">
        {label}
      </div>
      <div className="mt-1 text-2xl font-semibold">{value}</div>
      {sub ? (
        <div className="mt-1 text-xs text-muted-foreground">{sub}</div>
      ) : null}
    </div>
  );
}

function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      <div className="mt-4 prose prose-slate max-w-none dark:prose-invert">
        {children}
      </div>
    </section>
  );
}

export default function Index() {
  const now = useMemo(() => new Date().toLocaleString(), []);

  return (
    <div className="relative">
      {/* Decorative ocean gradient */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[520px] bg-[radial-gradient(40%_60%_at_20%_0%,hsl(var(--accent)/0.35),transparent_60%),radial-gradient(40%_60%_at_80%_0%,hsl(var(--primary)/0.35),transparent_60%)]"
      />

      {/* Hero */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground ring-1 ring-inset ring-border">
              <span className="relative inline-flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Real-time ready
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Unified AI Data Platform for Oceans, Fisheries, and Biodiversity
            </h1>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
              AquaSynth AI integrates oceanography, fisheries management, and
              molecular biodiversity data into a single, secure, and accessible
              platform powered by advanced analytics and real-time processing.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#overview"
                className="inline-flex h-10 items-center rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground shadow hover:opacity-90"
              >
                Explore the Report
              </a>
              <a
                href="#architecture"
                className="inline-flex h-10 items-center rounded-md border px-5 text-sm font-medium hover:bg-secondary/60"
              >
                See Architecture
              </a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
              <Stat
                label="Ingestion latency"
                value="< 5s"
                sub="streaming updates"
              />
              <Stat
                label="Model catalog"
                value="30+"
                sub="domain-tuned AI models"
              />
              <Stat label="Data sources" value="100+" sub="standard & custom" />
              <Stat
                label="Audit coverage"
                value="100%"
                sub="PII & ethics checks"
              />
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-primary/15 to-accent/15 blur-2xl" />
            <div className="rounded-2xl border bg-card p-4 shadow-xl">
              <div className="rounded-lg border bg-background p-4">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>Live system status</span>
                  <span>{now}</span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <Stat label="Buoys online" value="248" />
                  <Stat label="Vessel feeds" value="1,204" />
                  <Stat label="eDNA runs" value="62" />
                  <Stat label="Alerts/24h" value="19" />
                </div>
              </div>
              <div className="mt-4 rounded-lg border bg-background p-4">
                <div className="text-sm font-medium">
                  Predictive stock outlook
                </div>
                <div className="mt-2 h-28 w-full rounded-md bg-gradient-to-r from-primary/30 via-accent/30 to-transparent" />
                <p className="mt-2 text-xs text-muted-foreground">
                  Next 90 days forecast for regional stocks using hybrid
                  physics-informed transformers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-12 lg:grid-cols-[260px_1fr]">
          {/* TOC */}
          <aside className="hidden lg:block sticky top-24 h-max">
            <nav className="rounded-xl border bg-card p-4 text-sm">
              <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Contents
              </div>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#overview"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Introduction & Overview
                  </a>
                </li>
                <li>
                  <a
                    href="#architecture"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Platform Architecture
                  </a>
                </li>
                <li>
                  <a
                    href="#components"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Key Components
                  </a>
                </li>
                <li>
                  <a
                    href="#ethics"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Privacy & Ethics
                  </a>
                </li>
                <li>
                  <a
                    href="#outcomes"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Expected Outcomes
                  </a>
                </li>
                <li>
                  <a
                    href="#conclusion"
                    className="hover:text-foreground text-muted-foreground"
                  >
                    Conclusion
                  </a>
                </li>
              </ul>
            </nav>
          </aside>

          <div className="space-y-16">
            <Section id="overview" title="Introduction & Platform Overview">
              <p>
                The AquaSynth AI platform unifies heterogeneous datasets from
                oceanography, fisheries management, and molecular biodiversity
                into a cohesive ecosystem for discovery, decision support, and
                collaboration. It delivers real-time ingestion, scalable
                storage, and AI-driven analytics while maintaining strict
                controls for privacy, provenance, and reproducibility.
                Accessibility is central: the interface offers adaptive,
                multilingual experiences and keyboard-first navigation.
              </p>
              <p>
                Core objectives include: integrating streaming and batch data,
                applying state-of-the-art machine learning for forecasting and
                anomaly detection, and providing intuitive visual analytics for
                scientists, managers, and policy stakeholders.
              </p>
            </Section>

            <Section id="architecture" title="Platform Architecture">
              <ul>
                <li>
                  <strong>Ingestion Layer</strong>: Connectors for ocean buoys,
                  ARGO floats, HF radar, satellite SST/Chl-a, AIS vessel
                  telemetry, catch logs, electronic monitoring, and molecular
                  pipelines (metabarcoding, eDNA, WGS). Supports standards (OGC,
                  netCDF, ICES) and custom adapters.
                </li>
                <li>
                  <strong>Stream & Batch Processing</strong>: Real-time streams
                  with windowed feature extraction, event-time joins, and CEP
                  for alerts; batch ETL for historical harmonization and quality
                  control.
                </li>
                <li>
                  <strong>Unified Lakehouse</strong>: Open formats with
                  governance (time-travel, row-level security) for scalable
                  analytics across structured, semi-structured, and array-based
                  data.
                </li>
                <li>
                  <strong>AI/ML Fabric</strong>: Managed notebooks and pipelines
                  hosting domain-tuned models: physics-informed transformers,
                  spatio-temporal GNNs, sequence models for genomics, and
                  probabilistic Bayesian components for uncertainty.
                </li>
                <li>
                  <strong>Serving & APIs</strong>: Low-latency feature store,
                  model registry, and versioned APIs for forecasts, risk scores,
                  and similarity search across biodiversity embeddings.
                </li>
                <li>
                  <strong>Observability & Governance</strong>: Lineage tracking,
                  drift monitoring, fairness audits, PII scanning, and encrypted
                  vaults for sensitive data.
                </li>
              </ul>
              <div className="mt-6 rounded-xl border bg-card p-4">
                <div className="text-sm font-medium">Architecture sketch</div>
                <div className="mt-3 grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-semibold">Ingestion</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Sensors • Satellites • AIS • Genomics • Logs
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-semibold">Processing</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Streaming • ETL • QC • Harmonization
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-semibold">Lakehouse</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Open formats • RLS • Time-travel
                    </div>
                  </div>
                  <div className="rounded-lg border p-3 md:col-span-2">
                    <div className="text-sm font-semibold">AI/ML Fabric</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      PIT • ST-GNN • Seq2seq genomics • Bayesian
                    </div>
                  </div>
                  <div className="rounded-lg border p-3">
                    <div className="text-sm font-semibold">Serving</div>
                    <div className="mt-2 text-xs text-muted-foreground">
                      Feature store • APIs • Registry
                    </div>
                  </div>
                </div>
              </div>
            </Section>

            <Section id="components" title="Key Components & Functionalities">
              <h3 className="mt-2 text-xl font-semibold">Data Sources</h3>
              <ul>
                <li>
                  Oceanographic sensors: ARGO floats, gliders, buoys (SST,
                  salinity, pH, dissolved oxygen), HF radar, and satellite
                  products (SST, chlorophyll-a, altimetry).
                </li>
                <li>
                  Fisheries: AIS/VTMS, logbooks, observer programs,
                  e-monitoring, VMS pings, quota and catch-per-unit-effort data,
                  habitat models.
                </li>
                <li>
                  Molecular biodiversity: eDNA metabarcoding, amplicon/WGS
                  pipelines, reference databases (BOLD, GenBank), and curated
                  taxonomic ontologies.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Analytical Tools</h3>
              <ul>
                <li>
                  Predictive analytics for stock assessments using hybrid
                  physics-informed transformers and spatio-temporal GNNs with
                  uncertainty quantification.
                </li>
                <li>
                  Real-time anomaly detection for harmful algal blooms, hypoxia,
                  and bycatch risk via event-driven streaming ML.
                </li>
                <li>
                  Genomic similarity search and cross-species comparison using
                  contrastive embeddings and transformer-based sequence models.
                </li>
                <li>
                  Counterfactual scenario planning and policy sandboxing with
                  Bayesian decision networks.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">
                User Interface Features
              </h3>
              <ul>
                <li>
                  Real-time dashboards with multi-layer ocean maps, vessel
                  traffic, and habitat overlays; keyboard and screen-reader
                  friendly.
                </li>
                <li>
                  Interactive forecast explorer with confidence intervals,
                  feature attributions, and what-if controls.
                </li>
                <li>
                  Molecular biodiversity explorer enabling cross-species
                  comparisons and lineage-aware visualizations.
                </li>
                <li>
                  Collaboration hub: shared notebooks, dataset rooms,
                  annotations, and export to common formats with citation and
                  lineage.
                </li>
              </ul>

              <h3 className="mt-6 text-xl font-semibold">Target Users</h3>
              <ul>
                <li>Marine scientists and biodiversity researchers</li>
                <li>Fisheries managers and regulatory bodies</li>
                <li>Policy makers and NGOs</li>
                <li>Industry partners (aquaculture, maritime, energy)</li>
              </ul>

              <h3 id="outcomes" className="mt-6 text-xl font-semibold">
                Expected Outcomes
              </h3>
              <ul>
                <li>
                  Improved stock assessment accuracy and timeliness with
                  transparent uncertainty.
                </li>
                <li>
                  Rapid detection of environmental risks and compliance issues
                  via alerts.
                </li>
                <li>
                  Enhanced biodiversity baselines and early detection of
                  invasive or rare species.
                </li>
                <li>
                  Stronger collaboration and reproducibility through governed
                  data products.
                </li>
              </ul>
            </Section>

            <Section id="ethics" title="Data Privacy, Security, and Ethics">
              <p>
                The platform enforces least-privilege access, encryption in
                transit and at rest, and regional residency controls. Sensitive
                data (e.g., precise vessel locations, human subjects) is
                protected with differential privacy, k-anonymity, and redaction
                policies. All models undergo fairness and bias assessments;
                decisions are logged with explanations and lineage for
                auditability. Compliance aligns with GDPR, CCPA, and relevant
                fisheries regulations.
              </p>
            </Section>

            <Section id="conclusion" title="Conclusion">
              <p>
                AquaSynth AI offers an accessible, ethics-first, real-time
                platform that fuses oceanographic, fisheries, and molecular
                biodiversity data. By coupling robust architecture with
                innovative AI techniques—from physics-informed forecasting to
                genomic embeddings—it equips researchers and decision-makers to
                act swiftly and responsibly for ocean sustainability.
              </p>
            </Section>

            <section id="contact" className="scroll-mt-24">
              <div className="rounded-xl border bg-card p-6">
                <h2 className="text-2xl font-bold">Get in touch</h2>
                <p className="mt-2 text-muted-foreground">
                  Interested in pilots or collaborating? Email
                  hello@aquasynth.ai
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
