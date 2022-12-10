import { useState, useEffect, useMemo } from "react"
import Loading from "./Loading";

function ScheduleTable() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('/api/schedules');
      const data = await response.json();
      setSchedules(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  }

  const rows = useMemo(() => {
    return schedules.map((schedule, index) => (
      <Row schedule={schedule} key={index} />
    ));
  }, [schedules]);


  if (loading) {
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <table id='schedules'>
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


export default ScheduleTable;