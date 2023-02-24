import supabase from '/pages/api/model/model';

async function classrooms(req, res) {
  try {
    if (req.method === 'GET') {
      return getClassrooms(req, res);
    } else if (req.method === 'POST') {
      return addSchedule(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getClassrooms(req, res) {
  try {
    const { data } = await supabase.from('classrooms').select('*');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default classrooms;
