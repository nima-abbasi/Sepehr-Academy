import type { AppProps } from "next/app";
import { Provider } from "react-redux";

import "../styles/globals.css";

import store from "../store/store";
import Layout from "../component/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
