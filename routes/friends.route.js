const express = require('express');
const friendController = require('../controllers/friend.controller')
const friendRouter = express.Router()

//middlewares
friendRouter.use((req, res, next) => {
    const start = Date.now()
    next();
    const end = Date.now() - start
    console.log(end)
}); 

friendRouter.post('/save', friendController.saveFriend);
//get specifi friend
friendRouter.get('/:id', friendController.getFriend);
//get all friends
friendRouter.get('/', friendController.getFriends);

module.exports = friendRouter;

