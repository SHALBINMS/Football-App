import { useEffect } from "react";

function App() {

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        console.log("Fetching data...");

        const response = await fetch(
          "https://free-api-live-football-data.p.rapidapi.com/football-players-search?search=m",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": "ac670c0601msh6a7fcfb0d2cd518p1ae736jsnde1c84388255", // replace this
              "X-RapidAPI-Host": "free-api-live-football-data.p.rapidapi.com"
            }
          }
        );

        console.log("2️⃣ Response received:", response);

        const data = await response.json();

        console.log("3️⃣ Data parsed successfully:", data);

        console.log("4️⃣ Players array:", data.response);


      } catch (error) {
        console.log("Error:", error);
      }
    };

    fetchPlayers();
  }, []);

  return <h1>Football API Practice</h1>;
}

export default App;