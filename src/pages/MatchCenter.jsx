
import MatchCard from "../components/MatchCard";

function MatchCenter({ liveMatches }) {
  const liveCount = liveMatches.filter((match) => match.status === "LIVE").length;

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Live desk</p>
          <h1 className="page-title">Match Center</h1>
          <p className="page-subtitle">
            Track scores, status, and match momentum as the clock advances.
          </p>
        </div>
        <p className="rounded-full bg-red-500/15 px-4 py-2 text-sm font-black text-red-300">
          {liveCount} live
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {liveMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default MatchCenter;
