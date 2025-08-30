import data from "../data/services.json";
import ServiceCard from "../components/ServiceCard";
import Section from "../components/Section";
import { IconMeta, IconSEO, IconStrategy } from "../components/Icons";

const ICONS: Record<string, JSX.Element> = {
  meta: <IconMeta />,
  seo: <IconSEO />,
  strategy: <IconStrategy />,
};

export default function Services() {
  return (
    <Section eyebrow="що я роблю" title="Послуги">
      <p className="text-slate-600 max-w-2xl">
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
            icon={ICONS[s.id]}
          />
        ))}
      </div>
    </Section>
  );
}
