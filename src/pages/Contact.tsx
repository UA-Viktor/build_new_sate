export default function Contact() {
  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-semibold">Звʼяжіться зі мною</h2>
      <p className="mt-3 text-slate-600">
        Заповніть форму або скористайтесь прямими контактами.
      </p>

      {/* форма */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          alert("Форма відправлена (поки що без бекенду)!");
        }}
        className="mt-8 grid gap-4"
      >
        <input
          type="text"
          placeholder="Ваше ім’я"
          required
          className="border rounded px-3 py-2"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="border rounded px-3 py-2"
        />
        <textarea
          placeholder="Ваше повідомлення"
          rows={4}
          className="border rounded px-3 py-2"
        ></textarea>

        <button className="px-5 py-2 rounded bg-black text-white">
          Надіслати
        </button>
      </form>

      {/* альтернативні контакти */}
      <div className="mt-12 space-y-3">
        <div>
          <span className="font-semibold">Email:</span>{" "}
          <a href="mailto:v.korenkov@icloud.com" className="underline">
            v.korenkov@icloud.com
          </a>
        </div>
        <div>
          <span className="font-semibold">Telegram:</span>{" "}
          <a href="https://t.me/yourusername" className="underline">
            @yourusername
          </a>
        </div>
        <div>
          <span className="font-semibold">Calendly:</span>{" "}
          <a href="https://calendly.com/yourlink" className="underline">
            Забронювати консультацію
          </a>
        </div>
      </div>
    </section>
  );
}
