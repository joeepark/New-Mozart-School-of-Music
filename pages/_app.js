import { ClassroomProvider } from '../client/context/ClassroomContext'
import { ScheduleProvider } from '../client/context/ScheduleContext'
import { StudentProvider } from '../client/context/StudentContext'
import { TeacherProvider } from '../client/context/TeacherContext'
import '../client/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    // <StudentProvider>
    //   <ClassroomProvider>
    //     <TeacherProvider>
    //       <ScheduleProvider>
            <Component {...pageProps} />
    //       </ScheduleProvider>
    //     </TeacherProvider>
    //   </ClassroomProvider>
    // </StudentProvider>
  )
}

export default MyApp
