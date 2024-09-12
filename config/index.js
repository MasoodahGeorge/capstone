import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const db = mysql.createPool({
    host: 'bxo931ecdmxhc4zpbcdw-mysql.services.clever-cloud.com',
    user: 'u4uzaqzrsrgw3edg',
    password: 'Q2cvjQfgsuqBhvaAYdT9',
    database: 'bxo931ecdmxhc4zpbcdw'
});

// Test the connection
db.getConnection((err, connection) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
    connection.release(); // Release the connection back to the pool
});

export default db;
