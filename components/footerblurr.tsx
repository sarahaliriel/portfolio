export function FooterBlur() {
  return (
    <div
      className="
        pointer-events-none
        sticky
        bottom-0
        left-0
        right-0
        z-30
        h-16
        hidden
        sm:block
      "
      style={{
        backdropFilter: "blur(7px)",
        WebkitBackdropFilter: "blur(9px)",
        maskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
        WebkitMaskImage: "linear-gradient(to top, black 0%, black 30%, transparent 100%)",
      }}
    />
  );
}
