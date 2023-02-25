function EditSchedule({ selectedEvent }) {
  let {
    start,
    end,
    resource: {
      classroom_name,
      teacher_first_name,
      teacher_last_name,
      student_first_name,
      student_last_name,
    },
  } = selectedEvent;

  let date = start.toString().slice(0, 15);
  if (start.toString().slice(16, 17) === '0') {
    start = start.toString().slice(17, 21);
    end = end.toString().slice(17, 21);
  } else {
    start = start.toString().slice(16, 21);
    end = end.toString().slice(16, 21);
  }

  return (
    <div className="schedule-popup">
      <span>Date: {date}</span>
      <span>
        Time: {start}-{end}
      </span>
      <span>Classroom: {classroom_name}</span>
      <span>
        Teacher: {teacher_first_name} {teacher_last_name}
      </span>
      <span>
        Student: {student_first_name} {student_last_name}
      </span>
    </div>
  );
}
export default EditSchedule;
