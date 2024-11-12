const {Router} = require('express');
const homeRouter = Router();
homeRouter.get('/', (req,res) => res.send("Homepage"));

const messages = [
    {
        text : 'Hi, there!',
        user : 'Amando',
        added : new Date()
    },
    {
        text : 'Hello World!',
        user : 'Charles',
        added : new Date()
    }
]


module.exports = { messages, homeRouter };