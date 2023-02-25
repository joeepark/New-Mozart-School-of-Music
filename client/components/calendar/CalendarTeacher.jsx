import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DataContext from '/client/context/DataContext';
import { useContext, useState, useRef, useEffect, useCallback } from 'react';
import CreateTeacherSchedule from '/client/components/calendar/CreateTeacherSchedule';

function CalendarTeacher() {
  const { schedules, teachers } = useContext(DataContext);
  const [selectedTeacher, setSelectedTeacher] = useState({});
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
      console.log(calEvent);
    }, 250);
  }, []);

  const onDoubleClickEvent = useCallback((calEvent) => {
    window.clearTimeout(clickRef?.current);
    clickRef.current = window.setTimeout(() => {
      alert(calEvent, 'onDoubleClickEvent');
    }, 250);
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
          <button onClick={handleClick}>Create Schedule</button>
        </div>
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
        onDoubleClickEvent={onDoubleClickEvent}
        onSelectEvent={onSelectEvent}
      />
      <CreateTeacherSchedule selectedTeacher={selectedTeacher} />
    </section>
  );
}

export default CalendarTeacher;
