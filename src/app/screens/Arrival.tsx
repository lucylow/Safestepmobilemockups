import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { AlertCircle } from "lucide-react";
import { Button } from "../components/ui/button";

const CONFETTI = Array.from({ length: 28 }, (_, i) => ({
  id: i,
  left: `${(i * 3.7 + 2) % 100}%`,
  delay: `${(i * 0.14) % 2}s`,
  color:
    i % 4 === 0
      ? "#9AE6B4"
      : i % 4 === 1
      ? "#2C7A7B"
      : i % 4 === 2
      ? "#F56565"
      : "#F6AD55",
  size: 6 + (i % 6),
  duration: `${1.5 + (i % 4) * 0.35}s`,
}));

export function Arrival() {
  return (
    <MobileScreen>
      <CriteriaBadge number={5} />

      {/* Confetti */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {CONFETTI.map((c) => (
          <div
            key={c.id}
            className="absolute rounded-sm"
            style={{
              left: c.left,
              top: "-10px",
              width: c.size,
              height: c.size * 0.5,
              background: c.color,
              animationName: "confettiFall",
              animationDuration: c.duration,
              animationDelay: c.delay,
              animationTimingFunction: "linear",
              animationIterationCount: "3",
              opacity: 0.85,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes confettiFall {
          0%   { transform: translateY(-10px) rotate(0deg);   opacity: 0.9; }
          100% { transform: translateY(900px) rotate(360deg); opacity: 0; }
        }
      `}</style>

      <div className="flex flex-col h-full pt-4 px-5 pb-6 relative z-20">
        <div className="flex-1 flex flex-col justify-center space-y-5">
          {/* Celebration icon */}
          <div className="text-center space-y-2">
            <div
              className="mx-auto flex items-center justify-center rounded-full"
              style={{
                width: 96,
                height: 96,
                background: "rgba(154,230,180,0.1)",
                border: "2px solid rgba(154,230,180,0.4)",
                boxShadow: "0 0 48px rgba(154,230,180,0.18)",
                fontSize: 46,
              }}
            >
              🎉
            </div>
            <h1 className="text-3xl font-bold text-white">You Arrived Safely!</h1>
            <p className="text-white/50 text-xs">Journey complete · ⑤ Polish achieved</p>
          </div>

          {/* Stats card */}
          <div
            className="rounded-2xl p-4 space-y-3"
            style={{
              background: "linear-gradient(135deg, rgba(26,43,76,0.9) 0%, rgba(44,122,123,0.25) 100%)",
              border: "1px solid rgba(44,122,123,0.4)",
            }}
          >
            <div className="flex items-center justify-between">
              <p className="text-white font-bold text-sm">Home Journey #1</p>
              <span className="text-[10px] text-white/40">Mar 2, 2026 · 11:42 PM</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { label: "Safety Score", value: "8.7/10", color: "#9AE6B4" },
                { label: "Distance", value: "0.8 km", color: "#ffffff" },
                { label: "Duration", value: "12 min", color: "#ffffff" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl p-2.5 text-center"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  <p className="font-bold text-sm" style={{ color: s.color }}>
                    {s.value}
                  </p>
                  <p className="text-white/45 text-[9px] mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Route quality pills */}
            <div className="flex gap-2 flex-wrap">
              {["✓ No red zones", "✓ 2 checkpoints passed", "✓ Well-lit route"].map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-0.5 rounded-full"
                  style={{
                    background: "rgba(154,230,180,0.12)",
                    border: "1px solid rgba(154,230,180,0.3)",
                    color: "#9AE6B4",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* NFT prompt */}
          <div
            className="rounded-2xl px-4 py-3 flex gap-3 items-start"
            style={{
              background: "rgba(154,230,180,0.06)",
              border: "1px solid rgba(154,230,180,0.2)",
            }}
          >
            <span className="text-xl mt-0.5">🏅</span>
            <div>
              <p className="text-white text-sm font-semibold">Ready to mint your Safe Passage badge</p>
              <p className="text-white/45 text-[10px] mt-0.5">
                Non-transferable · Polygon Testnet · No personal data on-chain
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-2.5">
          <Link to="/mint">
            <Button
              className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D]"
              style={{
                background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)",
                boxShadow: "0 8px 24px rgba(154,230,180,0.2)",
              }}
            >
              🏅 Mint Safe Passage NFT
            </Button>
          </Link>

          <Button
            variant="outline"
            className="w-full h-11 rounded-full text-sm border-[#F56565]/35 text-[#F56565] hover:bg-[#F56565]/8"
          >
            <AlertCircle className="w-4 h-4 mr-2" />
            Report an Issue on This Route
          </Button>

          <Link to="/home">
            <Button variant="ghost" className="w-full text-white/35 hover:text-white/65 hover:bg-white/5">
              Return Home
            </Button>
          </Link>
        </div>
      </div>
    </MobileScreen>
  );
}
