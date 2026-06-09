import { useParams } from "react-router-dom";
import matches from "../data/matches";
import teams from "../data/teams";

function MatchDetails({ liveMatches }) {
  const { id } = useParams();
  const match = liveMatches.find((match) => match.id.toString() === id);
  if (!match) {
    return <div className="p-10 text-white">Match not found</div>;
  }

  const homeTeam = teams.find((team) => team.name === match.homeTeam);
  const awayTeam = teams.find((team) => team.name === match.awayTeam);

  return (
    <div className="px-6 py-10">
      <div
        className="
        bg-zinc-900
        rounded-3xl
        border border-zinc-800

        p-10

        text-white
      "
      >
        <p className="text-red-400 font-semibold mb-4">{match.status}</p>

        <div
          className="
    flex
    flex-col
    md:flex-row

    items-center
    justify-between

    gap-8
  "
        >
          <h2 className="text-4xl font-bold">{match.homeTeam}</h2>

          <div className="text-center">
            <h1
              className="
    text-5xl
    md:text-7xl

    font-bold

    text-cyan-400
  "
            >
              {match.homeScore} - {match.awayScore}
            </h1>

            <p className="text-zinc-400 mt-2">{match.minute}'</p>
          </div>

          <h2 className="text-4xl font-bold">{match.awayTeam}</h2>
        </div>
      </div>

      <div className="mt-16">
        <h2
          className="
      text-3xl
      font-bold
      text-white
      mb-8
    "
        >
          Match Statistics
        </h2>

        <div
          className="
      grid
      grid-cols-1
      md:grid-cols-2
      gap-6
    "
        >
          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">
              {match.stats.possession}
            </h3>

            <p className="text-zinc-400 uppercase tracking-wider">Possession</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">
              {match.stats.shots}
            </h3>

            <p className="text-zinc-400 uppercase tracking-wider">Shots</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">
              {match.stats.corners}
            </h3>

            <p className="text-zinc-400 uppercase tracking-wider">Corners</p>
          </div>

          <div className="bg-zinc-900 rounded-2xl p-8 border border-zinc-800">
            <h3 className="text-5xl font-bold text-cyan-400 mb-3">
              {match.stats.passAccuracy}
            </h3>

            <p className="text-zinc-400 uppercase tracking-wider">
              PassAccuracy
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h2
          className="
      text-3xl
      font-bold
      text-white
      mb-8
    "
        >
          Match Events
        </h2>

        <div className="space-y-4">
          {match.events
            .filter((event) => event.minute <= match.minute)
            .map((event, index) => (
              <div
                key={index}
                className="
          bg-zinc-900
          border border-zinc-800
          rounded-2xl
          p-5

          flex
          items-center
          justify-between
        "
              >
                <div>
                  <p className="text-white font-semibold">{event.player}</p>

                  <p className="text-zinc-400">{event.team}</p>
                </div>

                <div className="text-right">
                  <p className="text-cyan-400 font-bold">{event.minute}'</p>

                  <p
                    className={
                      event.type === "GOAL"
                        ? "text-green-400"
                        : "text-yellow-400"
                    }
                  >
                    {event.type === "GOAL" ? "⚽ Goal" : "🟨 Yellow Card"}
                  </p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default MatchDetails;
