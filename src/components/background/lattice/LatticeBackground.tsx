import { useEffect, useMemo, useRef } from "react";

interface LatticeBackgroundProps {
  /** Cells per axis. */
  size?: number;
  /** Scroll distance in px to fade to `minOpacity`. */
  fadeDistance?: number;
  minOpacity?: number;
}

const LatticeBackground: React.FC<LatticeBackgroundProps> = ({
  size = 40,
  fadeDistance = 500,
  minOpacity = 0,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  // The cell list never changes, so build it once.
  const cells = useMemo(
    () =>
      Array.from({ length: size * size }, (_, i) => (
        <div className="lattice__cell" key={i} />
      )),
    [size]
  );

  useEffect(() => {
    if (minOpacity >= 1) return;

    const el = rootRef.current;
    if (!el) return;

    let frame = 0;

    const apply = () => {
      frame = 0;
      const t = Math.min(window.scrollY / fadeDistance, 1);
      const opacity = 1 - t * (1 - minOpacity);
      el.style.opacity = String(opacity);
      el.style.transform = `scale(${1.1 - t * 0.1})`;
      // Once it's essentially invisible, stop it eating mouse events.
      el.classList.toggle("is-faded", opacity < 0.04);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [fadeDistance, minOpacity]);

  return (
    <div className="lattice" ref={rootRef} aria-hidden="true">
      <div
        className="lattice__plane"
        style={
          {
            "--lattice-cols": size,
            "--lattice-rows": size,
          } as React.CSSProperties
        }
      >
        {cells}
      </div>
      <div className="lattice__fade" />
    </div>
  );
};

export default LatticeBackground;
