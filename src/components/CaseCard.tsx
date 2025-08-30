type Case = {
  id: string;
  title: string;
  niche: string;
  goals: string;
  spend: string;
  roas: number;
  cpa: string;
  results: string;
};

export default function CaseCard(c: Case) {
  return (
    <article className="rounded-2xl border bg-white p-5 shadow-soft hover:shadow-lg hover:-translate-y-0.5 transition">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-lg font-semibold">{c.title}</h3>
        <span className="px-2 py-1 text-xs rounded bg-brand-primary/10 text-brand-primary">{c.niche}</span>
      </div>

      <p className="mt-2 text-sm text-slate-600">{c.goals}</p>

      <div className="mt-4 grid grid-cols-3 gap-3 text-sm">
        <div className="p-3 rounded border bg-slate-50">
          <div className="opacity-60">Бюджет</div>
          <div className="font-semibold">{c.spend}</div>
        </div>
        <div className="p-3 rounded border bg-slate-50">
          <div className="opacity-60">ROAS</div>
          <div className="font-semibold">{c.roas}×</div>
        </div>
        <div className="p-3 rounded border bg-slate-50">
          <div className="opacity-60">CPA</div>
          <div className="font-semibold">{c.cpa}</div>
        </div>
      </div>

      <p className="mt-4 text-sm">{c.results}</p>
    </article>
  );
}
