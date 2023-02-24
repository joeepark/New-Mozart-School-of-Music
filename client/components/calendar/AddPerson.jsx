function AddPerson() {
  function handleClick() {
    let popup = document.querySelector('.add-container');
    popup.style.display = 'none';
  }

  return (
    <section className="add-container">
      <h3>Registration Form</h3>
      <form method="post" action="/api/students" className="form flex">
        <div className="person-type-container">
          <div className="person-type flex">
            <div className="person">
              <input type="radio" id="check-student" name="person" defaultChecked />
              <label htmlFor="check-student">Student</label>
            </div>
            <div className="person">
              <input type="radio" id="check-teacher" name="person" />
              <label htmlFor="check-teacher">Teacher</label>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="input-box">
            <label>{"Student's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="first_name" />
          </div>
          <div className="input-box">
            <label>{"Student's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="last_name" />
          </div>
        </div>

        <div className="column">
          <div className="input-box">
            <label>{"Parent's First Name"}</label>
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="input-box">
            <label>{"Parent's Last Name"}</label>
            <input type="text" placeholder="Enter last name" />
          </div>
        </div>

        <div className="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" />
        </div>

        <div className="column">
          <div className="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" className="phonenumber" />
          </div>
          <div className="input-box">
            <label>Birth Date</label>
            <input type="date" placeholder="Enter birth date" name="dob" />
          </div>
        </div>
        <div className="input-box address">
          <label>Address</label>
          <div className="column">
            <input type="text" placeholder="Enter street address" />
            <input type="text" placeholder="Enter city" />
          </div>
          <div className="column">
            <input type="text" placeholder="Enter state" />
            <input type="number" placeholder="Enter postal code" />
          </div>
        </div>
        <div className="column">
          <button type="submit" id="submit">
            Submit
          </button>
          <button type="button" id="cancel" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </section>
  );
}
export default AddPerson;
