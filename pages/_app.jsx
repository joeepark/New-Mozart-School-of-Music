import { DataProvider } from '../client/context/DataContext';
import '../client/styles/style.css';
import Nav from '../client/components/layout/Nav';

function MyApp({ Component, pageProps }) {
  return (
    <DataProvider>
      <Nav />
      <Component {...pageProps} />
    </DataProvider>
  );
}

export default MyApp;
