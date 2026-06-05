function StatCard({ value, label }) {
  return (
    <div
      className="
        bg-cyan-900
        rounded-2xl
        p-6

        border border-zinc-800

        hover:border-cyan-500/40
        hover:scale-105

        transition-all
        duration-300

        h-full
      "
    >
      <h2
        className="
          text-4xl
          font-bold
          text-white
          mb-3
        "
      >
        {value}
      </h2>

      <p
        className="
          text-zinc-400
          uppercase
          tracking-widest
          text-sm
        "
      >
        {label}
      </p>
    </div>
  );
}

export default StatCard;
