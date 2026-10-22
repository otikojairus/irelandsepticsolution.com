export function BrandLogo({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={`brand-logo${compact ? " brand-logo-compact" : ""}`}
      viewBox="0 0 210 40"
      role="img"
      aria-label="Ireland Septic Solutions"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="17" cy="20" r="13" fill="currentColor" opacity="0.12" />
      <path d="M9 21c3-5 10-5 14 0 2 2 2 5 0 7-2 2-7 2-10-1-2-2-2-4-4-6z" fill="#5a7d69" />
      <text x="38" y="18" fill="currentColor" fontFamily="Georgia, serif" fontSize="15" fontWeight="700">
        Ireland Septic
      </text>
      <text x="38" y="31" fill="currentColor" opacity="0.55" fontFamily="system-ui, sans-serif" fontSize="8.5" fontWeight="600" letterSpacing="0.16em">
        SOLUTIONS
      </text>
    </svg>
  );
}
