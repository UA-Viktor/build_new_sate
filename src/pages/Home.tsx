import Button from "../components/Button";
import Section from "../components/Section";

export default function Home() {
  return (
    <Section>
      {/* фонові плями */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/80 to-white" />
      <div className="pointer-events-none absolute -right-24 top-10 -z-10 h-64 w-64 rounded-full blur-3xl"
           style={{ background: "radial-gradient(closest-side, rgba(138,92,246,0.35), transparent)" }} />
      <div className="pointer-events-none absolute -left-24 top-48 -z-10 h-64 w-64 rounded-full blur-3xl"
           style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.25), transparent)" }} />

      <div className="container grid items-center gap-10 py-16 lg:grid-cols-2">
        <div>
          <p className="text-xs uppercase tracking-widest text-slate-500">
            performance marketing • meta ads • seo
          </p>
          <h1 className="mt-4 text-4xl lg:text-5xl font-heading font-semibold leading-tight">
            Запускаю рекламу, що <span className="text-gradient">продає</span>. <br className="hidden sm:block" />
            Facebook / Instagram + SEO.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-xl">
            Знижую CAC, підвищую ROAS і будую прозору аналітику. Креативи, гіпотези, A/B та масштабування.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Button href="/contact">Замовити консультацію</Button>
            <Button href="/cases" variant="secondary">Подивитись кейси</Button>
          </div>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            <Metric k="30+" v="проєктів" />
            <Metric k="до 7×" v="ROAS" />
            <Metric k="–35%" v="CAC" />
            <Metric k="5 років" v="досвіду" />
          </div>
        </div>

        <Mockup />
      </div>
    </Section>
  );
}

function Metric({ k, v }: { k: string; v: string }) {
  return (
    <div className="rounded-xl border p-4 shadow-soft">
      <div className="text-2xl font-semibold">{k}</div>
      <div className="text-slate-500 text-sm">{v}</div>
    </div>
  );
}

/* простий макет замість картинки (потім підмінемо реальною) */
function Mockup() {
  return (
    <div className="relative rounded-2xl border bg-white shadow-soft p-5">
      <div className="h-40 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15" />
      <div className="mt-4 grid grid-cols-3 gap-3">
        <div className="h-24 rounded-lg bg-slate-100" />
        <div className="h-24 rounded-lg bg-slate-100" />
        <div className="h-24 rounded-lg bg-slate-100" />
      </div>
      <div className="mt-4 h-10 rounded-lg bg-slate-100" />
    </div>
  );
}
