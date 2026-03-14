require('dotenv').config();
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_PORT:", process.env.DB_PORT);

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        ca: fs.readFileSync(path.join(__dirname, 'ca.pem'))
    }
});
connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err.message || err);
        return;
    }
    console.log('Conexión exitosa a la base de datos MySQL.');
    connection.end();
});
