import mysql from 'mysql2';

const db = mysql.createConnection({
    host: 'bxo931ecdmxhc4zpbcdw-mysql.services.clever-cloud.com',
    user: 'u4uzaqzrsrgw3edg',
    password: 'Q2cvjQfgsuqBhvaAYdT9',
    database: 'bxo931ecdmxhc4zpbcdw'
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

export default db;
