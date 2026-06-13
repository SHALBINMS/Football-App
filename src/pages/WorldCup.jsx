import worldCupImage from "../assets/wc26-hero.png";

function WorldCup() {
  const highlights = [
    { label: "Opening Match", value: "June 11" },
    { label: "Final", value: "July 19" },
    { label: "Format", value: "48 Teams" },
  ];

  return (
    <div className="page-shell">
      <div className="world-cup-feature">
        <img
          src={worldCupImage}
          alt="World Cup stadium and host city skyline"
          className="world-cup-feature-img"
        />
        <div className="world-cup-feature-overlay" />
        <div className="world-cup-feature-content">
          <p className="eyebrow">Tournament guide</p>
          <h1 className="mt-3 text-5xl font-black leading-none tracking-[-0.05em] text-white md:text-7xl">
            World Cup 2026
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-200">
            A quick view of the first 48-team World Cup, co-hosted by the USA,
            Mexico, and Canada.
          </p>
        </div>
      </div>

      <div className="glass-panel rounded-3xl p-8">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.label} className="rounded-2xl bg-white/[0.05] p-6">
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {item.label}
              </p>
              <p className="mt-3 text-3xl font-black text-white">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-2xl border border-white/10">
            <img
              src={worldCupImage}
              alt="World Cup 2026 stadium view"
              className="h-full min-h-64 w-full object-cover"
            />
          </div>

          <div className="rounded-2xl border border-teal-300/20 bg-teal-300/10 p-6">
            <h2 className="text-2xl font-black text-white">Host Nations</h2>
            <p className="mt-3 max-w-3xl leading-8 text-slate-300">
              The USA, Mexico, and Canada are hosting the tournament together,
              bringing major stadiums, new rivalries, and a larger group-stage
              field across all three countries.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {["USA", "Mexico", "Canada"].map((host) => (
                <div
                  key={host}
                  className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                >
                  <p className="text-xs font-black uppercase tracking-widest text-slate-400">
                    Host
                  </p>
                  <p className="mt-1 text-xl font-black text-white">{host}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WorldCup;
