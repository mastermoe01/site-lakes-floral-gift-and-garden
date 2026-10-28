import { bulbs, frameSegments } from "./greenhouse";

// The same greenhouse, projected once to a static line drawing — for phones,
// reduced motion, save-data and machines without GPU WebGL.
// Mirrors HeroScene: group rotation and offset, camera at (0, 1.5, 7.4) looking at (0, 0.05, 0), fov 36°.
const ANGLE = -0.45;
const TILT = 0.08;
const CAM_Y = 1.5;
const CAM_Z = 7.4;
const PITCH = Math.atan2(CAM_Y - 0.05, CAM_Z);
const FOCAL = 300 / Math.tan((18 * Math.PI) / 180);

function project([x, y, z]: [number, number, number]): [number, number] {
  const cy = Math.cos(ANGLE);
  const sy = Math.sin(ANGLE);
  const x1 = x * cy + z * sy;
  const z1 = -x * sy + z * cy;
  const y0 = y - 0.95;
  const ct = Math.cos(TILT);
  const st = Math.sin(TILT);
  const y1 = y0 * ct - z1 * st;
  const z2 = y0 * st + z1 * ct;
  const dy = y1 - CAM_Y;
  const dz = z2 - CAM_Z;
  const yc = dy * Math.cos(PITCH) - dz * Math.sin(PITCH);
  const depth = -dy * Math.sin(PITCH) - dz * Math.cos(PITCH);
  return [300 + (x1 * FOCAL) / depth, 300 - (yc * FOCAL) / depth];
}

const f = (n: number) => n.toFixed(1);

export default function HeroFallback() {
  const lines = frameSegments().map(([a, b]) => [project(a), project(b)]);
  const dots = bulbs().map(project);
  return (
    <svg viewBox="0 0 600 600" className="absolute inset-0 h-full w-full" aria-hidden="true">
      <defs>
        <radialGradient id="lf-glow">
          <stop offset="0" stopColor="#ffc98a" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffc98a" stopOpacity="0" />
        </radialGradient>
      </defs>
      <ellipse cx="300" cy="330" rx="210" ry="120" fill="url(#lf-glow)" opacity="0.6" />
      <g stroke="#4b5443" strokeWidth="1.3" strokeLinecap="round" fill="none">
        {lines.map(([a, b], i) => (
          <line key={i} x1={f(a[0])} y1={f(a[1])} x2={f(b[0])} y2={f(b[1])} />
        ))}
      </g>
      <g fill="#e9a35c">
        {dots.map(([x, y], i) => (
          <circle key={i} cx={f(x)} cy={f(y)} r="2.4" />
        ))}
      </g>
    </svg>
  );
}
