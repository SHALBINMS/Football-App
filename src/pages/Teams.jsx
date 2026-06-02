import TeamCard from "../components/TeamCard";
import team from "../data/teams";

function Teams() {
  return (
    <div className="px-6 py-10">
      <h1
        className="
          text-4xl
          font-bold
          text-white
          mb-10
        "
      >
        World Cup Teams
      </h1>

      <div
        className="
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {team.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
