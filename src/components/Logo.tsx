export default function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Camera body */}
      <rect
        x="8"
        y="20"
        width="48"
        height="32"
        rx="4"
        fill="#C5A044"
      />
      {/* Lens outer ring */}
      <circle cx="32" cy="36" r="12" fill="#FFFFFF" />
      {/* Lens middle ring */}
      <circle cx="32" cy="36" r="9" fill="#404040" />
      {/* Lens inner ring */}
      <circle cx="32" cy="36" r="6" fill="#262626" />
      {/* Lens reflection */}
      <circle cx="29" cy="33" r="2" fill="#FFFFFF" opacity="0.6" />
      {/* Flash/viewfinder */}
      <rect
        x="24"
        y="14"
        width="16"
        height="8"
        rx="2"
        fill="#A6852E"
      />
      {/* Shutter button */}
      <circle cx="44" cy="18" r="3" fill="#D4B66A" />
      {/* Capture lines (shutter effect) */}
      <path
        d="M32 24 L32 22"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M32 50 L32 48"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M20 36 L18 36"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
      <path
        d="M46 36 L44 36"
        stroke="#FFFFFF"
        strokeWidth="1"
        strokeLinecap="round"
        opacity="0.8"
      />
    </svg>
  );
}
