import Head from 'next/head';

import styles from './home.module.scss';
// import { useEffect, useState } from 'react';
import { Posts } from '@/components/Posts';
import { GetServerSideProps } from 'next';

interface Apod {
  apod: [
    {
      title: string;
      url: string;
      explanation: string;
      date: string;
      media_type: string;
    }
  ];
}

export default function Home({ apod }: Apod) {
  // const [apods, setApod] = useState<Apod[]>([]);

  // useEffect(() => {
  //   fetch(
  //     `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=10`
  //   )
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setApod(data);
  //     });
  // }, []);

  return (
    <>
      <Head>
        <title>Space News Blog</title>
      </Head>
      <main className={styles.mainContainer}>
        {apod.map((item) => {
          return (
            <Posts
              key={item.title}
              url={item.url}
              title={item.title}
              explanation={item.explanation}
              date={item.date}
              media_type={item.media_type}
            />
          );
        })}
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?api_key=${process.env.NEXT_PUBLIC_NASA_API_KEY}&count=10`
  );

  const apod = await res.json();

  return {
    props: {
      apod,
    },
  };
};
