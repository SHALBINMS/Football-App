import { useEffect, useState } from "react";
import "../styles/App.css";
import PlayerList from "../components/PlayerList";
import shuffledPlayers from "../data/Players";

function Players() {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOption, setSortOption] = useState("");
  const [eliteOnly, setEliteOnly] = useState(false);

  /*useEffect(() => {
    const fetchPlayers = async () => {
      try {
        console.log("Fetching data...");

        const response = await fetch(
          "https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "ac670c0601msh6a7fcfb0d2cd518p1ae736jsnde1c84388255", 
              "X-RapidAPI-Host": "free-api-live-football-data.p.rapidapi.com"
            }
          }
        );

        console.log("2️⃣ Response received:", response);

        const data = await response.json();

        console.log("3️⃣ Data parsed successfully:", data);

        console.log("4️⃣ Players array:", data.response.suggestions);

        setPlayers(data.response.suggestions);
        setLoading(false);

      }
  
     
        catch (error) {
        console.log("Error:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

   // fetchPlayers();
  }, []);*/

  useEffect(() => {
    setPlayers(shuffledPlayers);
    setLoading(false);
  }, []);

  useEffect(() => {
    console.log("Updated players:", players);
  }, [players]);

  const filteredPlayers = players.filter((player) => {
    const matchesSearch = player.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesElite = eliteOnly ? player.rating > 90 : true;

    return matchesSearch && matchesElite;
  });

  const handleEliteToggle = () => {
    setEliteOnly(!eliteOnly);
  };

  const sortedPlayers = [...filteredPlayers];

  if (sortOption === "high-score") {
    sortedPlayers.sort((a, b) => b.score - a.score);
  }

  if (sortOption === "low-score") {
    sortedPlayers.sort((a, b) => a.score - b.score);
  }

  if (sortOption === "a-z") {
    sortedPlayers.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (loading) {
    return <h2>Loading players...</h2>;
  }

  if (error) {
    return <h2>{error}</h2>;
  }
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>⚽ Football Players Dashboard</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search football players..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>

      <div className="filter-container">
        <button className="elite-btn" onClick={handleEliteToggle}>
          {eliteOnly ? "Show All Players" : "Show Elite Players"}
        </button>
      </div>

      <div className="sort-container">
        <select
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
          className="sort-select"
        >
          <option value="">Sort Players</option>
          <option value="high-score">Highest Score</option>
          <option value="low-score">Lowest Score</option>
          <option value="a-z">A-Z</option>
        </select>
      </div>

      {sortedPlayers.length > 0 ? (
        <PlayerList players={sortedPlayers} />
      ) : (
        <h2 className="not-found">⚽ No players found</h2>
      )}
    </div>
  );
}

export default Players;
