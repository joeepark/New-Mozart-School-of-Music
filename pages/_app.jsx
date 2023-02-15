import Nav from '../client/components/Nav';
import { DataProvider } from '../client/context/DataContext';
import '../client/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Nav />
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
