import { Position } from "./position";

export interface LocalUser {
  position: Position;
  direction: number;
  velocity: number;
  angularVelocity: number;
  drag: number;
  angularDrag: number;
  id: number;

  hist: {
    prevPosition: Position | null;
    prevDirection: number | null;
  };
}
