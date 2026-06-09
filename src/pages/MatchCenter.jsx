
import MatchCard from "../components/MatchCard";

import { useState , useEffect } from "react";

function MatchCenter({ liveMatches, setLiveMatches }) {
  
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
