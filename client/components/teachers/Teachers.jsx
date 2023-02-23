import { useContext } from 'react';
import DataContext from '/client/context/DataContext';
import Loading from '/client/components/layout/Loading';
import remove from '/client/assets/delete.png';
import edit from '/client/assets/edit.png';
import Image from 'next/image';

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
        <table>
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
  const { handleTeacherDelete } = useContext(DataContext);
  const {
    id,
    first_name,
    last_name,
    email,
    phone_number,
    instruments,
    studio_policies,
    zoom_link,
  } = teacher;

  const handleDeleteClick = () => {
    handleTeacherDelete(id);
  };

  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{email}</td>
      <td>{`${phone_number.slice(0, 3)}-${phone_number.slice(3, 6)}-${phone_number.slice(
        6,
        10
      )}`}</td>
      <td>{instruments}</td>
      <td>{studio_policies}</td>
      <td>{zoom_link}</td>
      <td className="edit-buttons">
        <Image src={edit} alt="edit button" height={18}></Image>
        <Image src={remove} alt="delete button" height={18} onClick={handleDeleteClick}></Image>
      </td>
    </tr>
  );
}

export default Teachers;
