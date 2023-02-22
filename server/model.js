// const { Pool } = require('pg');
// const dotenv = require('dotenv');

// dotenv.config();

// const PG_URI = process.env.PG_URI;

// const pool = new Pool({
//   connectionString: PG_URI
// })

// export default pool;


import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://gvachkupgmlkxxqsasbz.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;