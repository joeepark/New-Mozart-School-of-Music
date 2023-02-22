import supabase from '../../server/model';

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
    const { data } = await supabase.from('schedules').select(`
    *,
    students (
      first_name,
      last_name
    ),
    teachers (
      first_name
    ),
    classrooms (
      room_name
    )
  `);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addSchedule(req, res) {
  // const client = await pool.connect();
  // try {
  //   const jsonData = req.body;
  //   const scheduleData = JSON.parse(jsonData);
  //   const { date, start_time, end_time, student_id, teacher_id, classroom_id } = scheduleData;
  //   const query = `INSERT INTO schedules (date, start_time, end_time, student_id, teacher_id, classroom_id) VALUES ($1, $2, $3, $4, $5, $6);`;
  //   const response = await client.query(query, [
  //     date,
  //     start_time,
  //     end_time,
  //     student_id,
  //     teacher_id,
  //     classroom_id,
  //   ]);
  //   return res.status(200).json(response.rows);
  // } catch (err) {
  //   return res.status(500).json({ error: err.message });
  // } finally {
  //   await client.release();
  // }
}

export default schedules;
