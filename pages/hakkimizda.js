import Head from 'next/head';
import { Stack, useMediaQuery } from '@mui/material';

import styles from '../styles/Home.module.css';
import { Container } from '../components/Container';
import { Section } from '../components/Sections';
import { Span, screens } from '../utils/styling';
import { HLogo } from '../components/Logo';

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
              <HLogo />
              <Span kind={tablet ? 'g7' : 'g9'}>Hakkimizda</Span>
              <Span kind={tablet ? 'h2' : 'h1'} style={{ textAlign: 'center' }}>
                20 yıllık tecrübe...
                <br />
                <br />
                Yûşâ Adak Kurban Satış Evi, Beykoz Anadolu Feneri köyünde başlamış olduğu hayvancılık alanındaki faaliyetlerini 20 yılı aşkın süredir sürdürmektedir. 2007 yılından itibaren Yûşâ Adak Kurban Satış Evi olarak Beykoz Yûşa Tepesi bölgesinde faaliyet göstermektedir.
                <br />
                <br />
                Yûşâ Adak Kurban Satış Evi ister adak isterseniz akika kurbanlarınızın kesimini yapmaktadır. Adak ve akika kurban kesimlerini %100 islami usullere uygun olarak yapmaktadır.
                <br />
                <br />
                Adağınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.
                <br />
                <br />
                Yûşâ Adak Kurban Satış Evi bünyesinde gerçekleştirilen tüm kurban kesimlerinden artakalan hayvan derisi gibi atıklar değerlendir ve ilgili yerlere satışı yapılır. Buradan elde edilen kazanç ise öğrencilere burs olarak gider. Bu sayede bir çok öğrenciye burs imkanı sağlanmıştır.
                <br />
                <br />
                Yûşâ Adak; adak kurban satışı, canlı hayvan satışı, akika kurban, nezir kurbanı, şükür kurbanı ve vacip kurban alanlarında hizmet vermektedir.
                <br />
                <br />
                Bünyesinde bulunan büyükbaş hayvanlar; Dana, İnek, Düve
                Bünyesinde bulunan küçükbaş hayvanlar; Koç, Koyun, Kuzu
                <br />
                <br />
                Yûşâ Adak Kurban Satış Evi, Yûşâ Tepesi otopark girişinde yer almaktadır ve başka şubesi bulunmamaktadır.
                <br />
                <br />
                Tüm kredi kartları ile ödeme işlemlerinizi güvenle gerçekleştirebilirsiniz.
              </Span>
            </Stack>
          </Stack>
        </Container>
      </Section>
    </div>
  );
}
