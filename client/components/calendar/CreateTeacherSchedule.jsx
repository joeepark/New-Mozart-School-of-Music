import { useContext, useRef } from 'react';
import DataContext from '/client/context/DataContext';

function CreateSchedule({ selectedTeacher }) {
  const { students, classrooms, handleScheduleSubmit } = useContext(DataContext);
  const formRef = useRef(null);

  function handleClick() {
    formRef.current.style.display = 'none';
  }

  return (
    <div className="schedule-popup" ref={formRef}>
      <form method="post" action="/api/schedules" onSubmit={handleScheduleSubmit}>
        <div className="schedule-popup__selection">
          <input type="hidden" name="teacher_id" value={selectedTeacher.id} />
          <select name="student_id">
            <option>Pick a student:</option>
            {students.map((student) => {
              return (
                <option key={student.id} value={student.id}>
                  {student.first_name} {student.last_name}
                </option>
              );
            })}
          </select>
          <select name="classroom_id">
            <option>Pick a classroom:</option>
            {classrooms.map((classroom) => {
              return (
                <option key={classroom.id} value={classroom.id}>
                  {classroom.room_name}
                </option>
              );
            })}
          </select>
        </div>
        <div className="schedule-popup__date">
          <div>
            <label>Date: </label>
            <input type="date" name="date" required />
          </div>
          <div>
            <label>Start Time: </label>
            <input type="time" name="start_time" min="09:00" max="21:00" required />
          </div>
          <div>
            <label>End Time: </label>
            <input type="time" name="end_time" min="09:00" max="21:00" required />
          </div>
        </div>
        <div className="schedule-popup__buttons">
          <button type="submit" className="submit-btn">
            Submit
          </button>
          <button type="button" className="cancel-btn" onClick={handleClick}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateSchedule;
