interface DividerProps {
  className?: string;
  flip?: boolean;
}

// Wave divider - organic, flowing transition
export const WaveDivider = ({ className = "", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-full block"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        className="fill-current"
        d="M0,60 C360,120 720,0 1080,80 C1260,100 1380,60 1440,40 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
);

// Bold wave - more dramatic curves
export const BoldWaveDivider = ({ className = "", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-full block"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        className="fill-current"
        d="M0,0 C240,100 480,20 720,80 C960,140 1200,40 1440,80 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
);

// Gentle curve - subtle, elegant
export const CurveDivider = ({ className = "", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-full block"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        className="fill-current"
        d="M0,100 Q720,0 1440,100 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
);

// Diagonal divider - sharp, modern
export const DiagonalDivider = ({ className = "", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1440 100"
      preserveAspectRatio="none"
      className="w-full h-full block"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <polygon
        className="fill-current"
        points="0,0 1440,0 1440,40 0,100"
      />
    </svg>
  </div>
);

// Asymmetric wave - unique flowing shape
export const AsymmetricWaveDivider = ({ className = "", flip = false }: DividerProps) => (
  <div className={`relative w-full overflow-hidden ${className}`}>
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="w-full h-full block"
      style={{ transform: flip ? "scaleY(-1)" : undefined }}
    >
      <path
        className="fill-current"
        d="M0,40 C200,80 400,100 600,60 C800,20 1000,80 1200,100 C1350,110 1400,90 1440,80 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
);
