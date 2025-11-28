// src/data/muscles.js
// One entry per muscle: name + region part + main innervation + main blood supply.

export const regions = [
  {
    id: "lower-limb",
    name: "Lower Limb",
    muscles: [
      // --- GLUTEAL REGION ---
      {
        id: "gluteus-maximus",
        name: "Gluteus maximus",
        part: "Gluteal region",
        innervation: "Inferior gluteal nerve (L5–S2)",
        bloodSupply: "Inferior gluteal artery (branch of internal iliac artery)",
      },
      {
        id: "gluteus-medius",
        name: "Gluteus medius",
        part: "Gluteal region",
        innervation: "Superior gluteal nerve (L4–S1)",
        bloodSupply: "Superior gluteal artery",
      },
      {
        id: "gluteus-minimus",
        name: "Gluteus minimus",
        part: "Gluteal region",
        innervation: "Superior gluteal nerve (L4–S1)",
        bloodSupply: "Superior gluteal artery",
      },
      {
        id: "tensor-fascia-latae",
        name: "Tensor fascia latae",
        part: "Gluteal region",
        innervation: "Superior gluteal nerve (L4–S1)",
        bloodSupply: "Superior gluteal artery; contributions from lateral circumflex femoral artery",
      },
      {
        id: "piriformis",
        name: "Piriformis",
        part: "Deep gluteal region",
        innervation: "Branches of sacral plexus (often nerve to piriformis; slide groups under superior gluteal nerve)",
        bloodSupply: "Mainly superior gluteal artery",
      },
      {
        id: "superior-gemellus",
        name: "Superior gemellus",
        part: "Deep gluteal region",
        innervation: "Nerve to obturator internus (L5–S2)",
        bloodSupply: "Gluteal arteries (mainly inferior gluteal) and medial circumflex femoral branches",
      },
      {
        id: "obturator-internus",
        name: "Obturator internus",
        part: "Deep gluteal region",
        innervation: "Nerve to obturator internus (L5–S2)",
        bloodSupply: "Gluteal arteries and internal pudendal branches",
      },
      {
        id: "inferior-gemellus",
        name: "Inferior gemellus",
        part: "Deep gluteal region",
        innervation: "Nerve to quadratus femoris (L4–S1)",
        bloodSupply: "Inferior gluteal and medial circumflex femoral arteries",
      },
      {
        id: "quadratus-femoris",
        name: "Quadratus femoris",
        part: "Deep gluteal region",
        innervation: "Nerve to quadratus femoris (L4–S1)",
        bloodSupply: "Medial circumflex femoral and inferior gluteal arteries",
      },

      // --- THIGH: ANTERIOR COMPARTMENT ---
      {
        id: "rectus-femoris",
        name: "Rectus femoris",
        part: "Anterior thigh (quadriceps)",
        innervation: "Femoral nerve (L2–L4)",
        bloodSupply: "Femoral and profunda femoris arteries",
      },
      {
        id: "vastus-lateralis",
        name: "Vastus lateralis",
        part: "Anterior thigh (quadriceps)",
        innervation: "Femoral nerve (L2–L4)",
        bloodSupply: "Lateral circumflex femoral & profunda femoris arteries",
      },
      {
        id: "vastus-medialis",
        name: "Vastus medialis",
        part: "Anterior thigh (quadriceps)",
        innervation: "Femoral nerve (L2–L4)",
        bloodSupply: "Femoral and profunda femoris arteries",
      },
      {
        id: "vastus-intermedius",
        name: "Vastus intermedius",
        part: "Anterior thigh (quadriceps)",
        innervation: "Femoral nerve (L2–L4)",
        bloodSupply: "Femoral and profunda femoris arteries",
      },
      {
        id: "sartorius",
        name: "Sartorius",
        part: "Anterior thigh",
        innervation: "Femoral nerve (L2–L3)",
        bloodSupply: "Femoral artery",
      },
      {
        id: "iliacus",
        name: "Iliacus",
        part: "Anterior thigh / iliopsoas",
        innervation: "Femoral nerve (L2–L3)",
        bloodSupply: "Iliolumbar and medial circumflex femoral arteries",
      },
      {
        id: "psoas-major",
        name: "Psoas major",
        part: "Anterior thigh / iliopsoas",
        innervation: "Direct branches from lumbar plexus (L1–L3)",
        bloodSupply: "Lumbar arteries and branches of iliolumbar artery",
      },

      // --- THIGH: MEDIAL (ADDUCTOR) COMPARTMENT ---
      {
        id: "pectineus",
        name: "Pectineus",
        part: "Medial thigh (adductor)",
        innervation: "Primarily femoral nerve; sometimes also obturator nerve",
        bloodSupply: "Medial circumflex femoral and obturator arteries",
      },
      {
        id: "adductor-longus",
        name: "Adductor longus",
        part: "Medial thigh (adductor)",
        innervation: "Obturator nerve (L2–L4)",
        bloodSupply: "Obturator and profunda femoris arteries",
      },
      {
        id: "adductor-brevis",
        name: "Adductor brevis",
        part: "Medial thigh (adductor)",
        innervation: "Obturator nerve (L2–L4)",
        bloodSupply: "Obturator and profunda femoris arteries",
      },
      {
        id: "adductor-magnus-adductor",
        name: "Adductor magnus (adductor part)",
        part: "Medial thigh (adductor)",
        innervation: "Obturator nerve (L2–L4)",
        bloodSupply: "Obturator and profunda femoris arteries",
      },
      {
        id: "gracilis",
        name: "Gracilis",
        part: "Medial thigh (adductor)",
        innervation: "Obturator nerve (L2–L3)",
        bloodSupply: "Obturator and medial circumflex femoral arteries",
      },

      // --- THIGH: POSTERIOR (HAMSTRING) COMPARTMENT ---
      {
        id: "biceps-femoris",
        name: "Biceps femoris",
        part: "Posterior thigh (hamstring)",
        innervation: "Sciatic nerve (tibial part to long head; common fibular part to short head)",
        bloodSupply: "Profunda femoris and inferior gluteal arteries",
      },
      {
        id: "semitendinosus",
        name: "Semitendinosus",
        part: "Posterior thigh (hamstring)",
        innervation: "Tibial division of sciatic nerve",
        bloodSupply: "Profunda femoris and inferior gluteal arteries",
      },
      {
        id: "semimembranosus",
        name: "Semimembranosus",
        part: "Posterior thigh (hamstring)",
        innervation: "Tibial division of sciatic nerve",
        bloodSupply: "Profunda femoris and inferior gluteal arteries",
      },
      {
        id: "adductor-magnus-hamstring",
        name: "Adductor magnus (hamstring part)",
        part: "Posterior thigh (hamstring)",
        innervation: "Tibial division of sciatic nerve",
        bloodSupply: "Profunda femoris and obturator arteries",
      },

      // --- LEG: ANTERIOR COMPARTMENT ---
      {
        id: "tibialis-anterior",
        name: "Tibialis anterior",
        part: "Anterior leg",
        innervation: "Deep fibular (peroneal) nerve",
        bloodSupply: "Anterior tibial artery",
      },
      {
        id: "extensor-hallucis-longus",
        name: "Extensor hallucis longus",
        part: "Anterior leg",
        innervation: "Deep fibular (peroneal) nerve",
        bloodSupply: "Anterior tibial artery",
      },
      {
        id: "extensor-digitorum-longus",
        name: "Extensor digitorum longus",
        part: "Anterior leg",
        innervation: "Deep fibular (peroneal) nerve",
        bloodSupply: "Anterior tibial artery",
      },
      {
        id: "fibularis-tertius",
        name: "Fibularis (peroneus) tertius",
        part: "Anterior leg",
        innervation: "Deep fibular (peroneal) nerve",
        bloodSupply: "Anterior tibial artery",
      },

      // --- LEG: LATERAL COMPARTMENT ---
      {
        id: "fibularis-longus",
        name: "Fibularis (peroneus) longus",
        part: "Lateral leg",
        innervation: "Superficial fibular (peroneal) nerve",
        bloodSupply: "Fibular (peroneal) artery",
      },
      {
        id: "fibularis-brevis",
        name: "Fibularis (peroneus) brevis",
        part: "Lateral leg",
        innervation: "Superficial fibular (peroneal) nerve",
        bloodSupply: "Fibular (peroneal) artery",
      },

      // --- LEG: POSTERIOR SUPERFICIAL COMPARTMENT ---
      {
        id: "gastrocnemius",
        name: "Gastrocnemius",
        part: "Posterior leg (superficial)",
        innervation: "Tibial nerve",
        bloodSupply: "Posterior tibial artery; sural branches",
      },
      {
        id: "soleus",
        name: "Soleus",
        part: "Posterior leg (superficial)",
        innervation: "Tibial nerve",
        bloodSupply: "Posterior tibial and fibular arteries",
      },
      {
        id: "plantaris",
        name: "Plantaris",
        part: "Posterior leg (superficial)",
        innervation: "Tibial nerve",
        bloodSupply: "Popliteal artery branches",
      },

      // --- LEG: POSTERIOR DEEP COMPARTMENT ---
      {
        id: "popliteus",
        name: "Popliteus",
        part: "Posterior leg (deep)",
        innervation: "Tibial nerve",
        bloodSupply: "Popliteal artery",
      },
      {
        id: "flexor-digitorum-longus",
        name: "Flexor digitorum longus",
        part: "Posterior leg (deep)",
        innervation: "Tibial nerve",
        bloodSupply: "Posterior tibial artery",
      },
      {
        id: "flexor-hallucis-longus",
        name: "Flexor hallucis longus",
        part: "Posterior leg (deep)",
        innervation: "Tibial nerve",
        bloodSupply: "Fibular (peroneal) artery",
      },
      {
        id: "tibialis-posterior",
        name: "Tibialis posterior",
        part: "Posterior leg (deep)",
        innervation: "Tibial nerve",
        bloodSupply: "Posterior tibial and fibular arteries",
      },

      // --- FOOT: DORSUM ---
      {
        id: "extensor-digitorum-brevis",
        name: "Extensor digitorum brevis",
        part: "Dorsum of foot",
        innervation: "Deep fibular (peroneal) nerve",
        bloodSupply: "Dorsalis pedis artery (continuation of anterior tibial artery)",
      },

      // --- FOOT: SOLE LAYER 1 ---
      {
        id: "abductor-hallucis",
        name: "Abductor hallucis",
        part: "Sole of foot – 1st layer",
        innervation: "Medial plantar nerve",
        bloodSupply: "Medial plantar artery",
      },
      {
        id: "flexor-digitorum-brevis",
        name: "Flexor digitorum brevis",
        part: "Sole of foot – 1st layer",
        innervation: "Medial plantar nerve",
        bloodSupply: "Medial plantar artery",
      },
      {
        id: "abductor-digiti-minimi",
        name: "Abductor digiti minimi",
        part: "Sole of foot – 1st layer",
        innervation: "Lateral plantar nerve",
        bloodSupply: "Lateral plantar artery",
      },

      // --- FOOT: SOLE LAYER 2 ---
      {
        id: "quadratus-plantae",
        name: "Quadratus plantae",
        part: "Sole of foot – 2nd layer",
        innervation: "Lateral plantar nerve",
        bloodSupply: "Lateral plantar artery",
      },
      {
        id: "lumbricals",
        name: "Lumbricals (4)",
        part: "Sole of foot – 2nd layer",
        innervation: "1st lumbrical: medial plantar nerve; 2nd–4th: lateral plantar nerve",
        bloodSupply: "Plantar metatarsal arteries from plantar arch",
      },

      // --- FOOT: SOLE LAYER 3 ---
      {
        id: "flexor-hallucis-brevis",
        name: "Flexor hallucis brevis",
        part: "Sole of foot – 3rd layer",
        innervation: "Medial plantar nerve",
        bloodSupply: "Medial plantar artery",
      },
      {
        id: "adductor-hallucis",
        name: "Adductor hallucis",
        part: "Sole of foot – 3rd layer",
        innervation: "Deep branch of lateral plantar nerve",
        bloodSupply: "Plantar arterial arch branches",
      },
      {
        id: "flexor-digiti-minimi-brevis",
        name: "Flexor digiti minimi brevis",
        part: "Sole of foot – 3rd layer",
        innervation: "Lateral plantar nerve",
        bloodSupply: "Lateral plantar artery",
      },

      // --- FOOT: SOLE LAYER 4 ---
      {
        id: "plantar-interossei",
        name: "Plantar interossei (3)",
        part: "Sole of foot – 4th layer",
        innervation: "Lateral plantar nerve",
        bloodSupply: "Plantar metatarsal arteries",
      },
      {
        id: "dorsal-interossei",
        name: "Dorsal interossei (4)",
        part: "Sole of foot – 4th layer",
        innervation: "Lateral plantar nerve",
        bloodSupply: "Dorsal & plantar metatarsal arteries",
      },
    ],
  },
];
