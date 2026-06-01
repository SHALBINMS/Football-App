import PlayerCard from "./PlayerCard";

function PlayerList({ players }) {
  return (
    <div className="grid">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
}

export default PlayerList;
