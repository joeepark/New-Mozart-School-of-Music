import { useContext, useState } from "react";
import DataContext from "../context/DataContext";
import Loading from "./Loading";

function ClassroomTable() {
  const { classrooms, handleClassroomSubmit } = useContext(DataContext);
  const [selectedClassroom, setSelectedClassroom] = useState('');

  const roomFiltered = [...new Map(classrooms.map((m) => [m.name, m])).values()];

  const handleClick = (event) => {
    setSelectedClassroom(event.target.value);
  }

  return (
    <>
      {classrooms ?
        <div className='selection classrooms container'>
          <form method='post' action='/api/classrooms' onSubmit={handleClassroomSubmit} className='form' >
            <select onClick={handleClick}>
              <option>-- Pick a room --</option>
              {roomFiltered.map((room, index) => {
                return (
                  <option value={room.name} key={index}>{room.name}</option>
                )
              })}
            </select>
            <input type='text' placeholder="Name" name='name' required />
            <button type="submit">Add Classroom</button>
          </form >
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Student</th>
                  <th>Teacher</th>
                </tr>
              </thead>
              <tbody>
                {classrooms && classrooms.map((classroom, index) => (
                  <Row classroom={classroom} selectedClassroom={selectedClassroom} key={index} />))}
              </tbody>
            </table>
          </div>
        </div > : <Loading />
      }
    </>
  )
}

// Data per row for each teacher
function Row({ classroom, selectedClassroom }) {
  if (selectedClassroom === classroom.name) {
    return (
      <>
        <tr className='rows'>
          <td>
            {classroom.name}
          </td>
          <td>
            {classroom && classroom.schedule_date.slice(0, 10)}
          </td>
          <td>
            {classroom.schedule_start_time}
          </td>
          <td>
            {classroom.schedule_end_time}
          </td>
          <td>
            {classroom.student_first_name} {classroom.student_last_name}
          </td>
          <td>
            {classroom.teacher_first_name} {classroom.teacher_last_name}
          </td>
          <td className="edit-btn">
            <a className="update-btn">🖊️</a>
            <a className="delete-btn">❌</a>
          </td>
        </tr>
      </>
    )
  } else {
    return;
  }
}


export default ClassroomTable;