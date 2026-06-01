import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Players from "./pages/Players";
import MatchCenter from "./pages/MatchCenter";
import WorldCup from "./pages/WorldCup";
import Teams from "./pages/Teams";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <BrowserRouter>

      <div className="min-h-screen bg-blue-950">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={<Home />}
          />

          <Route
            path="/players"
            element={<Players />}
          />

          <Route
            path="/match-center"
            element={<MatchCenter />}
          />

          <Route
            path="/world-cup"
            element={<WorldCup />}
          />

          <Route
            path="/teams"
            element={<Teams />}
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;