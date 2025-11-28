// src/components/VenousDiagram.jsx
import React from "react";
import "./AortaToFootSpeaker.css"; // reuse same styles

function Segment({ id, label, activeId }) {
  const active = id === activeId;
  return (
    <div className={"segment-row" + (active ? " active" : "")}>
      <div className="segment-line" />
      <span className="segment-label">{label}</span>
    </div>
  );
}

function VenousDiagram({ activeSegmentId }) {
  return (
    <div className="diagram-card">
      <h2 className="diagram-title">Foot → IVC → Heart (Venous Return)</h2>

      <Segment
        id="plantar-plexus"
        label="Plantar venous plexus / digital veins"
        activeId={activeSegmentId}
      />

      <Segment
        id="plantar-veins"
        label="Medial & lateral plantar veins"
        activeId={activeSegmentId}
      />

      <Segment
        id="posterior-tibial"
        label="Posterior tibial veins"
        activeId={activeSegmentId}
      />

      <Segment
        id="fibular-veins"
        label="Fibular (peroneal) veins"
        activeId={activeSegmentId}
      />

      <Segment
        id="anterior-tibial"
        label="Anterior tibial veins"
        activeId={activeSegmentId}
      />

      <Segment
        id="popliteal-vein"
        label="Popliteal vein"
        activeId={activeSegmentId}
      />

      <Segment
        id="small-saphenous"
        label="Small saphenous → popliteal"
        activeId={activeSegmentId}
      />

      <Segment
        id="femoral-vein"
        label="Femoral vein"
        activeId={activeSegmentId}
      />

      <Segment
        id="great-saphenous"
        label="Great saphenous → femoral"
        activeId={activeSegmentId}
      />

      <Segment
        id="external-iliac"
        label="External iliac vein"
        activeId={activeSegmentId}
      />

      <Segment
        id="internal-iliac"
        label="Internal iliac vein (pelvis)"
        activeId={activeSegmentId}
      />

      <Segment
        id="common-iliac"
        label="Common iliac veins"
        activeId={activeSegmentId}
      />

      <Segment
        id="ivc"
        label="Inferior vena cava (IVC)"
        activeId={activeSegmentId}
      />

      <Segment
        id="right-atrium"
        label="Right atrium (heart)"
        activeId={activeSegmentId}
      />
    </div>
  );
}

export default VenousDiagram;
