type UserPosition = {
    x: number;
    y: number;
};
type UserInRoom = {
    position: UserPosition,
    user: string;
};

export type UserPositionData = UserInRoom[];
