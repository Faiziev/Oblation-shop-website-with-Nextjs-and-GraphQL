import Head from 'next/head';
import { useEffect } from 'react';
import { Stack } from '@mui/material';
import { Blogs } from '../components/Sections';

import styles from '../styles/Home.module.css';
import { getPosts } from '../services';

export default function Blog({ posts }) {
  useEffect(() => console.log(posts), [])
  return (
    <div className={styles.container}>
      <Head>
        <title>Yıldırım Kurban Satış Evi - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban,
        adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz.
        2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Stack paddingTop="85px" />
      <Blogs posts={posts} />
    </div>
  );
}

export async function getServerSideProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
    // revalidate: 5,
  };
}
