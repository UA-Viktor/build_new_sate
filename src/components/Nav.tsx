import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Головна" },
  { to: "/services", label: "Послуги" },
  { to: "/cases", label: "Кейси" },
  { to: "/portfolio", label: "Портфоліо" },
  { to: "/testimonials", label: "Відгуки" },
  { to: "/about", label: "Про мене" },
  { to: "/contact", label: "Контакти" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const linkBase = "px-3 py-2 rounded-lg transition";
  const getClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? `${linkBase} bg-slate-100` : `${linkBase} hover:bg-slate-50`;

  return (
    <nav className="sticky top-0 z-40 glass">
      <div className="container flex items-center gap-4 py-3">
        <a href="/" className="font-heading text-xl">
          <span className="text-gradient font-bold">anastizs</span> marketing
        </a>

        {/* desktop */}
        <div className="ml-auto hidden md:flex items-center gap-1">
          {links.map(l => (
            <NavLink key={l.to} to={l.to} className={getClass}>
              {l.label}
            </NavLink>
          ))}
        </div>

        {/* mobile toggle */}
        <button
          className="ml-auto md:hidden p-2 rounded-lg hover:bg-slate-100"
          onClick={() => setOpen(v => !v)}
          aria-label="toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* mobile sheet */}
      {open && (
        <div className="md:hidden border-t bg-white">
          <div className="container py-3 grid gap-1">
            {links.map(l => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-2 rounded-lg bg-slate-100"
                    : "px-3 py-2 rounded-lg hover:bg-slate-50"
                }
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
