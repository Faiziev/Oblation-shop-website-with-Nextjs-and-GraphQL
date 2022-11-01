import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line react/no-danger
import { Stack } from '@mui/material';
import styles from '../../styles/Home.module.css';
import { Container } from '../../components/Container';
import { ProductPage } from '../../components/Sections';
import { AnimalsImages } from '../../components/Images';
import { ProductSwiper } from '../../components/Slider';
import { getProducts, getProductDetails } from '../../services';

export const AnimalsData = [
  { featuredImage: { url: AnimalsImages.Animal1, alt: 'category foto' }, title: 'KOÇ', category: 'Küçükbaş', href: 'koc', price: 1000 },
  { featuredImage: { url: AnimalsImages.Animal2, alt: 'category foto' }, title: 'KOYUN', category: 'Küçükbaş', href: 'koyun', price: 1000 },
  { featuredImage: { url: AnimalsImages.Animal3, alt: 'category foto' }, title: 'KUZU', category: 'Küçükbaş', href: 'kuzu', price: 1000 },
  { featuredImage: { url: AnimalsImages.Animal4, alt: 'category foto' }, title: 'DANA', category: 'Büyükbaş', href: 'dana', price: 1000 },
  { featuredImage: { url: AnimalsImages.Animal5, alt: 'category foto' }, title: 'İNEK', category: 'Büyükbaş', href: 'inek', price: 1000 },
  { featuredImage: { url: AnimalsImages.Animal6, alt: 'category foto' }, title: 'DÜVE', category: 'Büyükbaş', href: 'duve', price: 1000 },
];

export default function Product({ data }) {
  console.log(data)
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
        <ProductPage data={AnimalsData} />
        <Stack width="100%" alignItems="center" marginBottom="30px">
          <ProductSwiper data={AnimalsData} small />
        </Stack>
      </Container>
      {/* <Services /> */}
    </div>
  );
}


export async function getStaticProps({ params }) {
  // console.log('params', params)
  // const data = await getProductDetails(params.slug);
  return {
    props: {
      // products: data,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const products = await getProducts();
  console.log('products', products)
  return {
    paths: products.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}