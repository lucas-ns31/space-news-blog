import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

import { Background } from '../components/Background';
import { Header } from '../components/Header';
import { useEffect, useState } from 'react';
import { Loading } from '@/components/Loading';

export default function App({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 5000);
  }, []);

  return isLoading ? (
    <Loading />
  ) : (
    <>
      <Background />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
