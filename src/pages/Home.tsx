import { motion } from "framer-motion";
import Button from "../components/Button";
import Section from "../components/Section";
import Brands from "../components/Brands";

// NOTE: якщо захочеш знову “вміщати у вікно” — див. коментар всередині <div className="grid ...">

export default function Home() {
  return (
    <>
      <Section>
        {/* фонові плями всередині секції */}
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50/80 to-white" />
        <div
          className="pointer-events-none absolute top-10 right-0 -z-10 h-64 w-64 translate-x-1/4 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(138,92,246,0.35), transparent)" }}
        />
        <div
          className="pointer-events-none absolute top-48 left-0 -z-10 h-64 w-64 -translate-x-1/4 rounded-full blur-3xl"
          style={{ background: "radial-gradient(closest-side, rgba(34,211,238,0.25), transparent)" }}
        />

        {/* Сітка по центру; БЕЗ мінімальної висоти під вікно */}
        <div
          className="grid items-center gap-12 lg:grid-cols-2"
          // style={{ minHeight: `calc(100vh - 84px)` }} // <-- вимкнено
        >
          {/* лівий стовпчик */}
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="text-xs uppercase tracking-widest text-slate-500"
            >
              performance marketing • meta ads • seo
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.05 }}
              className="mt-4 text-4xl lg:text-5xl heading-font font-semibold leading-tight"
            >
              Запускаю рекламу, що{" "}
              <span className="bg-gradient-to-r from-brand-primary to-brand-secondary bg-clip-text text-transparent">
                продає
              </span>
              .<br className="hidden sm:block" /> Facebook / Instagram + SEO.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-slate-600"
            >
              Знижую CAC, підвищую ROAS і будую прозору аналітику. Креативи, гіпотези, A/B та масштабування.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button href="/contact">Замовити консультацію</Button>
              <Button href="/cases" variant="secondary">Подивитись кейси</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center"
            >
              <Metric k="30+" v="проєктів" />
              <Metric k="до 7×" v="ROAS" />
              <Metric k="–35%" v="CAC" />
              <Metric k="5 років" v="досвіду" />
            </motion.div>
          </div>

          {/* правий стовпчик */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <HeroVisual />
          </motion.div>
        </div>
      </Section>

      {/* бренди — окремим блоком нижче героя */}
      <Brands />
    </>
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

function HeroVisual() {
  const bars = [24, 65, 40, 72, 55, 80, 62, 38, 58, 66, 49, 74, 52, 68, 41, 60];

  return (
    <div className="relative rounded-2xl border bg-white shadow-soft p-5 lg:p-6">
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded bg-slate-200" />
        <div className="flex gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
        </div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-3">
        <Kpi label="ROAS" value="5.2×" />
        <Kpi label="CPA" value="₴94" />
        <Kpi label="CTR" value="2.7%" />
      </div>

      <div className="mt-5 h-40 rounded-xl bg-gradient-to-br from-brand-primary/15 to-brand-secondary/15 relative overflow-hidden">
        <div className="absolute inset-x-5 bottom-4 flex items-end gap-2">
          {bars.map((h, i) => (
            <div
              key={i}
              className="bg-slate-300/70 rounded-t"
              style={{ height: `${h}%`, width: "calc((100% - 28px)/16)" }}
            />
          ))}
        </div>
      </div>

      <div className="mt-3 h-8 rounded-lg bg-slate-100" />
    </div>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border bg-slate-50 p-3">
      <div className="text-xs uppercase tracking-widest text-slate-500">{label}</div>
      <div className="mt-1 text-lg font-semibold">{value}</div>
    </div>
  );
}
