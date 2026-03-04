import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { Database, ExternalLink, FileText, ArrowLeft, AlertTriangle } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

export function DataSources() {
  const sources = [
    {
      name: "UN Women",
      stat: "9 out of 10 women feel unsafe in public spaces.",
      description: "Global research on women's safety, street harassment & mobility.",
      url: "unwomen.org/en/what-we-do/ending-violence-against-women",
      category: "Research",
      categoryColor: "#9AE6B4",
    },
    {
      name: "OpenStreetMap Lighting Data",
      stat: "Updated March 2026.",
      description: "Street lighting infrastructure mapping for route analysis.",
      url: "openstreetmap.org",
      category: "Infrastructure",
      categoryColor: "#2C7A7B",
    },
    {
      name: "Local Crime Reports",
      stat: "Anonymized, community-sourced.",
      description: "Incident data contributed by verified SBT holders only.",
      url: "local-safety-db.org",
      category: "Community",
      categoryColor: "#2C7A7B",
    },
    {
      name: "Walk Score API",
      stat: "Pedestrian route scoring.",
      description: "Walkability and pedestrian-friendly route analysis.",
      url: "walkscore.com",
      category: "Navigation",
      categoryColor: "#9AE6B4",
    },
    {
      name: "Goose AI Platform",
      stat: "AI decision engine for route scoring.",
      description: "Powers the safety scoring pipeline and real-time analysis.",
      url: "block.github.io/goose",
      category: "AI/ML",
      categoryColor: "#F56565",
    },
  ];

  return (
    <MobileScreen>
      <CriteriaBadge number={2} />

      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2C7A7B]/30">
          <Link to="/home">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-white">Data Sources</h1>
          <div className="w-10" />
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {/* Evidence Log */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <FileText className="w-4 h-4 text-[#9AE6B4]" />
              <h2 className="font-bold text-white text-sm">② Evidence Log</h2>
              <span className="text-[10px] text-white/40">— cited sources</span>
            </div>

            <div className="space-y-2.5">
              {sources.map((source, index) => (
                <Card
                  key={index}
                  className="bg-[#1A2B4C] border-[#2C7A7B]/30 p-3.5 space-y-1.5"
                >
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <h3 className="font-semibold text-white text-xs">{source.name}</h3>
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded-full font-semibold"
                          style={{
                            background: `${source.categoryColor}18`,
                            border: `1px solid ${source.categoryColor}40`,
                            color: source.categoryColor,
                          }}
                        >
                          {source.category}
                        </span>
                      </div>
                      <p
                        className="text-xs font-semibold mb-0.5"
                        style={{ color: source.categoryColor }}
                      >
                        "{source.stat}"
                      </p>
                      <p className="text-[11px] text-white/55">{source.description}</p>
                      <p className="text-[10px] text-[#9AE6B4]/60 mt-1 font-mono">⧉ {source.url}</p>
                    </div>
                    <ExternalLink className="w-3.5 h-3.5 text-white/30 flex-shrink-0 mt-1" />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Decision Log */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Database className="w-4 h-4 text-[#9AE6B4]" />
              <h2 className="font-bold text-white text-sm">④ Decision Log</h2>
            </div>

            <Card className="bg-gradient-to-br from-[#1A2B4C] to-[#2C7A7B]/20 border-[#2C7A7B]/40 overflow-hidden">
              {/* Data weighting */}
              <div className="p-4 space-y-3">
                <div>
                  <p className="text-xs font-bold text-white mb-1">
                    Data Weighting Tradeoff
                  </p>
                  <p className="text-[11px] text-white/75 leading-relaxed">
                    Community reports weighted{" "}
                    <strong className="text-[#9AE6B4]">+20%</strong> vs historical police data to
                    reduce over-policing bias.
                  </p>
                </div>

                <div className="space-y-1.5">
                  {[
                    { label: "Community Reports", pct: "45%", color: "#9AE6B4" },
                    { label: "Lighting Data", pct: "30%", color: "#9AE6B4" },
                    { label: "Police Data", pct: "25%", color: "#ffffff" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-center gap-2">
                      <span className="text-[10px] text-white/55 flex-1">{row.label}</span>
                      <div
                        className="h-1.5 rounded-full"
                        style={{
                          width: row.pct,
                          background: row.color === "#ffffff" ? "rgba(255,255,255,0.3)" : row.color,
                          opacity: 0.75,
                        }}
                      />
                      <span className="text-[10px] font-bold w-6 text-right" style={{ color: row.color }}>
                        {row.pct}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Decision table rows */}
                <div
                  className="rounded-lg overflow-hidden"
                  style={{ border: "1px solid rgba(44,122,123,0.3)" }}
                >
                  <div
                    className="grid grid-cols-3 gap-0 text-[9px] font-bold uppercase tracking-wide text-white/40 px-2 py-1.5"
                    style={{ background: "rgba(0,0,0,0.3)" }}
                  >
                    <span>Decision</span>
                    <span>Tradeoff</span>
                    <span>Why</span>
                  </div>
                  {[
                    {
                      decision: "Community > Crime stats",
                      tradeoff: "Possible recency bias",
                      why: "Real-time local context",
                    },
                    {
                      decision: "WebAR, not native app",
                      tradeoff: "Camera permissions required",
                      why: "Zero download friction",
                    },
                  ].map((row, i) => (
                    <div
                      key={i}
                      className="grid grid-cols-3 gap-0 px-2 py-2 text-[10px]"
                      style={{
                        borderTop: "1px solid rgba(44,122,123,0.2)",
                        background: i % 2 === 0 ? "rgba(26,43,76,0.4)" : "transparent",
                      }}
                    >
                      <span className="text-[#9AE6B4] leading-tight pr-1">{row.decision}</span>
                      <span className="text-white/50 leading-tight px-1">{row.tradeoff}</span>
                      <span className="text-white/75 leading-tight pl-1">{row.why}</span>
                    </div>
                  ))}
                </div>

                <div
                  className="rounded-lg p-2.5 flex gap-2 items-start"
                  style={{
                    background: "rgba(245,101,101,0.08)",
                    border: "1px solid rgba(245,101,101,0.25)",
                  }}
                >
                  <AlertTriangle className="w-3.5 h-3.5 text-[#F56565] flex-shrink-0 mt-0.5" />
                  <p className="text-[10px] text-white/80 leading-relaxed">
                    <strong className="text-[#F56565]">Rationale:</strong> Historical police data can reflect
                    systemic over-policing. Prioritizing real-time community insights creates more equitable
                    safety assessments.
                  </p>
                </div>

                <p className="text-[9px] text-white/30 font-mono">ref: evidence/decision_log.md</p>
              </div>
            </Card>
          </div>

          {/* Privacy */}
          <Card className="bg-[#1A2B4C]/50 border-[#2C7A7B]/25 p-4">
            <h3 className="font-semibold text-white text-xs mb-2.5">🔒 Privacy & Data Handling</h3>
            <ul className="space-y-1.5">
              {[
                "No GPS data stored on our servers",
                "Community reports fully anonymized",
                "Data aggregation happens locally on-device",
                "NFT minting records only a hashed proof, not route details",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-[11px] text-white/70">
                  <span className="text-[#9AE6B4] mt-0.5">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          <div className="pb-2" />
        </div>
      </div>
    </MobileScreen>
  );
}
