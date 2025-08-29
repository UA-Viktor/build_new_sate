import { useMemo, useState } from "react";
import data from "../data/cases.json";
import CaseCard from "../components/CaseCard";
import CaseFilters from "../components/CaseFilters";

export default function Cases() {
  const [filter, setFilter] = useState<string>("All");

  const list = useMemo(() => {
    if (filter === "All") return data;
    return data.filter(c => c.niche === filter);
  }, [filter]);

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="flex items-center justify-between gap-4">
        <h2 className="text-3xl font-semibold">Кейси</h2>
        <CaseFilters value={filter} onChange={setFilter} />
      </div>

      <p className="mt-3 text-slate-600">
        Реальні результати з Meta/Instagram Ads та SEO. Вибери нішу, щоб звузити приклади.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {list.map(c => <CaseCard key={c.id} {...c} />)}
      </div>
    </section>
  );
}
