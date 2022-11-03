import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line react/no-danger
import { Stack } from '@mui/material';
import styles from '../../styles/Home.module.css';
import { Container } from '../../components/Container';
import { ProductPage } from '../../components/Sections';
import { ProductSwiper } from '../../components/Slider';
import { getProducts, getProductDetails } from '../../services/index';
// import { getProducts } from './../../services/index';
import { useRouter } from 'next/router';

export default function Product({ data, slider }) {
  const router = useRouter();
  if (router.isFallback) {
    return 'loading';
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Yıldırım Kurban Satış Evi - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban,adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Stack paddingTop="100px" />
      <Container>
        <ProductPage data={data} />
        <Stack width="100%" alignItems="center" marginBottom="30px">
          <ProductSwiper data={slider} small />
        </Stack>
      </Container>
      {/* <Services /> */}
    </div>
  );
}


export async function getStaticProps({ params }) {
  // console.log('params', params)
  // const products = await getProducts()
  const products = await getProducts()
  const data = await getProductDetails(params.slug);
  // console.log('products', products)
  return {
    props: {
      data: data,
      slider: products
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const products = await getProducts()
  return {
    paths: products.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}