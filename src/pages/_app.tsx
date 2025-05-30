import type { AppProps } from "next/app";
import Head from "next/head";
import "../styles/globals.css"; // Your global styles

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lilita+One&family=Merriweather&family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
