import React from 'react';
import Head from 'next/head';
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TravelLand</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
