import { useContext } from "react";
import DataContext from "../context/DataContext";
import Loading from "./Loading";

function TeacherTable() {
  const { teachers, handleTeacherSubmit } = useContext(DataContext);

  return (
    <>
      {teachers ?
        <div className='selection container teachers'>
          < form method='post' action='/api/teachers' onSubmit={handleTeacherSubmit} className='form' >
            {/* <input type='text' placeholder="First Name" name='first_name' required />
            <input type='text' placeholder="Last Name" name='last_name' required />
            <button type="submit">Add Teacher</button> */}
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
        <td className="edit-btn">
          <a className="update-btn">🖊️</a>
          <a className="delete-btn">❌</a>
        </td>
      </tr>
    </>
  )
}


export default TeacherTable;