export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Halo ring - subtle golden arc above the lens */}
      <path
        d="M20 16 C20 8, 44 8, 44 16"
        stroke="url(#haloGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />

      {/* Camera body - sleek rounded rectangle */}
      <rect
        x="10"
        y="22"
        width="44"
        height="30"
        rx="6"
        fill="#1A1A1A"
      />

      {/* Body top edge highlight */}
      <rect
        x="10"
        y="22"
        width="44"
        height="2"
        rx="1"
        fill="#2A2A2A"
      />

      {/* Viewfinder bump */}
      <rect
        x="26"
        y="17"
        width="12"
        height="7"
        rx="3"
        fill="#111111"
      />

      {/* Shutter button */}
      <circle cx="40" cy="19" r="2.5" fill="#C5A044" />
      <circle cx="40" cy="19" r="1.5" fill="#D4B66A" />

      {/* Lens outer ring - gold accent */}
      <circle cx="32" cy="38" r="12" fill="none" stroke="url(#lensGradient)" strokeWidth="2" />

      {/* Lens body */}
      <circle cx="32" cy="38" r="10.5" fill="#0D0D0D" />

      {/* Lens inner rings */}
      <circle cx="32" cy="38" r="8" fill="none" stroke="#222222" strokeWidth="0.5" />
      <circle cx="32" cy="38" r="6" fill="none" stroke="#333333" strokeWidth="0.5" />

      {/* Lens glass - gradient */}
      <circle cx="32" cy="38" r="5" fill="url(#glassGradient)" />

      {/* Lens reflection - elegant highlight */}
      <ellipse cx="29.5" cy="35.5" rx="2" ry="1.5" fill="#FFFFFF" opacity="0.25" />
      <circle cx="34" cy="40" r="0.8" fill="#FFFFFF" opacity="0.15" />

      {/* Aperture blades hint */}
      <path d="M29 38 L32 35 L35 38 L32 41 Z" fill="none" stroke="#444444" strokeWidth="0.3" opacity="0.6" />

      {/* Bottom accent line */}
      <rect x="22" y="49" width="20" height="1" rx="0.5" fill="#C5A044" opacity="0.6" />

      {/* Gradients */}
      <defs>
        <linearGradient id="haloGradient" x1="20" y1="12" x2="44" y2="12">
          <stop offset="0%" stopColor="#C5A044" stopOpacity="0.4" />
          <stop offset="50%" stopColor="#E8D48B" stopOpacity="1" />
          <stop offset="100%" stopColor="#C5A044" stopOpacity="0.4" />
        </linearGradient>
        <linearGradient id="lensGradient" x1="20" y1="26" x2="44" y2="50">
          <stop offset="0%" stopColor="#D4B66A" />
          <stop offset="50%" stopColor="#C5A044" />
          <stop offset="100%" stopColor="#8B6914" />
        </linearGradient>
        <radialGradient id="glassGradient" cx="45%" cy="40%">
          <stop offset="0%" stopColor="#1a1a2e" />
          <stop offset="60%" stopColor="#0a0a14" />
          <stop offset="100%" stopColor="#000005" />
        </radialGradient>
      </defs>
    </svg>
  );
}
