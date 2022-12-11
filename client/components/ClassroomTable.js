import { useState, useEffect } from "react"
import Loading from "./Loading";

function ClassroomTable() {
  const [classrooms, setClassrooms] = useState([]);

  // Fetching data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/classrooms');
        const data = await response.json();
        setClassrooms(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [JSON.stringify(classrooms)])

  // Handling the POST request after form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const classroomData = {
      name: name
    }
    const jsonData = JSON.stringify(classroomData);
    try {
      const response = await fetch('/api/classrooms', {
        method: 'POST',
        body: jsonData
      });
      if (response.ok) {
        const data = await response.json();
        setClassrooms([...classrooms, data]);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {classrooms ?
        <div className='selection classrooms'>
          <form method='post' action='/api/classrooms' onSubmit={handleSubmit} className='form' >
            <input type='text' placeholder="Name" name='name' required />
            <button type="submit">Add Classroom</button>
          </form >
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                </tr>
              </thead>
              <tbody>
                {classrooms && classrooms.map((classroom, index) => (
                  <Row classroom={classroom} key={index} />))}
              </tbody>
            </table>
          </div>
        </div > : <Loading />
      }
    </>
  )
}

// Data per row for each teacher
function Row({ classroom }) {
  return (
    <>
      <tr className='rows'>
        <td>
          {classroom.name}
        </td>
      </tr>
    </>
  )
}


export default ClassroomTable;