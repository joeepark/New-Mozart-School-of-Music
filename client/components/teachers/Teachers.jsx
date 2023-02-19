import { useContext } from 'react';
import DataContext from '/client/context/DataContext';
import Loading from '/client/components/layout/Loading';

function Teachers() {
  const { teachers } = useContext(DataContext);

  return (
    <section className="data-table-teachers">
      {teachers ? (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {teachers && teachers.map((teacher, index) => <Row teacher={teacher} key={index} />)}
          </tbody>
        </table>
      ) : (
        <Loading />
      )}
    </section>
  );
}

// Data per row for each teacher
function Row({ teacher }) {
  return (
    <tr className="table-rows">
      <td className="table">{teacher.first_name}</td>
      <td className="table">{teacher.last_name}</td>
      <td className="edit-btns table">
        <a className="update-btn">🖊️</a>
        <a className="delete-btn">❌</a>
      </td>
    </tr>
  );
}

export default Teachers;
