import supabase from '/pages/api/model/model';

async function students(req, res) {
  try {
    if (req.method === 'GET') {
      return getStudents(req, res);
    } else if (req.method === 'POST') {
      return addStudent(req, res);
    } else if (req.method === 'DELETE') {
      return deleteStudent(req, res);
    }
  } catch (err) {
    console.error(err);
  }
}

async function getStudents(req, res) {
  try {
    const { data } = await supabase.from('students').select('*');
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function addStudent(req, res) {
  try {
    const jsonData = req.body;
    const studentData = JSON.parse(jsonData);
    const {
      first_name,
      last_name,
      parent_first_name,
      parent_last_name,
      email,
      phone_number,
      street_address,
      city_address,
      state_address,
      zip_address,
    } = studentData;
    const { data } = await supabase
      .from('students')
      .insert([
        {
          first_name: first_name,
          last_name: last_name,
          parent_first_name: parent_first_name,
          parent_last_name: parent_last_name,
          email: email,
          phone_number: phone_number,
          street_address: street_address,
          city_address: city_address,
          state_address: state_address,
          zip_address: zip_address,
        },
      ])
      .select();
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function updateStudent(req, res) {
  try {
    const id = req.body;
    // const { data } = await supabase.from('students').update().eq('id', id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteStudent(req, res) {
  try {
    const id = req.body;
    const { data } = await supabase.from('students').delete().eq('id', id);
    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default students;
