import ScheduleTable from '/client/components/ScheduleTable'
import StudentTable from '/client/components/StudentTable'
import TeacherTable from '/client/components/TeacherTable'
import ClassroomTable from '/client/components/ClassroomTable';

function tables() {
  const handleClick = (event) => {
    resetActive();
    const select = document.querySelector(`.${event.target.value}`);
    select.classList.toggle('active');
  }

  const resetActive = () => {
    const all = document.querySelectorAll('.active');
    all.forEach(element => element.classList.remove('active'));
  }

  return (
    <>
      <div className="table-selection flex container">
        <h4>View:</h4>
        <div className="table-person">
          <input type="radio" value="schedules" id="check-schedule" name="table-person" onClick={handleClick} />
          <label for="check-schedule">Schedules</label>
        </div>
        <div className="table-person">
          <input type="radio" value="students" id="check-student" name="table-person" onClick={handleClick} />
          <label for="check-student">Students</label>
        </div>
        <div className="table-person">
          <input type="radio" value="teachers" id="check-teacher" name="table-person" onClick={handleClick} />
          <label for="check-teacher">Teachers</label>
        </div>
      </div>
      <StudentTable />
      <TeacherTable />
      <ScheduleTable />
      <ClassroomTable />
    </>
  )
}

export default tables;