import { useEffect, useMemo, useRef } from "react";
import "./HexBackground.css";

/** Circumradius of one hexagon, in px. Controls tile size. */
const R = 26;
/** How many hexes across and down. Fixed, so the grid never rescales. */
const COLS = 44;
const ROWS = 30;

const DX = Math.sqrt(3) * R; // column spacing
const DY = 1.5 * R; // row spacing

interface HexBackgroundProps {
  /** Scroll distance in px over which the grid fades to `minOpacity`. */
  fadeDistance?: number;
  /** Opacity floor once fully scrolled. Set to 1 to disable the fade. */
  minOpacity?: number;
}

/** Vertices of a pointy-top hexagon, as an SVG points string. */
const hexPoints = (cx: number, cy: number) =>
  [90, 150, 210, 270, 330, 30]
    .map((deg) => {
      const a = (deg * Math.PI) / 180;
      return `${(cx + R * Math.cos(a)).toFixed(2)},${(
        cy +
        R * Math.sin(a)
      ).toFixed(2)}`;
    })
    .join(" ");

const HexBackground: React.FC<HexBackgroundProps> = ({
  fadeDistance = 750,
  minOpacity = 0,
}) => {
  const rootRef = useRef<HTMLDivElement>(null);

  const { cells, width, height } = useMemo(() => {
    const out: string[] = [];
    for (let r = 0; r < ROWS; r++) {
      // Odd rows shift half a column right to interlock.
      const offset = r % 2 ? DX / 2 : 0;
      for (let c = 0; c < COLS; c++) {
        out.push(hexPoints(c * DX + offset, r * DY));
      }
    }
    return {
      cells: out,
      width: COLS * DX + DX / 2,
      height: (ROWS - 1) * DY + 2 * R,
    };
  }, []);

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
    <div className="hexbg" ref={rootRef} aria-hidden="true">
      <svg
        className="hexbg__plane"
        width={width}
        height={height}
        viewBox={`${-R} ${-R} ${width + R} ${height + R}`}
      >
        {cells.map((points, i) => (
          <polygon key={i} className="hexbg__cell" points={points} />
        ))}
      </svg>
      <div className="hexbg__fade" />
    </div>
  );
};

export default HexBackground;
