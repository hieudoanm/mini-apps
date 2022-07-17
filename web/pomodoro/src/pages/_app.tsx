import Head from 'next/head';
import { appName } from '../configs';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>{appName}</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
