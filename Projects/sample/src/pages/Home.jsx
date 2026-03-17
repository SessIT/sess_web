import { useState, useEffect, useRef } from "react";
import Header from "../framework/Header";
import Footer from "../framework/Footer";

/* ─────────────────────────────────────────────
   Slide data – swap SVGs / copy to fit your product
───────────────────────────────────────────── */
const SLIDES = [
  {
    tag: "Intelligent Platform",
    title: ["Transform Ideas Into", "Reality with ", "AI Power"],
    accent: 2,
    description:
      "Supercharge your workflow with our next-generation AI engine. Process, predict, and act on data in real time — with unmatched precision.",
    stats: [
      { value: "98.4%", label: "Accuracy" },
      { value: "10M+",  label: "Predictions / day" },
      { value: "4ms",   label: "Avg latency" },
    ],
    cta: "Start for free",
    ctaSub: "See how it works",
    accentColor: "#6366f1",
    glowColor: "rgba(99,102,241,0.25)",
  },
  {
    tag: "Live Analytics",
    title: ["Real-time Insights", "That Drive ", "Growth"],
    accent: 2,
    description:
      "Monitor every metric that matters on a single beautiful dashboard. Surface trends before they become problems and act with confidence.",
    stats: [
      { value: "$2.4M", label: "Revenue tracked" },
      { value: "84K",   label: "Active users" },
      { value: "+32%",  label: "QoQ growth" },
    ],
    cta: "View dashboard",
    ctaSub: "Explore metrics",
    accentColor: "#22d3ee",
    glowColor: "rgba(34,211,238,0.2)",
  },
  {
    tag: "Global Infrastructure",
    title: ["Deployed in Minutes,", "Trusted by ", "Millions"],
    accent: 2,
    description:
      "Our distributed edge network spans 180+ countries with 99.99% uptime SLA. Zero cold starts, sub-millisecond routing, enterprise-grade security.",
    stats: [
      { value: "180+",   label: "Countries" },
      { value: "99.99%", label: "Uptime SLA" },
      { value: "500+",   label: "Edge nodes" },
    ],
    cta: "Explore network",
    ctaSub: "View SLA docs",
    accentColor: "#4ade80",
    glowColor: "rgba(74,222,128,0.2)",
  },
  {
    tag: "Developer SDK",
    title: ["Integrate in Hours,", "Ship in ", "Days"],
    accent: 2,
    description:
      "A beautifully designed SDK for every major language. Clean REST & GraphQL APIs, rich docs, and a thriving community of 50K+ developers.",
    stats: [
      { value: "12ms", label: "API response" },
      { value: "50K+", label: "Developers" },
      { value: "20+",  label: "SDKs" },
    ],
    cta: "Read the docs",
    ctaSub: "API reference",
    accentColor: "#e879f9",
    glowColor: "rgba(232,121,249,0.2)",
  },
];

/* ─────────────────────────────────────────────
   Per-slide SVG product illustrations
───────────────────────────────────────────── */
const IllustrationAI = () => (
  <svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="ai-center" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#6366f1" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.6" />
      </radialGradient>
    </defs>
    {/* Rings */}
    {[160, 120, 80].map((r, i) => (
      <circle key={i} cx="260" cy="240" r={r} fill="none"
        stroke="rgba(99,102,241,0.12)" strokeWidth="1" />
    ))}
    {/* Outer nodes */}
    {[
      [260,80],[390,160],[420,300],[340,410],[180,410],[100,300],[130,160]
    ].map(([cx,cy], i) => (
      <circle key={i} cx={cx} cy={cy} r={i%2===0?9:6}
        fill={i%3===0?"#818cf8":i%3===1?"#e879f9":"#22d3ee"} opacity="0.85" />
    ))}
    {/* Connector lines */}
    {[
      [260,80,260,160],[390,160,340,195],[420,300,365,285],
      [340,410,290,322],[180,410,230,322],[100,300,155,285],[130,160,180,195],
    ].map(([x1,y1,x2,y2],i) => (
      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
        stroke="rgba(129,140,248,0.28)" strokeWidth="1" />
    ))}
    {/* Center glow ring */}
    <circle cx="260" cy="240" r="44" fill="rgba(99,102,241,0.12)" />
    <circle cx="260" cy="240" r="30" fill="url(#ai-center)" />
    <text x="260" y="247" fill="#fff" fontSize="14" fontFamily="sans-serif"
      textAnchor="middle" fontWeight="700">AI</text>
    {/* Floating card */}
    <rect x="60" y="390" width="180" height="56" rx="14"
      fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth="0.5" />
    <circle cx="83" cy="418" r="6" fill="#4ade80">
      <animate attributeName="opacity" values="1;0.4;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <text x="96" y="413" fill="rgba(255,255,255,0.4)" fontSize="10" fontFamily="sans-serif">Model accuracy</text>
    <text x="96" y="430" fill="#818cf8" fontSize="18" fontFamily="sans-serif" fontWeight="700">98.4%</text>
  </svg>
);

const IllustrationDashboard = () => (
  <svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    {/* Main card */}
    <rect x="50" y="60" width="420" height="340" rx="18"
      fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.08)" strokeWidth="0.8" />
    {/* Top bar */}
    <rect x="50" y="60" width="420" height="44" rx="18" fill="rgba(255,255,255,0.06)" />
    <rect x="50" y="90" width="420" height="14" fill="rgba(255,255,255,0.06)" />
    {["rgba(255,90,90,0.6)","rgba(255,200,50,0.6)","rgba(74,222,128,0.6)"].map((c,i)=>
      <circle key={i} cx={76+18*i} cy={82} r={5} fill={c} />
    )}
    <text x="260" y="87" fill="rgba(255,255,255,0.25)" fontSize="11"
      fontFamily="monospace" textAnchor="middle">Analytics Dashboard</text>
    {/* Metric chips */}
    {[
      {x:72,color:"rgba(99,102,241,0.15)",stroke:"rgba(99,102,241,0.3)",val:"$2.4M",lbl:"Revenue",vc:"#818cf8"},
      {x:205,color:"rgba(232,121,249,0.1)",stroke:"rgba(232,121,249,0.25)",val:"84.2K",lbl:"Users",vc:"#e879f9"},
      {x:338,color:"rgba(34,211,238,0.1)",stroke:"rgba(34,211,238,0.25)",val:"99.9%",lbl:"Uptime",vc:"#22d3ee"},
    ].map((m,i)=>(
      <g key={i}>
        <rect x={m.x} y="128" width="112" height="64" rx="10"
          fill={m.color} stroke={m.stroke} strokeWidth="0.5" />
        <text x={m.x+56} y="150" fill="rgba(255,255,255,0.4)" fontSize="10"
          fontFamily="sans-serif" textAnchor="middle">{m.lbl}</text>
        <text x={m.x+56} y="174" fill={m.vc} fontSize="20"
          fontFamily="sans-serif" textAnchor="middle" fontWeight="700">{m.val}</text>
      </g>
    ))}
    {/* Bars */}
    {[60,80,90,105,95,120,135].map((h,i)=>(
      <rect key={i} x={72+i*42} y={320-h} width="28" height={h} rx="4"
        fill="rgba(99,102,241,0.6)" opacity={0.5+i*0.07} />
    ))}
    <line x1="72" y1="320" x2="450" y2="320" stroke="rgba(255,255,255,0.07)" strokeWidth="0.5" />
    {/* Trend line */}
    <polyline points="344,310 368,290 392,298 416,272 440,258"
      fill="none" stroke="#22d3ee" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="440" cy="258" r="3" fill="#22d3ee" />
  </svg>
);

const IllustrationGlobe = () => (
  <svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <defs>
      <radialGradient id="globe-c" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stopColor="#4ade80" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.7" />
      </radialGradient>
    </defs>
    <ellipse cx="260" cy="240" rx="185" ry="185" fill="none" stroke="rgba(74,222,128,0.08)" strokeWidth="1" />
    <ellipse cx="260" cy="240" rx="185" ry="75"  fill="none" stroke="rgba(74,222,128,0.06)" strokeWidth="0.6" />
    <ellipse cx="260" cy="240" rx="185" ry="130" fill="none" stroke="rgba(74,222,128,0.05)" strokeWidth="0.6" />
    <ellipse cx="260" cy="240" rx="75"  ry="185" fill="none" stroke="rgba(74,222,128,0.05)" strokeWidth="0.6" />
    {[
      [175,195,8,"#4ade80"],[358,178,6,"#22d3ee"],[320,345,9,"#4ade80"],
      [150,345,6,"#22d3ee"],[400,290,7,"#4ade80"],[265,162,5,"#a78bfa"],
    ].map(([cx,cy,r,fill],i)=>(
      <circle key={i} cx={cx} cy={cy} r={r} fill={fill} opacity="0.85" />
    ))}
    <path d="M175,195 Q220,140 358,178" fill="none" stroke="rgba(74,222,128,0.22)" strokeWidth="0.9" />
    <path d="M320,345 Q260,400 150,345" fill="none" stroke="rgba(34,211,238,0.22)" strokeWidth="0.9" />
    <path d="M175,195 Q140,270 150,345" fill="none" stroke="rgba(74,222,128,0.18)" strokeWidth="0.9" />
    <path d="M358,178 Q420,234 400,290" fill="none" stroke="rgba(34,211,238,0.18)" strokeWidth="0.9" />
    <circle cx="260" cy="240" r="38" fill="rgba(74,222,128,0.09)" />
    <circle cx="260" cy="240" r="24" fill="url(#globe-c)" />
    <text x="260" y="247" fill="#fff" fontSize="10" fontFamily="sans-serif"
      textAnchor="middle" fontWeight="700">GLOBAL</text>
    <text x="260" y="420" fill="rgba(255,255,255,0.55)" fontSize="32"
      fontFamily="sans-serif" textAnchor="middle" fontWeight="700">180+</text>
    <text x="260" y="442" fill="rgba(255,255,255,0.3)" fontSize="12"
      fontFamily="sans-serif" textAnchor="middle">Countries Served</text>
  </svg>
);

const IllustrationCode = () => (
  <svg viewBox="0 0 520 480" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <rect x="50" y="70" width="420" height="340" rx="16"
      fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.07)" strokeWidth="0.8" />
    <rect x="50" y="70" width="420" height="40" rx="16" fill="rgba(255,255,255,0.05)" />
    <rect x="50" y="98" width="420" height="12" fill="rgba(255,255,255,0.05)" />
    {["rgba(255,90,90,0.6)","rgba(255,200,50,0.6)","rgba(74,222,128,0.6)"].map((c,i)=>
      <circle key={i} cx={74+17*i} cy={90} r={5} fill={c} />
    )}
    <text x="260" y="95" fill="rgba(255,255,255,0.22)" fontSize="11"
      fontFamily="monospace" textAnchor="middle">main.ts — SDK v3.0</text>
    {/* Line numbers */}
    {[1,2,3,4,5,6,7,8,9].map((n,i)=>(
      <text key={i} x="72" y={145+i*26} fill="rgba(255,255,255,0.15)"
        fontSize="11" fontFamily="monospace">{String(n).padStart(2,"0")}</text>
    ))}
    {/* Code */}
    <text x="100" y="145" fill="#e879f9" fontSize="11" fontFamily="monospace">import</text>
    <text x="143" y="145" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace"> {"{ SDK }"} </text>
    <text x="200" y="145" fill="#e879f9" fontSize="11" fontFamily="monospace">from</text>
    <text x="226" y="145" fill="#4ade80" fontSize="11" fontFamily="monospace">'@nxora/sdk'</text>

    <text x="100" y="197" fill="#818cf8" fontSize="11" fontFamily="monospace">const</text>
    <text x="132" y="197" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="monospace"> client = </text>
    <text x="193" y="197" fill="#22d3ee" fontSize="11" fontFamily="monospace">new SDK</text>
    <text x="244" y="197" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="monospace">{"({"}</text>

    <text x="118" y="223" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">apiKey:</text>
    <text x="170" y="223" fill="#4ade80" fontSize="11" fontFamily="monospace">'sk-••••••••'</text>

    <text x="118" y="249" fill="rgba(255,255,255,0.4)" fontSize="11" fontFamily="monospace">model:</text>
    <text x="162" y="249" fill="#4ade80" fontSize="11" fontFamily="monospace">'nxora-pro'</text>

    <text x="100" y="275" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="monospace">{"})"}</text>

    <text x="100" y="327" fill="#818cf8" fontSize="11" fontFamily="monospace">const</text>
    <text x="132" y="327" fill="rgba(255,255,255,0.65)" fontSize="11" fontFamily="monospace"> res = </text>
    <text x="174" y="327" fill="#22d3ee" fontSize="11" fontFamily="monospace">await </text>
    <text x="212" y="327" fill="rgba(255,255,255,0.6)" fontSize="11" fontFamily="monospace">client.</text>
    <text x="254" y="327" fill="#e879f9" fontSize="11" fontFamily="monospace">analyze</text>
    <text x="307" y="327" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="monospace">(data)</text>

    <text x="100" y="379" fill="#818cf8" fontSize="11" fontFamily="monospace">console</text>
    <text x="150" y="379" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="monospace">.</text>
    <text x="156" y="379" fill="#22d3ee" fontSize="11" fontFamily="monospace">log</text>
    <text x="178" y="379" fill="rgba(255,255,255,0.45)" fontSize="11" fontFamily="monospace">(res)</text>

    <rect x="100" y="393" width="2" height="14" fill="#818cf8" opacity="0.8">
      <animate attributeName="opacity" values="1;0;1" dur="1s" repeatCount="indefinite" />
    </rect>
  </svg>
);

const ILLUSTRATIONS = [IllustrationAI, IllustrationDashboard, IllustrationGlobe, IllustrationCode];

/* ─────────────────────────────────────────────
   HeroSection component
───────────────────────────────────────────── */
const INTERVAL = 5000;

const HeroSection = () => {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev]       = useState(null);
  const [animating, setAnimating] = useState(false);
  const [progress, setProgress]   = useState(0);
  const rafRef     = useRef(null);
  const startRef   = useRef(null);
  const currentRef = useRef(current);
  currentRef.current = current;

  const goTo = (next, manual = false) => {
    if (next === currentRef.current || animating) return;
    setPrev(currentRef.current);
    setAnimating(true);
    setCurrent(next);
    setTimeout(() => { setPrev(null); setAnimating(false); }, 700);
    if (manual) {
      cancelAnimationFrame(rafRef.current);
      setProgress(0);
      startRef.current = null;
    }
  };

  useEffect(() => {
    const tick = (now) => {
      if (!startRef.current) startRef.current = now;
      const pct = Math.min((now - startRef.current) / INTERVAL, 1);
      setProgress(pct);
      if (pct >= 1) {
        const next = (currentRef.current + 1) % SLIDES.length;
        goTo(next);
        startRef.current = null;
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const slide   = SLIDES[current];
  const Illus   = ILLUSTRATIONS[current];
  const PrevIllus = prev !== null ? ILLUSTRATIONS[prev] : null;
  const CIRC    = 2 * Math.PI * 13;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700;800&family=Syne:wght@300;400;500&display=swap');

        .hero-root {
          position: relative;
          overflow: hidden;
          background: #05080f;
          min-height: 92vh;
          display: flex;
          align-items: center;
        }
        .hero-grid-bg {
          position: absolute; inset: 0; pointer-events: none;
          background-image:
            linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .hero-orb {
          position: absolute; border-radius: 50%; pointer-events: none;
          filter: blur(90px);
        }
        .hero-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-weight: 800;
          line-height: 1.08;
          font-size: clamp(40px, 5vw, 72px);
          color: #fff;
        }
        .hero-title .accent {
          background: linear-gradient(135deg, var(--ac), #fff 80%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-body { font-family: 'Syne', sans-serif; }

        /* Slide transitions */
        .img-enter  { animation: imgIn  0.7s cubic-bezier(.4,0,.2,1) forwards; }
        .img-exit   { animation: imgOut 0.6s cubic-bezier(.4,0,.2,1) forwards; }
        .txt-enter  { animation: txtIn  0.65s cubic-bezier(.4,0,.2,1) 0.1s both; }
        .txt-exit   { animation: txtOut 0.5s cubic-bezier(.4,0,.2,1) forwards; }

        @keyframes imgIn  { from { opacity:0; transform: scale(0.93) translateX(-28px); }
                            to   { opacity:1; transform: scale(1)    translateX(0); } }
        @keyframes imgOut { from { opacity:1; transform: scale(1)    translateX(0); }
                            to   { opacity:0; transform: scale(1.04) translateX(28px); } }
        @keyframes txtIn  { from { opacity:0; transform: translateY(36px); }
                            to   { opacity:1; transform: translateY(0); } }
        @keyframes txtOut { from { opacity:1; transform: translateY(0); }
                            to   { opacity:0; transform: translateY(-24px); } }

        .stat-chip { animation: fadeUp 0.5s ease both; }
        @keyframes fadeUp { from {opacity:0;transform:translateY(12px);} to {opacity:1;transform:translateY(0);} }

        .btn-primary {
          font-family: 'Syne', sans-serif;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 28px; border-radius: 100px; border: none;
          background: linear-gradient(135deg, var(--ac), color-mix(in srgb, var(--ac) 60%, #fff));
          color: #fff; font-size: 14px; font-weight: 500; cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
          box-shadow: 0 0 28px color-mix(in srgb, var(--ac) 50%, transparent);
          white-space: nowrap;
        }
        .btn-primary:hover { transform: translateY(-2px);
          box-shadow: 0 8px 36px color-mix(in srgb, var(--ac) 60%, transparent); }
        .btn-ghost {
          font-family: 'Syne', sans-serif;
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 26px; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.14);
          background: rgba(255,255,255,0.05);
          color: rgba(255,255,255,0.65); font-size: 14px; font-weight: 400;
          cursor: pointer; transition: background 0.2s, border-color 0.2s;
          white-space: nowrap;
        }
        .btn-ghost:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.25); color: #fff; }

        .slide-dot { cursor: pointer; transition: all 0.3s ease; border-radius: 3px;
          background: rgba(255,255,255,0.2); height: 5px; }
        .slide-dot.active { background: var(--ac); }

        .pulse-dot { animation: pulseDot 2s infinite; }
        @keyframes pulseDot { 0%,100% { box-shadow: 0 0 0 0 rgba(74,222,128,0.45); }
          50% { box-shadow: 0 0 0 6px rgba(74,222,128,0); } }

        .tag-pill {
          font-family: 'Syne', sans-serif;
          display: inline-flex; align-items: center; gap: 7px;
          padding: 5px 15px; border-radius: 100px; font-size: 11.5px;
          font-weight: 500; letter-spacing: 0.07em; text-transform: uppercase;
          background: color-mix(in srgb, var(--ac) 14%, transparent);
          border: 1px solid color-mix(in srgb, var(--ac) 38%, transparent);
          color: var(--ac); width: fit-content;
        }
      `}</style>

      <section
        className="hero-root w-full"
        style={{ "--ac": slide.accentColor }}
      >
        {/* Background decorations */}
        <div className="hero-grid-bg" />
        <div className="hero-orb" style={{
          width: 560, height: 560,
          background: `radial-gradient(circle, ${slide.glowColor}, transparent 70%)`,
          top: -120, left: -80,
          transition: "background 0.8s ease",
        }} />
        <div className="hero-orb" style={{
          width: 400, height: 400,
          background: "radial-gradient(circle, rgba(232,121,249,0.07), transparent 70%)",
          bottom: -60, right: "10%",
        }} />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-10 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── LEFT: Illustration ── */}
          <div className="relative h-[420px] lg:h-[520px]">
            {/* exit illustration */}
            {PrevIllus && (
              <div className="img-exit absolute inset-0 rounded-3xl overflow-hidden"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)" }}>
                <PrevIllus />
              </div>
            )}
            {/* active illustration */}
            <div className="img-enter absolute inset-0 rounded-3xl overflow-hidden"
              style={{ background: "rgba(255,255,255,0.025)", border: "1px solid rgba(255,255,255,0.08)" }}>
              <Illus />
            </div>

            {/* Live badge */}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 px-4 py-3 rounded-2xl"
              style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.1)" }}>
              <span className="pulse-dot w-2 h-2 rounded-full bg-green-400 flex-shrink-0" />
              <div>
                <div className="text-green-400 font-medium text-base leading-none hero-body">
                  {slide.stats[0].value}
                </div>
                <div className="text-white/40 text-xs mt-0.5 hero-body">{slide.stats[0].label}</div>
              </div>
            </div>
          </div>

          {/* ── RIGHT: Content ── */}
          <div className="txt-enter flex flex-col justify-center" key={current}>
            {/* Tag */}
            <div className="tag-pill mb-6">
              <span className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                style={{ background: slide.accentColor }} />
              {slide.tag}
            </div>

            {/* Title */}
            <h1 className="hero-title mb-5">
              {slide.title.map((part, i) =>
                i === slide.accent
                  ? <span key={i} className="accent">{part}</span>
                  : <span key={i}>{part}<br /></span>
              )}
            </h1>

            {/* Description */}
            <p className="hero-body text-white/50 text-base leading-relaxed mb-8 max-w-lg" style={{ fontWeight: 300 }}>
              {slide.description}
            </p>

            {/* Stats row */}
            <div className="flex gap-7 mb-10 flex-wrap">
              {slide.stats.map((s, i) => (
                <div key={i} className="stat-chip flex flex-col"
                  style={{ animationDelay: `${i * 80}ms` }}>
                  <span className="hero-body text-white font-medium text-2xl leading-none">{s.value}</span>
                  <span className="hero-body text-white/35 text-xs mt-1" style={{ fontWeight: 400 }}>{s.label}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-3 flex-wrap mb-12">
              <button className="btn-primary">{slide.cta} →</button>
              <button className="btn-ghost">{slide.ctaSub}</button>
            </div>

            {/* Slide controls */}
            <div className="flex items-center gap-4">
              {/* Dots */}
              <div className="flex gap-2 items-center">
                {SLIDES.map((_, i) => (
                  <div
                    key={i}
                    className={`slide-dot ${i === current ? "active" : ""}`}
                    style={{ width: i === current ? 28 : 6, minWidth: 6 }}
                    onClick={() => goTo(i, true)}
                  />
                ))}
              </div>

              {/* Progress ring */}
              <svg width="32" height="32" viewBox="0 0 32 32" style={{ flexShrink: 0 }}>
                <circle cx="16" cy="16" r="13" fill="none"
                  stroke="rgba(255,255,255,0.1)" strokeWidth="2" />
                <circle cx="16" cy="16" r="13" fill="none"
                  stroke={slide.accentColor} strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray={CIRC}
                  strokeDashoffset={CIRC * (1 - progress)}
                  style={{ transformOrigin: "50% 50%", transform: "rotate(-90deg)",
                    transition: "stroke 0.5s ease" }} />
              </svg>

              {/* Counter */}
              <span className="hero-body text-white/30 text-xs font-medium tracking-widest">
                {String(current + 1).padStart(2, "0")} / {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

/* ─────────────────────────────────────────────
   Home page
───────────────────────────────────────────── */
const Home = () => {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--bg)" }}>
      <Header />

      <main className="flex-1 w-full">
        <HeroSection />
        {/* Add more sections below */}
      </main>

      <Footer />
    </div>
  );
};

export default Home;