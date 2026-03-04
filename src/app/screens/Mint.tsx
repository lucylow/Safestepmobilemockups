import { useState } from "react";
import { Link } from "react-router";
import { MobileScreen } from "../components/MobileScreen";
import { CriteriaBadge } from "../components/CriteriaBadge";
import { Check, Share2, ExternalLink, Loader2 } from "lucide-react";
import { Button } from "../components/ui/button";

export function Mint() {
  const [minting, setMinting] = useState(false);
  const [minted, setMinted] = useState(false);

  const handleMint = () => {
    setMinting(true);
    setTimeout(() => {
      setMinting(false);
      setMinted(true);
    }, 2000);
  };

  return (
    <MobileScreen>
      <CriteriaBadge number={4} />

      <div className="flex flex-col h-full p-5">
        <div className="flex-1 flex flex-col justify-center space-y-5 overflow-y-auto">
          {!minted ? (
            <>
              <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-white">Mint Your Safe Passage</h1>
                <p className="text-white/55 text-xs leading-relaxed">
                  Create a permanent, verifiable record of your safe journey on Polygon Testnet.
                </p>
              </div>

              {/* NFT artwork */}
              <div
                className="rounded-3xl p-5 space-y-4"
                style={{
                  background: "linear-gradient(135deg, rgba(26,43,76,0.95) 0%, rgba(44,122,123,0.35) 100%)",
                  border: "1px solid rgba(154,230,180,0.3)",
                  boxShadow: "0 0 40px rgba(154,230,180,0.08), inset 0 1px 0 rgba(154,230,180,0.1)",
                }}
              >
                {/* Token visual */}
                <div className="flex justify-center">
                  <div
                    className="relative flex items-center justify-center rounded-3xl"
                    style={{
                      width: 120,
                      height: 120,
                      background: "linear-gradient(135deg, #1A2B4C 0%, #2C7A7B 50%, #1A2B4C 100%)",
                      border: "2px solid rgba(154,230,180,0.5)",
                      boxShadow: "0 0 32px rgba(154,230,180,0.2)",
                    }}
                  >
                    {/* Shield SVG */}
                    <svg viewBox="0 0 48 56" fill="none" style={{ width: 60, height: 60 }}>
                      <path
                        d="M24 2L4 10V26C4 38.1 12.8 49.4 24 52C35.2 49.4 44 38.1 44 26V10L24 2Z"
                        fill="url(#mintShieldGrad)"
                        stroke="rgba(154,230,180,0.6)"
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
                        <linearGradient id="mintShieldGrad" x1="4" y1="2" x2="44" y2="52" gradientUnits="userSpaceOnUse">
                          <stop offset="0%" stopColor="#2C7A7B" />
                          <stop offset="100%" stopColor="#1A2B4C" />
                        </linearGradient>
                      </defs>
                    </svg>
                    {/* Glow ring */}
                    <div
                      className="absolute inset-0 rounded-3xl animate-pulse"
                      style={{ border: "1px solid rgba(154,230,180,0.25)" }}
                    />
                  </div>
                </div>

                {/* Token metadata */}
                <div
                  className="rounded-2xl p-3 space-y-2"
                  style={{ background: "rgba(0,0,0,0.3)" }}
                >
                  {[
                    { label: "Token Name", value: "Safe Passage #001" },
                    { label: "Route", value: "Home Journey #1" },
                    { label: "Date", value: "March 2, 2026" },
                    { label: "Safety Score", value: "8.7 / 10", highlight: true },
                    { label: "Distance", value: "0.8 km" },
                  ].map((row) => (
                    <div key={row.label} className="flex justify-between items-center text-xs">
                      <span className="text-white/50">{row.label}</span>
                      <span
                        className="font-semibold"
                        style={{ color: row.highlight ? "#9AE6B4" : "white" }}
                      >
                        {row.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Soulbound badge */}
                <div
                  className="rounded-xl px-3 py-2 flex items-center gap-2"
                  style={{
                    background: "rgba(245,101,101,0.1)",
                    border: "1px solid rgba(245,101,101,0.3)",
                  }}
                >
                  <span className="text-sm">🔒</span>
                  <div>
                    <p className="text-[#F56565] text-xs font-bold">Soulbound Token (Non-Transferable)</p>
                    <p className="text-white/40 text-[10px]">ERC-5192 · Polygon Testnet · Low gas</p>
                  </div>
                </div>
              </div>

              {/* Privacy checklist */}
              <div
                className="rounded-xl p-3 space-y-2"
                style={{
                  background: "rgba(26,43,76,0.4)",
                  border: "1px solid rgba(44,122,123,0.25)",
                }}
              >
                {[
                  "Polygon Testnet — low gas fees",
                  "Minting is optional",
                  "No personal data stored on-chain",
                  "Only a hashed proof of safe arrival",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-[11px] text-white/65">
                    <Check className="w-3.5 h-3.5 text-[#9AE6B4] flex-shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </>
          ) : (
            <>
              <div className="text-center space-y-3">
                <div
                  className="mx-auto flex items-center justify-center rounded-full"
                  style={{
                    width: 80,
                    height: 80,
                    background: "rgba(154,230,180,0.12)",
                    border: "2px solid rgba(154,230,180,0.4)",
                    boxShadow: "0 0 40px rgba(154,230,180,0.18)",
                  }}
                >
                  <Check className="w-10 h-10 text-[#9AE6B4]" />
                </div>
                <h1 className="text-2xl font-bold text-white">Successfully Minted!</h1>
                <p className="text-white/55 text-xs">Your Safe Passage badge has been created</p>
              </div>

              {/* Minted token */}
              <div
                className="rounded-3xl p-5 text-center space-y-3"
                style={{
                  background: "linear-gradient(135deg, rgba(26,43,76,0.95) 0%, rgba(44,122,123,0.35) 100%)",
                  border: "1px solid rgba(154,230,180,0.35)",
                  boxShadow: "0 0 40px rgba(154,230,180,0.1)",
                }}
              >
                <div
                  className="mx-auto flex items-center justify-center rounded-3xl"
                  style={{
                    width: 96,
                    height: 96,
                    background: "linear-gradient(135deg, #2C7A7B, #1A2B4C)",
                    border: "2px solid rgba(154,230,180,0.5)",
                    boxShadow: "0 0 24px rgba(154,230,180,0.2)",
                    fontSize: 44,
                  }}
                >
                  🏅
                </div>
                <h3 className="font-bold text-white">Safe Passage #001</h3>
                <p className="text-[10px] text-white/40 font-mono">Token ID: 0x7f3b…8c9d</p>
                <p className="text-[9px] text-white/25 font-mono">Polygon Testnet · Block #21,847,301</p>
              </div>

              <div className="flex gap-2">
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-full text-xs border-[#2C7A7B]/50 text-[#2C7A7B] hover:bg-[#2C7A7B]/10"
                >
                  <ExternalLink className="w-4 h-4 mr-1.5" />
                  View on Explorer
                </Button>
                <Button
                  variant="outline"
                  className="flex-1 h-12 rounded-full text-xs border-[#2C7A7B]/50 text-[#2C7A7B] hover:bg-[#2C7A7B]/10"
                >
                  <Share2 className="w-4 h-4 mr-1.5" />
                  Share
                </Button>
              </div>
            </>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="space-y-2 pt-4">
          {!minted ? (
            <>
              <Button
                onClick={handleMint}
                disabled={minting}
                className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D] disabled:opacity-50"
                style={{
                  background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)",
                  boxShadow: "0 8px 24px rgba(154,230,180,0.2)",
                }}
              >
                {minting ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Minting on Polygon…
                  </>
                ) : (
                  "🏅 Connect Wallet & Mint"
                )}
              </Button>
              <Link to="/profile">
                <Button variant="ghost" className="w-full text-white/35 hover:text-white/65 hover:bg-white/5">
                  Skip for Now
                </Button>
              </Link>
            </>
          ) : (
            <Link to="/profile">
              <Button
                className="w-full h-14 rounded-full text-base font-semibold text-[#0D0D0D]"
                style={{ background: "linear-gradient(135deg, #9AE6B4 0%, #2C7A7B 100%)" }}
              >
                View in Profile
              </Button>
            </Link>
          )}
        </div>
      </div>
    </MobileScreen>
  );
}
