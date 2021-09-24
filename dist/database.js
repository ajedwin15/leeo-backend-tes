"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
const pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    user: 'postgres',
    host: 'localhost',
    password: '1234',
    database: 'leelo',
    port: 5432
});
exports.pool.connect((err) => {
    if (err)
        throw err;
    console.log("Connected to database");
});
