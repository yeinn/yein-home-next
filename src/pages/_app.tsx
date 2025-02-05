"use client";


import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
      <>
        <Head>
          <meta charSet="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <meta property="og:url" content="https://yein-home.vercel.app/"/>
          <meta property="og:title" content="Yein Sweet Home"/>
          <meta property="og:type" content="website"/>
          <meta property="og:image"
                content="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FunfXe%2FbtsL7Tt1th2%2FbgKEyPEpTvL2nR3SzSeoO1%2Fimg.png"/>
          <meta property="og:description" content="우리집에 놀러와! 숨겨진 미션이 준비되어있어🥰"/>
          <link rel="icon" href="/favicon.ico" type="image/x-icon" sizes="16x16"/>
          <title>yein home | 예인이네 🏡</title>
        </Head>
        <Component {...pageProps} />
      </>
  );
}
