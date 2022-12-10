// import { createContext, useEffect, useState } from "react"

// const TeacherContext = createContext();

// export const TeacherProvider = ({ children }) => {
//   const [teachers, setTeachers] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/teachers');
//       const data = await response.json();
//       setTeachers(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <TeacherContext.Provider value={{ teachers, loading }}>{children}</TeacherContext.Provider>
//   );
// };

// export default TeacherContext;