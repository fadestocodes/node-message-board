const {getAllMessages} = require('../db/queries');
const {Router} = require('express');
const homeRouter = Router();

homeRouter.get('/', async (req,res) => {
    const rows = await getAllMessages();
    res.render('index', {title: 'Mini Messageboard', messages : rows });
});

module.exports = { homeRouter };