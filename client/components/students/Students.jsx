import { useContext } from 'react';
import DataContext from '/client/context/DataContext';
import Loading from '/client/components/layout/Loading';

function Students() {
  const { students } = useContext(DataContext);

  return (
    <section className="data-table-students">
      {students ? (
        <div className="table">
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>DOB</th>
                <th>Lesson</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {students && students.map((student, index) => <Row student={student} key={index} />)}
            </tbody>
          </table>
        </div>
      ) : (
        <Loading />
      )}
    </section>
  );
}

// Data per row for each student
function Row({ student }) {
  return (
    <>
      <tr className="rows">
        <td>{student.first_name}</td>
        <td>{student.last_name}</td>
        <td>{student.dob && student.dob.slice(0, 10)}</td>
        <td>{student.lesson}</td>
        <td className="edit-btn">
          <a className="update-btn">🖊️</a>
          <a className="delete-btn">❌</a>
        </td>
      </tr>
    </>
  );
}

export default Students;
