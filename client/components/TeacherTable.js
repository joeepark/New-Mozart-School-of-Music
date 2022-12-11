import { useState, useEffect } from "react"
import Loading from "./Loading";

function TeacherTable() {
  const [teachers, setTeachers] = useState([]);

  // Fetching data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/teachers');
        const data = await response.json();
        setTeachers(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [JSON.stringify(teachers)])

  // Handling the POST request after form submission
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

  return (
    <>
      {teachers ?
        <div className='selection teachers'>
          < form method='post' action='/api/teachers' onSubmit={handleSubmit} className='form' >
            <input type='text' placeholder="First Name" name='first_name' required />
            <input type='text' placeholder="Last Name" name='last_name' required />
            <button type="submit">Add Teacher</button>
          </form >
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                {teachers && teachers.map((teacher, index) => (
                  <Row teacher={teacher} key={index} />))}
              </tbody>
            </table>
          </div>
        </div > : <Loading />
      }
    </>
  )
}

// Data per row for each teacher
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