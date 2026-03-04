import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { Shield, Clock, Award, Settings, ChevronRight, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export function Profile() {
  const trips = [
    { id: 1, name: "Home Journey #1", date: "March 2, 2026", distance: "0.8 km", safetyScore: 8.7, minted: true },
    { id: 2, name: "Evening Commute", date: "March 1, 2026", distance: "1.2 km", safetyScore: 9.1, minted: true },
    { id: 3, name: "Late Night Walk", date: "Feb 28, 2026", distance: "0.5 km", safetyScore: 7.8, minted: false },
  ];

  return (
    <MobileScreen>
      <CriteriaBadge number={5} />

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2C7A7B]/30">
          <Link to="/home">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-white">Profile</h1>
          <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
            <Settings className="w-5 h-5" />
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto pb-4">
          {/* Profile Info */}
          <div className="px-5 pt-4 pb-3 flex items-center gap-3">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg, #2C7A7B, #1A2B4C)" }}
            >
              <span className="text-xl font-bold text-white">S</span>
            </div>
            <div className="flex-1">
              <h2 className="text-lg font-bold text-white">SafeStep User</h2>
              <p className="text-white/50 text-xs">Member since March 2026</p>
              <p className="text-white/30 text-[10px] font-mono mt-0.5">0x7f3b…8c9d</p>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 px-4 pb-4">
            {[
              { value: "3", label: "Total Trips" },
              { value: "2.5", label: "km Traveled" },
              { value: "8.5", label: "Avg Safety" },
            ].map((s) => (
              <Card key={s.label} className="bg-[#1A2B4C] border-[#2C7A7B]/30 p-3 text-center">
                <div className="text-xl font-bold text-[#9AE6B4]">{s.value}</div>
                <div className="text-[10px] text-white/60 mt-0.5">{s.label}</div>
              </Card>
            ))}
          </div>

          {/* NFT Gallery */}
          <div className="px-4 pb-4">
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="font-bold text-white text-sm">NFT Gallery</h3>
              <Badge className="bg-[#2C7A7B]/20 hover:bg-[#2C7A7B]/20 text-[#2C7A7B] border-0 text-xs">
                2 Minted
              </Badge>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[true, true, false].map((minted, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-xl flex flex-col items-center justify-center gap-1"
                  style={{
                    background: minted ? "rgba(44,122,123,0.15)" : "rgba(26,43,76,0.3)",
                    border: minted ? "1px solid rgba(154,230,180,0.35)" : "1px solid rgba(44,122,123,0.15)",
                  }}
                >
                  {minted ? (
                    <>
                      <Shield className="w-7 h-7 text-[#9AE6B4]" />
                      <span className="text-[8px] text-[#9AE6B4]/70">Safe Passage</span>
                    </>
                  ) : (
                    <>
                      <Award className="w-7 h-7 text-white/20" />
                      <span className="text-[8px] text-white/25">Locked</span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* SDG Alignment */}
          <div
            className="mx-4 mb-4 rounded-xl p-3 space-y-2"
            style={{
              background: "rgba(26,43,76,0.5)",
              border: "1px solid rgba(44,122,123,0.25)",
            }}
          >
            <p className="text-[10px] font-bold text-[#9AE6B4] uppercase tracking-wider">SDG Alignment</p>
            <p className="text-[10px] text-white/60 leading-relaxed">
              Our solution directly contributes to these UN Sustainable Development Goals:
            </p>
            <div className="flex gap-2">
              {[
                { num: "5", label: "Gender Equality", bg: "#EE4035" },
                { num: "11", label: "Sustainable Cities", bg: "#F99D26" },
              ].map((sdg) => (
                <div
                  key={sdg.num}
                  className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl flex-1"
                  style={{
                    background: `${sdg.bg}15`,
                    border: `1px solid ${sdg.bg}40`,
                  }}
                >
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 text-sm font-black"
                    style={{ background: sdg.bg, color: "white" }}
                  >
                    {sdg.num}
                  </div>
                  <p className="text-[10px] text-white/75 leading-tight">{sdg.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* User testing note */}
          <div
            className="mx-4 mb-4 rounded-xl px-3 py-2.5 flex gap-2 items-start"
            style={{
              background: "rgba(154,230,180,0.06)",
              border: "1px solid rgba(154,230,180,0.18)",
            }}
          >
            <span className="text-sm mt-0.5">💬</span>
            <p className="text-[11px] text-white/65 leading-relaxed">
              <strong className="text-[#9AE6B4]">Feedback?</strong> We've tested SafeStep with{" "}
              <strong className="text-white">5 users</strong> from our target group (women commuting alone at night).
            </p>
          </div>

          {/* Trip History */}
          <div className="px-4">
            <div className="flex items-center justify-between mb-2.5">
              <h3 className="font-bold text-white text-sm">Trip History</h3>
              <Link to="/data-sources" className="text-xs text-[#9AE6B4] hover:underline">
                Evidence Log
              </Link>
            </div>

            <div className="space-y-2">
              {trips.map((trip) => (
                <Card
                  key={trip.id}
                  className="bg-[#1A2B4C] border-[#2C7A7B]/30 p-3 cursor-pointer hover:bg-[#1A2B4C]/80 transition-colors"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2.5">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(44,122,123,0.2)" }}
                      >
                        <Clock className="w-4 h-4 text-[#9AE6B4]" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-white text-xs">{trip.name}</h4>
                        <p className="text-[10px] text-white/50">{trip.date} · {trip.distance}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <div className="text-sm font-bold text-[#9AE6B4]">{trip.safetyScore}</div>
                        {trip.minted && (
                          <div className="text-[8px] text-[#2C7A7B] font-semibold">SBT ✓</div>
                        )}
                      </div>
                      <ChevronRight className="w-3.5 h-3.5 text-white/30" />
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
