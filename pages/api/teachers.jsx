import pool from '../../server/model';

async function teachers(req, res) {
  try {
    if (req.method === 'GET') {
      return getTeachers(req, res);
    }
    if (req.method === 'POST') {
      return addTeacher(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getTeachers(req, res) {
  const client = await pool.connect();
  try {
    const query = 'SELECT * FROM "public"."teachers"';
    const response = await client.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

async function addTeacher(req, res) {
  const client = await pool.connect();
  try {
    const jsonData = req.body;
    const teacherData = JSON.parse(jsonData);
    const { first_name, last_name } = teacherData;
    const query = 'INSERT INTO teachers (first_name, last_name) VALUES ($1, $2)';
    const response = await client.query(query, [first_name, last_name]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  } finally {
    await client.release();
  }
}

export default teachers;
