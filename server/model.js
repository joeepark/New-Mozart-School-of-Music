const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

const PG_URI = process.env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI
})

const connect = async () => {
  try {
    await pool.connect();
    console.log('Successfully connected to the database');
  } catch (err) {
    console.error('Error connecting to the database:', err.message);
  }
}

export default pool;