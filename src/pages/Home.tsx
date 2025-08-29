export default function Home() {
  return (
    <section className="relative overflow-hidden">
      {/* фон */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-slate-50 to-white" />

      <div className="max-w-6xl mx-auto px-4 pt-20 pb-16">
        <p className="text-sm uppercase tracking-widest text-slate-500">
          performance marketing • meta ads • seo
        </p>

        <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold leading-tight">
          Запускаю рекламу, що <span className="underline decoration-2">продає</span>.<br />
          Стратегії для Facebook/Instagram + SEO.
        </h1>

        <p className="mt-4 text-lg text-slate-600 max-w-2xl">
          Допомагаю брендам отримувати клієнтів з реклами та пошуку:
          знижую CAC, підвищую ROAS, вибудовую воронки та аналітику.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a href="/contact" className="px-5 py-3 rounded bg-black text-white">
            Замовити консультацію
          </a>
          <a href="/cases" className="px-5 py-3 rounded border">
            Подивитись кейси
          </a>
        </div>

        {/* social proof */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold">30+</div>
            <div className="text-slate-500 text-sm">проєктів</div>
          </div>
          <div>
            <div className="text-2xl font-bold">до 7×</div>
            <div className="text-slate-500 text-sm">ROAS</div>
          </div>
          <div>
            <div className="text-2xl font-bold">–35%</div>
            <div className="text-slate-500 text-sm">CAC</div>
          </div>
          <div>
            <div className="text-2xl font-bold">5 років</div>
            <div className="text-slate-500 text-sm">досвіду</div>
          </div>
        </div>
      </div>
    </section>
  );
}
