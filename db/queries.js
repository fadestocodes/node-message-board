const pool = require('./pool');

async function getAllMessages(){
    const {rows} = await pool.query("SELECT * FROM messages");
    return rows;
}

async function insertMessage(text, user_name, added){
    await pool.query("INSERT INTO messages (text, user_name, added ) VALUES ($1, $2, $3)", [ text, user_name, added ]);
}

module.exports = { getAllMessages, insertMessage };