// src/data/headnecktrunk.js
// Key muscles of the head, neck and trunk with innervation & blood supply.

export const regions = [
  {
    id: "head",
    name: "Head",
    muscles: [
      {
        id: "occipitofrontalis",
        name: "Occipitofrontalis (frontal belly)",
        part: "Scalp / forehead",
        innervation: "Facial nerve (CN VII) – temporal branches",
        bloodSupply:
          "Supraorbital and supratrochlear branches of ophthalmic artery",
      },
      {
        id: "orbicularis-oculi",
        name: "Orbicularis oculi",
        part: "Face – around eye",
        innervation: "Facial nerve (CN VII) – temporal & zygomatic branches",
        bloodSupply: "Facial and superficial temporal arteries",
      },
      {
        id: "buccinator",
        name: "Buccinator",
        part: "Face – cheek",
        innervation: "Facial nerve (CN VII) – buccal branch",
        bloodSupply: "Buccal branch of maxillary artery and facial artery",
      },
      {
        id: "orbicularis-oris",
        name: "Orbicularis oris",
        part: "Face – around mouth",
        innervation: "Facial nerve (CN VII) – buccal branch",
        bloodSupply: "Superior and inferior labial branches of facial artery",
      },
      {
        id: "masseter",
        name: "Masseter",
        part: "Muscles of mastication",
        innervation: "Masseteric branch of mandibular nerve (CN V3)",
        bloodSupply: "Masseteric branches of maxillary and facial arteries",
      },
      {
        id: "temporalis",
        name: "Temporalis",
        part: "Muscles of mastication",
        innervation: "Deep temporal branches of mandibular nerve (CN V3)",
        bloodSupply:
          "Deep temporal branches of maxillary artery, middle temporal branch of superficial temporal artery",
      },
      {
        id: "lateral-rectus",
        name: "Lateral rectus",
        part: "Orbit – extraocular muscle",
        innervation: "Abducent nerve (CN VI)",
        bloodSupply: "Muscular branches of ophthalmic artery",
      },
      {
        id: "superior-rectus",
        name: "Superior rectus",
        part: "Orbit – extraocular muscle",
        innervation: "Oculomotor nerve (CN III)",
        bloodSupply: "Muscular branches of ophthalmic artery",
      },
    ],
  },

  {
    id: "neck",
    name: "Neck",
    muscles: [
      {
        id: "sternocleidomastoid",
        name: "Sternocleidomastoid",
        part: "Superficial neck",
        innervation: "Spinal accessory nerve (CN XI) and C2–C3 sensory",
        bloodSupply: "Occipital and superior thyroid arteries",
      },
      {
        id: "trapezius-neck",
        name: "Trapezius (upper fibers)",
        part: "Superficial back / neck",
        innervation: "Spinal accessory nerve (CN XI); C3–C4 proprioceptive fibers",
        bloodSupply: "Transverse cervical artery (superficial branch)",
      },
      {
        id: "digastric",
        name: "Digastric (anterior & posterior bellies)",
        part: "Suprahyoid region",
        innervation:
          "Posterior belly: facial nerve (CN VII); anterior belly: mylohyoid nerve (branch of CN V3)",
        bloodSupply: "Facial and occipital arteries",
      },
      {
        id: "mylohyoid",
        name: "Mylohyoid",
        part: "Suprahyoid region",
        innervation: "Mylohyoid nerve (branch of mandibular nerve, CN V3)",
        bloodSupply: "Submental branch of facial artery",
      },
      {
        id: "omohyoid",
        name: "Omohyoid",
        part: "Infrahyoid (strap) muscles",
        innervation: "Ansa cervicalis (C1–C3)",
        bloodSupply: "Superior thyroid artery and transverse cervical branches",
      },
      {
        id: "sternohyoid",
        name: "Sternohyoid",
        part: "Infrahyoid (strap) muscles",
        innervation: "Ansa cervicalis (C1–C3)",
        bloodSupply: "Superior thyroid artery",
      },
      {
        id: "sternothyroid",
        name: "Sternothyroid",
        part: "Infrahyoid (strap) muscles",
        innervation: "Ansa cervicalis (C2–C3)",
        bloodSupply: "Superior thyroid artery",
      },
      {
        id: "anterior-scalene",
        name: "Anterior scalene",
        part: "Deep lateral neck",
        innervation: "Ventral rami of C4–C6 spinal nerves",
        bloodSupply: "Ascending cervical and inferior thyroid arteries",
      },
    ],
  },

  {
    id: "trunk",
    name: "Trunk (Thorax, Abdomen & Back)",
    muscles: [
      {
        id: "external-intercostal",
        name: "External intercostal",
        part: "Thoracic wall",
        innervation: "Intercostal nerves (T1–T11)",
        bloodSupply:
          "Anterior intercostal arteries (internal thoracic) & posterior intercostal arteries (thoracic aorta)",
      },
      {
        id: "internal-intercostal",
        name: "Internal intercostal",
        part: "Thoracic wall",
        innervation: "Intercostal nerves (T1–T11)",
        bloodSupply:
          "Anterior and posterior intercostal arteries (same as external intercostals)",
      },
      {
        id: "diaphragm",
        name: "Diaphragm",
        part: "Thoracoabdominal partition",
        innervation: "Phrenic nerve (C3–C5)",
        bloodSupply:
          "Pericardiacophrenic, musculophrenic, superior & inferior phrenic arteries",
      },
      {
        id: "pectoralis-major",
        name: "Pectoralis major",
        part: "Anterior chest wall",
        innervation: "Medial and lateral pectoral nerves",
        bloodSupply:
          "Pectoral branches of thoracoacromial artery; lateral thoracic artery",
      },
      {
        id: "serratus-anterior",
        name: "Serratus anterior",
        part: "Lateral chest wall",
        innervation: "Long thoracic nerve (C5–C7)",
        bloodSupply: "Lateral thoracic artery and thoracodorsal artery",
      },
      {
        id: "external-oblique",
        name: "External oblique",
        part: "Anterolateral abdominal wall",
        innervation: "Lower six thoracic nerves (T7–T12)",
        bloodSupply:
          "Lower intercostal and subcostal arteries, branches of superior & inferior epigastric arteries",
      },
      {
        id: "rectus-abdominis",
        name: "Rectus abdominis",
        part: "Anterior abdominal wall",
        innervation: "Thoracoabdominal nerves (T7–T11) and subcostal nerve (T12)",
        bloodSupply:
          "Superior and inferior epigastric arteries",
      },
      {
        id: "erector-spinae",
        name: "Erector spinae group",
        part: "Deep back muscles",
        innervation: "Dorsal rami of spinal nerves",
        bloodSupply: "Dorsal branches of posterior intercostal & lumbar arteries",
      },
    ],
  },
];
