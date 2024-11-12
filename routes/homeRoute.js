const {Router} = require('express');
const homeRouter = Router();
homeRouter.get('/', (req,res) => res.send("Homepage"));

const messages = [
    {
        id : 1,
        text : 'Hi, there!',
        user : 'Amando',
        added : new Date()
    },
    {
        id : 2,
        text : 'Hello World!',
        user : 'Charles',
        added : new Date()
    }
]


module.exports = { messages, homeRouter };