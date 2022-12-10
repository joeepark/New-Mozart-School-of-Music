import { useMemo, useState, useEffect } from "react"
import Loading from "./Loading";

function TeacherTable() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/teachers');
        const data = await response.json();
        setTeachers(data);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [JSON.stringify(teachers)])

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');

    const teacherData = {
      first_name: firstName,
      last_name: lastName,
    }

    const jsonData = JSON.stringify(teacherData);

    try {
      const response = await fetch('/api/teachers', {
        method: 'POST',
        body: jsonData
      });
      if (response.ok) {
        const data = await response.json();
        setTeachers([...teachers, data]);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const rows = useMemo(() => {
    return teachers && teachers.map((teacher, index) => (
      <Row teacher={teacher} key={index} />
    ));
  }, [teachers]);

  // console.log(teachers);
  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <div className='selection teachers'>
        <form method='post' action='/api/teachers' onSubmit={handleSubmit} className='form'>
          <input type='text' placeholder="First Name" name='first_name' required />
          <input type='text' placeholder="Last Name" name='last_name' required />
          <button type="submit">Add Teacher</button>
        </form>
        <div className='table'>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {rows}
            </tbody>
          </table>
        </div>
      </div>
    )
  }
}

function Row({ teacher }) {
  return (
    <>
      <tr className='rows'>
        <td>
          {teacher.first_name}
        </td>
        <td>
          {teacher.last_name}
        </td>
      </tr>
    </>
  )
}


export default TeacherTable;