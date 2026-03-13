interface LogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
  textSize?: string;
}

export function PropertyShieldLogo({ size = "md", showText = true, textSize }: LogoProps) {
  const dims = size === "sm" ? 40 : size === "md" ? 52 : 72;

  return (
    <div className="flex items-center gap-3 group">
      {/* Shield SVG — matching exact branding */}
      <svg
        width={dims}
        height={dims}
        viewBox="0 0 100 110"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0 drop-shadow-[0_4px_12px_rgba(0,0,0,0.5)]"
      >
        {/* Outer shield — burgundy/maroon border */}
        <path
          d="M50 4 L90 18 L90 55 C90 78 70 96 50 106 C30 96 10 78 10 55 L10 18 Z"
          fill="#8B1A2C"
        />
        {/* White thin inner border ring */}
        <path
          d="M50 10 L84 22 L84 55 C84 75 66 91 50 100 C34 91 16 75 16 55 L16 22 Z"
          fill="white"
        />
        {/* Gold inner shield body */}
        <path
          d="M50 14 L82 25 L82 55 C82 73 65 88 50 97 C35 88 18 73 18 55 L18 25 Z"
          fill="url(#goldGradient)"
        />
        {/* "P" letter in burgundy */}
        <text
          x="50"
          y="70"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="46"
          fontWeight="bold"
          fill="#7B1528"
        >
          P
        </text>

        <defs>
          <linearGradient id="goldGradient" x1="18" y1="14" x2="82" y2="97" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#D4A843" />
            <stop offset="40%" stopColor="#C9962A" />
            <stop offset="70%" stopColor="#B8851E" />
            <stop offset="100%" stopColor="#C49828" />
          </linearGradient>
        </defs>
      </svg>

      {showText && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-serif font-bold tracking-wide text-foreground group-hover:text-primary transition-colors ${textSize ?? "text-2xl"}`}
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            PropertyShield
          </span>
          <span
            className="text-primary uppercase tracking-[0.18em] font-semibold"
            style={{ fontSize: "0.65rem" }}
          >
            UK Ltd
          </span>
        </div>
      )}
    </div>
  );
}
