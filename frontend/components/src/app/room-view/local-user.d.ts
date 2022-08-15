export interface LocalUser {
  position: {
    x: number;
    y: number;
  };
  direction: number;
  velocity: number;
  angularVelocity: number;
  drag: number;
  angularDrag: number;
  id: number;

  hist: {
    prevPosition: {
      x: number | null;
      y: number | null;
    } | null;
    prevDirection: number | null;
  };
}
