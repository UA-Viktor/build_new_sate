import { useState } from "react";
import { Outlet, NavLink } from "react-router-dom";
import Button from "./components/Button";

const LINKS = [
  { to: "/", label: "Головна" },
  { to: "/services", label: "Послуги" },
  { to: "/cases", label: "Кейси" },
  { to: "/portfolio", label: "Портфоліо" },
  { to: "/testimonials", label: "Відгуки" },
  { to: "/about", label: "Про мене" },
];

export default function App() {
  const [open, setOpen] = useState(false);

  const linkBase = "px-3 py-2 rounded-lg transition";
  const linkActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${linkBase} bg-slate-100` : `${linkBase} hover:bg-slate-50`;

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* декоративний градієнт зверху */}
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[radial-gradient(60%_60%_at_50%_0%,rgba(138,92,246,0.25),rgba(34,211,238,0.15)_40%,transparent_70%)]" />

      {/* NAVBAR */}
      <nav className="sticky top-0 z-40 glass">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-3 flex items-center gap-4">
          <a href="/" className="heading-font text-xl">
            <span className="text-gradient font-bold">anastizs</span> marketing
          </a>

          {/* desktop links */}
          <div className="ml-auto hidden md:flex items-center gap-1">
            {LINKS.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === "/"} className={linkActive}>
                {l.label}
              </NavLink>
            ))}
            <Button href="/contact">Контакти</Button>
          </div>

          {/* burger (mobile) */}
          <button
            type="button"
            className="ml-auto md:hidden rounded-lg p-2 hover:bg-slate-100"
            aria-label="Відкрити меню"
            onClick={() => setOpen(true)}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div className="absolute right-0 top-0 h-full w-[80%] max-w-[360px] bg-white shadow-soft p-6">
            <div className="flex items-center justify-between">
              <div className="heading-font text-lg">Меню</div>
              <button
                type="button"
                aria-label="Закрити меню"
                className="rounded-lg p-2 hover:bg-slate-100"
                onClick={() => setOpen(false)}
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 6l12 12M18 6l-12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </button>
            </div>

            <div className="mt-4 grid gap-1">
              {LINKS.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === "/"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    isActive ? "px-3 py-2 rounded-lg bg-slate-100" : "px-3 py-2 rounded-lg hover:bg-slate-50"
                  }
                >
                  {l.label}
                </NavLink>
              ))}
              <Button href="/contact" className="mt-2">
                Контакти
              </Button>
            </div>
          </div>
        </div>
      )}

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="border-t">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center opacity-70">
          © {new Date().getFullYear()} UA-Viktor
        </div>
      </footer>
    </div>
  );
}
