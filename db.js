const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    password: '230895',
    host: 'localhost',
    database: 'langapp',
    port: 5432,
});

if (pool) {
    console.log("Database connected.");
}

module.exports = pool;