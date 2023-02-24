import { useContext, useState, useRef } from 'react';
import DataContext from '/client/context/DataContext';

function CreateSchedule({ selectedTeacher }) {
  const { students, classrooms, handleScheduleSubmit } = useContext(DataContext);
  const formRef = useRef(null);

  function handleClick() {
    formRef.current.style.display = 'none';
  }

  return (
    <div className="create-schedule" ref={formRef}>
      <form method="post" action="/api/schedules" onSubmit={handleScheduleSubmit}>
        <div className="schedule-select-container">
          <input type="hidden" name="teacher_id" value={selectedTeacher.id} />
          {/* <select>
              <option>Pick a teacher:</option>
              {teachers.map((teacher) => {
                return (
                  <option key={teacher.id}>
                    {teacher.first_name} {teacher.last_name}
                  </option>
                );
              })}
            </select> */}
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
        <div className="input-container">
          <div className="input-row">
            <label>Date: </label>
            <input type="date" name="date" required />
          </div>
          <div className="input-row">
            <label>Start Time: </label>
            <input type="time" name="start_time" min="09:00" max="21:00" required />
          </div>
          <div className="input-row">
            <label>End Time: </label>
            <input type="time" name="end_time" min="09:00" max="21:00" required />
          </div>
        </div>
        <div className="schedule-button-container">
          <button type="submit" className="submit-btn" onClick={handleClick}>
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
