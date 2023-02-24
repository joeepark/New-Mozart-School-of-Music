import supabase from '/pages/api/model/model';

async function schedules(req, res) {
  try {
    if (req.method === 'GET') {
      return getSchedules(req, res);
    } else if (req.method === 'POST') {
      return addSchedules(req, res);
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
    classrooms (
      room_name
    ),
    teachers (
      first_name,
      last_name
    )
  `);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addSchedules(req, res) {
  try {
    const jsonData = req.body;
    const scheduleData = JSON.parse(jsonData);
    const { start_time, end_time, student_id, teacher_id, classroom_id } = scheduleData;
    const { data } = await supabase
      .from('schedules')
      .insert([
        {
          start_time: start_time,
          end_time: end_time,
          student_id: student_id,
          teacher_id: teacher_id,
          classroom_id: classroom_id,
        },
      ])
      .select();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default schedules;
