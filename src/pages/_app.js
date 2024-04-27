import React from 'react';
import Head from 'next/head';
import "@/styles/globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'boxicons/css/boxicons.min.css';
import 'aos/dist/aos.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { StoreProvider } from '@/redux/storeProvider';


export default function App({ Component, pageProps }) {
  return (
    <StoreProvider>
      <Head>
        <title>TravelLand</title>
      </Head>
      <Component {...pageProps} />
    </StoreProvider>
  )
}
