import { useParams } from "react-router-dom";
import matches from "../data/matches";
import teams from "../data/teams";

function MatchDetails() {
    const {id} = useParams();
    const match = matches.find((match) => match.id.toString() === id);
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
   </div>
 );
}

export default MatchDetails;
