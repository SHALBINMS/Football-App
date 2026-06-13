import TeamCard from "../components/TeamCard";
import team from "../data/teams";
import { useState } from "react";

function Teams() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredTeams = team.filter((team) =>
  team.name.toLowerCase().includes(searchTerm.toLowerCase())
  )
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
      <input
        type="text"
        placeholder="Search teams..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="
        w-full
        rounded-lg
        bg-zinc-800
        text-white
        border
        border-zinc-700
        p-3
        mb-8
        "
        />
      <div
        className="
          grid
          gap-6
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
        "
      >
        {filteredTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Teams;
