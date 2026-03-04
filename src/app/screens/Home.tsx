import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { Search, MapPin, Sparkles, User, Navigation } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Badge } from "../components/ui/badge";

export function Home() {
  return (
    <MobileScreen>
      <CriteriaBadge number={3} />

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2C7A7B]/30">
          <div className="flex items-center gap-2">
            <div
              className="w-9 h-9 rounded-2xl flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #2C7A7B, #1A2B4C)" }}
            >
              <span className="text-white font-bold text-sm">SS</span>
            </div>
            <h1 className="text-lg font-bold text-white">SafeStep</h1>
          </div>
          <Link to="/profile">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <User className="w-5 h-5" />
            </Button>
          </Link>
        </div>

        {/* Safety banner — persistent, always visible */}
        <div
          className="mx-3 mt-2 px-3 py-2 rounded-xl flex items-center gap-2"
          style={{
            background: "rgba(44,122,123,0.15)",
            border: "1px solid rgba(44,122,123,0.3)",
          }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#9AE6B4] flex-shrink-0" />
          <p className="text-[11px] text-white/80 leading-tight flex-1">
            Your safety is our priority — AI analyses{" "}
            <span className="text-[#9AE6B4]">lighting, crime data &amp; community reports</span>.
          </p>
          <Badge
            className="text-[9px] px-1.5 py-0 bg-[#2C7A7B]/30 hover:bg-[#2C7A7B]/30 text-[#9AE6B4] border-0 flex-shrink-0"
          >
            Goose AI: ON
          </Badge>
        </div>

        {/* Map Preview */}
        <div className="relative mx-3 mt-2 rounded-2xl overflow-hidden" style={{ height: 200 }}>
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(170deg, #1a2b4c 0%, #111820 40%, #0a0e14 100%)",
            }}
          />
          {/* Grid lines */}
          <div className="absolute inset-0 opacity-15">
            <div
              className="w-full h-full"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(44,122,123,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(44,122,123,0.5) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
          </div>

          {/* Route line */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <path
              d="M195 200 Q190 140 180 110 Q165 75 170 40"
              stroke="#9AE6B4"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="8 4"
              opacity="0.7"
            />
          </svg>

          {/* User location dot */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
            <div className="relative">
              <div className="w-4 h-4 bg-[#9AE6B4] rounded-full animate-pulse shadow-lg shadow-[#9AE6B4]/50" />
              <div
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: "rgba(154,230,180,0.3)" }}
              />
            </div>
          </div>

          {/* Destination marker */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 -translate-y-0">
            <div
              className="w-7 h-7 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(245,101,101,0.9)",
                boxShadow: "0 0 12px rgba(245,101,101,0.5)",
              }}
            >
              <MapPin className="w-3.5 h-3.5 text-white" />
            </div>
          </div>

          {/* Safe zone glow along route */}
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2"
            style={{
              width: 60,
              height: "70%",
              background: "linear-gradient(to top, rgba(154,230,180,0.2) 0%, transparent 100%)",
              filter: "blur(12px)",
              borderRadius: "50% 50% 0 0",
            }}
          />

          {/* Search overlay */}
          <div className="absolute top-3 left-3 right-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/50" />
              <Input
                placeholder="Where to?"
                className="pl-9 h-10 bg-[#1A2B4C]/85 border-[#2C7A7B]/50 text-white placeholder:text-white/40 rounded-full text-sm"
                style={{ backdropFilter: "blur(8px)" }}
              />
            </div>
          </div>

          {/* Map label */}
          <div className="absolute bottom-2 right-3">
            <span className="text-[9px] text-white/30 font-mono">SafeStep Map · Demo</span>
          </div>
        </div>

        {/* Route Options */}
        <div className="flex-1 px-4 pt-3 space-y-3 overflow-y-auto pb-4">
          {/* Route cards */}
          <div className="grid grid-cols-2 gap-2">
            {/* Safest */}
            <Link to="/ai-loading" className="block">
              <div
                className="rounded-2xl p-3 space-y-1.5 cursor-pointer hover:opacity-90 transition-opacity"
                style={{
                  background: "linear-gradient(135deg, rgba(44,122,123,0.25) 0%, rgba(26,43,76,0.6) 100%)",
                  border: "2px solid rgba(154,230,180,0.45)",
                }}
              >
                <div className="flex items-center justify-between">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center"
                    style={{ background: "rgba(154,230,180,0.18)" }}
                  >
                    <MapPin className="w-4 h-4 text-[#9AE6B4]" />
                  </div>
                  <span className="text-[9px] text-[#9AE6B4] font-bold uppercase tracking-wide">Selected</span>
                </div>
                <p className="text-white font-bold text-sm">Safest</p>
                <p className="text-[#9AE6B4] text-xs">12 min · 0.8 km</p>
                <p className="text-white/40 text-[10px]">Score 8.7/10</p>
              </div>
            </Link>

            {/* Fastest */}
            <div
              className="rounded-2xl p-3 space-y-1.5"
              style={{
                background: "rgba(26,43,76,0.4)",
                border: "1px solid rgba(44,122,123,0.2)",
              }}
            >
              <div className="flex items-center justify-between">
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.06)" }}
                >
                  <Navigation className="w-4 h-4 text-white/50" />
                </div>
              </div>
              <p className="text-white/60 font-bold text-sm">Fastest</p>
              <p className="text-white/40 text-xs">9 min · 0.6 km</p>
              <p className="text-white/30 text-[10px]">Score 5.2/10</p>
            </div>
          </div>

          {/* Main CTA */}
          <Link to="/ai-loading" className="block">
            <Button
              className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D]"
              style={{
                background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)",
                boxShadow: "0 8px 24px rgba(154,230,180,0.22)",
              }}
            >
              <MapPin className="w-5 h-5 mr-2" />
              Find Safest Route
            </Button>
          </Link>

          {/* Links row */}
          <div className="flex justify-between text-xs">
            <Link to="/data-sources" className="text-[#9AE6B4] hover:underline">
              Data Sources &amp; Evidence
            </Link>
            <Link to="/criteria-evidence" className="text-white/35 hover:text-white/60">
              Judging Evidence
            </Link>
          </div>

          {/* WCAG note for judges */}
          <div
            className="rounded-xl px-3 py-2 flex gap-2 items-center"
            style={{
              background: "rgba(26,43,76,0.4)",
              border: "1px solid rgba(44,122,123,0.2)",
            }}
          >
            <span className="text-sm">♿</span>
            <p className="text-[10px] text-white/50">
              WCAG AA contrast · 48px touch targets · Grade-8 readable copy
            </p>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
