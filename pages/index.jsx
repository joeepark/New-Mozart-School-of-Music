import Head from 'next/head';
import AddNewStudents from '../client/components/add-new/AddNewStudents';
import Overview from '../client/components/Overview/Overview';

export default function Home() {
  return (
    <>
        <Head>
          <title>Mozart School of Music</title>
          <meta name="description" content="music school for aspiring musicians" />
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
          />
        </Head>
        <AddNewStudents />
        <Overview />
    </>
  );
}
