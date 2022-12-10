import { useState, useEffect, useMemo } from "react"
import Loading from "./Loading";

function ClassroomTable() {
  const [classrooms, setClassrooms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/classrooms');
      const data = await response.json();
      setClassrooms(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  const rows = useMemo(() => {
    return classrooms.map((classroom, index) => (
      <Row classroom={classroom} key={index} />
    ));
  }, [classrooms]);


  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>DOB</th>
              <th>lesson</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </>
    )
  }
}


function Row({ student }) {
  return (
    <>
      <tr>
        <td>
          {student.first_name}
        </td>
        <td>
          {student.last_name}
        </td>
        <td>
          {student.dob && student.dob.slice(0, 10)}
        </td>
        <td>
          {student.lesson}
        </td>
      </tr>
    </>
  )
}


export default ClassroomTable;