import { Link } from "react-router-dom";
function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.id}`}>
      <div
        className="
        bg-zinc-900
        p-6
        rounded-2xl
        border border-zinc-800

        hover:scale-105
        hover:border-cyan-500/50

        transition-all
        duration-300
      "
      >
        <h2
          className="
          text-2xl
          font-bold
          text-white
          mb-3
        "
        >
          {team.name}
        </h2>

        <div className="space-y-2 text-zinc-400">
          <p>
            Coach:
            <span className="text-white ml-2">{team.coach}</span>
          </p>

          <p>
            Group:
            <span className="text-cyan-400 ml-2">{team.group}</span>
          </p>

          <p>
            FIFA Rank:
            <span className="text-yellow-400 ml-2">#{team.fifaRank}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
