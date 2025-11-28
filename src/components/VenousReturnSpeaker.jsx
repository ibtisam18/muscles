// src/components/VenousReturnSpeaker.jsx
import React, { useState, useRef, useEffect } from "react";
import "./AortaToFootSpeaker.css"; // reuse same styles
import VenousDiagram from "./VenousDiagram.jsx"; // 👈 NEW

// English venous steps: foot → IVC → right atrium
const VENOUS_STEPS_EN = [
  "We begin in the small veins of the toes and the plantar venous plexus in the sole of the foot.",
  "These veins drain into the plantar venous arches and then into the medial and lateral plantar veins.",
  "The medial and lateral plantar veins unite to form the posterior tibial veins.",
  "Superficially, blood from the medial side of the foot and leg drains into the great saphenous vein.",
  "Superficially, blood from the lateral side of the foot drains into the small saphenous vein.",
  "The posterior tibial veins and the fibular (peroneal) veins run in the deep posterior compartment of the leg.",
  "Anteriorly, the anterior tibial veins collect blood from the dorsum of the foot.",
  "Around the knee, these deep veins join to form the popliteal vein in the popliteal fossa.",
  "The small saphenous vein usually drains into the popliteal vein.",
  "Above the knee, the popliteal vein continues as the femoral vein.",
  "The great saphenous vein ascends on the medial side of the leg and thigh and drains into the femoral vein near the groin.",
  "As it passes beneath the inguinal ligament, the femoral vein becomes the external iliac vein.",
  "The internal iliac vein drains blood from the pelvic organs and gluteal region.",
  "The external and internal iliac veins join to form the common iliac vein on each side.",
  "The right and left common iliac veins unite to form the inferior vena cava at the level of L5.",
  "The inferior vena cava ascends on the right side of the vertebral column through the abdomen and thorax.",
  "It passes through the diaphragm and enters the right atrium of the heart.",
  "This completes the pathway of venous return from the foot to the heart."
];

const VENOUS_STEPS_FR = [
  "Nous commençons dans les petites veines des orteils et le plexus veineux plantaire dans la plante du pied.",
  "Ces veines se drainent dans les arcades veineuses plantaires puis dans les veines plantaires médiale et latérale.",
  "Les veines plantaires médiale et latérale s'unissent pour former les veines tibiales postérieures.",
  "En superficie, le sang du côté médial du pied et de la jambe se draine dans la grande veine saphène.",
  "En superficie, le sang du côté latéral du pied se draine dans la petite veine saphène.",
  "Les veines tibiales postérieures et les veines fibulaires (péronières) cheminent dans le compartiment postérieur profond de la jambe.",
  "En avant, les veines tibiales antérieures recueillent le sang du dos du pied.",
  "Autour du genou, ces veines profondes s'unissent pour former la veine poplitée dans la fosse poplitée.",
  "La petite veine saphène se draine généralement dans la veine poplitée.",
  "Au-dessus du genou, la veine poplitée se poursuit comme veine fémorale.",
  "La grande veine saphène monte sur le côté médial de la jambe et de la cuisse et se draine dans la veine fémorale près de l'aine.",
  "En passant sous le ligament inguinal, la veine fémorale devient la veine iliaque externe.",
  "La veine iliaque interne draine le sang des organes pelviens et de la région fessière.",
  "Les veines iliaques externe et interne s'unissent pour former la veine iliaque commune de chaque côté.",
  "Les veines iliaques communes droite et gauche s'unissent pour former la veine cave inférieure au niveau de L5.",
  "La veine cave inférieure monte sur le côté droit de la colonne vertébrale à travers l'abdomen et le thorax.",
  "Elle traverse le diaphragme et pénètre dans l'oreillette droite du cœur.",
  "Ainsi se complète le trajet du retour veineux du pied vers le cœur."
];

const VENOUS_STEPS_AR = [
  "نبدأ من الأوردة الصغيرة في أصابع القدم والضفيرة الوريدية الأخمصية في باطن القدم.",
  "تتصرف هذه الأوردة إلى الأقواس الوريدية الأخمصية ثم إلى الوريدين الأخمصيين الإنسي والوحشي.",
  "يتحد الوريد الأخمصي الإنسي والوريد الأخمصي الوحشي لتكوين الأوردة الظنبوبية الخلفية.",
  "سطحياً، يتصرف الدم من الجانب الأنسي للقدم والساق إلى الوريد الصافن الكبير.",
  "سطحياً، يتصرف الدم من الجانب الوحشي للقدم إلى الوريد الصافن الصغير.",
  "تسير الأوردة الظنبوبية الخلفية والأوردة الشظوية في الحجرة الخلفية العميقة للساق.",
  "أمامياً، تجمع الأوردة الظنبوبية الأمامية الدم من ظهر القدم.",
  "حول الركبة، تتحد هذه الأوردة العميقة لتكوّن الوريد المأبضي في الحفرة المأبضية.",
  "عادةً ما يصب الوريد الصافن الصغير في الوريد المأبضي.",
  "فوق الركبة، يستمر الوريد المأبضي ليصبح الوريد الفخذي.",
  "يصعد الوريد الصافن الكبير على الجانب الأنسي للساق والفخذ ويصب في الوريد الفخذي قرب المنطقة الأربية.",
  "عند مروره تحت الرباط الأربي يصبح الوريد الفخذي الوريد الحرقفي الخارجي.",
  "يُصرّف الوريد الحرقفي الداخلي الدم من أعضاء الحوض والمنطقة الألوية.",
  "يتحد الوريدان الحرقفيان الخارجي والداخلي لتكوين الوريد الحرقفي الأصلي في كل جانب.",
  "يتحد الوريدان الحرقفيان الأصليان الأيمن والأيسر لتكوين الوريد الأجوف السفلي عند مستوى الفقرة L5.",
  "يصعد الوريد الأجوف السفلي على الجانب الأيمن من العمود الفقري عبر البطن والصدر.",
  "يعبر الحجاب الحاجز ويدخل الأذين الأيمن للقلب.",
  "وبذلك يكتمل مسار العودة الوريدية من القدم إلى القلب."
];

const VENOUS_STEP_SETS = {
  en: VENOUS_STEPS_EN,
  fr: VENOUS_STEPS_FR,
  ar: VENOUS_STEPS_AR
};

function VenousReturnSpeaker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [messages, setMessages] = useState([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  const [theme, setTheme] = useState("dark");
  const [language, setLanguage] = useState("en");
  const [voices, setVoices] = useState([]);
  const [voice, setVoice] = useState(null);

  // 👇 NEW: which venous segment is highlighted
  const [activeSegmentId, setActiveSegmentId] = useState("plantar-plexus");

  const typingIntervalRef = useRef(null);

  useEffect(() => {
    if (!("speechSynthesis" in window)) return;

    const loadVoices = () => {
      const list = window.speechSynthesis.getVoices() || [];
      setVoices(list);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;

    return () => {
      window.speechSynthesis.cancel();
      if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    };
  }, []);

  useEffect(() => {
    if (!voices.length) return;

    const langPrefix =
      language === "en" ? "en" : language === "fr" ? "fr" : "ar";

    const chosen =
      voices.find((v) =>
        v.lang.toLowerCase().startsWith(langPrefix.toLowerCase())
      ) ||
      voices.find((v) => v.lang.toLowerCase().startsWith("en")) ||
      voices[0];

    setVoice(chosen);
  }, [language, voices]);

  // 👇 NEW: map each step index → diagram segment ID
  const updateActiveSegment = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        setActiveSegmentId("plantar-plexus");
        break;
      case 1:
        setActiveSegmentId("plantar-veins");
        break;
      case 2:
        setActiveSegmentId("posterior-tibial");
        break;
      case 3:
        setActiveSegmentId("great-saphenous");
        break;
      case 4:
        setActiveSegmentId("small-saphenous");
        break;
      case 5:
        setActiveSegmentId("fibular-veins");
        break;
      case 6:
        setActiveSegmentId("anterior-tibial");
        break;
      case 7:
      case 8:
        setActiveSegmentId("popliteal-vein");
        break;
      case 9:
      case 10:
        setActiveSegmentId("femoral-vein");
        break;
      case 11:
        setActiveSegmentId("external-iliac");
        break;
      case 12:
        setActiveSegmentId("internal-iliac");
        break;
      case 13:
        setActiveSegmentId("common-iliac");
        break;
      case 14:
      case 15:
        setActiveSegmentId("ivc");
        break;
      case 16:
      case 17:
        setActiveSegmentId("right-atrium");
        break;
      default:
        break;
    }
  };

  const startTyping = (fullText) => {
    setDisplayText("");
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    let index = 0;
    typingIntervalRef.current = setInterval(() => {
      index++;
      setDisplayText(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(typingIntervalRef.current);
        typingIntervalRef.current = null;
      }
    }, 25);
  };

  const speakStep = (stepIndex) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }

    const stepsForLang = VENOUS_STEP_SETS[language] || VENOUS_STEP_SETS.en;
    const text = stepsForLang[stepIndex];

    const utterance = new SpeechSynthesisUtterance(text);
    if (voice) utterance.voice = voice;
    utterance.pitch = 1.05;
    utterance.rate = 0.95;

    utterance.onstart = () => {
      setIsSpeaking(true);
      updateActiveSegment(stepIndex); // 👈 NEW: highlight correct segment
      startTyping(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setMessages((prev) => [...prev, { role: "tutor", text }]);

      if (stepIndex + 1 < stepsForLang.length) {
        setCurrentStep(stepIndex + 1);
        setTimeout(() => {
          speakStep(stepIndex + 1);
        }, 600);
      }
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleStart = () => {
    window.speechSynthesis.cancel();
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    setMessages([]);
    setCurrentStep(0);
    setHasStarted(true);
    setActiveSegmentId("plantar-plexus"); // reset diagram
    speakStep(0);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    if (typingIntervalRef.current) clearInterval(typingIntervalRef.current);
    setIsSpeaking(false);
  };

  const handleLanguageChange = (e) => setLanguage(e.target.value);

  const handlePreviewVoice = () => {
    if (!("speechSynthesis" in window) || !voice) return;
    window.speechSynthesis.cancel();

    let previewText = "";
    if (language === "en") {
      previewText = "Hi, I will explain venous return from the foot to the heart.";
    } else if (language === "fr") {
      previewText =
        "Bonjour, je vais expliquer le retour veineux du pied vers le cœur.";
    } else {
      previewText = "مرحباً، سأشرح مسار العودة الوريدية من القدم إلى القلب.";
    }

    const preview = new SpeechSynthesisUtterance(previewText);
    preview.voice = voice;
    preview.pitch = 1.05;
    preview.rate = 0.98;
    window.speechSynthesis.speak(preview);
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return (
    <div className={`speaker-root ${theme}`}>
      <div className="speaker-header">
        <div className="header-left">
          <h1>Venous Return: Foot → IVC → Heart</h1>
        </div>

    
      </div>

      <div className="speaker-controls">
        <label className="language-select">
          <span>Language:</span>
          <select
            value={language}
            onChange={handleLanguageChange}
            disabled={isSpeaking}
          >
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="fr">French</option>
          </select>
        </label>

        <button
          type="button"
          onClick={handlePreviewVoice}
          disabled={!voice || isSpeaking}
        >
          Test voice
        </button>

        <button onClick={handleStart} disabled={isSpeaking}>
          {hasStarted ? "Restart explanation" : "Start speaking"}
        </button>

        <button onClick={handleStop} disabled={!isSpeaking}>
          Stop
        </button>
      </div>

      <div className="speaker-content">
        <div className="chat-window">
          {messages.map((msg, index) => (
            <div key={index} className="chat-bubble tutor">
              <div className="chat-name">Tutor</div>
              <div className="chat-text">{msg.text}</div>
            </div>
          ))}

          {isSpeaking && (
            <div className="chat-bubble tutor live">
              <div className="chat-name">Tutor (speaking)</div>
              <div className="chat-text">{displayText}</div>
            </div>
          )}

          {!isSpeaking &&
            hasStarted &&
            currentStep ===
              (VENOUS_STEP_SETS[language] || VENOUS_STEP_SETS.en).length - 1 && (
              <div className="chat-bubble system">
                <div className="chat-text">
                  ✅ Finished venous return. Click “Restart explanation” to hear it again.
                </div>
              </div>
            )}
        </div>
        

        {/* 👇 NEW: diagram on the side */}
        <VenousDiagram activeSegmentId={activeSegmentId} />
      </div>
    </div>
    
  );
}

export default VenousReturnSpeaker;
