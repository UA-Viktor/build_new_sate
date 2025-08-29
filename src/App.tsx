// src/App.tsx — обгортка з шапкою/футером
import { Outlet, NavLink } from "react-router-dom";

export default function App() {
  const link = "px-4 py-2 rounded";
  const active = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${link} underline` : link;

  return (
    <div className="min-h-screen flex flex-col">
      <nav className="sticky top-0 bg-white/80 backdrop-blur border-b">
        <div className="max-w-6xl mx-auto flex items-center gap-4 p-3">
          <div className="font-bold">anastizs marketing</div>
          <div className="ml-auto flex gap-2">
            <NavLink to="/" className={active}>
              Головна
            </NavLink>
            <NavLink to="/services" className={active}>
              Послуги
            </NavLink>
            <NavLink to="/cases" className={active}>
              Кейси
            </NavLink>
            <NavLink to="/portfolio" className={active}>
              Портфоліо
            </NavLink>
            <NavLink to="/testimonials" className={active}>
              Відгуки
            </NavLink>
            <NavLink to="/about" className={active}>
              Про мене
            </NavLink>
            <NavLink to="/contact" className={active}>
              Контакти
            </NavLink>
          </div>
        </div>
      </nav>
      <main className="flex-1">
        <Outlet />
      </main>
      <footer className="border-t py-6 text-center opacity-70">
        © {new Date().getFullYear()} UA-Viktor
      </footer>
    </div>
  );
}
