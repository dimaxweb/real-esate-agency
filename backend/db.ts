// db.ts

import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'realtor-boost',
  password: '456789',
  port: 8001,
});

export default pool;
