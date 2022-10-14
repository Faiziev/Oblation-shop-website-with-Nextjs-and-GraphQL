import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Stack, useMediaQuery } from '@mui/material';
import { BigSlider } from '../components/Slider';
import { Note, Services, Interview, Animals, Blogs } from '../components/Sections';
import { screens, Span } from '../utils/styling';
import { TransparentBtn } from '../components/Buttons';

import { getPosts } from '../services';

export default function Blog({posts}) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return (
    <div className={styles.container}>
      <Head>
        <title>Yıldırım Kurban Satış Evi - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban, adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Blogs posts={posts}/>
    </div>
  )
}


export async function getStaticProps() {
  const posts = (await getPosts()) || [];
  return {
    props: { posts },
  };
}