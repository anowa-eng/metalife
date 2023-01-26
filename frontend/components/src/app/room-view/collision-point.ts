import { LocalUser } from "./local-user";
import { Position } from "./position";

export function findCollisionPoint(localUser: Position, collidedUser: Position) {
    const circleRadius = 12.5;

    let angle = Math.atan2(collidedUser.y - localUser.y, collidedUser.x - localUser.x);
    console.log(angle * (180 / Math.PI))

    let collisionPoint = {
        x: collidedUser.x - Math.cos(angle) * circleRadius * 2,
        y: collidedUser.y - Math.sin(angle) * circleRadius * 2
    };

    return collisionPoint;
}