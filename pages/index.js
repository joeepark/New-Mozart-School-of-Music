import Head from 'next/head'
import ClassroomTable from '../client/components/ClassroomTable'
import Nav from '../client/components/Nav'
import ScheduleTable from '../client/components/ScheduleTable'
import StudentTable from '../client/components/StudentTable'
import TeacherTable from '../client/components/TeacherTable'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mozart School of Music</title>
        <meta name="description" content="music school for aspiring musicians" />
        <link rel="icon" href="" />
      </Head>
      <Nav />
      <StudentTable />
      <TeacherTable />
      <ScheduleTable />
      <ClassroomTable />
    </>
  )
}
