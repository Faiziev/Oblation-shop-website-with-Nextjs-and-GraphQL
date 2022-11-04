import Head from 'next/head';
import { Stack, useMediaQuery } from '@mui/material';

import styles from '../styles/Home.module.css';
import { Container } from '../components/Container';
import { Section } from '../components/Sections';
import { Span, screens } from '../utils/styling';
import MapEmbed from '../components/Map';

export default function Blog() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <div className={styles.container}>
      <Head>
        <title>Yıldırım Kurban Satış Evi - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban, adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Stack paddingTop="85px" />
      <Section>
        <Container>
          <Stack width="100%" spacing={6}>
            <Stack width="100%" spacing={3} justifyContent="center" alignItems="center">
              <Span kind={tablet ? 'g7' : 'g9'}>İletişim Bilgileri</Span>
              <Span kind={tablet ? 'h0' : 'h8'} style={{ textAlign: 'center' }}>İstiklal Mahallesi Yeşildağ Sokak 34522 Esenyurt/İstanbul</Span>
              <Span kind={tablet ? 'h0' : 'h8'}><a href="Whatsapp ve İletişim Numaramız 0532 746 03 82"> 0532 746 03 82</a></Span>
            </Stack>
            <Stack width="100%" spacing={3} justifyContent="center" alignItems="center">
              <MapEmbed />
            </Stack>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
