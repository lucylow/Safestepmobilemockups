interface CriteriaBadgeProps {
  number: 1 | 2 | 3 | 4 | 5;
  className?: string;
}

const CIRCLED = ["①", "②", "③", "④", "⑤"] as const;

const COLORS: Record<number, { bg: string; border: string }> = {
  1: { bg: "rgba(154,230,180,0.18)", border: "rgba(154,230,180,0.55)" },
  2: { bg: "rgba(44,122,123,0.25)", border: "rgba(44,122,123,0.65)" },
  3: { bg: "rgba(44,122,123,0.25)", border: "rgba(44,122,123,0.65)" },
  4: { bg: "rgba(245,101,101,0.18)", border: "rgba(245,101,101,0.5)" },
  5: { bg: "rgba(154,230,180,0.18)", border: "rgba(154,230,180,0.55)" },
};

const criteriaNames: Record<number, string> = {
  1: "① Clarity",
  2: "② Proof",
  3: "③ Usability",
  4: "④ Rigor",
  5: "⑤ Polish",
};

export function CriteriaBadge({ number, className = "" }: CriteriaBadgeProps) {
  const c = COLORS[number];
  return (
    <div
      className={`absolute top-3 right-3 z-50 flex items-center gap-1.5 px-2.5 py-1 rounded-full ${className}`}
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        backdropFilter: "blur(8px)",
      }}
      title={criteriaNames[number]}
    >
      <span
        className="font-bold text-xs leading-none"
        style={{ color: number === 4 ? "#F56565" : "#9AE6B4" }}
      >
        {CIRCLED[number - 1]}
      </span>
      <span className="text-white/70 text-[10px] leading-none">{criteriaNames[number].slice(3)}</span>
    </div>
  );
}
