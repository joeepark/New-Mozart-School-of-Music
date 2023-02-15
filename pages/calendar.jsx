import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment-timezone';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import DataContext from '/client/context/DataContext';
import { useContext, useState } from 'react';

moment.tz.setDefault('America/Los_Angeles');
const localizer = momentLocalizer(moment);
console.log(moment())

function Calendarz(props) {
  const { schedules } = useContext(DataContext);
  // console.log(schedules);
  const events = schedules.map((schedule) => {
    return {
      title: '',
      start: moment(schedule.date.slice(0, 10)),
      end: new Date(2023, 1, 20),
    };
  });

  console.log('events', events)

  return (
    <div className="calendar">
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="month"
        events={events}
        style={{ height: '70vh' }}
      />
    </div>
  );
}

export default Calendarz;
