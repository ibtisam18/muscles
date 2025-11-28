// src/components/CirculationTutor.jsx
import React, { useState } from "react";
import AortaToFootSpeaker from "./AortaToFootSpeaker.jsx";
import VenousReturnSpeaker from "./VenousReturnSpeaker.jsx";
import "./AortaToFootSpeaker.css"; // reuse same styles

function CirculationTutor() {
  const [activeTab, setActiveTab] = useState("arterial"); // "arterial" | "venous"

  return (
    <div className="circulation-root">
      <div className="circulation-header">
        <h2>Circulation Tutor</h2>
        <p>Switch between arterial and venous pathways.</p>
      </div>

      {/* Tabs */}
      <div className="circulation-tabs">
        <button
          type="button"
          className={
            activeTab === "arterial"
              ? "tab-button active"
              : "tab-button"
          }
          onClick={() => setActiveTab("arterial")}
        >
          🩸 Arterial: Aorta → Foot
        </button>

        <button
          type="button"
          className={
            activeTab === "venous"
              ? "tab-button active"
              : "tab-button"
          }
          onClick={() => setActiveTab("venous")}
        >
          🔄 Venous: Foot → Heart
        </button>
      </div>

      {/* Tab content */}
      <div className="circulation-panel">
        {activeTab === "arterial" ? (
          <AortaToFootSpeaker />
        ) : (
          <VenousReturnSpeaker />
        )}
      </div>
    </div>
  );
}

export default CirculationTutor;
