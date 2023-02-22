import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DataContext from '/client/context/DataContext';
import { useContext, useState } from 'react';
import Loading from '../layout/Loading';

const localizer = momentLocalizer(moment);

function CalendarTeacher(props) {
  const { schedules, teachers } = useContext(DataContext);
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

  const handleChange = (e) => {
    const selectedTeacherName = e.target.value;
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
      <section className="calendar">
        <div className="teacher">
          {selectedTeacher ? (
            <div className="teacher-info">
              <p>Instruments: {selectedTeacher.instruments}</p>
              <p>Studio Policies: {selectedTeacher.studio_policies}</p>
              <p>Zoom Link: {selectedTeacher.zoom_link}</p>
            </div>
          ) : (
            <div className="teacher-info">
              <p>Instruments: </p>
              <p>Studio Policies: </p>
              <p>Zoom Link: </p>
            </div>
          )}
          <div className="teacher-select">
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
          </div>
        </div>

        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="month"
          events={events}
          style={{ height: '78vh' }}
          step={15}
          min={new Date(2023, 1, 0, 9, 0, 0)}
          max={new Date(2023, 1, 0, 21, 0, 0)}
        />
      </section>
    );
  } else {
    <Loading />;
  }
}

export default CalendarTeacher;
