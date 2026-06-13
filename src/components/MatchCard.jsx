import { Link } from "react-router-dom";

function MatchCard({ match }) {
  const isLive = match.status === "LIVE";

  return (
    <Link to={`/matches/${match.id}`} className="block h-full">
      <div className="match-card h-full p-6">
        <div className="flex justify-between items-center mb-6">
          <p className={`rounded-full px-3 py-1 text-xs font-black tracking-wide ${isLive ? "bg-red-500/15 text-red-300" : "bg-white/10 text-slate-300"}`}>
            {match.status}
          </p>

          <p className="text-sm font-semibold text-slate-400">{match.minute}'</p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">{match.homeTeam}</h2>
            <p className="text-4xl font-black text-white">{match.homeScore}</p>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="text-xl font-bold text-white">{match.awayTeam}</h2>
            <p className="text-4xl font-black text-white">{match.awayScore}</p>
          </div>
        </div>

        <div className="mt-6 h-1.5 overflow-hidden rounded-full bg-white/10">
          <div
            className="h-full rounded-full bg-teal-300"
            style={{ width: `${Math.min(match.minute, 90) / 0.9}%` }}
          />
        </div>
      </div>
    </Link>
  );
}

export default MatchCard;
