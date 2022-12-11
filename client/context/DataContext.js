import { createContext, useState, useEffect } from "react"

const DataContext = createContext();

export const DataProvider = ({ children }) => {
  const [students, setStudents] = useState([]);
  const [teachers, setTeachers] = useState([]);
  const [classrooms, setClassrooms] = useState([]);
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = (await Promise.all([
          fetch('/api/students'),
          fetch('/api/teachers'),
          fetch('/api/classrooms'),
          fetch('/api/schedules'),
        ])
        ).map(res => res.json());
        const [students, teachers, classrooms, schedules] = await Promise.all(response);
        setStudents(students);
        setTeachers(teachers);
        setClassrooms(classrooms);
        setSchedules(schedules);
      } catch (err) {
        console.error({ error: err.message });
      }
    }
    fetchData();
  }, [JSON.stringify(schedules), JSON.stringify(teachers), JSON.stringify(classrooms), JSON.stringify(students)])

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

  const handleTeacherSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const teacherData = {
      first_name: firstName,
      last_name: lastName,
    }
    const jsonData = JSON.stringify(teacherData);
    try {
      const response = await fetch('/api/teachers', {
        method: 'POST',
        body: jsonData
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
  }

  const handleClassroomSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const classroomData = {
      name: name
    }
    const jsonData = JSON.stringify(classroomData);
    try {
      const response = await fetch('/api/classrooms', {
        method: 'POST',
        body: jsonData
      });
      if (response.ok) {
        const data = await response.json();
        setClassrooms([...classrooms, data]);
      } else {
        console.error(response.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  }

  const handleStudentSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');
    const dob = formData.get('dob');
    const lesson = formData.get('lesson');
    const studentData = {
      first_name: firstName,
      last_name: lastName,
      dob: dob,
      lesson: lesson
    }
    const jsonData = JSON.stringify(studentData);
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        body: jsonData
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
  }

  return (
    <DataContext.Provider value={{ students, teachers, classrooms, schedules, handleScheduleSubmit, handleTeacherSubmit, handleClassroomSubmit, handleStudentSubmit }}>{children}</DataContext.Provider>
  )
}
export default DataContext