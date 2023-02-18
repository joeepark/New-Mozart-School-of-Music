function AddNewStudents() {
  return (
    <section className="add-new-students">
      <h3>Registration Form</h3>
      <form method="post" action="/api/students" className="form">
        <div className="input-row">
          <div className="input">
            <label>{"Student's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="student_first_name"></input>
          </div>
          <div className="input">
            <label>{"Student's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="student_last_name"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>{"Parents's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="parent_first_name"></input>
          </div>
          <div className="input">
            <label>{"Parents's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="parent_last_name"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Email Address</label>
            <input type="email" placeholder="Enter email address" name="email"></input>
          </div>
          <div className="input">
            <label>Phone Number</label>
            <input type="tel" placeholder="Enter phone number" name="phone_number"></input>
          </div>
        </div>
      </form>
    </section>
  );
}
export default AddNewStudents;
