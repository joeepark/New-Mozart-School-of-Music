import { useContext, useRef } from 'react';
import DataContext from '/client/context/DataContext';

function AddNewTeachers(props) {
  const { handleTeacherSubmit } = useContext(DataContext);
  const formRef = useRef(null);

  function handleCancelClick() {
    formRef.current.reset();
  }

  return (
    <section className="add-new">
      <h3>Registration Form</h3>
      <form
        method="post"
        action="/api/teachers"
        className="form"
        onSubmit={handleTeacherSubmit}
        ref={formRef}
      >
        <div className="input-row">
          <div className="input">
            <label>{"Teacher's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="first_name" required></input>
          </div>
          <div className="input">
            <label>{"Teacher's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="last_name" required></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" name="email" required></input>
          </div>
          <div className="input">
            <label>Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              name="phone_number"
              pattern="[0-9]{10}"
              autoComplete="tel"
              required
            ></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Instruments</label>
            <input type="text" placeholder="Enter instruments" name="instruments" required></input>
          </div>
          <div className="input">
            <label>Studio Policies</label>
            <input
              type="text"
              placeholder="Enter studio policies"
              name="studio_policies"
              required
            ></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Zoom Link</label>
            <input type="url" placeholder="Enter zoom link" name="zoom_link"></input>
          </div>
          <div className="input">
            <label>Etc</label>
            <input type="text" placeholder="" name=""></input>
          </div>
        </div>
        <div className="input-row">
          <button id="cancel-btn" onClick={handleCancelClick}>
            Cancel
          </button>
          <button type="submit" id="submit-btn">
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddNewTeachers;