"use client";

import "@/styles/globals.css"; // Tailwind CSS 적용
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
      <>
        <Component {...pageProps} />
      </>
  );
}
