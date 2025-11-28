// src/components/MuscleFlashCardsApp.jsx
import React, { useState } from "react";
import { regions } from "../data/lowerlimb.js";
import "./MuscleFlashCardsApp.css";

function MuscleFlashCardsApp() {
  const [selectedRegionId, setSelectedRegionId] = useState(regions[0].id);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const selectedRegion =
    regions.find((r) => r.id === selectedRegionId) ?? regions[0];

  const muscles = selectedRegion.muscles ?? [];
  const currentMuscle =
    muscles.length > 0 ? muscles[currentIndex] : null;

  const goNext = () => {
    if (muscles.length === 0) return;
    setIsFlipped(false); // reset to front
    setCurrentIndex((prev) => (prev + 1) % muscles.length);
  };

  const goPrev = () => {
    if (muscles.length === 0) return;
    setIsFlipped(false); // reset to front
    setCurrentIndex((prev) =>
      prev === 0 ? muscles.length - 1 : prev - 1
    );
  };

  const changeRegion = (id) => {
    setSelectedRegionId(id);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleFlip = () => {
    if (!currentMuscle) return;
    setIsFlipped((prev) => !prev);
  };

  return (
    <div className="app-root">
      <h1 className="title">Lower Limb Muscles</h1>

      {/* Region tabs (future-proof, even if we add more regions later) */}
      <div className="region-tabs">
        {regions.map((region) => (
          <button
            key={region.id}
            className={
              region.id === selectedRegionId
                ? "region-tab active"
                : "region-tab"
            }
            onClick={() => changeRegion(region.id)}
          >
            {region.name}
          </button>
        ))}
      </div>

      {/* Flip card */}
      <div
        className={
          "card flip-card" + (isFlipped ? " flipped" : "")
        }
        onClick={toggleFlip}
      >
        <div className="flip-card-inner">
          {/* FRONT: name only */}
       <div className="flip-card-face flip-card-front">
  {currentMuscle ? (
    <>
      <p className="region-title">{currentMuscle.part}</p>
      <h2 className="muscle-name centered">{currentMuscle.name}</h2>
    </>
  ) : (
    <p>No muscles defined for this region yet.</p>
  )}
</div>


          {/* BACK: innervation + blood supply */}
          <div className="flip-card-face flip-card-back">
            {currentMuscle ? (
              <>
                <h2 className="muscle-name">
                  {currentMuscle.name}
                </h2>
                <p className="region">{currentMuscle.part}</p>
                <div className="details">
                  <p>
                    <strong>Innervation: </strong>
                    {currentMuscle.innervation}
                  </p>
                  <p>
                    <strong>Blood supply: </strong>
                    {currentMuscle.bloodSupply}
                  </p>
                </div>
              </>
            ) : (
              <p>No muscles defined for this region yet.</p>
            )}
          </div>
        </div>
      </div>

      <div className="controls">
        <button onClick={goPrev} disabled={muscles.length === 0}>
          &larr; Previous muscle
        </button>
        <span className="counter">
          {muscles.length > 0 ? currentIndex + 1 : 0} / {muscles.length}
        </span>
        <button onClick={goNext} disabled={muscles.length === 0}>
          Next muscle &rarr;
        </button>
      </div>
    </div>
  );
}

export default MuscleFlashCardsApp;
