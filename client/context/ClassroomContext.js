// import { createContext, useEffect, useState } from "react"

// const ClassroomContext = createContext();

// export const ClassroomProvider = ({ children }) => {
//   const [classrooms, setClassrooms] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/classrooms');
//       const data = await response.json();
//       setClassrooms(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <ClassroomContext.Provider value={{ classrooms, loading }}>{children}</ClassroomContext.Provider>
//   );
// };

// export default ClassroomContext;