import moment from 'moment';
import 'moment-timezone';
import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import EditClassroomSchedule from './EditClassroomSchedule';
import CreateClassroomSchedule from '/client/components/calendar/CreateClassroomSchedule';
import DataContext from '/client/context/DataContext';

function CalendarClassroom() {
  const { schedules, classrooms } = useContext(DataContext);
  const [selectedClassroom, setSelectedClassroom] = useState({});
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
    return schedule?.['classroom_id'] === selectedClassroom.id;
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
      title: `${schedule?.teachers.first_name} ${schedule?.teachers.last_name} - ${slicedTime(
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
    const selectedClassroomName = event.target.value;
    const selectedClassroomObj = classrooms.find((classroom) => {
      return `${classroom.room_name}` === selectedClassroomName;
    });
    setSelectedClassroom(selectedClassroomObj);
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
            <option>Pick a room:</option>
            {classrooms?.map((classroom) => {
              return <option key={classroom.id}>{classroom.room_name}</option>;
            })}
          </select>
          <button onClick={handleClick} className="create-schedule-btn">
            Create Schedule
          </button>
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
        onSelectEvent={onSelectEvent}
      />
      <CreateClassroomSchedule selectedClassroom={selectedClassroom} />
      {selectedEvent && <EditClassroomSchedule selectedEvent={selectedEvent} />}
    </section>
  );
}

export default CalendarClassroom;
