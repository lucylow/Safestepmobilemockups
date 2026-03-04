import { useState } from "react";
import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { Button } from "../components/ui/button";
import { ChevronRight, User, AlertTriangle, WifiOff, CheckCircle } from "lucide-react";

const SLIDES = [
  {
    emoji: "🛡️",
    title: "Find the safest route home",
    body: "Day or night, SafeStep analyzes lighting, crime data, and community reports to build a route that keeps you visible and safe.",
    color: "#9AE6B4",
  },
  {
    emoji: "🧠",
    title: "AR arrows guided by AI",
    body: "Goose AI avoids risky areas in real-time. Green AR arrows float ahead of you; red pulses warn if you step off the path.",
    color: "#2C7A7B",
  },
  {
    emoji: "🏅",
    title: "Earn a Safe Passage NFT",
    body: "Every completed journey mints a Soulbound token on Polygon — a verifiable, non-transferable badge of your safe arrival.",
    color: "#9AE6B4",
  },
];

const PROBLEM_LINES = [
  {
    label: "User",
    text: "A woman commuting alone at night.",
    Icon: User,
    color: "#9AE6B4",
  },
  {
    label: "Problem",
    text: "Navigation apps prioritize speed over safety, ignoring lighting and community context.",
    Icon: AlertTriangle,
    color: "#F56565",
  },
  {
    label: "Constraint",
    text: "Must respect privacy (no stored GPS), work offline, and be instantly accessible.",
    Icon: WifiOff,
    color: "#2C7A7B",
  },
  {
    label: "Success Test",
    text: "User follows green AR path from bus stop to home without entering red zones.",
    Icon: CheckCircle,
    color: "#9AE6B4",
  },
];

export function Onboarding() {
  const [slide, setSlide] = useState(0);
  const [showProblem, setShowProblem] = useState(false);

  const next = () => {
    if (slide < SLIDES.length - 1) setSlide(slide + 1);
    else setShowProblem(true);
  };

  if (showProblem) {
    return (
      <MobileScreen>
        <CriteriaBadge number={1} />
        <div className="flex flex-col h-full pt-2 px-5 pb-6 overflow-y-auto">
          <div className="flex-1 flex flex-col justify-center space-y-4">
            <div className="text-center space-y-1">
              <p className="text-xs uppercase tracking-widest text-[#9AE6B4]">① Clarity</p>
              <h2 className="text-2xl font-bold text-white">4-Line Problem Frame</h2>
              <p className="text-xs text-white/50">Who we're building for & why it matters</p>
            </div>

            <div className="space-y-2.5">
              {PROBLEM_LINES.map(({ label, text, Icon, color }) => (
                <div
                  key={label}
                  className="rounded-2xl px-4 py-3 flex gap-3 items-start"
                  style={{
                    background: "rgba(26,43,76,0.7)",
                    border: `1px solid ${color}33`,
                  }}
                >
                  <div
                    className="flex-none w-7 h-7 rounded-full flex items-center justify-center mt-0.5"
                    style={{ background: `${color}18`, border: `1px solid ${color}44` }}
                  >
                    <Icon style={{ color, width: 14, height: 14 }} />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider mb-0.5" style={{ color }}>
                      {label}
                    </p>
                    <p className="text-sm text-white/90 leading-snug">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Privacy note */}
            <div
              className="rounded-2xl px-4 py-3 flex gap-3 items-start"
              style={{
                background: "rgba(245,101,101,0.07)",
                border: "1px solid rgba(245,101,101,0.22)",
              }}
            >
              <span className="text-lg mt-0.5">🔒</span>
              <p className="text-xs text-white/80 leading-relaxed">
                SafeStep needs <strong className="text-white">camera</strong> &amp;{" "}
                <strong className="text-white">location</strong> for AR. Your route is{" "}
                <strong className="text-white">never stored</strong> — only an optional hashed proof for NFT minting.{" "}
                <span className="text-white/40">All images include alt text in final build.</span>
              </p>
            </div>

            {/* Stat from UN Women */}
            <div
              className="rounded-xl px-4 py-2.5 flex gap-2 items-center"
              style={{
                background: "rgba(44,122,123,0.12)",
                border: "1px solid rgba(44,122,123,0.3)",
              }}
            >
              <span className="text-sm">📊</span>
              <p className="text-xs text-white/80">
                <strong className="text-[#9AE6B4]">9 in 10</strong> women feel unsafe in public spaces.{" "}
                <span className="text-white/40 font-mono">— UN Women, 2023</span>
              </p>
            </div>
          </div>

          <div className="space-y-2.5 pt-4">
            <Link to="/home">
              <Button
                className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D]"
                style={{ background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)" }}
              >
                Get Started
                <ChevronRight className="w-5 h-5 ml-1" />
              </Button>
            </Link>
            <div className="flex justify-center gap-6 text-sm text-[#9AE6B4]">
              <Link to="/home"><button className="hover:underline">Skip</button></Link>
              <button className="hover:underline">Privacy Policy</button>
            </div>
          </div>
        </div>
      </MobileScreen>
    );
  }

  const s = SLIDES[slide];

  return (
    <MobileScreen>
      <CriteriaBadge number={1} />
      <div className="flex flex-col h-full pt-2 pb-8">
        {/* Slide area */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 space-y-6">
          {/* Big emoji in a glowing circle */}
          <div
            className="flex items-center justify-center rounded-full"
            style={{
              width: 120,
              height: 120,
              background: "rgba(26,43,76,0.8)",
              border: `2px solid ${s.color}44`,
              boxShadow: `0 0 48px ${s.color}30`,
              fontSize: 52,
            }}
          >
            {s.emoji}
          </div>

          <div className="text-center space-y-3">
            <h2 className="text-2xl font-bold text-white leading-tight">{s.title}</h2>
            <p className="text-sm text-white/70 leading-relaxed">{s.body}</p>
          </div>

          {/* Slide counter */}
          <p className="text-xs text-white/30">
            {slide + 1} of {SLIDES.length} · Swipe or tap Next
          </p>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 pb-5">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className="transition-all duration-300"
              style={{
                width: i === slide ? 24 : 8,
                height: 8,
                borderRadius: 4,
                background: i === slide ? "#9AE6B4" : "rgba(255,255,255,0.18)",
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="px-6 space-y-2.5">
          <Button
            onClick={next}
            className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D]"
            style={{ background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)" }}
          >
            {slide < SLIDES.length - 1 ? "Next" : "See Why We Built This"}
            <ChevronRight className="w-5 h-5 ml-1" />
          </Button>
          {slide < SLIDES.length - 1 && (
            <button
              onClick={() => setShowProblem(true)}
              className="w-full text-center text-sm text-white/35 hover:text-white/65"
            >
              Skip intro
            </button>
          )}
        </div>
      </div>
    </MobileScreen>
  );
}
