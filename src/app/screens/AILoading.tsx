import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { CheckCircle2 } from "lucide-react";
import { Progress } from "../components/ui/progress";
import { Badge } from "../components/ui/badge";

const steps = [
  { id: 1, text: "Goose AI initialised", icon: "🧠", delay: 500 },
  { id: 2, text: "Street lighting check complete", icon: "💡", delay: 1000 },
  { id: 3, text: "Crime summary analysed", icon: "📊", delay: 1500 },
  { id: 4, text: "Community reports reviewed", icon: "👥", delay: 2000 },
  { id: 5, text: "Safe route generated", icon: "✅", delay: 2500 },
];

const MOCK_RESPONSE = `{
  "route_id": "safe_001",
  "path": [
    [51.5074, -0.1278],
    [51.5081, -0.1263],
    [51.5089, -0.1251]
  ],
  "safety_score": 92,
  "lighting": "good",
  "incidents_nearby": 0,
  "community_score": 9.2,
  "checkpoints": [
    { "type": "24h_store", "dist_m": 30 },
    { "type": "police", "dist_m": 45 }
  ]
}`;

export function AILoading() {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const progress = Math.round(((currentStep + 1) / steps.length) * 100);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentStep < steps.length - 1) {
        setCurrentStep((s) => s + 1);
      } else {
        setTimeout(() => navigate("/ar-view"), 600);
      }
    }, 600);
    return () => clearTimeout(timer);
  }, [currentStep, navigate]);

  return (
    <MobileScreen>
      <CriteriaBadge number={2} />

      <div className="flex flex-col h-full p-5">
        <div className="flex-1 flex flex-col justify-center space-y-6">
          {/* Heading */}
          <div className="text-center space-y-2">
            {/* Animated goose icon */}
            <div
              className="mx-auto flex items-center justify-center rounded-full"
              style={{
                width: 72,
                height: 72,
                background: "rgba(44,122,123,0.15)",
                border: "2px solid rgba(44,122,123,0.4)",
                boxShadow: "0 0 32px rgba(44,122,123,0.25)",
                fontSize: 36,
              }}
            >
              🪿
            </div>
            <h2 className="text-xl font-bold text-white">Goose AI Analysing…</h2>
            <p className="text-xs text-white/55 leading-relaxed max-w-[260px] mx-auto">
              Checking street lights, recent incidents, and community tips to find your safest route.
            </p>
          </div>

          {/* Progress */}
          <div className="space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-white/50">Analysis progress</span>
              <span className="text-[#9AE6B4] font-bold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />

            <div className="space-y-2">
              {steps.map((step, index) => (
                <div
                  key={step.id}
                  className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-300"
                  style={{
                    background:
                      index <= currentStep
                        ? "rgba(26,43,76,0.8)"
                        : "rgba(26,43,76,0.2)",
                    border:
                      index <= currentStep
                        ? "1px solid rgba(44,122,123,0.4)"
                        : "1px solid rgba(44,122,123,0.1)",
                  }}
                >
                  <span className="text-sm flex-shrink-0">{step.icon}</span>

                  {index < currentStep ? (
                    <CheckCircle2 className="w-4 h-4 text-[#9AE6B4] flex-shrink-0" />
                  ) : index === currentStep ? (
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0 animate-spin"
                      style={{
                        border: "2px solid rgba(44,122,123,0.3)",
                        borderTop: "2px solid #2C7A7B",
                      }}
                    />
                  ) : (
                    <div
                      className="w-4 h-4 rounded-full flex-shrink-0"
                      style={{ border: "2px solid rgba(44,122,123,0.2)" }}
                    />
                  )}

                  <span
                    className="text-xs flex-1"
                    style={{ color: index <= currentStep ? "white" : "rgba(255,255,255,0.3)" }}
                  >
                    {step.text}
                  </span>

                  {index < currentStep && (
                    <span className="text-[9px] text-[#9AE6B4]/60">done</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mock API response */}
          <div
            className="rounded-2xl overflow-hidden"
            style={{
              background: "rgba(26,43,76,0.5)",
              border: "1px solid rgba(44,122,123,0.3)",
            }}
          >
            <div className="flex items-center justify-between px-4 py-2.5 border-b border-[#2C7A7B]/20">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F56565]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#F6AD55]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#9AE6B4]" />
              </div>
              <span className="text-[10px] text-white/40 font-mono">goose_ai → route_analysis.json</span>
              <Badge className="bg-[#2C7A7B]/30 hover:bg-[#2C7A7B]/30 text-[#9AE6B4] border-0 text-[9px] px-2">
                ② Proof
              </Badge>
            </div>
            <pre className="text-[10px] text-[#9AE6B4]/85 font-mono px-4 py-3 overflow-x-auto leading-relaxed">
              {MOCK_RESPONSE}
            </pre>
          </div>
        </div>

        <p className="text-center text-[10px] text-white/30 pb-2">
          Judges: This screen demonstrates the Goose AI analysis pipeline with mock API response structure.
        </p>
      </div>
    </MobileScreen>
  );
}
