let randomQueue = [];
let users = {};
let keyNum = 0;
let roomNum = 0;


exports.joinRandom = (req, res) => {
    console.log('REGISTERRING');
    let userKey = ++keyNum;
    randomQueue.push(userKey);
    users[userKey] = req.body;
    users[userKey].room = -1;
    res.status(200).send();
    //res.send({keyNum: userKey});
}

exports.getCenter = (req,res) => {
    let totalLat = 0;
    let totalLong = 0;
    let totalUsers = 0;
    for (let user in users) {
        if (users[user].longitude && users[user].latitude) {
            totalLat += users[user].latitude;
            totalLong += users[user].longitude;
            totalUsers++;
        }
    }
    if (totalUsers > 0) {
        res.status(200).send({latitude: totalLat/totalUsers, longitude: totalLong/totalUsers});
    } else {
        res.status(404).send();
    }
}

// exports.joinRoom = (req, res) => {
//     let joiningNum = req.body.keyNum;
//     let matchedNum = 0;
//     if (users[joiningNum]) {
//         console.log('has user');
//         if (users[joiningNum].room === -1 && randomQueue.length > 1) {
//             console.log('should be a match');
//             for (let i = 0; i < randomQueue.length; i++) {
//                 if (randomQueue[i] !== joiningNum) {
//                     matchedNum = randomQueue[i];
//                     randomQueue.splice(i, 1);
//                     break;
//                 }
//             }
//             for (let i = 0; i < randomQueue.length; i++) {
//                 if (randomQueue[i] === matchedNum) {
//                     randomQueue.splice(i, 1);
//                     break;
//                 }
//             }
//             console.log('matchedNum:', matchedNum);
//             console.log('joiningNum:', joiningNum);
//             let room = roomNum++;
//             users[joiningNum].room = room;
//             users[matchedNum].room = room;
//             res.send({room: room});
//         } else if (users[joiningNum].room >= 0) {
//             res.send({room: users[joiningNum].room});
//             console.log('already has room')
//         } else {
//             res.send({room: -1});
//             console.log('no match found')
//         }
        
//     }
//     res.status(404).send();
// }

exports.disconnect = (req, res) => {
    let userKeys = Object.keys(users);
    for (let i = 0; i < userKeys.length; i++) {

        if (users[userKeys[i]].latitude === req.body.latitude && users[userKeys[i]].longitude === req.body.longitude) {
            delete users[userKeys[i]];
            break;
        }
    }
    res.status(200).send();


    // let disconnectingKey = req.body.keyNum;
    // for (let i = 0; i < randomQueue.length; i++) {
    //     if (randomQueue[i] === disconnectingKey) {
    //         randomQueue.splice(i, 1);
    //         break;
    //     }
    // }
    // delete users[disconnectingKey];

}