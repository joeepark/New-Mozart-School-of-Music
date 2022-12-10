// import { createContext, useEffect, useState } from "react"

// const StudentContext = createContext();

// export const StudentProvider = ({ children }) => {
//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/students');
//       const data = await response.json();
//       setStudents(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <StudentContext.Provider value={{ students, loading }}>{children}</StudentContext.Provider>
//   );
// };

// export default StudentContext;