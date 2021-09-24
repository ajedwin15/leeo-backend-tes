import { Pool } from 'pg'

export const pool = new Pool ({
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'leelo',
    port: 5432
});

pool.connect((err) => {
    if(err) throw err;
    console.log("Connected to database");
    
});