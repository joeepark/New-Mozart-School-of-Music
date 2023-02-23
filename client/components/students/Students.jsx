import { useContext } from 'react';
import DataContext from '/client/context/DataContext';
import Loading from '/client/components/layout/Loading';
import remove from '/client/assets/delete.png';
import edit from '/client/assets/edit.png';
import Image from 'next/image';

function Students() {
  const { students } = useContext(DataContext);
  students.sort(function (a, b) {
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
    <section className="data-table-students">
      {students ? (
        <div>
          <table>
            <thead>
              <tr>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Parent First Name</th>
                <th>Parent Last Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip Code</th>
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
  const { handleStudentDelete } = useContext(DataContext);
  const {
    id,
    first_name,
    last_name,
    parent_first_name,
    parent_last_name,
    email,
    phone_number,
    street_address,
    city_address,
    state_address,
    zip_address,
  } = student;

  const handleDeleteClick = () => {
    handleStudentDelete(id);
  };

  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{parent_first_name}</td>
      <td>{parent_last_name}</td>
      <td>{email}</td>
      <td>{`${phone_number.slice(0, 3)}-${phone_number.slice(3, 6)}-${phone_number.slice(
        6,
        10
      )}`}</td>
      <td>{street_address}</td>
      <td>{city_address}</td>
      <td>{state_address}</td>
      <td>{zip_address}</td>
      <td className="edit-buttons">
        <Image src={edit} alt="edit button" height={18}></Image>
        <Image src={remove} alt="delete button" height={18} onClick={handleDeleteClick}></Image>
      </td>
    </tr>
  );
}

export default Students;
