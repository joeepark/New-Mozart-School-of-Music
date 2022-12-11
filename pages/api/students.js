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
  try {
    const query = 'SELECT * FROM "public"."students"';
    const response = await pool.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function addStudent(req, res) {
  try {
    const jsonData = req.body;
    const studentData = JSON.parse(jsonData);
    const { first_name, last_name, dob, lesson } = studentData;
    const query = 'INSERT INTO students (first_name, last_name, dob, lesson) VALUES ($1, $2, $3, $4)';
    const response = await pool.query(query, [first_name, last_name, dob, lesson]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

export default students;