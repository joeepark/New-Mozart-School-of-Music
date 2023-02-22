import { useContext } from 'react';
import DataContext from '/client/context/DataContext';
import Loading from '/client/components/layout/Loading';

function Teachers() {
  const { teachers } = useContext(DataContext);
  teachers.sort(function (a, b) {
    const firstNameA = a.first_name.toUpperCase();
    const firstNameB = b.first_name.toUpperCase();
    if (firstNameA < firstNameB) {
      return -1;
    }
    if (firstNameA > firstNameB) {
      return 1;
    }
    return 0;
  });

  return (
    <section className="data-table-teachers">
      {teachers ? (
        <table className="table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Instruments</th>
              <th>Studio Policies</th>
              <th>Zoom Link</th>
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
  const { first_name, last_name, email, phone_number, instruments, studio_policies, zoom_link } =
    teacher;
  return (
    <tr className="table-rows">
      <td className="table">{first_name}</td>
      <td className="table">{last_name}</td>
      <td className="table">{email}</td>
      <td>{`${phone_number.slice(0, 3)}-${phone_number.slice(3, 6)}-${phone_number.slice(
        6,
        10
      )}`}</td>
      <td className="table">{instruments}</td>
      <td className="table">{studio_policies}</td>
      <td className="table">{zoom_link}</td>
      <td className="edit-btns table">
        <a className="update-btn">🖊️</a>
        <a className="delete-btn">❌</a>
      </td>
    </tr>
  );
}

export default Teachers;
