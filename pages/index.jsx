import Head from 'next/head';
import AddPerson from '../client/components/AddPerson';
import Homepage from '../client/components/Homepage';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mozart School of Music</title>
        <meta name="description" content="music school for aspiring musicians" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Homepage />
      <AddPerson />
    </>
  );
}
