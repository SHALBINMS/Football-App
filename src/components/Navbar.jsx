import { NavLink } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { to: "/", label: "Home" },
    { to: "/players", label: "Players" },
    { to: "/match-center", label: "Matches" },
    { to: "/groups", label: "Groups" },
    { to: "/teams", label: "Teams" },
    { to: "/favorites", label: "Favorites" },
  ];

  const linkStyles = ({ isActive }) =>
    `rounded-full px-4 py-2 text-sm font-bold transition-all duration-200 ${
      isActive
        ? "bg-yellow-400 text-slate-950 shadow-lg shadow-yellow-400/20"
        : "text-slate-300 hover:bg-white/10 hover:text-white"
    }`;

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/72 backdrop-blur-2xl">
      <div className="mx-auto flex min-h-[76px] w-[min(1180px,calc(100%_-_32px))] items-center justify-between gap-5 py-4">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl border border-yellow-300/30 bg-yellow-400 text-sm font-black text-slate-950 shadow-lg shadow-yellow-400/20">
            WC
          </div>
          <div>
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-teal-300">
              USA, Mexico & Canada
            </p>
            <h1 className="select-none text-xl font-black tracking-tight text-white sm:text-2xl">
              FIFA WC26
            </h1>
          </div>
        </div>

        <button
          type="button"
          className="nav-menu-button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className={menuOpen ? "translate-y-[7px] rotate-45" : ""} />
          <span className={menuOpen ? "opacity-0" : ""} />
          <span className={menuOpen ? "-translate-y-[7px] -rotate-45" : ""} />
        </button>

        <div className="desktop-nav-links max-w-full items-center gap-2 overflow-x-auto rounded-full border border-white/10 bg-white/[0.04] p-1">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkStyles}>
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>

      <div className={`mobile-nav-panel ${menuOpen ? "is-open" : ""}`}>
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={linkStyles}
            onClick={() => setMenuOpen(false)}
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    </nav>
  );
}

export default NavBar;
