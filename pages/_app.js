import { DataProvider } from '../client/context/DataContext'
import '../client/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Component {...pageProps} />
    </DataProvider>
  )
}

export default MyApp
