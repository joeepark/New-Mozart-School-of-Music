import pool from '../../server/model'

async function students(req, res) {
  try {
    if (req.method === 'GET') {
      return getStudents(req, res);
    } else if (req.method === 'POST') {
      return addStudent(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getStudents(req, res) {
  const client = await pool.connect();
  try {
    const query = 'SELECT * FROM "public"."students"';
    const response = await client.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

async function addStudent(req, res) {
  const client = await pool.connect();
  try {
    const jsonData = req.body;
    const studentData = JSON.parse(jsonData);
    const { first_name, last_name, dob, lesson, teacher_id } = studentData;
    const query = 'INSERT INTO students (first_name, last_name, dob, lesson, teacher_id) VALUES ($1, $2, $3, $4, $5)';
    const response = await client.query(query, [first_name, last_name, dob, lesson, teacher_id]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

export default students;