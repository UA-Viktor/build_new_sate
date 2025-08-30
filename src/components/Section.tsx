type Props = {
  eyebrow?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
};

export default function Section({ eyebrow, title, children, className = "" }: Props) {
  return (
    <section className={`relative overflow-hidden py-12 lg:py-16 ${className}`}>
      {/* УНІФІКОВАНИЙ контейнер */}
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
        {eyebrow && (
          <p className="text-xs uppercase tracking-widest text-slate-500">{eyebrow}</p>
        )}
        {title && <h2 className="mt-2 text-3xl lg:text-4xl font-semibold">{title}</h2>}
        <div className={title ? "mt-6" : ""}>{children}</div>
      </div>
    </section>
  );
}
