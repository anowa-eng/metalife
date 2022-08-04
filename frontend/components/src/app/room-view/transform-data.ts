export function transformData(userData: any, userId: number) {
    // Transform based on distance to user of ID userId

    let user = userData.find((userInRoom: any) => userInRoom.user_id == userId);

    let distances: any = {};
    for (const data of userData) {
        let positionData = data.data;
        distances[data.user_id] = {
            x: positionData.position.x - user.data.position.x,
            y: positionData.position.y - user.data.position.y
        };
    }

    let transformation = Object
        .entries(distances)
        .map((entries: any) => {
            let userId = parseInt(entries[0]),
                distanceData = entries[1]
            
            let center = {
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
        })
        // Add the direction data to the transformed data as well
        .map((data: any) => {
            let direction = userData.find((user: any) => user.user_id === data.user_id)
                .data
                .direction;
            return {
                ...data,
                direction: direction
            }
        })


    return transformation;
}