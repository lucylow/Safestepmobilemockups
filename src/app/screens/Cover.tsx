import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { ArrowRight } from "lucide-react";
import { Button } from "../components/ui/button";

export function Cover() {
  return (
    <MobileScreen>
      <div className="flex flex-col h-full bg-[#0D0D0D] relative overflow-hidden">
        {/* Background radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 75% 55% at 50% 40%, rgba(44,122,123,0.38) 0%, rgba(26,43,76,0.45) 55%, transparent 100%)",
          }}
        />

        {/* Decorative rings */}
        <div
          className="absolute top-28 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{
            width: 300,
            height: 300,
            border: "1px solid rgba(154,230,180,0.1)",
            boxShadow: "0 0 80px 20px rgba(44,122,123,0.15)",
          }}
        />
        <div
          className="absolute top-40 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
          style={{
            width: 170,
            height: 170,
            border: "1px solid rgba(154,230,180,0.15)",
          }}
        />

        {/* Hackathon tag */}
        <div className="flex justify-center pt-4">
          <div
            className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold tracking-wide uppercase"
            style={{
              background: "rgba(245,101,101,0.12)",
              border: "1px solid rgba(245,101,101,0.35)",
              color: "#F56565",
            }}
          >
            <span>🏆</span>
            <span>#75HER Hackathon Submission</span>
          </div>
        </div>

        {/* Hero */}
        <div className="flex-1 flex flex-col items-center justify-center px-7 space-y-5">
          {/* Shield logo */}
          <div className="relative flex items-center justify-center" style={{ width: 88, height: 88 }}>
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                background: "linear-gradient(135deg, #2C7A7B 0%, #1A2B4C 100%)",
                boxShadow: "0 0 40px rgba(154,230,180,0.28)",
              }}
            />
            <svg
              viewBox="0 0 48 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="relative z-10"
              style={{ width: 48, height: 48 }}
            >
              <path
                d="M24 2L4 10V26C4 38.1 12.8 49.4 24 52C35.2 49.4 44 38.1 44 26V10L24 2Z"
                fill="url(#shieldGrad)"
                stroke="rgba(154,230,180,0.5)"
                strokeWidth="1.5"
              />
              <path
                d="M16 27l5 5 11-12"
                stroke="#9AE6B4"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="shieldGrad" x1="4" y1="2" x2="44" y2="52" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#2C7A7B" />
                  <stop offset="100%" stopColor="#1A2B4C" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          {/* 3-Line Pitch */}
          <div className="text-center space-y-1.5">
            <h1 className="text-[38px] font-bold tracking-tight text-white leading-none">SafeStep</h1>
            {/* Headline */}
            <p className="text-[#9AE6B4] tracking-widest text-[11px] uppercase font-semibold">
              Navigate Home Without Fear
            </p>
            {/* Subhead */}
            <p className="text-white/60 text-xs leading-relaxed max-w-[260px] mx-auto pt-1">
              AI-powered AR navigation that finds the safest route using Goose AI, rewarding every safe journey with a blockchain-verified NFT.
            </p>
          </div>

          {/* Feature pills */}
          <div className="flex flex-col gap-2 w-full">
            {[
              { icon: "🧠", label: "Goose AI risk assessment", tag: "② Proof" },
              { icon: "📍", label: "AR-guided safe routes", tag: "③ Usability" },
              { icon: "🏅", label: "Soulbound Safe Passage NFT", tag: "④ Rigor" },
            ].map((f) => (
              <div
                key={f.label}
                className="flex items-center gap-3 px-4 py-2.5 rounded-2xl"
                style={{
                  background: "rgba(26,43,76,0.6)",
                  border: "1px solid rgba(44,122,123,0.3)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <span className="text-base">{f.icon}</span>
                <span className="text-sm text-white/90 flex-1">{f.label}</span>
                <span
                  className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                  style={{
                    background: "rgba(44,122,123,0.25)",
                    border: "1px solid rgba(44,122,123,0.45)",
                    color: "#9AE6B4",
                  }}
                >
                  {f.tag}
                </span>
              </div>
            ))}
          </div>

          {/* SDG row */}
          <div className="flex items-center gap-2">
            {[
              { num: "5", label: "Gender Equality", bg: "#EE4035" },
              { num: "11", label: "Sustainable Cities", bg: "#F99D26" },
            ].map((sdg) => (
              <div
                key={sdg.num}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px]"
                style={{
                  background: `${sdg.bg}18`,
                  border: `1px solid ${sdg.bg}44`,
                  color: sdg.bg,
                }}
              >
                <span className="font-bold">SDG {sdg.num}</span>
                <span className="text-white/50">{sdg.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="px-6 pb-6 space-y-2.5">
          <Link to="/onboarding">
            <Button
              className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D]"
              style={{
                background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)",
                boxShadow: "0 8px 32px rgba(154,230,180,0.25)",
              }}
            >
              Start Experience
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>

          <Link to="/criteria-evidence">
            <Button
              variant="ghost"
              className="w-full h-10 rounded-full text-xs text-white/45 hover:text-white/80 hover:bg-white/5"
            >
              📋 View Judging Criteria Evidence
            </Button>
          </Link>

          {/* Prototype watermark */}
          <p className="text-center text-[9px] text-white/20 pt-1">
            Prototype v1.0 · Scoped for #75HER Hackathon · Not for production use
          </p>
        </div>
      </div>
    </MobileScreen>
  );
}
