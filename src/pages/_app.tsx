import '@/styles/globals.scss';

import type { AppProps } from 'next/app';

import { Background } from '../components/Background';
import { Header } from '../components/Header';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Background />
      <Header />
      <Component {...pageProps} />
    </>
  );
}
