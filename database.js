require("dotenv").config();

const { Pool } =require("pg");

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Test the connection
pool.connect()
    .then(client => {
        console.log("Connected to PostgreSQL successfully!");
        client.release();
    })
    .catch(err => {
        console.error("Failed to connect to PostgreSQL:");
        console.error(err.message);
    });

module.exports = pool;