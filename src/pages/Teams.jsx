import TeamCard from "../components/TeamCard";
import team from "../data/teams";
import { useState } from "react";

function Teams() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTeams = team.filter((team) =>
    team.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">National teams</p>
          <h1 className="page-title">World Cup Teams</h1>
          <p className="page-subtitle">
            Browse qualified nations, coaches, groups, and rankings.
          </p>
        </div>
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300">
          {filteredTeams.length} teams
        </p>
      </div>

      <input
        type="text"
        placeholder="Search teams..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="form-control mb-8 max-w-xl"
      />

      <div className="content-grid">
        {filteredTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
