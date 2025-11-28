// src/components/ArterialDiagram.jsx
import React from "react";
import "./AortaToFootSpeaker.css";

function Segment({ id, label, activeId }) {
  const active = id === activeId;
  return (
    <div className={"segment-row" + (active ? " active" : "")}>
      <div className="segment-line" />
      <span className="segment-label">{label}</span>
    </div>
  );
}

function ArterialDiagram({ activeSegmentId }) {
  return (
    <div className="diagram-card">
      <h2 className="diagram-title">Aorta → Lower Limb Pathway</h2>

      <Segment
        id="ascending-aorta"
        label="Ascending aorta"
        activeId={activeSegmentId}
      />
      <Segment
        id="aortic-arch"
        label="Aortic arch"
        activeId={activeSegmentId}
      />
      <Segment
        id="arch-branches"
        label="Arch branches: brachiocephalic, L common carotid, L subclavian"
        activeId={activeSegmentId}
      />
      <Segment
        id="subclavian-common-carotid"
        label="Common carotids & subclavian"
        activeId={activeSegmentId}
      />
      <Segment
        id="upper-limb"
        label="Upper limb: axillary → brachial → radial & ulnar"
        activeId={activeSegmentId}
      />
      <Segment
        id="descending-aorta"
        label="Descending thoracic aorta"
        activeId={activeSegmentId}
      />
      <Segment
        id="abdominal-aorta"
        label="Abdominal aorta"
        activeId={activeSegmentId}
      />
      <Segment
        id="visceral-branches"
        label="Celiac, SMA, IMA"
        activeId={activeSegmentId}
      />
      <Segment
        id="bifurcation-common-iliac"
        label="L4: common iliac arteries"
        activeId={activeSegmentId}
      />
      <Segment
        id="internal-iliac"
        label="Internal iliac (pelvis / genital region)"
        activeId={activeSegmentId}
      />
      <Segment
        id="external-iliac-femoral"
        label="External iliac → femoral"
        activeId={activeSegmentId}
      />
      <Segment
        id="popliteal"
        label="Popliteal artery"
        activeId={activeSegmentId}
      />
      <Segment
        id="anterior-tibial-dorsalis"
        label="Anterior tibial → dorsalis pedis"
        activeId={activeSegmentId}
      />
      <Segment
        id="posterior-tibial-plantar"
        label="Posterior tibial → medial & lateral plantar"
        activeId={activeSegmentId}
      />
      <Segment
        id="fibular"
        label="Fibular (peroneal) artery"
        activeId={activeSegmentId}
      />
    </div>
  );
}

export default ArterialDiagram;
