const {insertMessage} = require('../db/queries');
const {Router} = require('express');
const newRouter = Router();

// const { messages } = require('./homeRoute');


newRouter.get('/new', (req,res) => {
    res.render('form' );
});

newRouter.post('/', (req,res) => {
    const postText = req.body.message;
    const postUser = req.body.username;
    const postAdded = new Date();
    insertMessage(postText,postUser, postAdded );

    res.redirect('/');
});


module.exports = newRouter;