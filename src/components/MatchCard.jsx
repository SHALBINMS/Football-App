function MatchCard({ match }) {
  return (
    <div
      className="
        bg-zinc-900
        border border-zinc-800
        rounded-2xl
        p-6

        hover:border-cyan-500/40
        hover:scale-105

        transition-all
        duration-300
      "
    >
      {/* MATCH STATUS */}
      <div className="flex justify-between items-center mb-6">
        <p
          className="
            text-red-400
            font-semibold
            tracking-wide
          "
        >
          {match.status}
        </p>

        <p className="text-zinc-400">{match.minute}'</p>
      </div>

      {/* TEAMS */}
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h2
            className="
              text-white
              text-xl
              font-semibold
            "
          >
            {match.homeTeam}
          </h2>

          <p
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            {match.homeScore}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <h2
            className="
              text-white
              text-xl
              font-semibold
            "
          >
            {match.awayTeam}
          </h2>

          <p
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            {match.awayScore}
          </p>
        </div>
      </div>
    </div>
  );
}

export default MatchCard;
