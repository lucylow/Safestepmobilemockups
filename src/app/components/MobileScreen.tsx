import { ReactNode } from "react";

interface MobileScreenProps {
  children: ReactNode;
  className?: string;
}

export function MobileScreen({ children, className = "" }: MobileScreenProps) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#080C14] p-4">
      {/* Phone shell */}
      <div className="relative flex-shrink-0" style={{ width: 390, height: 844 }}>
        {/* Outer bezel glow */}
        <div
          className="absolute inset-0 rounded-[52px] pointer-events-none z-20"
          style={{
            boxShadow:
              "0 0 0 10px #111827, 0 0 0 12px rgba(44,122,123,0.35), 0 40px 80px rgba(0,0,0,0.85), 0 0 60px rgba(44,122,123,0.12)",
          }}
        />

        {/* Screen panel */}
        <div
          className="absolute inset-[10px] rounded-[44px] overflow-hidden bg-[#0D0D0D] flex flex-col"
        >
          {/* ── Status bar ── */}
          <div className="flex-none h-12 bg-[#0D0D0D] flex items-end justify-between px-8 pb-2 relative z-30">
            <span className="text-white/90 text-xs font-semibold">11:42 PM</span>

            {/* Dynamic Island */}
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-[26px] bg-black rounded-full z-40" />

            {/* Signal + battery */}
            <div className="flex items-center gap-1.5">
              {/* Bars */}
              <svg width="17" height="12" viewBox="0 0 17 12" fill="white" opacity="0.85">
                <rect x="0" y="4" width="3" height="8" rx="1" />
                <rect x="4.5" y="2.5" width="3" height="9.5" rx="1" />
                <rect x="9" y="1" width="3" height="11" rx="1" />
                <rect x="13.5" y="0" width="3" height="12" rx="1" />
              </svg>
              {/* Battery */}
              <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                <rect x="0.75" y="0.75" width="20.5" height="10.5" rx="2.5" stroke="white" strokeOpacity="0.85" strokeWidth="1.5" />
                <rect x="21.25" y="3.5" width="2" height="5" rx="1" fill="white" fillOpacity="0.5" />
                <rect x="2.5" y="2.5" width="13" height="7" rx="1.5" fill="white" fillOpacity="0.85" />
              </svg>
            </div>
          </div>

          {/* ── Content area ── */}
          <div className={`flex-1 relative overflow-hidden ${className}`}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
