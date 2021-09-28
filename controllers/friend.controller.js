
 const friends = require('../models/friend.model')
function saveFriend(req, res) {
    if (!req.body.name) {
        return res.status(400).json({
            error: "name is missing"
        });
    }

    const friend = {
        name: req.body.name,
        id: friends.length
    }

    friends.push(friend);

    res.send(friends);
}

function getFriend(req, res) {
    const param = Number(req.params.id)
    const friend = friends[param]
    if (friend) {
       return res.json(friend);
    }
    res.json({
        error: "Record not found 404"
    });
}

function getFriends(req, res){
    res.json(friends)
}
module.exports = {
    saveFriend,
    getFriend,
    getFriends
}