export function Logo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg 
      viewBox="0 0 100 100" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {/* Map Pin Outer Shape */}
      <path d="M50 94 C50 94, 16 62, 16 38 A34 34 0 1 1 84 38 C84 62, 50 94, 50 94 Z" />
      
      {/* Inner Circle */}
      <circle cx="50" cy="38" r="22" />
      
      {/* Inner Monogram */}
      {/* Top Horizontal Line */}
      <line x1="38" y1="32" x2="62" y2="32" />
      
      {/* Top Left Vertical Line */}
      <line x1="38" y1="32" x2="38" y2="23" />
      
      {/* Top Right Loop */}
      <path d="M50 32 C50 22, 62 22, 62 32" />
      
      {/* Bottom Horizontal Line */}
      <line x1="38" y1="44" x2="62" y2="44" />
      
      {/* Bottom Vertical Line (The T stem) */}
      <line x1="50" y1="44" x2="50" y2="53" />
    </svg>
  );
}
