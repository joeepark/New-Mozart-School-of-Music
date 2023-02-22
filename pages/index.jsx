import Head from 'next/head';
import Overview from '/client/components/overview/Overview';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mozart School of Music</title>
        <meta name="description" content="music school for aspiring musicians" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Overview />
    </>
  );
}
