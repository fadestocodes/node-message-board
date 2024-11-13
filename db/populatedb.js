require('dotenv').config();
// console.log(process.env);
const {Client} = require('pg');

const SQL = `
CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
    text VARCHAR(255), user_name VARCHAR(255),
    added TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO messages (text, user_name, added) VALUES 
('Hello World!', 'John Doe', '2024-11-12 10:00:00'),
('Test Message, whoa this is really cool!', 'Fadesto Cameras', '2024-11-12 10:05:00'),
('Hey, you look familliar!', 'Fadesto Codes', '2024-11-12 10:10:00'),
('You guys both look very familiar to me...', 'Andrew Jung', '2024-11-12 10:12:00');
`;

async function main(){
    console.log("seeding...");
    
    const client = new Client({
        connectionString : process.env.DB_CONNECTION,
        ssl: {
            rejectUnauthorized : false,
        },
    });
    try{
        await client.connect();
        await client.query('BEGIN');
        await client.query(SQL);
        await client.query('COMMIT');
        const checkTable = await client.query('SELECT * FROM messages');

    } catch (error) {
    } finally {
        
        await client.end();
        console.log('done!');
    }
}

main();

