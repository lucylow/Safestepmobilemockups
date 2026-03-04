import { useState } from "react";
import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { AlertTriangle, X, Info } from "lucide-react";
import { Button } from "../components/ui/button";

const CHECKPOINTS = [
  { id: 1, emoji: "🏪", label: "7-Eleven", sub: "24h · 30m ahead", top: "38%", left: "62%" },
  { id: 2, emoji: "🚔", label: "Police Substation", sub: "45m left", top: "52%", left: "18%" },
];

export function ARView() {
  const [offRoute, setOffRoute] = useState(false);
  const [activeCP, setActiveCP] = useState<number | null>(null);
  const [showInfo, setShowInfo] = useState(false);

  return (
    <MobileScreen>
      <CriteriaBadge number={3} />

      {/* Simulated camera background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(170deg, #1c2636 0%, #111820 30%, #0a0e14 60%, #070a0f 100%)",
          }}
        />
        {/* Faint street texture lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <line x1="50%" y1="100%" x2="30%" y2="0%" stroke="#9AE6B4" strokeWidth="1" />
          <line x1="50%" y1="100%" x2="70%" y2="0%" stroke="#9AE6B4" strokeWidth="1" />
          <line x1="50%" y1="100%" x2="50%" y2="0%" stroke="#9AE6B4" strokeWidth="0.5" />
        </svg>

        {/* AR safe-path glow */}
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 110,
            height: "60%",
            background: "linear-gradient(to top, rgba(154,230,180,0.55) 0%, rgba(154,230,180,0.12) 60%, transparent 100%)",
            filter: "blur(18px)",
            borderRadius: "60% 60% 0 0",
          }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2"
          style={{
            width: 54,
            height: "55%",
            background: "linear-gradient(to top, rgba(154,230,180,0.7) 0%, rgba(154,230,180,0.15) 70%, transparent 100%)",
            borderRadius: "40% 40% 0 0",
          }}
        />

        {/* AR Arrows */}
        {[{ top: "55%", scale: 1 }, { top: "42%", scale: 0.72 }, { top: "32%", scale: 0.5 }].map((a, i) => (
          <div
            key={i}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ top: a.top }}
          >
            <svg
              viewBox="0 0 40 48"
              fill="none"
              style={{
                width: 40 * a.scale,
                height: 48 * a.scale,
                filter: `drop-shadow(0 0 ${8 * a.scale}px rgba(154,230,180,0.9))`,
                opacity: 1 - i * 0.18,
              }}
            >
              <path
                d="M20 4L36 24H26V44H14V24H4L20 4Z"
                fill="rgba(154,230,180,0.9)"
                stroke="#9AE6B4"
                strokeWidth="1.5"
              />
            </svg>
          </div>
        ))}

        {/* Checkpoint markers */}
        {CHECKPOINTS.map((cp) => (
          <button
            key={cp.id}
            onClick={() => setActiveCP(activeCP === cp.id ? null : cp.id)}
            className="absolute"
            style={{ top: cp.top, left: cp.left, transform: "translate(-50%,-50%)" }}
          >
            <div
              className="flex flex-col items-center gap-1"
              style={{
                filter:
                  activeCP === cp.id
                    ? "drop-shadow(0 0 8px rgba(154,230,180,0.8))"
                    : "drop-shadow(0 2px 4px rgba(0,0,0,0.6))",
              }}
            >
              <div
                className="rounded-full flex items-center justify-center"
                style={{
                  width: 36,
                  height: 36,
                  background: activeCP === cp.id ? "rgba(154,230,180,0.9)" : "rgba(26,43,76,0.92)",
                  border: "1.5px solid rgba(154,230,180,0.6)",
                  fontSize: 16,
                }}
              >
                {cp.emoji}
              </div>
              {activeCP === cp.id && (
                <div
                  className="px-2 py-1 rounded-lg whitespace-nowrap text-center"
                  style={{
                    background: "rgba(26,43,76,0.95)",
                    border: "1px solid rgba(44,122,123,0.5)",
                  }}
                >
                  <p className="text-white text-xs font-semibold">{cp.label}</p>
                  <p className="text-[#9AE6B4] text-[10px]">{cp.sub}</p>
                </div>
              )}
            </div>
          </button>
        ))}

        {/* Off-route red border pulse */}
        {offRoute && (
          <div
            className="absolute inset-0 animate-pulse pointer-events-none"
            style={{ border: "4px solid rgba(245,101,101,0.85)", borderRadius: 44 }}
          />
        )}
      </div>

      {/* HUD Top */}
      <div className="absolute top-0 left-0 right-0 pt-3 px-4 z-10">
        <div
          className="rounded-2xl px-4 py-3"
          style={{
            background: "rgba(13,13,13,0.82)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(44,122,123,0.4)",
          }}
        >
          <div className="flex items-center justify-between gap-2">
            <div className="flex-1">
              <p className="text-white font-bold text-sm">Home</p>
              <p className="text-[#9AE6B4] text-xs mt-0.5">Safe arrival in 8 min · 0.8 km</p>
            </div>

            {/* Live data badge */}
            <div
              className="flex items-center gap-1 px-2 py-1 rounded-full"
              style={{
                background: "rgba(154,230,180,0.12)",
                border: "1px solid rgba(154,230,180,0.35)",
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ background: "#9AE6B4" }}
              />
              <span className="text-[#9AE6B4] text-[9px] font-bold">Live data: ON</span>
            </div>

            {/* Safety score */}
            <div
              className="px-2.5 py-1 rounded-full text-xs font-bold"
              style={{
                background: "rgba(154,230,180,0.15)",
                border: "1px solid rgba(154,230,180,0.4)",
                color: "#9AE6B4",
              }}
            >
              8.7/10
            </div>

            {/* Info button */}
            <button
              onClick={() => setShowInfo(!showInfo)}
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(44,122,123,0.25)",
                border: "1px solid rgba(44,122,123,0.45)",
              }}
            >
              <Info className="w-3.5 h-3.5 text-[#9AE6B4]" />
            </button>
          </div>

          {/* Info tooltip overlay */}
          {showInfo && (
            <div
              className="mt-2 p-3 rounded-xl"
              style={{
                background: "rgba(26,43,76,0.95)",
                border: "1px solid rgba(44,122,123,0.4)",
              }}
            >
              <div className="flex justify-between items-start mb-1">
                <p className="text-[#9AE6B4] text-xs font-bold">③ Usability</p>
                <button onClick={() => setShowInfo(false)}>
                  <X className="w-3.5 h-3.5 text-white/50" />
                </button>
              </div>
              <p className="text-white/80 text-[10px] leading-relaxed">
                High contrast HUD · Large 48px touch targets · Simple language tested with 5 users.
                Tap checkpoints for safe-zone info. "demo" toggles off-route warning.
              </p>
            </div>
          )}
        </div>

        {/* Off-route warning */}
        {offRoute && (
          <div
            className="mt-3 rounded-2xl px-4 py-3 flex items-center gap-3"
            style={{
              background: "rgba(245,101,101,0.92)",
              border: "1px solid #F56565",
            }}
          >
            <AlertTriangle className="w-5 h-5 text-white flex-shrink-0" />
            <p className="text-white text-xs font-semibold flex-1">
              Off safe path — rejoin to stay near checkpoints.
            </p>
            <button onClick={() => setOffRoute(false)}>
              <X className="w-4 h-4 text-white/70" />
            </button>
          </div>
        )}
      </div>

      {/* HUD Bottom */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-6 z-10">
        {/* Mini map */}
        <div
          className="mb-3 rounded-xl p-3 flex items-center gap-3"
          style={{
            background: "rgba(13,13,13,0.85)",
            backdropFilter: "blur(12px)",
            border: "1px solid rgba(44,122,123,0.3)",
          }}
        >
          <svg viewBox="0 0 80 36" style={{ width: 80, height: 36, flexShrink: 0 }}>
            <path d="M40 34 Q30 20 28 10" stroke="#9AE6B4" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <circle cx="40" cy="34" r="4" fill="#9AE6B4" />
            <circle cx="28" cy="10" r="3" fill="none" stroke="#2C7A7B" strokeWidth="1.5" />
          </svg>
          <div className="flex-1">
            <p className="text-white/80 text-xs">Next: Turn left on Oak St</p>
            <p className="text-[#9AE6B4] text-[10px]">in 50 m</p>
          </div>
          <button
            onClick={() => setOffRoute(!offRoute)}
            className="text-[10px] text-white/25 hover:text-white/55 px-2 py-1 rounded"
            style={{ border: "1px solid rgba(255,255,255,0.08)" }}
          >
            demo ⚠
          </button>
        </div>

        <div className="flex gap-2">
          <button
            className="flex-none h-12 px-4 rounded-full text-sm font-semibold"
            style={{
              background: "rgba(245,101,101,0.15)",
              border: "1px solid rgba(245,101,101,0.4)",
              color: "#F56565",
              minWidth: 48,
            }}
          >
            Report
          </button>
          <Link to="/arrival" className="flex-1">
            <Button
              className="w-full h-12 rounded-full text-base font-bold text-[#0D0D0D]"
              style={{
                background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)",
                boxShadow: "0 8px 24px rgba(154,230,180,0.25)",
              }}
            >
              I've Arrived ✓
            </Button>
          </Link>
        </div>
      </div>
    </MobileScreen>
  );
}
