const express = require('express');
const app = express();
const { homeRouter, messages } = require('./routes/homeRoute');
const newRouter = require('./routes/newRoute');
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.get('/', (req,res) => {
    res.render('index', {title: 'Mini Messageboard', messages : messages });
});
app.get('/new', (req,res) => {
    res.render('form' )
});




app.use('/', homeRouter);
app.use('/new', newRouter);
const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`);
});

