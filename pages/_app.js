import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Text Me!</title>
        <meta name="description" content="App for messaging" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
export default MyApp;
