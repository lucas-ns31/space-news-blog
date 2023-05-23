import Head from 'next/head';

import styles from './home.module.scss';
import { useEffect, useState } from 'react';
import { Posts } from '@/components/Posts';

interface Apod {
  title: string;
  url: string;
  explanation: string;
  date: string;
  media_type: string;
}

export default function Home() {
  const [apods, setApod] = useState<Apod[]>([]);

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=10`
    )
      .then((response) => response.json())
      .then((data) => setApod(data));
  }, []);

  return (
    <>
      <Head>
        <title>Space News Blog</title>
      </Head>
      <main className={styles.mainContainer}>
        {apods.map((apod) => {
          return (
            <Posts
              key={apod.title}
              url={apod.url}
              title={apod.title}
              explanation={apod.explanation}
              date={apod.date}
              media_type={apod.media_type}
            />
          );
        })}
      </main>
    </>
  );
}
