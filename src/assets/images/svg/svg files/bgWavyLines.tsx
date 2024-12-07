interface BgWavyLinesProps {
  className?: string;
}

function BgWavyLines({ className }: BgWavyLinesProps) {
  return (
    <svg
      className={`fill-none dark:stroke-white stroke-current ${className || ""}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 200"
    >
      <path d="M0,150 Q50,93 100,150 T300,150" strokeWidth= '0.5' />
      <path d="M0,152 Q50,95 100,152 T300,152" strokeWidth= '0.5' />
      <path d="M0,155 Q50,97 100,155 T300,155" strokeWidth= '0.5' />
      <path d="M0,157 Q50,99 100,157 T300,157" strokeWidth= '0.5' />
      <path d="M0,159 Q50,101 100,159 T300,159" strokeWidth= '0.5' />
      <path d="M0,161 Q50,103 100,161 T300,161" strokeWidth= '0.5' />
      <path d="M0,163 Q50,105 100,163 T300,163" strokeWidth= '0.5' />
      <path d="M0,163 Q50,105 100,163 T300,163" strokeWidth= '0.5' />
      <path d="M0,163 Q50,105 100,163 T300,163" strokeWidth= '0.5' />
      <path d="M0,163 Q50,105 100,163 T300,163" strokeWidth= '0.5' />
    </svg>
  );
}

export default BgWavyLines;
