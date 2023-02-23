function CreateSchedule(props) {
  const { schedules, teachers } = useContext(DataContext);
  const { formRef } = props;

  teachers.sort(function (a, b) {
    const firstNameA = a.first_name.toUpperCase();
    const firstNameB = b.first_name.toUpperCase();
    if (firstNameA < firstNameB) {
      return -1;
    }
    if (firstNameA > firstNameB) {
      return 1;
    }
    return 0;
  });

  const [selectedTeacher, setSelectedTeacher] = useState({});

  const handleChange = (event) => {
    const selectedTeacherName = event.target.value;
    const selectedTeacherObj = teachers.find((teacher) => {
      return `${teacher.first_name} ${teacher.last_name}` === selectedTeacherName;
    });
    setSelectedTeacher(selectedTeacherObj);
  };

  if (selectedTeacher) {
    const filtered = schedules.filter((schedule) => {
      return schedule['teacher_id'] === selectedTeacher.id;
    });
    const events = filtered.map((schedule) => {
      return {
        title: `${schedule.students.first_name} ${schedule.students.last_name} - ${new Date(
          schedule.start_time
        )
          .toLocaleString('en-US', {
            timeZone: 'America/Los_Angeles',
          })
          .slice(10, 15)}`,
        start: new Date(schedule.start_time),
        end: new Date(schedule.end_time),
      };
    });

    return (
      <div className="create-schedule">
        <form method="post" actio="/api/schedules" ref={formRef}>
          <select className="teacher-select-btn" onChange={handleChange}>
            <option>Pick a teacher:</option>
            {teachers.map((teacher) => {
              return (
                <option key={teacher.id}>
                  {teacher.first_name} {teacher.last_name}
                </option>
              );
            })}
          </select>
          <select className="teacher-select-btn" onChange={handleChange}>
            <option>Pick a teacher:</option>
            {teachers.map((teacher) => {
              return (
                <option key={teacher.id}>
                  {teacher.first_name} {teacher.last_name}
                </option>
              );
            })}
          </select>
          <select className="teacher-select-btn" onChange={handleChange}>
            <option>Pick a teacher:</option>
            {teachers.map((teacher) => {
              return (
                <option key={teacher.id}>
                  {teacher.first_name} {teacher.last_name}
                </option>
              );
            })}
          </select>
          <label>Start Time</label>
          <input />
          <label>End Time</label>
          <input />
        </form>
      </div>
    );
  }
}

export default CreateSchedule;
