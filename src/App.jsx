import React, { useState } from "react";
import MuscleFlashCardsApp from "./components/MuscleFlashCardsApp.jsx";
import UpperLimbFlashCardsApp from "./components/UpperLimbFlashCardsApp.jsx";
import HeadNeckTrunkFlashCardsApp from "./components/HeadNeckTrunkFlashCardsApp.jsx";
import CirculationTutor from "./components/CirculationTutor.jsx";

import CoverPage from "./components/CoverPage.jsx";  // ⬅ NEW
import "./App.css";

function App() {
  const [entered, setEntered] = useState(false);

  const [page, setPage] = useState("headnecktrunk");
  const [theme, setTheme] = useState("dark");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));

  // ➤ Show cover page first
  if (!entered) {
    return <CoverPage onEnter={() => setEntered(true)} />;
  }

  return (
    <div className={`app-root ${theme}`}>
      <div className="navbar">
        <button
          onClick={() => setPage("headnecktrunk")}
          className={page === "headnecktrunk" ? "nav-btn active" : "nav-btn"}
        >
          Head / Neck / Trunk
        </button>

        <button
          onClick={() => setPage("upper")}
          className={page === "upper" ? "nav-btn active" : "nav-btn"}
        >
          Upper limb
        </button>

        <button
          onClick={() => setPage("lower")}
          className={page === "lower" ? "nav-btn active" : "nav-btn"}
        >
          Lower limb
        </button>

        <button
          onClick={() => setPage("circulation")}
          className={page === "circulation" ? "nav-btn active" : "nav-btn"}
        >
          Circulation Tutor
        </button>

        {/* theme toggle */}
        <button className="theme-toggle-btn" onClick={toggleTheme}>
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
      </div>

      {page === "headnecktrunk" && <HeadNeckTrunkFlashCardsApp theme={theme} />}
      {page === "upper" && <UpperLimbFlashCardsApp theme={theme} />}
      {page === "lower" && <MuscleFlashCardsApp theme={theme} />}
      {page === "circulation" && <CirculationTutor theme={theme} />}
    </div>
  );
}

export default App;
