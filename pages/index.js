import Head from 'next/head'
import AddPerson from '../client/components/AddPerson'
import Homepage from '../client/components/Homepage'
import Nav from '../client/components/Nav'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mozart School of Music</title>
        <meta name="description" content="music school for aspiring musicians" />
        <link rel="icon" href="" />
      </Head>
      <header>
      </header>
      <main>
        <section>
          <Homepage />
          <AddPerson />
        </section>
      </main>
    </>
  )
}
