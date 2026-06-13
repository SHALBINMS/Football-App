import { useState, useEffect } from "react";
import TeamCard from "../components/TeamCard";
import teams from "../data/teams";
function Favorites() {
  const [favoriteIds, setFavoriteIds] = useState([]);
  const favoriteTeams = teams.filter((team) => 
  favoriteIds.includes(team.id)
);
  useEffect(() =>{
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavoriteIds(favorites)
  },[])
  return (
    <div className="px-6 py-10">
      <h1 className="text-4xl font-bold">
        Favorite Teams ({favoriteTeams.length})
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
        {favoriteTeams.map((team) => (
          <TeamCard key={team.id} team={team} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
