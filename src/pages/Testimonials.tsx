import testimonials from "../data/testimonials.json";
import TestimonialCard from "../components/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Відгуки клієнтів</h2>
      <p className="mt-3 text-slate-600 max-w-2xl">
        Справжні відгуки від власників бізнесів, які працювали зі мною.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}
