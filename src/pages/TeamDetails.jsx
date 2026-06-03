import { useParams } from "react-router-dom";
import teams from "../data/teams";
import players from "../data/players";
import PlayerCard from "../components/PlayerCard";

function TeamDetails() {
  const { id } = useParams();

  const team = teams.find((team) => team.id === id);

  const teamPlayers = players.filter(
    (player) => player.nationality === team.name,
  );

  return (
    <div className="px-6 py-10">
      {/* HERO SECTION */}
      <div
        className="
          rounded-3xl
          p-10
          border border-zinc-800

          flex
          flex-col
          md:flex-row

          items-center
          gap-8

          bg-cover
          bg-center

          min-h-[400px]

          overflow-hidden
        "
        style={{
          backgroundImage: `url(${team.banner})`,
        }}
      >
        {/* OVERLAY */}
        <div
          className="
            bg-black/60
            p-8
            rounded-3xl

            flex
            flex-col
            md:flex-row

            items-center
            gap-8

            w-full
          "
        >
          {/* TEAM LOGO */}
          <img
            src={team.logo}
            alt={team.name}
            className="
              w-24
              h-24

              md:w-32
              md:h-32

              object-contain
            "
          />

          {/* TEAM INFO */}
          <div>
            <h1
              className="
                text-4xl
                md:text-5xl

                font-bold
                text-white

                mb-6
              "
            >
              {team.name}
            </h1>

            <div className="space-y-4">
              <p className="text-zinc-300 text-lg">
                Coach:
                <span className="text-white ml-2">{team.coach}</span>
              </p>

              <p className="text-zinc-300 text-lg">
                Group:
                <span className="text-cyan-400 ml-2 font-semibold">
                  {team.group}
                </span>
              </p>

              <p className="text-zinc-300 text-lg">
                FIFA Rank:
                <span className="text-yellow-400 ml-2 font-semibold">
                  #{team.fifaRank}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* SQUAD SECTION */}
      <div className="mt-20">
        <div className="flex items-center justify-between mb-8">
          <h2
            className="
              text-3xl
              font-bold
              text-white
            "
          >
            Squad
          </h2>

          <p className="text-zinc-400 text-lg">{teamPlayers.length} Players</p>
        </div>

        {/* PLAYERS GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {teamPlayers.map((player) => (
            <PlayerCard key={player.id} player={player} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
