import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { ArrowLeft, Lightbulb, FileCheck, Users, Database, Sparkles } from "lucide-react";
import { Button } from "../components/ui/button";
import { Card } from "../components/ui/card";

const criteria = [
  {
    number: 1,
    glyph: "①",
    name: "Clarity",
    weight: "25%",
    icon: Lightbulb,
    color: "#9AE6B4",
    description: "\"Can I explain my problem in 10 seconds?\"",
    evidence: [
      "4-Line Problem Frame on Onboarding: User / Problem / Constraint / Success Test",
      "3-Line Pitch on Cover: Headline, Subhead, CTA — visible at a glance",
      "Consistent, Grade-8 readable copy across all screens",
      "Simple icons illustrate each problem line (User, Warning, WifiOff, Check)",
    ],
    artifact: "Onboarding.tsx → showProblem card · Cover.tsx → 3-Line Pitch",
  },
  {
    number: 2,
    glyph: "②",
    name: "Proof",
    weight: "25%",
    icon: FileCheck,
    color: "#2C7A7B",
    description: "\"Does my demo run without help? Do I cite claims?\"",
    evidence: [
      "AI Loading shows step-by-step Goose analysis pipeline with mock API response",
      "DataSources screen: 5 cited sources with URLs and category tags",
      "UN Women stat: \"9 out of 10 women feel unsafe in public spaces\" cited",
      "\"Live data: ON\" badge on AR View signals demo-ready state",
    ],
    artifact: "AILoading.tsx · DataSources.tsx · ARView.tsx live badge",
  },
  {
    number: 3,
    glyph: "③",
    name: "Usability",
    weight: "20%",
    icon: Users,
    color: "#2C7A7B",
    description: "\"Can a non-tech friend understand my pitch?\"",
    evidence: [
      "WCAG AA contrast compliance — light text on dark throughout",
      "All primary CTAs ≥ 48px touch target height (h-14 = 56px)",
      "\"i\" info button on AR View explains criteria to judges inline",
      "Tested with 5 users from target group (noted on Profile screen)",
      "All images include alt text in final build (noted on Onboarding)",
    ],
    artifact: "Home.tsx · ARView.tsx HUD · Profile.tsx user-testing note",
  },
  {
    number: 4,
    glyph: "④",
    name: "Rigor",
    weight: "20%",
    icon: Database,
    color: "#F56565",
    description: "\"Did I document WHY I made key choices?\"",
    evidence: [
      "Decision Log table: Decision / Tradeoff / Why — community vs police data",
      "Data weighting bar chart: Community 45%, Lighting 30%, Police 25%",
      "Risk Log: Privacy risk marked ✅ Resolved with mitigation details",
      "SDG alignment: SDG 5 (Gender Equality) + SDG 11 (Sustainable Cities)",
      "Ethics note: \"Ethics integrated — See Risk Log below\"",
    ],
    artifact: "DataSources.tsx Decision Log · Profile.tsx SDG section · Risk Log below",
  },
  {
    number: 5,
    glyph: "⑤",
    name: "Polish",
    weight: "10%",
    icon: Sparkles,
    color: "#9AE6B4",
    description: "\"Would I be proud to share this link publicly?\"",
    evidence: [
      "Cohesive dark theme: #1A2B4C / #2C7A7B / #9AE6B4 / #F56565 palette throughout",
      "Smooth confetti animation on Arrival, AR glow effects, pulsing dots",
      "All 10 screens implemented with consistent 16px margin / 8px grid",
      "Prototype watermark: \"Prototype v1.0 – scoped for #75HER Hackathon\"",
      "No broken links, no TODO placeholders in final screens",
    ],
    artifact: "All screens, notably ARView.tsx, Arrival.tsx, Cover.tsx",
  },
];

const RISK_LOG = [
  {
    risk: "Privacy concerns",
    impact: "High",
    mitigation: "No GPS stored, ephemeral API calls, data anonymized",
    status: "Resolved",
  },
  {
    risk: "AR requires camera",
    impact: "Medium",
    mitigation: "Graceful fallback to map-only mode if denied",
    status: "Resolved",
  },
  {
    risk: "Blockchain gas fees",
    impact: "Low",
    mitigation: "Polygon testnet, minting is optional",
    status: "Resolved",
  },
];

export function CriteriaEvidence() {
  return (
    <MobileScreen>
      <div className="flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[#2C7A7B]/30">
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-white/70 hover:text-white">
              <ArrowLeft className="w-5 h-5" />
            </Button>
          </Link>
          <h1 className="text-lg font-bold text-white">Criteria Evidence</h1>
          <div className="w-10" />
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4 space-y-5">
          {/* Intro */}
          <div
            className="rounded-2xl p-4"
            style={{
              background: "linear-gradient(135deg, rgba(26,43,76,0.9) 0%, rgba(44,122,123,0.3) 100%)",
              border: "1px solid rgba(44,122,123,0.45)",
            }}
          >
            <h2 className="font-bold text-white text-sm mb-1">📋 Judging Criteria Map</h2>
            <p className="text-xs text-white/70 leading-relaxed">
              Each screen carries a numbered badge <strong className="text-[#9AE6B4]">①–⑤</strong> linking
              design decisions to the hackathon scoring rubric. This page is the full evidence brief.
            </p>
            <p className="text-[10px] text-white/35 mt-2 font-mono">
              Prototype v1.0 · Scoped for #75HER Hackathon
            </p>
          </div>

          {/* Criteria cards */}
          {criteria.map((criterion) => {
            const Icon = criterion.icon;
            return (
              <Card
                key={criterion.number}
                className="bg-[#1A2B4C] border-[#2C7A7B]/30 overflow-hidden"
              >
                <div
                  className="px-4 py-3"
                  style={{ background: `${criterion.color}10`, borderBottom: "1px solid rgba(44,122,123,0.2)" }}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-lg font-bold text-white"
                      style={{ background: criterion.color === "#F56565" ? "#F56565" : criterion.color }}
                    >
                      {criterion.glyph}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-white">{criterion.name}</h3>
                        <span
                          className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                          style={{
                            background: `${criterion.color}18`,
                            border: `1px solid ${criterion.color}40`,
                            color: criterion.color,
                          }}
                        >
                          {criterion.weight}
                        </span>
                      </div>
                      <p className="text-[10px] text-white/50 italic">{criterion.description}</p>
                    </div>
                    <Icon className="w-5 h-5 flex-shrink-0" style={{ color: criterion.color }} />
                  </div>
                </div>

                <div className="p-4 space-y-3">
                  <div>
                    <h4 className="text-[10px] font-bold text-[#9AE6B4] uppercase tracking-wide mb-2">
                      Evidence
                    </h4>
                    <ul className="space-y-1.5">
                      {criterion.evidence.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-white/80">
                          <span className="text-[#9AE6B4] mt-0.5 flex-shrink-0">✓</span>
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="rounded-lg px-3 py-2"
                    style={{ background: "rgba(0,0,0,0.25)" }}
                  >
                    <h4 className="text-[9px] font-bold text-white/40 uppercase tracking-wide mb-0.5">
                      Artifact
                    </h4>
                    <p className="text-[10px] text-white/55 font-mono leading-relaxed">
                      {criterion.artifact}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}

          {/* Risk Log */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm">🛡️</span>
              <h2 className="font-bold text-white text-sm">④ Risk Log</h2>
            </div>

            <Card className="bg-[#1A2B4C] border-[#2C7A7B]/30 overflow-hidden">
              <div
                className="grid text-[9px] font-bold uppercase tracking-wide text-white/40 px-3 py-2"
                style={{
                  gridTemplateColumns: "2fr 1fr 3fr 1.5fr",
                  background: "rgba(0,0,0,0.3)",
                  borderBottom: "1px solid rgba(44,122,123,0.2)",
                }}
              >
                <span>Risk</span>
                <span>Impact</span>
                <span>Mitigation</span>
                <span>Status</span>
              </div>
              {RISK_LOG.map((row, i) => (
                <div
                  key={i}
                  className="grid px-3 py-2.5 text-[10px] items-start"
                  style={{
                    gridTemplateColumns: "2fr 1fr 3fr 1.5fr",
                    borderTop: i > 0 ? "1px solid rgba(44,122,123,0.15)" : "none",
                    background: i % 2 === 0 ? "transparent" : "rgba(26,43,76,0.3)",
                  }}
                >
                  <span className="text-white/80 leading-snug pr-1">{row.risk}</span>
                  <span
                    className="font-bold leading-snug"
                    style={{
                      color:
                        row.impact === "High"
                          ? "#F56565"
                          : row.impact === "Medium"
                          ? "#F6AD55"
                          : "#9AE6B4",
                    }}
                  >
                    {row.impact}
                  </span>
                  <span className="text-white/55 leading-snug px-1">{row.mitigation}</span>
                  <div className="flex items-start">
                    <span
                      className="text-[9px] px-1.5 py-0.5 rounded-full font-bold"
                      style={{
                        background: "rgba(154,230,180,0.15)",
                        border: "1px solid rgba(154,230,180,0.4)",
                        color: "#9AE6B4",
                      }}
                    >
                      ✅ {row.status}
                    </span>
                  </div>
                </div>
              ))}
            </Card>
          </div>

          {/* Ethics note */}
          <div
            className="rounded-xl px-4 py-3 flex gap-2 items-start"
            style={{
              background: "rgba(154,230,180,0.06)",
              border: "1px solid rgba(154,230,180,0.2)",
            }}
          >
            <span className="text-sm mt-0.5">⚖️</span>
            <p className="text-xs text-white/75 leading-relaxed">
              <strong className="text-[#9AE6B4]">Ethics integrated:</strong> See Risk Log above.
              No personal data stored on-chain. Community reporters verified by Soulbound Token.
              Data weighting documented to reduce policing bias.
            </p>
          </div>

          {/* Submission checklist */}
          <Card className="bg-gradient-to-br from-[#1A2B4C] to-[#2C7A7B]/25 border-[#2C7A7B]/40 p-4">
            <h3 className="font-bold text-white text-sm mb-3">Submission Checklist</h3>
            <div className="space-y-1.5">
              {[
                "Interactive prototype — full 10-screen flow",
                "Criteria Evidence page (this page)",
                "3-Line Pitch on Cover screen",
                "4-Line Problem Frame on Onboarding",
                "Evidence Log with 5 cited sources",
                "Decision Log + Risk Log documented",
                "SDG 5 & SDG 11 alignment on Profile",
                "Prototype v1.0 watermark on Cover",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs text-white/80">
                  <span className="text-[#9AE6B4] font-bold">✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </Card>

          <div className="text-center pb-4">
            <Link to="/">
              <Button
                className="rounded-full px-8 h-12 font-semibold text-[#0D0D0D]"
                style={{ background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)" }}
              >
                Back to Cover
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </MobileScreen>
  );
}
