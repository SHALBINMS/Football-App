import { useState } from "react";
import TeamCard from "../components/TeamCard";
import teams from "../data/teams";
function Favorites() {
  const [favoriteIds] = useState(
    () => JSON.parse(localStorage.getItem("favorites")) || [],
  );
  const favoriteTeams = teams.filter((team) => favoriteIds.includes(team.id));

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Saved teams</p>
          <h1 className="page-title">Favorite Teams</h1>
          <p className="page-subtitle">
            Keep your preferred nations close for quick access.
          </p>
        </div>
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300">
          {favoriteTeams.length} saved
        </p>
      </div>

      {favoriteTeams.length > 0 ? (
        <div className="content-grid">
          {favoriteTeams.map((team) => (
            <TeamCard key={team.id} team={team} />
          ))}
        </div>
      ) : (
        <div className="empty-state">
          No favorite teams yet. Open a team page and add one to your list.
        </div>
      )}
    </div>
  );
}

export default Favorites;
