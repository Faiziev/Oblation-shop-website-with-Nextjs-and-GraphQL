import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { ADLink } from '../lib/links';
import { BTNRADIUS, screens, Span } from '../utils/styling';
import { WHITE, GOLD, BLOOD, ORANGE } from './../utils/styling';
import { SectionButton } from './Buttons';
import { ProductCard } from './Card';
import { Container } from './Container';
import { SliderImg1, SliderImgSm1, AnimalsImages } from './Images';
import { AnimateSharedLayout, AnimatePresence, motion } from "framer-motion";
import { SmallSwiper } from './Slider';
import { SectionTitle } from './Titles';
import YoutubeEmbed from './Youtube';
import { useMediaQuery } from '@mui/material';

export const ServicesData = [
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
  {img: {src: SliderImgSm1, alt: "akika foto"}, title: "Baslik", label: 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.  Akika kurbanınız vekalet ile kesilmekte ve dilerseniz anlaşmalı dini vakıf, dernek veya kuran kurslarına dağıtımı yapılmaktadır. Dağıtım sonrası ilgili kurum sizleri arayıp adağınızın teslim edildiğini teyit etmekte ve sizlere teşekkürlerini bizzat iletmektedirler.', href: "#"},
]

export const AnimalsData = [
  {img: {src: AnimalsImages.Animal1, alt: "category foto"}, name: "KOÇ", category: "Küçükbaş", href: "#"},
  {img: {src: AnimalsImages.Animal2, alt: "category foto"}, name: "KOYUN", category: "Küçükbaş", href: "#"},
  {img: {src: AnimalsImages.Animal3, alt: "category foto"}, name: "KUZU", category: "Küçükbaş", href: "#"},
  {img: {src: AnimalsImages.Animal4, alt: "category foto"}, name: "DANA", category: "Büyükbaş", href: "#"},
  {img: {src: AnimalsImages.Animal5, alt: "category foto"}, name: "İNEK", category: "Büyükbaş", href: "#"},
  {img: {src: AnimalsImages.Animal6, alt: "category foto"}, name: "DÜVE", category: "Büyükbaş", href: "#"},
]

export const Services = () => {
  return <Section>
    <Container>
      <SectionTitle>
        HİZMETLERİMİZ
      </SectionTitle>
      <SmallSwiper />
      <SectionButton>
        <Link href={"/services"} style={{width: 'fit-content'}}>
          TÜM FAALİYETLERİ GÖR 
        </Link>
      </SectionButton>  
    </Container>
  </Section>
}

export const Note = ({blood, children}) => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Section background={blood ?  BLOOD : ORANGE } style={{ padding: "30px 20px" }}>
    <Stack alignItems={"center"} justifyContent={"center"} width="100%" height="100%" direction={tablet ? "column" : "row"} spacing={2.5}>
      {children}
    </Stack>
  </Section>
}

export const Interview = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Section>
  <Container>
    <SectionTitle>
      ÜLKE TV RÖPORTAJIMIZ
    </SectionTitle>
    <Stack direction={tablet ? "column" : "row"} alignItems={"center"} justifyContent={"space-between"} spacing={5}>
      <Stack width={tablet ? "100%" : "50%"}>
        <YoutubeEmbed embedId="hnEwJKVWjFM" />
      </Stack>
      <Stack width={tablet ? "100%" : "50%"}>
        <Span kind={`w${tablet ? 1 : 7}`}>Ülke TV - Yol Hikayesi programına <Span kind={`w${tablet ? 1 : 7}`} style={{color: GOLD}}>Faiziev Kurban</Span> Kurban Satış evi olarak konuk olduk.</Span>
      </Stack>
    </Stack>
  </Container>
</Section>
}

export const Animals = () => {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.35,
      },
    },
  }

  return <Section>
    <Container>
      <SectionTitle>
        HAYVANLARIMIZ
      </SectionTitle>
      <Stack justifyContent={"space-between"} width="100%">
        <motion.div variants={container} initial="hidden" animate="show"
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
          >
          {AnimalsData.map((animal, i) => <ProductCard data={animal} key={i}/> )}
        </motion.div>
      </Stack>
    </Container>
  </Section>
}

export const Section = ({children, height, background, style}) => {
  return (
    <Stack 
      height={height ? height : "100%"} width="100%" 
      style={{
        backgroundColor: background ? background : "#2b2d30",
        padding: "75px 0px",
        ...style
      }}
      alignItems={"center"}>
      {children}
    </Stack>
  )
}
