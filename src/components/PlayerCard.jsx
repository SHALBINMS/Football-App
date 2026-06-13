import defaultPlayer from "../assets/players/default_avatar.jpg";

function PlayerCard({ player }) {
  return (
    <div className={`player-card ${player.score > 301200 ? "top-player" : ""}`}>
      <div className="card-top">
        <span className="badge">{player.rating}</span>
        <img
          src={player.image || defaultPlayer}
          alt={player.name}
          className="player-image"
        />
        <h3>{player.name}</h3>
        <p className="mt-1 text-sm font-semibold text-teal-300">
          {player.nationality}
        </p>
      </div>

      <div className="card-body">
        <p className="metric-pill">
          <span className="block text-xs uppercase tracking-widest text-slate-500">
            Role
          </span>
          <span className="font-bold text-white">{player.position || "Player"}</span>
        </p>
        <p className="metric-pill">
          <span className="block text-xs uppercase tracking-widest text-slate-500">
            Score
          </span>
          <span className="font-bold text-white">{player.score}</span>
        </p>
      </div>
    </div>
  );
}

export default PlayerCard;
