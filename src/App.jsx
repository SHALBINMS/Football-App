
import { useEffect, useState } from "react";

function App() {

  const [players , setPlayers] = useState([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(null);

 
  useEffect(() => {
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

      } catch (error) {
        console.log("Error:", error);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchPlayers();
  }, []);

  useEffect ( () => {
    console.log("Updated players:", players);
  },[players]);

if (loading) {
  return <h2>Loading players...</h2>;
}

if (error) {
  return <h2>{error}</h2>;
}
return (
  <div>
    <h1>Football Players of the World</h1>

    {players.map((player) => (
      <div key={player.id}>
        <p>{player.name}</p>
      </div>
    ))}

  </div>
);
}

export default App;