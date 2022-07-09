export function transformData(userData: any, userId: number) {
    // Transform based on distance to user of ID userId

    let user = userData.find((userInRoom: any) => userInRoom.user_id === userId);
    let distances: any = {};
    for (const data of userData)
        distances[data.user_id] = {
            x: data.position.x - user.position.x,
            y: data.position.y - user.position.y
        };
    let transformation1 = Object
        .entries(distances)
        .map((entries: any) => {
            let userId = parseInt(entries[0]),
                distanceData = entries[1];
            
            let center: any = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };

            let position = {
                x: center.x + distanceData.x,
                y: center.y + distanceData.y
            };
            return {
                position: position,
                user_id: userId
            };
        });

    return transformation1;
}