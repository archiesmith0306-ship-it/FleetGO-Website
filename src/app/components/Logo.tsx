export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Modern gradient for text */}
        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#3B82F6" />
          <stop offset="50%" stopColor="#2563EB" />
          <stop offset="100%" stopColor="#1E40AF" />
        </linearGradient>

        {/* Accent gradient for GO */}
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#60A5FA" />
          <stop offset="100%" stopColor="#3B82F6" />
        </linearGradient>

        {/* Glow effect */}
        <filter id="textGlow">
          <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* "Fleet" text */}
      <text
        x="5"
        y="35"
        fontFamily="Arial, sans-serif"
        fontSize="32"
        fontWeight="700"
        fill="url(#textGradient)"
        letterSpacing="1"
      >
        Fleet
      </text>

      {/* "GO" with distinctive geometric container */}
      <g>
        {/* Geometric shape behind GO - hexagon/shield */}
        <path
          d="M 105 8 L 125 8 L 132 15 L 132 35 L 125 42 L 105 42 L 98 35 L 98 15 Z"
          fill="url(#accentGradient)"
          opacity="0.15"
          stroke="url(#accentGradient)"
          strokeWidth="1.5"
        />

        {/* Speed lines accent */}
        <line x1="90" y1="20" x2="95" y2="20" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.6" />
        <line x1="88" y1="25" x2="94" y2="25" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.4" />
        <line x1="90" y1="30" x2="95" y2="30" stroke="url(#accentGradient)" strokeWidth="2" opacity="0.6" />

        {/* "GO" text */}
        <text
          x="102"
          y="35"
          fontFamily="Arial, sans-serif"
          fontSize="32"
          fontWeight="800"
          fill="url(#textGradient)"
          letterSpacing="0"
          filter="url(#textGlow)"
        >
          GO
        </text>
      </g>

      {/* Dot accent - forward motion */}
      <circle cx="137" cy="32" r="3" fill="url(#accentGradient)" opacity="0.8" />
      <circle cx="145" cy="32" r="2" fill="url(#accentGradient)" opacity="0.5" />
      <circle cx="151" cy="32" r="1.5" fill="url(#accentGradient)" opacity="0.3" />
    </svg>
  );
}