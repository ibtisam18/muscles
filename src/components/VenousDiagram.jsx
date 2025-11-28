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

      {/* Foot & plantar plexus */}
      <Segment
        id="plantar-plexus"
        label="Digital veins & plantar venous plexus (sole)"
        activeId={activeSegmentId}
      />

      <Segment
        id="plantar-veins"
        label="Plantar venous arches → medial & lateral plantar veins"
        activeId={activeSegmentId}
      />

      {/* Deep leg veins */}
      <Segment
        id="posterior-tibial"
        label="Posterior tibial veins (form behind medial malleolus)"
        activeId={activeSegmentId}
      />

      <Segment
        id="fibular-veins"
        label="Fibular (peroneal) veins – deep posterior compartment"
        activeId={activeSegmentId}
      />

      <Segment
        id="anterior-tibial"
        label="Anterior tibial veins – dorsum of foot → anterior compartment"
        activeId={activeSegmentId}
      />

      {/* Popliteal region */}
      <Segment
        id="popliteal-vein"
        label="Popliteal vein (popliteal fossa, behind knee)"
        activeId={activeSegmentId}
      />

      <Segment
        id="small-saphenous"
        label="Small saphenous (starts post. to lateral malleolus → popliteal)"
        activeId={activeSegmentId}
      />

      {/* Thigh & saphenous */}
      <Segment
        id="femoral-vein"
        label="Femoral vein (after adductor hiatus)"
        activeId={activeSegmentId}
      />

      <Segment
        id="great-saphenous"
        label="Great saphenous (starts ant. to medial malleolus → femoral at saphenous opening)"
        activeId={activeSegmentId}
      />

      {/* Pelvis & IVC */}
      <Segment
        id="external-iliac"
        label="External iliac vein (continuation of femoral after inguinal ligament)"
        activeId={activeSegmentId}
      />

      <Segment
        id="internal-iliac"
        label="Internal iliac vein (pelvic organs & gluteal region)"
        activeId={activeSegmentId}
      />

      <Segment
        id="common-iliac"
        label="Common iliac veins (formed near sacroiliac joints)"
        activeId={activeSegmentId}
      />

      <Segment
        id="ivc"
        label="Inferior vena cava – formed at L5, ascends on right of vertebral column"
        activeId={activeSegmentId}
      />

      <Segment
        id="right-atrium"
        label="Right atrium – via caval opening at T8 in diaphragm"
        activeId={activeSegmentId}
      />
    </div>
  );
}

export default VenousDiagram;
