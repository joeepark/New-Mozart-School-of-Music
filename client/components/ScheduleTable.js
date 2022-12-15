import { useContext } from "react"
import DataContext from "../context/DataContext";
import Loading from "./Loading";

function ScheduleTable() {
  const { students, teachers, classrooms, schedules, handleScheduleSubmit } = useContext(DataContext);

  const roomFiltered = [...new Map(classrooms.map((m) => [m.name, m])).values()];

  return (
    <>
      {schedules ?
        <div className='selection schedules container active'>
          <form method='post' action='/api/schedules /api/classrooms' onSubmit={handleScheduleSubmit} className='form' >
            <input type='text' placeholder="Date" name='date' required />
            <input type='text' placeholder="Start Time" name='start_time' required />
            <input type='text' placeholder="End Time" name='end_time' required />
            <select name='student_id'>
              {students.map(((student, index) => {
                return (
                  <option value={student.id} key={index}>{student.first_name} {student.last_name}</option>
                );
              }))}
            </select>
            <select name='teacher_id'>
              {teachers.map(((teacher, index) => {
                return (
                  <option value={teacher.id} key={index}>{teacher.first_name} {teacher.last_name}</option>
                );
              }))}
            </select>
            <select name='classroom_id'>
              {roomFiltered.map(((classroom, index) => {
                return (
                  <option value={classroom.id} key={index}>{classroom.name}</option>
                );
              }))}
            </select>
            <button type="submit">Add Schedule</button>
          </form >
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                  <th>Student</th>
                  <th>Teacher</th>
                  <th>Classroom</th>
                </tr>
              </thead>
              <tbody>
                {schedules && schedules.map((schedule, index) => (
                  <Row schedule={schedule} key={index} />))}
              </tbody>
            </table>
          </div>
        </div > : <Loading />
      }
    </>
  )
}

// Data per row for each teacher
function Row({ schedule }) {
  return (
    <>
      <tr className='rows'>
        <td>
          {schedule.date && schedule.date.slice(0, 10)}
        </td>
        <td>
          {schedule.start_time}
        </td>
        <td>
          {schedule.end_time}
        </td>
        <td>
          {schedule.student_first_name} {schedule.student_last_name}
        </td>
        <td>
          {schedule.teacher_first_name} {schedule.teacher_last_name}
        </td>
        <td>
          {schedule.classroom_name}
        </td>
        <td className="edit-btn">
          <a className="update-btn">🖊️</a>
          <a className="delete-btn">❌</a>
        </td>
      </tr>
    </>
  )
}


export default ScheduleTable;