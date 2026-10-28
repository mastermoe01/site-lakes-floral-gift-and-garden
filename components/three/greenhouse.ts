// Shared greenhouse geometry: a gabled glass house, the shape of the shop's own
// greenhouse. Used by the WebGL scene and (projected) by the static SVG fallback.

export const W = 2.2; // width (x)
export const D = 3.2; // depth (z)
export const H = 1.15; // eave height
export const R = 1.95; // ridge height
export const BAYS = 5; // rafters along the depth

type V = [number, number, number];
export type Seg = [V, V];

const hw = W / 2;
const hd = D / 2;

/** Every frame member as a line segment. */
export function frameSegments(): Seg[] {
  const s: Seg[] = [];
  for (let i = 0; i <= BAYS; i++) {
    const z = -hd + (D * i) / BAYS;
    const end = i === 0 || i === BAYS;
    // posts, rafters
    s.push([[-hw, 0, z], [-hw, H, z]], [[hw, 0, z], [hw, H, z]]);
    s.push([[-hw, H, z], [0, R, z]], [[hw, H, z], [0, R, z]]);
    if (end) {
      // gable-end mullions and door
      s.push([[-hw / 2, 0, z], [-hw / 2, H + (R - H) / 2, z]], [[hw / 2, 0, z], [hw / 2, H + (R - H) / 2, z]]);
      s.push([[-hw, H, z], [hw, H, z]]);
      if (i === BAYS) s.push([[-0.28, 0, z], [-0.28, 0.85, z]], [[0.28, 0, z], [0.28, 0.85, z]], [[-0.28, 0.85, z], [0.28, 0.85, z]]);
    }
  }
  // longitudinal members: sills, eaves, purlins, ridge
  const longs: [number, number][] = [
    [-hw, 0],
    [hw, 0],
    [-hw, H * 0.5],
    [hw, H * 0.5],
    [-hw, H],
    [hw, H],
    [-hw / 2, H + (R - H) / 2],
    [hw / 2, H + (R - H) / 2],
    [0, R],
  ];
  for (const [x, y] of longs) s.push([[x, y, -hd], [x, y, hd]]);
  return s;
}

/** Glass panes as quads (4 corners each). */
export function panes(): [V, V, V, V][] {
  const q: [V, V, V, V][] = [];
  for (let i = 0; i < BAYS; i++) {
    const z0 = -hd + (D * i) / BAYS;
    const z1 = -hd + (D * (i + 1)) / BAYS;
    q.push([[-hw, 0, z0], [-hw, H, z0], [-hw, H, z1], [-hw, 0, z1]]);
    q.push([[hw, 0, z0], [hw, H, z0], [hw, H, z1], [hw, 0, z1]]);
    q.push([[-hw, H, z0], [0, R, z0], [0, R, z1], [-hw, H, z1]]);
    q.push([[hw, H, z0], [0, R, z0], [0, R, z1], [hw, H, z1]]);
  }
  return q;
}

/** String lights: two sagging runs under the roof, like the shop's event nights. */
export function bulbs(): V[] {
  const out: V[] = [];
  const runs = [-0.45, 0.45];
  const n = 22;
  for (const x of runs) {
    for (let i = 0; i <= n; i++) {
      const t = i / n;
      const z = -hd + 0.15 + (D - 0.3) * t;
      const sag = Math.sin(((t * BAYS) % 1) * Math.PI) * 0.12;
      out.push([x, R - 0.32 - Math.abs(x) * 0.6 - sag, z]);
    }
  }
  return out;
}
