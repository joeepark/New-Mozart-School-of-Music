import moment from 'moment';
import 'moment-timezone';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EditTeacherSchedule from './EditTeacherSchedule';
import CreateTeacherSchedule from '/client/components/calendar/CreateTeacherSchedule';
import DataContext from '/client/context/DataContext';

function CalendarTeacher() {
  const { schedules, teachers } = useContext(DataContext);
  const [selectedTeacher, setSelectedTeacher] = useState({});
  const [selectedEvent, setSelectedEvent] = useState(null);
  const clickRef = useRef(null);
  const localizer = momentLocalizer(moment);

  // Calendar built-in functions
  useEffect(() => {
    return () => {
      window.clearTimeout(clickRef?.current);
    };
  }, []);

  const onSelectEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      setSelectedEvent(calEvent);
      let popup = document.querySelector('.schedule-edit-container');
      if (popup) popup.style.display = 'block';
    }, 0);
  }, []);

  // Scheduling and event functions
  const filteredSchedules = schedules?.filter((schedule) => {
    return schedule?.['teacher_id'] === selectedTeacher.id;
  });

  const slicedTime = (time) => {
    if (time.length === 10) {
      return time.slice(0, 4);
    } else {
      return time.slice(0, 5);
    }
  };

  const events = filteredSchedules?.map((schedule) => {
    return {
      id: schedule?.id,
      title: `${schedule?.students.first_name} ${schedule?.students.last_name} - ${slicedTime(
        new Date(schedule?.start_time).toLocaleTimeString()
      )}`,
      start: new Date(`${schedule?.start_time}`),
      end: new Date(`${schedule?.end_time}`),
      resource: {
        student_first_name: schedule?.students.first_name,
        student_last_name: schedule?.students.last_name,
        teacher_first_name: schedule?.teachers.first_name,
        teacher_last_name: schedule?.teachers.last_name,
        classroom_name: schedule?.classrooms.room_name,
      },
    };
  });

  // Button handling functions
  const handleChange = (event) => {
    const selectedTeacherName = event.target.value;
    const selectedTeacherObj = teachers.find((teacher) => {
      return `${teacher.first_name} ${teacher.last_name}` === selectedTeacherName;
    });
    setSelectedTeacher(selectedTeacherObj);
  };

  function handleClick() {
    let popup = document.querySelector('.create-schedule');
    popup.style.display = 'block';
  }

  return (
    <section className="calendar">
      <div className="calendar-header">
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
          <button onClick={handleClick} className="create-schedule-btn">
            Create Schedule
          </button>
        </div>
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
      </div>

      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '90vh' }}
        step={15}
        min={new Date(2023, 1, 0, 9, 0, 0)}
        max={new Date(2023, 1, 0, 21, 0, 0)}
        popup
        onSelectEvent={onSelectEvent}
      />
      <CreateTeacherSchedule selectedTeacher={selectedTeacher} />
      {selectedEvent && <EditTeacherSchedule selectedEvent={selectedEvent} />}
    </section>
  );
}

export default CalendarTeacher;
