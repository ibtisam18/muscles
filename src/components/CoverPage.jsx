import React from "react";
import "./CoverPage.css";

function CoverPage({ onEnter }) {
  return (
    <div className="cover-root">
      <div className="cover-orbit orbit-1" />
      <div className="cover-orbit orbit-2" />
      <div className="cover-orbit orbit-3" />

      <div className="cover-box">
        <p className="cover-badge">Study • Practice • Repeat</p>

        <h1 className="cover-title">Muscles</h1>

        <div className="cover-tags">
          <span className="tag">Blood Supply</span>
          <span className="tag">Innervation</span>
        </div>

        <button className="cover-enter-btn" onClick={onEnter}>
          Enter
          <span className="cover-enter-arrow">→</span>
        </button>
      </div>
    </div>
  );
}

export default CoverPage;
