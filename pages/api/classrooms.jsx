import pool from '../../server/model';

async function classrooms(req, res) {
  try {
    if (req.method === 'GET') {
      return getClassrooms(req, res), getScheduledClassrooms(req, res);
    } else if (req.method === 'POST') {
      return addClassroom(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getScheduledClassrooms(req, res) {
  const client = await pool.connect();
  try {
    const query = `SELECT classrooms.id, classrooms.name, schedules.date AS schedule_date, schedules.start_time AS schedule_start_time, schedules.end_time AS schedule_end_time, students.first_name AS student_first_name, students.last_name AS student_last_name, teachers.first_name as teacher_first_name, teachers.last_name AS teacher_last_name
    FROM classrooms
    INNER JOIN students
    ON classrooms.student_id = students.id
    INNER JOIN teachers
    ON classrooms.teacher_id= teachers.id
    INNER JOIN schedules
    ON classrooms.schedule_id = schedules.id;`;
    const response = await client.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

async function getClassrooms(req, res) {
  const client = await pool.connect();
  try {
    const query = `SELECT * FROM "classrooms"`;
    const response = await client.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

async function addClassroom(req, res) {
  const client = await pool.connect();
  try {
    const jsonData = req.body;
    const classroomData = JSON.parse(jsonData);
    const { name } = classroomData;
    const query = `INSERT INTO classrooms (name) VALUES ($1)`;
    const response = await client.query(query, [name]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

export default classrooms;
