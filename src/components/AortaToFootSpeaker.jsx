// src/components/AortaToFootSpeaker.jsx
import React, { useState, useRef, useEffect } from "react";
import "./AortaToFootSpeaker.css";
import ArterialDiagram from "./ArterialDiagram.jsx";

// ✅ Original English steps (unchanged core)
const STEPS = [
  "We begin at the ascending aorta.",
  "The ascending aorta continues into the aortic arch.",
  "The aortic arch gives three main branches.",
  "First, the brachiocephalic trunk.",
  "Second, the left common carotid artery.",
  "Third, the left subclavian artery.",
  "The brachiocephalic trunk divides into the right common carotid artery and the right subclavian artery.",
  "Both common carotid arteries divide into the external carotid artery and the internal carotid artery.",
  "The right subclavian artery continues as the axillary artery.",
  "The axillary artery becomes the brachial artery.",
  "The brachial artery divides into the radial artery and the ulnar artery.",
  "We now continue down the descending thoracic aorta.",
  "The descending aorta passes the diaphragm and becomes the abdominal aorta at the level of L4.",
  "The abdominal aorta gives three unpaired branches: the celiac trunk, the superior mesenteric artery, and the inferior mesenteric artery.",
  "At the level of L4, the abdominal aorta bifurcates.",
  "It divides into the right common iliac artery and the left common iliac artery.",
  "Each common iliac artery divides into the internal iliac artery and the external iliac artery.",
  "The internal iliac artery supplies the pelvic organs and the genital region.",
  "The external iliac artery continues beneath the inguinal ligament.",
  "After passing the inguinal ligament, the external iliac artery becomes the femoral artery.",
  "The femoral artery travels through the thigh.",
  "After passing through the adductor hiatus, the femoral artery becomes the popliteal artery.",
  "At the popliteal fossa, the popliteal artery divides into the anterior tibial artery and the tibio-peroneal trunk.",
  "The anterior tibial artery continues into the foot as the dorsalis pedis artery.",
  "Dorsalis pedis gives the arcuate artery and the dorsal metatarsal arteries.",
  "The tibio-peroneal trunk divides into the posterior tibial artery and the fibular artery.",
  "The posterior tibial artery divides into the medial plantar artery and the lateral plantar artery.",
  "The fibular artery runs along the lateral part of the posterior compartment of the leg.",
  "This completes the pathway from the ascending aorta to the arteries of the foot."
];

// ✅ Multilingual versions of the same steps
const STEP_SETS = {
  en: STEPS,
  fr: [
    "Nous commençons au niveau de l'aorte ascendante.",
    "L'aorte ascendante se poursuit par la crosse aortique.",
    "La crosse de l'aorte donne trois branches principales.",
    "D'abord, le tronc brachiocéphalique.",
    "Deuxièmement, l'artère carotide commune gauche.",
    "Troisièmement, l'artère subclavière gauche.",
    "Le tronc brachiocéphalique se divise en artère carotide commune droite et artère subclavière droite.",
    "Les deux artères carotides communes se divisent en artère carotide externe et artère carotide interne.",
    "L'artère subclavière droite se poursuit comme l'artère axillaire.",
    "L'artère axillaire devient l'artère brachiale.",
    "L'artère brachiale se divise en artère radiale et artère ulnaire.",
    "Nous continuons maintenant vers le bas dans l'aorte thoracique descendante.",
    "L'aorte descendante traverse le diaphragme et devient l'aorte abdominale au niveau de T12.",
    "L'aorte abdominale donne trois branches impaires : le tronc cœliaque, l'artère mésentérique supérieure et l'artère mésentérique inférieure.",
    "Au niveau de L4, l'aorte abdominale se bifurque.",
    "Elle se divise en artère iliaque commune droite et artère iliaque commune gauche.",
    "Chaque artère iliaque commune se divise en artère iliaque interne et artère iliaque externe.",
    "L'artère iliaque interne irrigue les organes pelviens et la région génitale.",
    "L'artère iliaque externe se poursuit sous le ligament inguinal.",
    "Après avoir passé le ligament inguinal, l'artère iliaque externe devient l'artère fémorale.",
    "L'artère fémorale chemine à travers la cuisse.",
    "Après avoir traversé le hiatus de l'adducteur, l'artère fémorale devient l'artère poplitée.",
    "Au niveau de la fosse poplitée, l'artère poplitée se divise en artère tibiale antérieure et tronc tibio-péronier.",
    "L'artère tibiale antérieure se poursuit dans le pied comme l'artère dorsale du pied (artère dorsalis pedis).",
    "L'artère dorsale du pied donne l'arcade dorsale et les artères métatarsiennes dorsales.",
    "Le tronc tibio-péronier se divise en artère tibiale postérieure et artère fibulaire (péronière).",
    "L'artère tibiale postérieure se divise en artère plantaire médiale et artère plantaire latérale.",
    "L'artère fibulaire longe la partie latérale du compartiment postérieur de la jambe.",
    "Ceci complète le trajet de l'aorte ascendante jusqu'aux artères du pied."
  ],
  ar: [
    "نبدأ من الأبهر الصاعد.",
    "يستمر الأبهر الصاعد ليصبح قوس الأبهر.",
    "يعطي قوس الأبهر ثلاث فروع رئيسية.",
    "أولاً، الجذع العضدي الرأسي.",
    "ثانياً، الشريان السباتي الأصلي الأيسر.",
    "ثالثاً، الشريان تحت الترقوة الأيسر.",
    "ينقسم الجذع العضدي الرأسي إلى الشريان السباتي الأصلي الأيمن والشريان تحت الترقوة الأيمن.",
    "ينقسم كل من الشريانين السباتيين الأصليين إلى الشريان السباتي الظاهري والشريان السباتي الباطني.",
    "يستمر الشريان تحت الترقوة الأيمن ليصبح الشريان الإبطي.",
    "يتحول الشريان الإبطي إلى الشريان العضدي.",
    "ينقسم الشريان العضدي إلى الشريان الكعبري والشريان الزندي.",
    "نتابع الآن نزولاً في الأبهر الصدري النازل.",
    "يعبر الأبهر النازل الحجاب الحاجز ويصبح الأبهر البطني عند مستوى الفقرة T12.",
    "يعطي الأبهر البطني ثلاث فروع غير مزدوجة: الجذع البطني، والشريان المساريقي العلوي، والشريان المساريقي السفلي.",
    "عند مستوى الفقرة L4 ينقسم الأبهر البطني.",
    "ينقسم إلى الشريان الحرقفي الأصلي الأيمن والشريان الحرقفي الأصلي الأيسر.",
    "ينقسم كل شريان حرقفي أصلي إلى شريان حرقفي داخلي وشريان حرقفي خارجي.",
    "يروي الشريان الحرقفي الداخلي أعضاء الحوض والمنطقة التناسلية.",
    "يستمر الشريان الحرقفي الخارجي تحت الرباط الأربي.",
    "بعد اجتياز الرباط الأربي يصبح الشريان الحرقفي الخارجي الشريان الفخذي.",
    "يسير الشريان الفخذي خلال الفخذ.",
    "بعد مروره عبر ثقب العضلة المقربة يصبح الشريان الفخذي الشريان المأبضي.",
    "في الحفرة المأبضية ينقسم الشريان المأبضي إلى الشريان الظنبوبي الأمامي والجذع الظنبوبي الشظوي.",
    "يستمر الشريان الظنبوبي الأمامي في القدم كالشريان الظهري للقدم.",
    "يعطي الشريان الظهري للقدم الشريان القوسي والشرايين المشطية الظهرية.",
    "ينقسم الجذع الظنبوبي الشظوي إلى الشريان الظنبوطي الخلفي والشريان الشظوي.",
    "ينقسم الشريان الظنبوطي الخلفي إلى الشريان الأخمصي الإنسي والشريان الأخمصي الوحشي.",
    "يجري الشريان الشظوي على طول الجزء الوحشي من الحجرة الخلفية للساق.",
    "وهكذا يكتمل المسار من الأبهر الصاعد إلى شرايين القدم."
  ]
};

function AortaToFootSpeaker() {
  const [currentStep, setCurrentStep] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [messages, setMessages] = useState([]); // finished lines
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [activeSegmentId, setActiveSegmentId] = useState("ascending-aorta");

  // ✅ language + voices
  const [language, setLanguage] = useState("en");
  const [voices, setVoices] = useState([]);
  const [voice, setVoice] = useState(null);

  const typingIntervalRef = useRef(null);
  const utteranceRef = useRef(null);

  // Load voices once
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
      if (typingIntervalRef.current) {
        clearInterval(typingIntervalRef.current);
      }
    };
  }, []);

  // Pick a voice that matches the current language
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

  const updateActiveSegment = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        setActiveSegmentId("ascending-aorta");
        break;
      case 1:
      case 2:
        setActiveSegmentId("aortic-arch");
        break;
      case 3:
      case 4:
      case 5:
        setActiveSegmentId("arch-branches");
        break;
      case 6:
      case 7:
        setActiveSegmentId("subclavian-common-carotid");
        break;
      case 8:
      case 9:
      case 10:
        setActiveSegmentId("upper-limb");
        break;
      case 11:
      case 12:
        setActiveSegmentId("descending-aorta");
        break;
      case 13:
        setActiveSegmentId("visceral-branches");
        break;
      case 14:
      case 15:
      case 16:
        setActiveSegmentId("bifurcation-common-iliac");
        break;
      case 17:
      case 18:
        setActiveSegmentId("internal-iliac");
        break;
      case 19:
      case 20:
        setActiveSegmentId("external-iliac-femoral");
        break;
      case 21:
      case 22:
        setActiveSegmentId("popliteal");
        break;
      case 23:
      case 24:
        setActiveSegmentId("anterior-tibial-dorsalis");
        break;
      case 25:
      case 26:
        setActiveSegmentId("posterior-tibial-plantar");
        break;
      case 27:
        setActiveSegmentId("fibular");
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
    }, 25); // typing speed (ms)
  };

  const speakStep = (stepIndex) => {
    if (!("speechSynthesis" in window)) {
      alert("Sorry, your browser does not support speech synthesis.");
      return;
    }

    const stepsForLang = STEP_SETS[language] || STEP_SETS.en;
    const text = stepsForLang[stepIndex];

    const utterance = new SpeechSynthesisUtterance(text);

    if (voice) {
      utterance.voice = voice;
    }
    utterance.pitch = 1.05;
    utterance.rate = 0.95;

    utteranceRef.current = utterance;

    utterance.onstart = () => {
      setIsSpeaking(true);
      updateActiveSegment(stepIndex);
      startTyping(text);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setMessages((prev) => [
        ...prev,
        { role: "tutor", text }
      ]);

      if (stepIndex + 1 < STEPS.length) {
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
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    setMessages([]);
    setCurrentStep(0);
    setHasStarted(true);
    setActiveSegmentId("ascending-aorta");
    speakStep(0);
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    if (typingIntervalRef.current) {
      clearInterval(typingIntervalRef.current);
    }
    setIsSpeaking(false);
  };

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
  };

  const handlePreviewVoice = () => {
    if (!("speechSynthesis" in window)) return;
    if (!voice) return;

    window.speechSynthesis.cancel();

    let previewText = "";
    if (language === "en") {
      previewText = "Hi, I will explain the pathway from the aorta to the foot.";
    } else if (language === "fr") {
      previewText = "Bonjour, je vais expliquer le trajet de l'aorte jusqu'au pied.";
    } else if (language === "ar") {
      previewText = "مرحباً، سأشرح لك المسار من الأبهر إلى شرايين القدم.";
    }

    const preview = new SpeechSynthesisUtterance(previewText);
    preview.voice = voice;
    preview.pitch = 1.05;
    preview.rate = 0.98;

    window.speechSynthesis.speak(preview);
  };

  return (
    <div className="speaker-root">
      <div className="speaker-header">
        <h1>Ascending Aorta → Foot Arteries</h1>
      
      </div>

      <div className="speaker-controls">
        {/* Language selector */}
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
            currentStep === STEPS.length - 1 && (
              <div className="chat-bubble system">
                <div className="chat-text">
                  ✅ Finished the pathway. Click “Restart explanation” to hear it again.
                </div>
              </div>
            )}
        </div>

        <ArterialDiagram activeSegmentId={activeSegmentId} />
      </div>
    </div>
  );
}

export default AortaToFootSpeaker;

