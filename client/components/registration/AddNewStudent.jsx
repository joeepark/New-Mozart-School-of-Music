import { useContext, useRef } from 'react';
import DataContext from '/client/context/DataContext';

function AddNewStudents() {
  const { handleStudentSubmit } = useContext(DataContext);
  const formRef = useRef(null);

  function handleCancelClick() {
    formRef.current.reset();
  }

  return (
    <section className="add-new">
      <h3>Registration Form</h3>
      <form
        method="post"
        action="/api/students"
        className="form"
        onSubmit={handleStudentSubmit}
        ref={formRef}
      >
        <div className="input-row">
          <div className="input">
            <label>{"Student's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="first_name" required></input>
          </div>
          <div className="input">
            <label>{"Student's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="last_name" required></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>{"Parents's First Name"}</label>
            <input
              type="text"
              placeholder="Enter first name"
              name="parent_first_name"
              required
            ></input>
          </div>
          <div className="input">
            <label>{"Parents's Last Name"}</label>
            <input
              type="text"
              placeholder="Enter last name"
              name="parent_last_name"
              required
            ></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" name="email" required></input>
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
        <div className="input-row address">
          <div className="input">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter street address"
              name="street_address"
              autoComplete="street-address"
              required
            ></input>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter city" name="city_address" required></input>
          </div>
          <div className="input">
            <input type="text" placeholder="Enter state" name="state_address" required></input>
          </div>
          <div className="input">
            <input
              type="text"
              placeholder="Enter zip code"
              name="zip_address"
              maxLength="5"
              autoComplete="postal-code"
              pattern="^([0-9]{5})$"
              required
            ></input>
          </div>
        </div>
        <div className="input-row">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleCancelClick}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddNewStudents;
