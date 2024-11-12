const {Router} = require('express');
const newRouter = Router();

const { messages } = require('./homeRoute');


newRouter.get('/', (req,res) => res.send("New Message"));

newRouter.post('/', (req,res) => {
    const postText = req.body.message;
    const postUser = req.body.username;
    const postID = messages.length + 1;
    messages.push( {id: postID, text: postText, user: postUser, added: new Date() } );
    res.redirect('/');
});


module.exports = newRouter;