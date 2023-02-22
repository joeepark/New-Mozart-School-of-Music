import supabase from '../../server/model';

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
    const { data } = await supabase.from('overview').select('*');
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
    const response = await supabase.from('students').insert([
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
    ]);
    return res.status(200).json(response.rows);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

export default students;
