import pool from '../../server/model'

async function classrooms(req, res) {
  try {
    if (req.method === 'GET') {
      return getClassrooms(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getClassrooms(req, res) {
  try {
    const query = 'SELECT * FROM "public"."classrooms"';
    const response = await pool.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export default classrooms;