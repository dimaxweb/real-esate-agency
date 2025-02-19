"use strict";
// db.ts
Object.defineProperty(exports, "__esModule", { value: true });
var pkg = require("pg");
var Pool = pkg.Pool;
var pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'realtor-boost',
    password: '456789',
    port: 8001,
});
exports.default = pool;
