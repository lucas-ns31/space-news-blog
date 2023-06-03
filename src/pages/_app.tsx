import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

import { Background } from '../components/Background';
import { Header } from '../components/Header';
import { Loading } from '@/components/Loading';
import { useEffect, useState } from 'react';

export default function App({ Component, pageProps }: AppProps) {
  // const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setIsLoading(false);
  //   }, 8000);
  // }, []);

  // return isLoading ? (
  //   <Loading />
  // ) : (
  return (
    <>
      <Background />
      <Header />
      <Component {...pageProps} />
    </>
  );
  // );
}
