import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Players from "./pages/Players";
import MatchCenter from "./pages/MatchCenter";
import WorldCup from "./pages/WorldCup";
import Teams from "./pages/Teams";
import Favorites from "./pages/Favorites";
import TeamDetails from "./pages/TeamDetails";
import MatchDetails from "./pages/MatchDetails";

import { useState , useEffect } from "react";
import matches from "./data/matches";

function App() {
  const [liveMatches, setLiveMatches] = useState(matches);
   useEffect(() => {
      const interval = setInterval(() => {
        setLiveMatches((prevMatches) => {
          return prevMatches.map((match) => {
            if (match.status === "LIVE") {
              const newMinute = match.minute + 1;
              if (newMinute >= 90) {
                return {
                  ...match,
                  minute: 90,
                  status: "FT",
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
      }, 3000);
  
      return () => clearInterval(interval);
    }, []);
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-blue-950">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/players" element={<Players />} />

          <Route
            path="/match-center"
            element={
              <MatchCenter
                liveMatches={liveMatches}
                setLiveMatches={setLiveMatches}
              />
            }
          />
          <Route path="/matches/:id" element={<MatchDetails 
          liveMatches={liveMatches} />} />

          <Route path="/world-cup" element={<WorldCup />} />

          <Route path="/teams" element={<Teams />} />
          <Route path="/teams/:id" element={<TeamDetails />} />

          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;