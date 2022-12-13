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
  const client = await pool.connect();
  try {
    const query = `SELECT schedules.id, schedules.date, schedules.start_time, schedules.end_time, students.first_name AS student_first_name, students.last_name AS student_last_name, teachers.first_name as teacher_first_name, teachers.last_name AS teacher_last_name, classrooms.name AS classroom_name
    FROM schedules
    INNER JOIN students
    ON schedules.student_id = students.id
    INNER JOIN teachers
    ON schedules.teacher_id= teachers.id
    INNER JOIN classrooms
    ON schedules.classroom_id = classrooms.id;`;
    const response = await client.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

async function addSchedule(req, res) {
  const client = await pool.connect();
  try {
    const jsonData = req.body;
    const scheduleData = JSON.parse(jsonData);
    const { date, start_time, end_time, student_id, teacher_id, classroom_id } = scheduleData;
    const query = `INSERT INTO schedules (date, start_time, end_time, student_id, teacher_id, classroom_id) VALUES ($1, $2, $3, $4, $5, $6);`
    const response = await client.query(query, [date, start_time, end_time, student_id, teacher_id, classroom_id]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
  
}

export default schedules;