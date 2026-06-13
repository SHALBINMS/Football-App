import { useState } from "react";
import { useParams } from "react-router-dom";
import PlayerCard from "../components/PlayerCard";
import StatCard from "../components/StatCard";
import players from "../data/players";
import teams from "../data/teams";

function TeamDetails() {
  const [isFavorite, setIsFavorite] = useState(false);
  const { id } = useParams();
  const team = teams.find((team) => team.id === id);

  if (!team) {
    return <div className="page-shell empty-state">Team not found</div>;
  }

  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const favoriteActive = isFavorite || favorites.includes(team.id);

  const teamPlayers = players.filter(
    (player) => player.nationality === team.name,
  );

  const toggleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const updatedFavorites = favorites.includes(team.id)
      ? favorites.filter((favoriteId) => favoriteId !== team.id)
      : [...favorites, team.id];

    localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    setIsFavorite(updatedFavorites.includes(team.id));
  };

  return (
    <div className="page-shell">
      <div
        className="relative overflow-hidden rounded-[28px] border border-white/10 bg-cover bg-center p-6 shadow-2xl shadow-black/30 md:p-10"
        style={{ backgroundImage: `url(${team.banner})` }}
      >
        <div className="absolute inset-0 bg-slate-950/70" />
        <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-6 md:flex-row md:items-center">
            <div className="grid h-28 w-28 place-items-center rounded-3xl bg-white p-4 shadow-xl">
              <img
                src={team.logo}
                alt={team.name}
                className="h-full w-full object-contain"
              />
            </div>

            <div>
              <p className="eyebrow">Group {team.group}</p>
              <h1 className="page-title">{team.name}</h1>
              <p className="mt-4 text-lg text-slate-300">
                Coach <span className="font-bold text-white">{team.coach}</span>
              </p>
            </div>
          </div>

          <button onClick={toggleFavorite} className="secondary-btn">
            {favoriteActive ? "Remove Favorite" : "Add Favorite"}
          </button>
        </div>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard value={`#${team.fifaRank}`} label="FIFA Rank" />
        <StatCard value={team.stats.wins} label="Wins" />
        <StatCard value={team.stats.goals} label="Goals" />
        <StatCard value={team.stats.possession} label="Possession" />
      </div>

      <div className="mt-14">
        <div className="page-header">
          <div>
            <p className="eyebrow">Squad</p>
            <h2 className="text-3xl font-black text-white">Key Players</h2>
          </div>
          <p className="text-slate-400">{teamPlayers.length} players</p>
        </div>

        {teamPlayers.length > 0 ? (
          <div className="content-grid">
            {teamPlayers.map((player) => (
              <PlayerCard key={player.id} player={player} />
            ))}
          </div>
        ) : (
          <div className="empty-state">No players listed for this team yet.</div>
        )}
      </div>
    </div>
  );
}

export default TeamDetails;
