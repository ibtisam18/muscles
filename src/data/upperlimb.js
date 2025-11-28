// src/data/upperlimb.js
// One entry per muscle (or small muscle group) for the upper limb.

export const regions = [
  {
    id: "upper-limb",
    name: "Upper Limb",
    muscles: [
      // SHOULDER / SCAPULAR REGION
      {
        id: "deltoid",
        name: "Deltoid",
        part: "Shoulder",
        innervation: "Axillary nerve (C5–C6)",
        bloodSupply:
          "Posterior circumflex humeral artery, deltoid branch of thoracoacromial artery",
      },
      {
        id: "supraspinatus",
        name: "Supraspinatus",
        part: "Rotator cuff (shoulder)",
        innervation: "Suprascapular nerve (C5–C6)",
        bloodSupply: "Suprascapular artery",
      },
      {
        id: "infraspinatus",
        name: "Infraspinatus",
        part: "Rotator cuff (shoulder)",
        innervation: "Suprascapular nerve (C5–C6)",
        bloodSupply: "Suprascapular and circumflex scapular arteries",
      },
      {
        id: "teres-minor",
        name: "Teres minor",
        part: "Rotator cuff (shoulder)",
        innervation: "Axillary nerve (C5–C6)",
        bloodSupply: "Circumflex scapular artery",
      },
      {
        id: "subscapularis",
        name: "Subscapularis",
        part: "Rotator cuff (shoulder)",
        innervation: "Upper and lower subscapular nerves (C5–C6)",
        bloodSupply: "Subscapular artery",
      },
      {
        id: "teres-major",
        name: "Teres major",
        part: "Shoulder / axilla",
        innervation: "Lower subscapular nerve (C5–C6)",
        bloodSupply: "Subscapular and circumflex scapular arteries",
      },
      {
        id: "trapezius",
        name: "Trapezius",
        part: "Superficial back / shoulder girdle",
        innervation: "Spinal accessory nerve (CN XI), cervical spinal nerves for proprioception",
        bloodSupply: "Transverse cervical artery (superficial branch)",
      },
      {
        id: "latissimus-dorsi",
        name: "Latissimus dorsi",
        part: "Superficial back / axilla",
        innervation: "Thoracodorsal nerve (C6–C8)",
        bloodSupply: "Thoracodorsal artery",
      },

      // ARM – ANTERIOR COMPARTMENT
      {
        id: "biceps-brachii",
        name: "Biceps brachii",
        part: "Arm – anterior compartment",
        innervation: "Musculocutaneous nerve (C5–C6)",
        bloodSupply: "Brachial artery",
      },
      {
        id: "brachialis",
        name: "Brachialis",
        part: "Arm – anterior compartment",
        innervation: "Musculocutaneous nerve (C5–C6), small radial nerve contribution",
        bloodSupply: "Brachial artery, radial recurrent artery",
      },
      {
        id: "coracobrachialis",
        name: "Coracobrachialis",
        part: "Arm – anterior compartment",
        innervation: "Musculocutaneous nerve (C5–C7)",
        bloodSupply: "Brachial artery",
      },

      // ARM – POSTERIOR COMPARTMENT
      {
        id: "triceps-brachii",
        name: "Triceps brachii",
        part: "Arm – posterior compartment",
        innervation: "Radial nerve (C6–C8)",
        bloodSupply: "Profunda brachii (deep brachial) artery",
      },
      {
        id: "anconeus",
        name: "Anconeus",
        part: "Posterior elbow",
        innervation: "Radial nerve",
        bloodSupply: "Deep brachial and recurrent interosseous arteries",
      },

      // FOREARM – ANTERIOR SUPERFICIAL
      {
        id: "pronator-teres",
        name: "Pronator teres",
        part: "Forearm – anterior superficial",
        innervation: "Median nerve",
        bloodSupply: "Ulnar and radial arteries",
      },
      {
        id: "flexor-carpi-radialis",
        name: "Flexor carpi radialis",
        part: "Forearm – anterior superficial",
        innervation: "Median nerve",
        bloodSupply: "Radial artery",
      },
      {
        id: "palmaris-longus",
        name: "Palmaris longus",
        part: "Forearm – anterior superficial",
        innervation: "Median nerve",
        bloodSupply: "Ulnar artery",
      },
      {
        id: "flexor-carpi-ulnaris",
        name: "Flexor carpi ulnaris",
        part: "Forearm – anterior superficial",
        innervation: "Ulnar nerve",
        bloodSupply: "Ulnar artery",
      },
      {
        id: "flexor-digitorum-superficialis",
        name: "Flexor digitorum superficialis",
        part: "Forearm – anterior superficial",
        innervation: "Median nerve",
        bloodSupply: "Ulnar and radial arteries",
      },

      // FOREARM – ANTERIOR DEEP
      {
        id: "flexor-digitorum-profundus",
        name: "Flexor digitorum profundus",
        part: "Forearm – anterior deep",
        innervation:
          "Medial half: ulnar nerve; lateral half: anterior interosseous branch of median nerve",
        bloodSupply: "Ulnar and anterior interosseous arteries",
      },
      {
        id: "flexor-pollicis-longus",
        name: "Flexor pollicis longus",
        part: "Forearm – anterior deep",
        innervation: "Anterior interosseous nerve (branch of median nerve)",
        bloodSupply: "Anterior interosseous artery",
      },
      {
        id: "pronator-quadratus",
        name: "Pronator quadratus",
        part: "Forearm – anterior deep",
        innervation: "Anterior interosseous nerve (median nerve)",
        bloodSupply: "Anterior interosseous artery",
      },

      // FOREARM – LATERAL / POSTERIOR SUPERFICIAL
      {
        id: "brachioradialis",
        name: "Brachioradialis",
        part: "Forearm – lateral",
        innervation: "Radial nerve",
        bloodSupply: "Radial recurrent artery",
      },
      {
        id: "extensor-carpi-radialis-longus",
        name: "Extensor carpi radialis longus",
        part: "Forearm – lateral",
        innervation: "Radial nerve",
        bloodSupply: "Radial artery",
      },
      {
        id: "extensor-carpi-radialis-brevis",
        name: "Extensor carpi radialis brevis",
        part: "Forearm – posterior superficial",
        innervation: "Deep branch of radial nerve (posterior interosseous)",
        bloodSupply: "Radial artery",
      },
      {
        id: "extensor-digitorum",
        name: "Extensor digitorum",
        part: "Forearm – posterior superficial",
        innervation: "Posterior interosseous nerve (radial)",
        bloodSupply: "Posterior interosseous artery",
      },
      {
        id: "extensor-digiti-minimi",
        name: "Extensor digiti minimi",
        part: "Forearm – posterior superficial",
        innervation: "Posterior interosseous nerve",
        bloodSupply: "Posterior interosseous artery",
      },
      {
        id: "extensor-carpi-ulnaris",
        name: "Extensor carpi ulnaris",
        part: "Forearm – posterior superficial",
        innervation: "Posterior interosseous nerve",
        bloodSupply: "Ulnar and posterior interosseous arteries",
      },

      // FOREARM – POSTERIOR DEEP
      {
        id: "supinator",
        name: "Supinator",
        part: "Forearm – posterior deep",
        innervation: "Deep branch of radial nerve",
        bloodSupply: "Radial recurrent and posterior interosseous arteries",
      },
      {
        id: "abductor-pollicis-longus",
        name: "Abductor pollicis longus",
        part: "Forearm – posterior deep",
        innervation: "Posterior interosseous nerve",
        bloodSupply: "Posterior interosseous artery",
      },
      {
        id: "extensor-pollicis-brevis",
        name: "Extensor pollicis brevis",
        part: "Forearm – posterior deep",
        innervation: "Posterior interosseous nerve",
        bloodSupply: "Posterior interosseous artery",
      },
      {
        id: "extensor-pollicis-longus",
        name: "Extensor pollicis longus",
        part: "Forearm – posterior deep",
        innervation: "Posterior interosseous nerve",
        bloodSupply: "Posterior interosseous artery",
      },
      {
        id: "extensor-indicis",
        name: "Extensor indicis",
        part: "Forearm – posterior deep",
        innervation: "Posterior interosseous nerve",
        bloodSupply: "Posterior interosseous artery",
      },

      // HAND – THENAR, HYPOTHENAR, INTEROSSEI, LUMBRICALS (grouped)
      {
        id: "thenar-muscles",
        name: "Thenar muscles (APB, FPB, Opponens pollicis, Adductor pollicis)",
        part: "Hand – thenar eminence",
        innervation:
          "Recurrent branch of median nerve (most thenar muscles); deep branch of ulnar nerve to adductor pollicis",
        bloodSupply: "Superficial and deep palmar arches",
      },
      {
        id: "hypothenar-muscles",
        name: "Hypothenar muscles (ADM, FDM brevis, Opponens digiti minimi)",
        part: "Hand – hypothenar eminence",
        innervation: "Deep branch of ulnar nerve",
        bloodSupply: "Ulnar artery via superficial palmar arch",
      },
      {
        id: "lumbricals-hand",
        name: "Lumbricals (1–4)",
        part: "Hand – mid-palmar",
        innervation:
          "Lateral 2: median nerve; medial 2: deep branch of ulnar nerve",
        bloodSupply: "Palmar metacarpal and digital arteries",
      },
      {
        id: "interossei-hand",
        name: "Palmar & dorsal interossei",
        part: "Hand – deep layer",
        innervation: "Deep branch of ulnar nerve",
        bloodSupply: "Deep palmar arch and palmar metacarpal arteries",
      },
    ],
  },
];
