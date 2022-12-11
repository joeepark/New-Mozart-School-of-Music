import { useContext } from "react";
import DataContext from "../context/DataContext";
import Loading from "./Loading";

function StudentTable() {
  const { students, handleStudentSubmit } = useContext(DataContext);

  return (
    <>
      {students ?
        <div className='selection students'>
          <form method='post' action='/api/students' onSubmit={handleStudentSubmit} className='form'>
            <input type='text' placeholder="First Name" name='first_name' required />
            <input type='text' placeholder="Last Name" name='last_name' required />
            <input type='text' placeholder="DOB" name='dob' required />
            <input type='text' placeholder="Lesson" name='lesson' required />
            <button type="submit">Add Student</button>
          </form>
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>DOB</th>
                  <th>Lesson</th>
                </tr>
              </thead>
              <tbody>
                {students && students.map((student, index) => (
                  <Row student={student} key={index} />))}
              </tbody>
            </table>
          </div>
        </div> : <Loading />}
    </>
  )
}

// Data per row for each student
function Row({ student }) {
  return (
    <>
      <tr className='rows'>
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

export default StudentTable;