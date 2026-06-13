import { Link } from "react-router-dom";

function TeamCard({ team }) {
  return (
    <Link to={`/teams/${team.id}`} className="block h-full">
      <div className="team-card group relative flex h-full flex-col overflow-hidden p-6">
        <img
          src={team.logo}
          alt=""
          aria-hidden="true"
          className="team-card-watermark"
        />

        <div className="mb-7 flex items-start justify-between gap-4">
          <div className="team-logo-frame">
            <div className="team-logo-inner">
              <div className="team-logo-shine" />
              <span className="team-logo-initial">{team.name.charAt(0)}</span>
            <img
              src={team.logo}
              alt={team.name}
                className="team-logo-img"
            />
            </div>
          </div>
          <span className="rounded-full bg-yellow-400/15 px-3 py-1 text-sm font-black text-yellow-200">
            #{team.fifaRank}
          </span>
        </div>

        <h2 className="text-2xl font-black tracking-tight text-white">
          {team.name}
        </h2>

        <div className="mt-6 space-y-3 text-sm text-slate-400">
          <p className="flex items-center justify-between gap-4">
            <span>Coach</span>
            <span className="text-right font-semibold text-white">
              {team.coach}
            </span>
          </p>
          <p className="flex items-center justify-between gap-4">
            <span>Group</span>
            <span className="font-black text-teal-300">{team.group}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}

export default TeamCard;
