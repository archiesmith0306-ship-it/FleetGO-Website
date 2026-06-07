export default function Logo({ className = "h-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <radialGradient id="headlightBeam" cx="0%" cy="50%" r="70%" fx="0%" fy="50%">
          <stop offset="0%" stopColor="#22D3EE" stopOpacity="0.85" />
          <stop offset="40%" stopColor="#06B6D4" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0" />
        </radialGradient>

        <filter id="beamBlur" x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="3" />
        </filter>
      </defs>

      {/* 3D frame - uses currentColor so it adapts to light/dark mode */}
      {/* Drop shadow layer for depth */}
      <rect
        x="3"
        y="4"
        width="193"
        height="52"
        rx="10"
        ry="10"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.25"
        strokeWidth="1.5"
      />
      {/* Main frame stroke */}
      <rect
        x="2"
        y="2"
        width="193"
        height="52"
        rx="10"
        ry="10"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.9"
        strokeWidth="1.4"
      />
      {/* Inner thin highlight for bevel */}
      <rect
        x="4"
        y="4"
        width="189"
        height="48"
        rx="8"
        ry="8"
        fill="none"
        stroke="currentColor"
        strokeOpacity="0.2"
        strokeWidth="0.6"
      />

      {/* Headlight beam glow emerging from the left */}
      <ellipse
        cx="18"
        cy="30"
        rx="40"
        ry="18"
        fill="url(#headlightBeam)"
        filter="url(#beamBlur)"
      />
      <ellipse
        cx="16"
        cy="30"
        rx="22"
        ry="9"
        fill="#67E8F9"
        opacity="0.45"
        filter="url(#beamBlur)"
      />

      {/* Wordmark - currentColor adapts to surrounding theme */}
      <text
        x="22"
        y="41"
        fontFamily="Inter, system-ui, -apple-system, sans-serif"
        fontSize="34"
        fontWeight="700"
        fill="currentColor"
        letterSpacing="-0.8"
      >
        FleetGO
      </text>
    </svg>
  );
}
