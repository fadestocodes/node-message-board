const express = require('express');
const app = express();
const { homeRouter } = require('./routes/homeRoute');
const newRouter = require('./routes/newRoute');
app.use(express.urlencoded({ extended: true }));
const path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');




app.use('/', homeRouter);
app.use('/new', newRouter);


app.get('/new', (req,res) => {
    res.render('form' );
});

app.get('/messages/:id', (req,res) => {
    const message = messages.find( msg => msg.id === parseInt(req.params.id)  );
    if (message){
        res.render('messageDetails', {message});
    } else {
        res.status(404).send('Message Not Found');
    }
});

const PORT = 3000;
app.listen(PORT, ()=> {
    console.log(`Listening on Port: ${PORT}`);
});

