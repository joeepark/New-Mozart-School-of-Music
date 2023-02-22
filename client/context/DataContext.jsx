import { createContext, useState, useEffect } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [overview, setOverview] = useState([]);
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (
          await Promise.all([
            fetch('/api/overview'),
            fetch('/api/students'),
            fetch('/api/teachers'),
            fetch('/api/schedules'),
          ])
        ).map((res) => res.json());
        const [overview, students, teachers, schedules] = await Promise.all(response);
        setOverview(overview);
        setStudents(students);
        setTeachers(teachers);
        setSchedules(schedules);
      } catch (err) {
        console.error({ error: err.message });
      }
    };
    fetchData();
  }, [
    JSON.stringify(overview),
    JSON.stringify(students),
    JSON.stringify(teachers),
    JSON.stringify(classrooms),
    JSON.stringify(schedules),
  ]);

  const handleOverviewSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const announcements = formData.get('announcements');
    console.log(formData);
  };

  const handleStudentSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const parent_first_name = formData.get('parent_first_name');
    const parent_last_name = formData.get('parent_last_name');
    const email = formData.get('email');
    const phone_number = formData.get('phone_number');
    const street_address = formData.get('street_address');
    const city_address = formData.get('city_address');
    const state_address = formData.get('state_address');
    const zip_address = formData.get('zip_address');

    const studentData = {
      first_name: firstName,
      last_name: lastName,
      parent_first_name: parent_first_name,
      parent_last_name: parent_last_name,
      email: email,
      phone_number: phone_number,
      street_address: street_address,
      city_address: city_address,
      state_address: state_address,
      zip_address: zip_address,
    };
    const jsonData = JSON.stringify(studentData);
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        body: jsonData,
      });
      if (response.ok) {
        const data = await response.json();
        setStudents([...students, data]);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleTeacherSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const first_name = formData.get('first_name');
    const last_name = formData.get('last_name');
    const email = formData.get('email');
    const phone_number = formData.get('phone_number');
    const instruments = formData.get('instruments');
    const studio_policies = formData.get('studio_policies');
    const zoom_link = formData.get('zoom_link');
    const teacherData = {
      first_name: first_name,
      last_name: last_name,
      email: email,
      phone_number: phone_number,
      instruments: instruments,
      studio_policies: studio_policies,
      zoom_link: zoom_link,
    };
    const jsonData = JSON.stringify(teacherData);
    try {
      const response = await fetch('/api/teachers', {
        method: 'POST',
        body: jsonData,
      });
      if (response.ok) {
        const data = await response.json();
        setTeachers([...teachers, data]);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleScheduleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const date = formData.get('date');
    const startTime = formData.get('start_time');
    const endTime = formData.get('end_time');
    const studentId = formData.get('student_id');
    const teacherId = formData.get('teacher_id');
    const classroomId = formData.get('classroom_id');

    const scheduleData = {
      date: date,
      start_time: startTime,
      end_time: endTime,
      student_id: studentId,
      teacher_id: teacherId,
      classroom_id: classroomId,
    };

    const jsonData = JSON.stringify(scheduleData);
    try {
      const response = await fetch('/api/schedules', {
        method: 'POST',
        body: jsonData,
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
  };

  return (
    <DataContext.Provider
      value={{
        overview,
        students,
        teachers,
        classrooms,
        schedules,
        handleOverviewSubmit,
        handleScheduleSubmit,
        handleTeacherSubmit,
        handleStudentSubmit,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
