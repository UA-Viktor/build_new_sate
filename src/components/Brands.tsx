import Section from "./Section";

const BRANDS = ["4ROOM", "Art Sushi", "Wellness", "Nova Line", "BeautyPro", "EcoStore"];

export default function Brands() {
  return (
    <Section className="py-10">
      <div className="container">
        <p className="text-center text-sm uppercase tracking-widest text-slate-500">мені довіряють</p>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-500 border hover:bg-slate-100 transition"
              aria-label={b}
              title={b}
            >
              <span className="text-sm font-medium">{b}</span>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
