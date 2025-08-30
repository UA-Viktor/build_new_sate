type Props = {
  title: string;
  subtitle?: string;
  priceFrom?: string;
  bullets: string[];
  icon?: React.ReactNode;
  ctaHref?: string;
};

export default function ServiceCard({ title, subtitle, priceFrom, bullets, icon, ctaHref="/contact" }: Props) {
  return (
    <div className="rounded-2xl p-[1px] bg-gradient-to-r from-brand-primary/40 to-brand-secondary/40">
      <article className="h-full rounded-2xl bg-white p-6 shadow-soft hover:shadow-lg transition">
        <div className="flex items-center gap-2">
          {icon && <span className="inline-flex items-center justify-center rounded-lg bg-slate-100 p-2">{icon}</span>}
          <h3 className="text-xl font-semibold">{title}</h3>
        </div>

        {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        {priceFrom && <p className="mt-3 text-sm text-slate-500">від <b>{priceFrom}</b></p>}

        <ul className="mt-4 space-y-2 text-sm">
          {bullets.map((b, i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" /> {b}
            </li>
          ))}
        </ul>

        <a href={ctaHref} className="mt-5 inline-block px-4 py-2 rounded-xl bg-black text-white">
          Замовити
        </a>
      </article>
    </div>
  );
}
