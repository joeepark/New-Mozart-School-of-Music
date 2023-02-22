import { useContext } from 'react';
import DataContext from '/client/context/DataContext';

function AddNewTeachers() {
  const { handleTeacherSubmit } = useContext(DataContext);

  return (
    <section className="add-new">
      <h3>Registration Form</h3>
      <form method="post" action="/api/teachers" className="form" onSubmit={handleTeacherSubmit}>
        <div className="input-row">
          <div className="input">
            <label>{"Teacher's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="first_name"></input>
          </div>
          <div className="input">
            <label>{"Teacher's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="last_name"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" name="email"></input>
          </div>
          <div className="input">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" name="phone_number"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Instruments</label>
            <input type="text" placeholder="Enter instruments" name="instruments"></input>
          </div>
          <div className="input">
            <label>Studio Policies</label>
            <input type="text" placeholder="Enter studio policies" name="studio_policies"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Zoom Link</label>
            <input type="text" placeholder="Enter zoom link" name="zoom_link"></input>
          </div>
          <div className="input">
            <label>Etc</label>
            <input type="tel" placeholder="Enter phone number" name="phone_number"></input>
          </div>
        </div>
        <div className="input-row">
          <button id="cancel-btn">Cancel</button>
          <button type="submit" id="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddNewTeachers;
