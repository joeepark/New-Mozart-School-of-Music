import pool from '../../server/model'

async function classrooms(req, res) {
  try {
    if (req.method === 'GET') {
      return getClassrooms(req, res);
    } else if (req.method === 'POST') {
      return addClassroom(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getClassrooms(req, res) {
  try {
    const query = `SELECT classrooms.id, classrooms.name, schedules.date AS schedule_date, schedules.start_time AS schedule_start_time, schedules.end_time AS schedule_end_time, students.first_name AS student_first_name, students.last_name AS student_last_name, teachers.first_name as teacher_first_name, teachers.last_name AS teacher_last_name
    FROM classrooms
    INNER JOIN students
    ON classrooms.student_id = students.id
    INNER JOIN teachers
    ON classrooms.teacher_id= teachers.id
    INNER JOIN schedules
    ON classrooms.schedule_id = schedules.id;`;
    const response = await pool.query(query);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}

async function addClassroom(req, res) {
  try {
    const jsonData = req.body;
    const classroomData = JSON.parse(jsonData);
    const { name, schedule_id, student_id, teacher_id } = classroomData;
 
    const response = await pool.query(query, [name, schedule_id, student_id, teacher_id]);
    return res.status(200).json(response.rows);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
}


export default classrooms;