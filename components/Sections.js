import Stack from '@mui/material/Stack';
import Link from 'next/link';
import { Span, GOLD, BLOOD, ORANGE, BORDERPRIM, screens, SECTION } from './../utils/styling';
import { SectionButton, LinerButton } from './Buttons';
import { PostCard, ProductCard, SliderCard, UltimateCard } from './Card';
import { Container } from './Container';
import { SliderImgSm1, AnimalsImages } from './Images';
import { motion } from "framer-motion";
import { SmallSwiper } from './Slider';
import { SectionTitle } from './Titles';
import YoutubeEmbed from './Youtube';
import { useMediaQuery } from '@mui/material';
import { useDropzone } from "react-dropzone"
import { useRef, useState } from 'react';
import { ImgIcon } from '../lib/icons';
import { BorderedTextField } from './Inputs';

export const ServicesData = [
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
  {featuredImage: {url: SliderImgSm1, alt: "akika foto"}, title: "Baslik", excerpt : 'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir sektörde yer alan Yûşâ Adak Kurban Satış Evi, akika kurbanlarınızın kesimini %100 islami usullere uygun olarak yapmaktadır.', slug: "#"},
]

export const AnimalsData = [
  {featuredImage: {url: AnimalsImages.Animal1, alt: "category foto"}, title: "KOÇ",  category: "Küçükbaş", href: "#"},
  {featuredImage: {url: AnimalsImages.Animal2, alt: "category foto"}, title: "KOYUN",category: "Küçükbaş", href: "#"},
  {featuredImage: {url: AnimalsImages.Animal3, alt: "category foto"}, title: "KUZU", category: "Küçükbaş", href: "#"},
  {featuredImage: {url: AnimalsImages.Animal4, alt: "category foto"}, title: "DANA", category: "Büyükbaş", href: "#"},
  {featuredImage: {url: AnimalsImages.Animal5, alt: "category foto"}, title: "İNEK", category: "Büyükbaş", href: "#"},
  {featuredImage: {url: AnimalsImages.Animal6, alt: "category foto"}, title: "DÜVE", category: "Büyükbaş", href: "#"},
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
        <Span kind={`b${tablet ? 1 : 7}`}>Ülke TV - Yol Hikayesi programına <Span kind={`w${tablet ? 1 : 7}`} style={{color: ORANGE}}>Yıldırım Adak ve Kurban</Span> Satış evi olarak konuk olduk.</Span>
      </Stack>
    </Stack>
  </Container>
</Section>
}

export const Upload = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)
  const [selectedFile, setSelectedFile] = useState(null)
  const filePicker = useRef(null)
  const { getRootProps, getInputProps } = useDropzone({
    //drag and drop functionality
    maxFiles: 1,
    noClick: true,
    noKeyboard: true,
    accept: "image/jpeg,image/png",
    onDrop: (files) => {
      let file = files[0]
      const reader = new FileReader()
      reader.onload = (event) => {
        setSelectedFile(event.target.result)
      }
      reader.readAsDataURL(file)
    },
  })

  return <Section>
    <Container>
      <SectionTitle>
        Blog Paylaş
      </SectionTitle>
      <Stack width={"100%"} direction={"column"} alignItems={"center"} justifyContent={"space-between"} spacing={5}>
        <Stack width={"100%"} direction={tablet ? "column" : "row"} >
          <Stack justifyContent="center" alignItems="center" style={{  width: "100%", height: "100%", borderRadius: "5px", }}>
            <div {...getRootProps()} style={{ maxWidth: "100%", width: "100%", height: "90%" }}>
              {selectedFile ? (
                <>
                  <img src={selectedFile}/>
                </>
              ) : (
                <>
                  <Stack justifyContent="center" alignItems="center" role="button" onClick={() => filePicker.current.click()}
                    style={{ width: tablet ? "100%" : "90%", height: "300px", borderRadius: "5px", border: `1px solid ${BORDERPRIM}`, cursor: "pointer" }}>
                    <div style={{ width: "75px", height: "75px", fill: BORDERPRIM }} >
                      <ImgIcon />
                    </div>
                  </Stack>
                  <input
                    {...getInputProps()}
                    type="file"
                    hidden
                    ref={filePicker}
                    // onChange={uploadImage}
                  />
                </>
              )}
            </div>
          </Stack>
          <Stack width={"100%"}  justifyContent="space-between" spacing={3}>
            <BorderedTextField rows={1} placeHolder="Baslik" />
            <BorderedTextField rows={1} placeHolder="Yan Baslik"/>
            <BorderedTextField rows={3} placeHolder="Metin"/>
          </Stack>
        </Stack>
        <Stack width={"200px"} justifyContent="center">
          <LinerButton>Paylas</LinerButton>
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
        <Stack variants={container} initial="hidden" animate="show"
          direction='row' alignItems="center" justifyContent={'center'}
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          >
          {AnimalsData.map((animal, i) => <UltimateCard data={animal} key={i} product/> )}
        </Stack>
      </Stack>
    </Container>
  </Section>
}

export const Blogs = ({posts}) => {
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
        İlginç Sorular
      </SectionTitle>
      <Stack justifyContent={"space-between"} width="100%">
        <motion.div variants={container} initial="hidden" animate="show"
          direction='row' 
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          >
          {posts.map((post, i) => <UltimateCard data={post.node} key={i} post/> )}
        </motion.div>
      </Stack>
    </Container>
  </Section>
}

export const BlogPage = ({ post }) => {
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
        İlginç Sorular
      </SectionTitle>
      <Stack justifyContent={"space-between"} width="100%">
        <motion.div variants={container} initial="hidden" animate="show"
          direction='row' alignItems="center"
          style={{
            width: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
          >
          {post.map((post, i) => <UltimateCard data={post.node} key={i} post/> )}
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
        backgroundColor: background ? background : SECTION,
        padding: "75px 0px",
        ...style
      }}
      alignItems={"center"}>
      {children}
    </Stack>
  )
}
