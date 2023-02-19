function AddNewTeachers() {
  return (
    <section className="add-new">
      <h3>Registration Form</h3>
      <form method="post" action="/api/teachers" className="form">
        <div className="input-row">
          <div className="input">
            <label>{"Teacher's First Name"}</label>
            <input type="text" placeholder="Enter first name" name="student_first_name"></input>
          </div>
          <div className="input">
            <label>{"Teacher's Last Name"}</label>
            <input type="text" placeholder="Enter last name" name="student_last_name"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Email Address</label>
            <input type="text" placeholder="Enter email address" name="parent_first_name"></input>
          </div>
          <div className="input">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter phone number" name="parent_last_name"></input>
          </div>
        </div> 
        <div className="input-row">
          <div className="input">
            <label>Instruments</label>
            <input type="email" placeholder="Enter instruments" name="email"></input>
          </div>
          <div className="input">
            <label>Studio Policies</label>
            <input type="tel" placeholder="Enter studio policies" name="phone_number"></input>
          </div>
        </div>
        <div className="input-row">
          <div className="input">
            <label>Zoom Link</label>
            <input type="email" placeholder="Enter zoom link" name="email"></input>
          </div>
          <div className="input">
            <label>Etc</label>
            <input type="tel" placeholder="Enter phone number" name="phone_number"></input>
          </div>
        </div>
        <div className="input-row">
          <button id="cancel-btn">Cancel</button>
          <button id="submit-btn">Submit</button>
        </div>
      </form>
    </section>
  );
}
export default AddNewTeachers;
