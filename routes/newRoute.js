const {Router} = require('express');
const newRouter = Router();

const { messages } = require('./homeRoute');


newRouter.get('/', (req,res) => res.send("New Message"));

newRouter.post('/', (req,res) => {
    const postText = req.body.message;
    const postUser = req.body.username;
    messages.push( { text: postText, user: postUser, added: new Date() } );
    res.redirect('/');
});


module.exports = newRouter;