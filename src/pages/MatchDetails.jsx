import { useParams } from "react-router-dom";

function MatchDetails({ liveMatches }) {
  const { id } = useParams();
  const match = liveMatches.find((match) => match.id.toString() === id);

  if (!match) {
    return <div className="page-shell empty-state">Match not found</div>;
  }

  const visibleEvents = match.events.filter(
    (event) => event.minute <= match.minute,
  );

  return (
    <div className="page-shell">
      <div className="glass-panel rounded-[28px] p-8 md:p-10">
        <div className="mb-8 flex items-center justify-between gap-4">
          <p className="rounded-full bg-red-500/15 px-3 py-1 text-xs font-black tracking-wide text-red-300">
            {match.status}
          </p>
          <p className="text-sm font-bold text-slate-400">{match.minute}'</p>
        </div>

        <div className="grid items-center gap-8 text-center md:grid-cols-[1fr_auto_1fr]">
          <h2 className="text-3xl font-black text-white md:text-4xl">
            {match.homeTeam}
          </h2>
          <div>
            <h1 className="text-6xl font-black tracking-tight text-teal-300 md:text-7xl">
              {match.homeScore} - {match.awayScore}
            </h1>
            <p className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-500">
              Current score
            </p>
          </div>
          <h2 className="text-3xl font-black text-white md:text-4xl">
            {match.awayTeam}
          </h2>
        </div>
      </div>

      <div className="mt-14">
        <div className="page-header">
          <div>
            <p className="eyebrow">Match data</p>
            <h2 className="text-3xl font-black text-white">Statistics</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            ["Possession", match.stats.possession],
            ["Shots", match.stats.shots],
            ["Corners", match.stats.corners],
            ["Pass Accuracy", match.stats.passAccuracy],
          ].map(([label, value]) => (
            <div key={label} className="stat-card p-6">
              <h3 className="mb-3 text-4xl font-black text-white">{value}</h3>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-14">
        <div className="page-header">
          <div>
            <p className="eyebrow">Timeline</p>
            <h2 className="text-3xl font-black text-white">Match Events</h2>
          </div>
        </div>

        <div className="space-y-4">
          {visibleEvents.map((event, index) => (
            <div
              key={`${event.minute}-${event.player}-${index}`}
              className="glass-panel flex items-center justify-between gap-4 rounded-2xl p-5"
            >
              <div>
                <p className="font-bold text-white">{event.player}</p>
                <p className="text-sm text-slate-400">{event.team}</p>
              </div>

              <div className="text-right">
                <p className="font-black text-teal-300">{event.minute}'</p>
                <p
                  className={
                    event.type === "GOAL" ? "text-green-300" : "text-yellow-300"
                  }
                >
                  {event.type === "GOAL" ? "Goal" : "Yellow Card"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;
