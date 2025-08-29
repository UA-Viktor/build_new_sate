type Props = {
  title: string;
  subtitle?: string;
  priceFrom?: string;
  bullets: string[];
  ctaHref?: string;
};

export default function ServiceCard({ title, subtitle, priceFrom, bullets, ctaHref="/contact" }: Props) {
  return (
    <article className="p-6 rounded-2xl border hover:shadow-sm transition">
      <h3 className="text-xl font-semibold">{title}</h3>
      {subtitle && <p className="mt-1 text-slate-600">{subtitle}</p>}
      {priceFrom && <p className="mt-2 text-sm text-slate-500">від <b>{priceFrom}</b></p>}

      <ul className="mt-4 space-y-2 text-sm">
        {bullets.map((b, i) => <li key={i} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-400" /> {b}
        </li>)}
      </ul>

      <a href={ctaHref} className="mt-5 inline-block px-4 py-2 rounded bg-black text-white">
        Замовити
      </a>
    </article>
  );
}
