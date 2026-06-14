import { useState } from "react";
import PlayerList from "../components/PlayerList";
import shuffledPlayers from "../data/Players";

function Players() {
  const [players] = useState(shuffledPlayers);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [eliteOnly, setEliteOnly] = useState(false);

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesElite = eliteOnly ? player.rating > 90 : true;

    return matchesSearch && matchesElite;
  });

  const sortedPlayers = [...filteredPlayers];

  if (sortOption === "high-score") {
    sortedPlayers.sort((a, b) => b.score - a.score);
  }

  if (sortOption === "low-score") {
    sortedPlayers.sort((a, b) => a.score - b.score);
  }

  if (sortOption === "a-z") {
    sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="page-shell">
      <div className="page-header">
        <div>
          <p className="eyebrow">Player database</p>
          <h1 className="page-title">Players Dashboard</h1>
          <p className="page-subtitle">
            Search the squad pool, sort by performance score, and surface elite
            talent quickly.
          </p>
        </div>
        <p className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-slate-300">
          {sortedPlayers.length} shown
        </p>
      </div>

      <div className="glass-panel rounded-3xl p-5">
        <div className="grid gap-4 md:grid-cols-[1fr_auto_auto]">
          <input
            type="text"
            placeholder="Search football players..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            className="form-control"
          />

          <button
            className="secondary-btn"
            onClick={() => setEliteOnly((value) => !value)}
          >
            {eliteOnly ? "Show All Players" : "Show Elite Players"}
          </button>

          <select
            value={sortOption}
            onChange={(event) => setSortOption(event.target.value)}
            className="form-control md:w-48"
          >
            <option value="">Sort Players</option>
            <option value="high-score">Highest Score</option>
            <option value="low-score">Lowest Score</option>
            <option value="a-z">A-Z</option>
          </select>
        </div>
      </div>

      {sortedPlayers.length > 0 ? (
        <PlayerList players={sortedPlayers} />
      ) : (
        <h2 className="empty-state mt-8">No players found</h2>
      )}
    </div>
  );
}

export default Players;
