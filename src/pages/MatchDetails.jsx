import { useParams } from "react-router-dom";
import matches from "../data/matches";

function MatchDetails() {
    const {id} = useParams();
    const match = matches.find((match) => match.id.toString() === id);
    if (!match) {
      return <div className="p-10 text-white">Match not found</div>;
    }
 return (
   <div>
     <h1>Match Details</h1>

     <h2>
       {match.homeTeam} vs {match.awayTeam}
     </h2>

     <p>
       {match.homeScore} - {match.awayScore}
     </p>

     <p>{match.minute}'</p>

     <p>{match.status}</p>
   </div>
 );
}

export default MatchDetails;
