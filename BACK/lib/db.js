const mysql = require('mysql2'); // 1. Cambiado a mysql2
const fs = require('fs');
const path = require('path');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
    ssl: {
        // Asegúrate de que el archivo se llame exactamente ca.pem y esté en la raíz de BACK
        ca: fs.readFileSync(path.join(__dirname, '../ca.pem')),
        rejectUnauthorized: false // 2. Añade esta línea para evitar el error de Handshake
    }
});

connection.connect((err) => {
    if (err) {
        console.error('Error de conexión a la base de datos:', err);
        return;
    }
    console.log('¡Conexión exitosa a Aiven MySQL!');
});

module.exports = connection;