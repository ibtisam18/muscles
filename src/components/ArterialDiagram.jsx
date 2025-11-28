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
        label="Common carotids & subclavian branches"
        activeId={activeSegmentId}
      />
      <Segment
        id="upper-limb"
        label="Upper limb: subclavian → axillary (1st rib) → brachial (teres major) → radial & ulnar (cubital fossa)"
        activeId={activeSegmentId}
      />
      <Segment
        id="descending-aorta"
        label="Descending thoracic aorta"
        activeId={activeSegmentId}
      />
      <Segment
        id="abdominal-aorta"
        label="Abdominal aorta (T12 → L4)"
        activeId={activeSegmentId}
      />
      <Segment
        id="visceral-branches"
        label="Celiac trunk, SMA, IMA"
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
        label="External iliac → femoral (inguinal ligament)"
        activeId={activeSegmentId}
      />
      <Segment
        id="popliteal"
        label="Femoral → popliteal (adductor hiatus)"
        activeId={activeSegmentId}
      />
      <Segment
        id="anterior-tibial-dorsalis"
        label="Anterior tibial → dorsalis pedis (ankle joint)"
        activeId={activeSegmentId}
      />
      <Segment
        id="posterior-tibial-plantar"
        label="Posterior tibial → medial & lateral plantar (tarsal tunnel)"
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
