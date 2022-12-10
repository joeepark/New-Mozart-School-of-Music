import pool from '../../server/model'

async function schedules(req, res) {
  try {
    if (req.method === 'GET') {
      return getSchedules(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getSchedules(req, res) {
  try {
    const query = 'SELECT * FROM "public"."schedules"';
    const response = await pool.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export default schedules;