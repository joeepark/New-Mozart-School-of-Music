import pool from '../../server/model'

async function schedules(req, res) {
  try {
    if (req.method === 'GET') {
      return getSchedules(req, res);
    } else if (req.method === 'POST') {
      return addSchedule(req, res);
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

async function addSchedule(req, res) {
  try {
    const jsonData = req.body;
    const scheduleData = JSON.parse(jsonData);
    const { date, start_time, end_time } = scheduleData;
    const query = 'INSERT INTO schedules (date, start_time, end_time) VALUES ($1, $2, $3)'
    const response = await pool.query(query, [date, start_time, end_time]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export default schedules;