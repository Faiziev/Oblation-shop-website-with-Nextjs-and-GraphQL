import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import { useRef, useState } from 'react';
import { Span, BLOOD, ORANGE, BORDERPRIM, screens, SECTION } from '../utils/styling';
import { SectionButton, LinerButton } from './Buttons';
import { UltimateCard } from './Card';
import { Container } from './Container';
import { AnimalsImages, SliderImgSm1 } from './Images';
import { SmallSwiper } from './Slider';
import { SectionTitle } from './Titles';
import YoutubeEmbed from './Youtube';
import { ImgIcon } from '../lib/icons';
import { BorderedTextField } from './Inputs';
import { ProductDetail, ProductImage, ProductForm } from './Product';

export const AnimalsData = [
  { featuredImage: { url: AnimalsImages.Animal13, alt: 'category foto' }, title: 'OĞLAK', category: 'Küçükbaş', href: 'oglak', price: 800 },
  { featuredImage: { url: AnimalsImages.Animal14, alt: 'category foto' }, title: 'KEÇİ', category: 'Küçükbaş', href: 'keci', price: 1200 },
  { featuredImage: { url: AnimalsImages.Animal1, alt: 'category foto' }, title: 'KOÇ', category: 'Küçükbaş', href: 'koc', price: 3000 },
  { featuredImage: { url: AnimalsImages.Animal2, alt: 'category foto' }, title: 'KOYUN', category: 'Küçükbaş', href: 'koyun', price: 1500 },
  { featuredImage: { url: AnimalsImages.Animal3, alt: 'category foto' }, title: 'KUZU', category: 'Küçükbaş', href: 'kuzu', price: 2000 },
  { featuredImage: { url: AnimalsImages.Animal12, alt: 'category foto' }, title: 'Koyun Et', category: 'Küçükbaş', href: 'koyun-et', price: 90 },
  { featuredImage: { url: AnimalsImages.Animal11, alt: 'category foto' }, title: 'Kuzu Et', category: 'Küçükbaş', href: 'kuzu-et', price: 110 },
  { featuredImage: { url: AnimalsImages.Animal4, alt: 'category foto' }, title: 'DANA', category: 'Büyükbaş', href: 'dana', price: 10000 },
  { featuredImage: { url: AnimalsImages.Animal5, alt: 'category foto' }, title: 'İNEK', category: 'Büyükbaş', href: 'inek', price: 10000 },
  { featuredImage: { url: AnimalsImages.Animal6, alt: 'category foto' }, title: 'DÜVE', category: 'Büyükbaş', href: 'duve', price: 10000 },
  { featuredImage: { url: AnimalsImages.Animal8, alt: 'category foto' }, title: 'Dana Et Kemiksiz', category: 'Büyükbaş', href: 'dana-et-kemiksiz', price: 145 },
  { featuredImage: { url: AnimalsImages.Animal9, alt: 'category foto' }, title: 'Dana Et Kemikli', category: 'Büyükbaş', href: 'dana-et-kemikli', price: 120 },
];

export function Services({ data }) {
  return (
    <Section>
      <Container>
        <SectionTitle>
          HİZMETLERİMİZ
        </SectionTitle>
        <SmallSwiper data={data} />
        <SectionButton>
          <Link href="/services" style={{ width: 'fit-content' }}>
            TÜM FAALİYETLERİ GÖR
          </Link>
        </SectionButton>
      </Container>
    </Section>
  );
}

export function Note({ blood, children }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Section background={blood ? BLOOD : ORANGE} style={{ padding: '30px 20px' }}>
      <Stack alignItems="center" justifyContent="center" width="100%" height="100%" direction={tablet ? 'column' : 'row'} spacing={2.5}>
        {children}
      </Stack>
    </Section>
  );
}
export function Interview() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Section>
      <Container>
        <SectionTitle>
          Kurban ve Adak Kesim Videoları
        </SectionTitle>
        <Stack direction={tablet ? 'column' : 'row'} alignItems="center" justifyContent="space-between" spacing={5}>
          <Stack width={tablet ? '100%' : '50%'}>
            <YoutubeEmbed embedId="hnEwJKVWjFM" />
          </Stack>
          <Stack width={tablet ? '100%' : '50%'}>
            <Span kind={`b${tablet ? 1 : 7}`}>Yol Hikayesi programına <Span kind={`w${tablet ? 1 : 7}`} style={{ color: ORANGE }}>Yıldırım Adak ve Kurban</Span> Satış evi olarak konuk olduk.</Span>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export function Upload() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  const [selectedFile, setSelectedFile] = useState(null);
  const filePicker = useRef(null);
  const { getRootProps, getInputProps } = useDropzone({
    // drag and drop functionality
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    accept: 'image/jpeg,image/png',
    onDrop: (files) => {
      const file = files[0];
      const reader = new FileReader();
      reader.onload = (event) => {
        setSelectedFile(event.target.result);
      };
      reader.readAsDataURL(file);
    },
  });

  return (
    <Section>
      <Container>
        <SectionTitle>
          Blog Paylaş
        </SectionTitle>
        <Stack width="100%" direction="column" alignItems="center" justifyContent="space-between" spacing={5}>
          <Stack width="100%" direction={tablet ? 'column' : 'row'}>
            <Stack justifyContent="center" alignItems="center" style={{ width: '100%', height: '100%', borderRadius: '5px' }}>
              <div {...getRootProps()} style={{ maxWidth: '100%', width: '100%', height: '90%' }}>
                {selectedFile ? (
                  <img src={selectedFile} />
                ) : (
                  <>
                    <Stack
                      justifyContent="center"
                      alignItems="center"
                      role="button"
                      onClick={() => filePicker.current.click()}
                      style={{ width: tablet ? '100%' : '90%', height: '300px', borderRadius: '5px', border: `1px solid ${BORDERPRIM}`, cursor: 'pointer' }}
                    >
                      <div style={{ width: '75px', height: '75px', fill: BORDERPRIM }}>
                        <ImgIcon />
                      </div>
                    </Stack>
                    <input
                      {...getInputProps()}
                      type="file"
                      hidden
                      ref={filePicker}
                    />
                  </>
                )}
              </div>
            </Stack>
            <Stack width="100%" justifyContent="space-between" spacing={3}>
              <BorderedTextField rows={1} placeHolder="Baslik" />
              <BorderedTextField rows={1} placeHolder="Yan Baslik" />
              <BorderedTextField rows={3} placeHolder="Metin" />
            </Stack>
          </Stack>
          <Stack width="200px" justifyContent="center">
            <LinerButton>Paylas</LinerButton>
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export function Animals() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <Section>
      <Container>
        <SectionTitle>
          HAYVANLARIMIZ
        </SectionTitle>
        <Stack justifyContent="space-between" width="100%">
          <Stack
            variants={container}
            initial="hidden"
            animate="show"
            direction="row"
            alignItems="center"
            justifyContent="center"
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {AnimalsData.map((animal, i) => <UltimateCard data={animal} key={i} product />)}
          </Stack>
        </Stack>
      </Container>
    </Section>
  );
}

export function Blogs({ posts }) {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <Section>
      <Container>
        <SectionTitle>
          İlginç Sorular
        </SectionTitle>
        <Stack justifyContent="space-between" width="100%">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            direction="row"
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {posts.map((post, i) => <UltimateCard data={post.node} key={i} post />)}
          </motion.div>
        </Stack>
      </Container>
    </Section>
  );
}

export function BlogPage({ post }) {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <Section>
      <Container>
        <SectionTitle>
          İlginç Sorular
        </SectionTitle>
        <Stack justifyContent="space-between" width="100%">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            direction="row"
            alignItems="center"
            style={{
              width: '100%',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
            }}
          >
            {post.map((data, i) => <UltimateCard data={data.node} key={i} post />)}
          </motion.div>
        </Stack>
      </Container>
    </Section>
  );
}

export function ProductPage({ data }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  };

  return (
    <Section>
      <Container>
        <Stack width="100%" spacing={2}>
          <Stack width="100%" direction={tablet ? 'column' : 'row'} spacing={3}>
            <ProductImage image={data[1].featuredImage}/>
            <Stack width={tablet ? '100%' : '40%'} spacing={3}>
              <ProductDetail data={data[1]} />
              <ProductForm data={data[1]} />
            </Stack>
          </Stack>
          <Span kind="h3">
            Ağırlığı 40 ile 60 kg arasi <br />
            1. yaşından sonra koyun olarak isimlendirilir. <br />
            Hayvanlarımız doğal bir ortamda yetiştiriliyor. Koyun hem adaklık, hemde kurban icin uygun bir hayvandır. Adaklık kurbanı sağlıklı ortamda yetişmektedir.  Hızlı kesim ve paketleme, video/canlı baglantı eşliğinde kesilir ve teslim edilir. 
          </Span>
        </Stack>
      </Container>
    </Section>
  );
}

export function Section({ children, height, background, style }) {
  return (
    <Stack
      height={height || '100%'}
      width="100%"
      style={{
        backgroundColor: background || SECTION,
        padding: '75px 0px',
        ...style
      }}
      alignItems="center"
    >
      {children}
    </Stack>
  );
}
