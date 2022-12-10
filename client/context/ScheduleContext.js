// import { createContext, useEffect, useState } from "react"

// const ScheduleContext = createContext();

// export const ScheduleProvider = ({ children }) => {
//   const [schedules, setSchedules] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     fetchData();
//   }, [])

//   const fetchData = async () => {
//     try {
//       const response = await fetch('/api/schedules');
//       const data = await response.json();
//       setSchedules(data);
//       setLoading(false);
//     } catch (err) {
//       console.error(err);
//     }
//   }

//   return (
//     <ScheduleContext.Provider value={{ schedules, loading }}>{children}</ScheduleContext.Provider>
//   );
// };

// export default ScheduleContext;