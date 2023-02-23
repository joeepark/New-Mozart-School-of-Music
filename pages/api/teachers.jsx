import supabase from '../../server/model';

async function teachers(req, res) {
  try {
    if (req.method === 'GET') {
      return getTeachers(req, res);
    } else if (req.method === 'POST') {
      return addTeacher(req, res);
    } else if (req.method === 'DELETE') {
      return deleteTeacher(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getTeachers(req, res) {
  try {
    const { data } = await supabase.from('teachers').select('*');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addTeacher(req, res) {
  try {
    const jsonData = req.body;
    const teacherData = JSON.parse(jsonData);
    const { first_name, last_name, email, phone_number, instruments, studio_policies, zoom_link } =
      teacherData;
    const { data } = await supabase
      .from('teachers')
      .insert([
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          phone_number: phone_number,
          instruments: instruments,
          studio_policies: studio_policies,
          zoom_link: zoom_link,
        },
      ])
      .select();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteTeacher(req, res) {
  try {
    const id = req.body;
    const { data } = await supabase.from('teachers').delete().eq('id', id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default teachers;
