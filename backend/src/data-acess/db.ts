import {Pool} from 'pg';
require('dotenv').config();

export const pool = new Pool({
  user: process.env.USER,
  host: process.env.HOST,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
  port: Number(process.env.PORT)
});

pool.connect()
  .then(() => console.log("Connected to the database!"))
  .catch(err  => console.error("Connection error", err));

module.exports = pool;

