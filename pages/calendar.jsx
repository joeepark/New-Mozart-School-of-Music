import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DataContext from '/client/context/DataContext';
import { useContext, useState } from 'react';

const localizer = momentLocalizer(moment);

function Calendarz(props) {
  const { schedules } = useContext(DataContext);
  console.log(schedules);

  const events = schedules.map((schedule) => {
    return {
      title: `${schedule.student_first_name} ${schedule.student_last_name} ${schedule.start_time.slice(0,5)}`,
      start: new Date(`${schedule.date.slice(0, 10)} ${schedule.start_time}`),
      end: new Date(`${schedule.date.slice(0, 10)} ${schedule.end_time}`),
    };
  });

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '80vh' }}
        step={15}
        min={new Date(2023, 1, 0, 9, 0, 0)}
        max={new Date(2023, 1, 0, 21, 0, 0)}
      />
    </div>
  );
}

export default Calendarz;
