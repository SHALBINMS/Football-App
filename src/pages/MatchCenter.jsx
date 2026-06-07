import matches from "../data/matches";
import MatchCard from "../components/MatchCard";

import { useState , useEffect } from "react";

function MatchCenter() {

  const [liveMatches,setLiveMatches] = useState(matches);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveMatches((prevMatches) => {
        return prevMatches.map((match) => {
          if (match.status === "LIVE") {
            const newMinute = match.minute + 1;
          if (newMinute >= 90){
            return{
              ...match,
              minute:90,
              status: "FT"
            };

          }

          return {
            ...match,
            minute: newMinute,
          };
          }

          return match;
        });
      });
    },3000);

    return () => clearInterval(interval);
  },[]);
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
        Match Center
      </h1>

      <div
        className="
          grid
          grid-cols-1
          md:grid-cols-2
          gap-6
        "
      >
        {liveMatches.map((match) => (
          <MatchCard key={match.id} match={match} />
        ))}
      </div>
    </div>
  );
}

export default MatchCenter;
