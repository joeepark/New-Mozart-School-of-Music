const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI
})

export default pool;