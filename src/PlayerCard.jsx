function PlayerCard({ player }) {
  return (
    <div
      className={`card ${player.score > 301200 ? "top-player" : ""}`}
    >
      <div className="card-top">
        <span className="badge">⚽</span>
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