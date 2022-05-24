import "../styles/globals.css";
import Head from "next/head";
import {Provider} from "react-redux";
import store from "./../store";

function MyApp({ Component, pageProps }) {
  // const getLayout = Component.getLayout || ((page) => page);


  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Text Me!</title>
          <meta name="description" content="App for messaging" />
        </Head>
        <Component {...pageProps} />
      </Provider>
    </>
  );
}
export default MyApp;
