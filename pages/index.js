import Head from 'next/head';
import { useMediaQuery } from '@mui/material';
import styles from '../styles/Home.module.css';
import { BigSlider } from '../components/Slider';
import { Note, Services, Interview, Animals } from '../components/Sections';
import { screens, Span } from '../utils/styling';
import { TransparentBtn } from '../components/Buttons';

export default function Home() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <div className={styles.container}>
      <Head>
        <title>Yıldırım Kurban Satış Evi - Adak, Akika, Şükür Kurbanı</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <title>Yıldırım Kurban Satış Evi - Adak, Akika, Şükür Kurbanı</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban, adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      {/* <Stack marginTop={tablet ? "120px" : "160px"}> */}
      <BigSlider />
      <Services />
      <Note>
        <Span kind={`e${tablet ? 0 : 8}`} style={{ textAlign: tablet ? 'center' : undefined }}>TÜM KREDI KARTLARI <Span kind={`w${tablet ? 0 : 8}`}>GEÇERLIDIR.</Span></Span>
        <TransparentBtn>
          Hemen İletişime Geç!
        </TransparentBtn>
      </Note>
      <Interview />
      <Note blood>
        <Span kind={`e${tablet ? 0 : 8}`} style={{ textAlign: tablet ? 'center' : undefined }}>YILDIRIM KASAP OLARAK BAŞKA ŞUBEMIZ <Span kind={`w${tablet ? 0 : 8}`}>YOKTUR.</Span></Span>
        <TransparentBtn>
          Adresimiz İçin Tıklayın!
        </TransparentBtn>
      </Note>
      <Animals />
      {/* </Stack> */}
    </div>
  );
}
