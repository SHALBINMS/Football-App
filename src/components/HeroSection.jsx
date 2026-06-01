import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section
      className="relative overflow-hidden flex flex-col bg-[#0a1628]"
      style={{ minHeight: "calc(100vh - 95px)" }}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0d1f4a] via-[#0a0f2e] to-[#1a0a2e]" />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      {/* Host nation colour wash */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/[0.08] via-red-600/[0.06] to-green-600/[0.07]" />

      {/* Glow — top-left */}
      <div
        className="absolute -left-32 -top-32 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(59,130,246,0.18) 0%, transparent 65%)",
        }}
      />

      {/* Glow — bottom-right */}
      <div
        className="absolute -right-32 -bottom-32 w-[600px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(250,204,21,0.13) 0%, transparent 65%)",
        }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center flex-1 px-6 gap-6">
        {/* Eyebrow pill */}
        <div className="flex items-center gap-2 bg-yellow-400/10 border border-yellow-400/25 rounded-full px-5 py-2">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 inline-block" />
          <span className="text-xs font-semibold tracking-[0.18em] text-yellow-300 uppercase">
            Official FIFA Tournament
          </span>
        </div>

        {/* Trophy */}
        <div className="w-24 h-24 rounded-full bg-yellow-400/[0.08] border border-yellow-400/20 flex items-center justify-center text-5xl">
          🏆
        </div>

        {/* Main title */}
        <h1
          className="font-black tracking-tight text-slate-100 leading-none"
          style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)" }}
        >
          FIFA WORLD CUP <span className="text-yellow-400">2026</span>
        </h1>

        {/* Host badges */}
        <div className="flex items-center gap-3">
          {[
            { flag: "🇺🇸", name: "USA" },
            { flag: "🇨🇦", name: "Canada" },
            { flag: "🇲🇽", name: "Mexico" },
          ].map((host, i) => (
            <div key={host.name} className="flex items-center gap-3">
              <div className="bg-white/[0.07] border border-white/[0.12] rounded-xl px-5 py-2 text-sm font-semibold text-slate-200 tracking-wide whitespace-nowrap">
                {host.flag} {host.name}
              </div>
              {i < 2 && <div className="w-1 h-1 rounded-full bg-white/25" />}
            </div>
          ))}
        </div>

        {/* Date badge */}
        <div className="bg-yellow-400/[0.08] border border-yellow-400/25 rounded-lg px-10 py-3 text-sm font-bold text-yellow-200 tracking-[0.2em] uppercase">
          June 11 — July 19, 2026
        </div>

        {/* Subtitle — single line, no wrapping */}
        <p className="text-xl font-light text-slate-400 whitespace-nowrap">
          The world's biggest football tournament.&nbsp;&nbsp;Three
          nations.&nbsp;&nbsp;One dream.
        </p>

        {/* Stats row */}
        <div className="flex border border-white/[0.1] rounded-2xl overflow-hidden bg-white/[0.03] w-full max-w-2xl">
          {[
            { num: "48", label: "Teams" },
            { num: "104", label: "Matches" },
            { num: "16", label: "Host Cities" },
            { num: "39", label: "Days" },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className={`flex-1 py-6 text-center ${i < 3 ? "border-r border-white/[0.08]" : ""}`}
            >
              <div className="text-4xl font-bold text-slate-100 leading-none">
                {stat.num}
              </div>
              <div className="text-[11px] font-semibold text-slate-500 uppercase tracking-widest mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4 pt-2">
          <Link
            to="/world-cup"
            className="bg-yellow-400 text-slate-900 font-extrabold text-base tracking-wide rounded-lg px-8 py-2 hover:bg-yellow-300 transition-all duration-200 hover:scale-105 hover:-translate-y-0.5 shadow-xl shadow-yellow-500/25 whitespace-nowrap"
          >
            Explore Tournament
          </Link>

          <Link
            to="/match-center"
            className="bg-white/[0.07] text-slate-200 font-semibold text-base border border-white/[0.18] rounded-lg px-8 py-2 hover:bg-white/[0.13] hover:scale-105 hover:-translate-y-0.5 transition-all duration-200 whitespace-nowrap"
          >
            View Schedule
          </Link>
        </div>
      </div>

      {/* ── BOTTOM STATUS BAR ── */}
      <div className="relative z-10 flex justify-between items-center px-10 py-4 border-t border-white/[0.07] bg-black/20">
        <span className="text-xs text-slate-500 uppercase tracking-widest flex items-center gap-2">
          <span className="inline-block w-2 h-2 rounded-full bg-green-400" />
          Tournament begins June 11, 2026
        </span>
        <span className="text-xs text-slate-500 uppercase tracking-widest">
          📍 North America
        </span>
      </div>
    </section>
  );
}

export default HeroSection;
