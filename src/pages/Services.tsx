import data from "../data/services.json";
import ServiceCard from "../components/ServiceCard";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Послуги</h2>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Обери пакет або напиши — зберемо індивідуальний план під твої цілі (ROAS, CAC, органічний трафік).
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.map(s => (
          <ServiceCard
            key={s.id}
            title={s.title}
            subtitle={s.subtitle}
            priceFrom={s.priceFrom}
            bullets={s.bullets}
          />
        ))}
      </div>
    </section>
  );
}
