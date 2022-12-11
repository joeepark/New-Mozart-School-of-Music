import { useState, useEffect } from "react"
import Loading from "./Loading";

function ScheduleTable() {
  const [schedules, setSchedules] = useState([]);

  // Fetching data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/schedules');
        const data = await response.json();
        setSchedules(data);
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [JSON.stringify(schedules)])

  // Handling the POST request after form submission
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const date = formData.get('date');
    const startTime = formData.get('start_time');
    const endTime = formData.get('end_time');
    const scheduleData = {
      date: date,
      start_time: startTime,
      end_time: endTime,
    }
    const jsonData = JSON.stringify(scheduleData);
    try {
      const response = await fetch('/api/schedules', {
        method: 'POST',
        body: jsonData
      });
      if (response.ok) {
        const data = await response.json();
        setSchedules([...schedules, data]);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      {schedules ?
        <div className='selection schedules'>
          <form method='post' action='/api/schedules' onSubmit={handleSubmit} className='form' >
            <input type='text' placeholder="Date" name='date' required />
            <input type='text' placeholder="Start Time" name='start_time' required />
            <input type='text' placeholder="End Time" name='end_time' required />
            <button type="submit">Add Schedule</button>
          </form >
          <div className='table'>
            <table>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Start Time</th>
                  <th>End Time</th>
                </tr>
              </thead>
              <tbody>
                {schedules && schedules.map((schedule, index) => (
                  <Row schedule={schedule} key={index} />))}
              </tbody>
            </table>
          </div>
        </div > : <Loading />
      }
    </>
  )
}

// Data per row for each teacher
function Row({ schedule }) {
  return (
    <>
      <tr className='rows'>
        <td>
          {schedule.date && schedule.date.slice(0, 10)}
        </td>
        <td>
          {schedule.start_time}
        </td>
        <td>
          {schedule.end_time}
        </td>
      </tr>
    </>
  )
}


export default ScheduleTable;