import defaultPlayer from "./assets/players/default_avatar.jpg";
function PlayerCard({ player }) {
  return (
    <div
      className={`card ${player.score > 301200 ? "top-player" : ""}`}
    >
      <div className="card-top">
        <span className="badge">⚽</span>
        <img
          src={player.image || defaultPlayer}
          alt={player.name}
          className="player-image"
       />
        <h3>{player.name}</h3>
      </div>

      <div className="card-body">
        <p>ID: {player.id}</p>
        <p>Score: {player.score}</p>
      </div>
    </div>
  );
}

export default PlayerCard;