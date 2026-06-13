function StatCard({ value, label }) {
  return (
    <div className="stat-card h-full p-6">
      <h2 className="mb-3 text-4xl font-black text-white">
        {value}
      </h2>

      <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
        {label}
      </p>
    </div>
  );
}

export default StatCard;
