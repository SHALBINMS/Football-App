import { Link } from "react-router-dom";
import heroImage from "../assets/wc26-hero.png";

function HeroSection() {
  const stats = [
    { num: "48", label: "Teams" },
    { num: "104", label: "Matches" },
    { num: "16", label: "Host Cities" },
    { num: "3", label: "Host Nations" },
  ];

  return (
    <section className="relative min-h-[calc(100vh-76px)] overflow-hidden">
      <img
        src={heroImage}
        alt="World Cup stadium and host city skyline"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/78 to-slate-950/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-76px)] w-[min(1180px,calc(100%_-_32px))] flex-col justify-center py-16">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-yellow-300/25 bg-yellow-400/10 px-4 py-2 text-xs font-black uppercase tracking-[0.2em] text-yellow-200">
            FIFA World Cup 2026
          </div>

          <h1 className="text-5xl font-black leading-[0.92] tracking-[-0.06em] text-white sm:text-6xl lg:text-8xl">
            The world game lands in the USA, Mexico, and Canada.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
            Follow teams, players, live match moments, group tables, and your
            favorite nations from one polished tournament hub for the three
            host nations.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link to="/match-center" className="primary-btn">
              View Matches
            </Link>
            <Link to="/teams" className="secondary-btn">
              Explore Teams
            </Link>
          </div>
        </div>

        <div className="mt-12 grid max-w-3xl grid-cols-2 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/55 backdrop-blur-xl sm:grid-cols-4">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`p-5 ${index < stats.length - 1 ? "border-r border-white/10" : ""}`}
            >
              <p className="text-3xl font-black text-white">{stat.num}</p>
              <p className="mt-1 text-[11px] font-bold uppercase tracking-widest text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
