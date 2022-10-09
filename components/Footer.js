import { BORDER, ORANGE, screens } from "../utils/styling"
import { Container } from "./Container"
import { Logo } from './Logo';
import { BACKGROUND, Span } from './../utils/styling';
import { Stack, useMediaQuery } from '@mui/material';

const MainFooter = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Container>
    <Stack direction={tablet ? "column" : "row"} alignItems="center" justifyContent="space-between" width="100%">
      <Stack width={tablet ? "100%" : "50%"}>
        <FooterLogo />
      </Stack>
      <Stack width={tablet ? "100%" : "50%"}>
        <FooterContact />
      </Stack>
    </Stack>
  </Container>
}

const FooterLogo = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Stack width="100%" alignItems="center" style={{padding: "20px 0px", textAlign: 'center'}} spacing={2}>
    <Stack width={"auto"} height="100px">
      <Logo />
    </Stack>
    <Span kind={`g${tablet ? 5 : 3}`}> </Span>
  </Stack>
}

const FooterContact = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Stack width="100%" alignItems="center" justifyContent={"center"} style={{padding: "20px 0px", textAlign: 'center'}} spacing={2}>
    <Stack width="100%" alignItems="center">
      <Span kind={`w${tablet ? 2 : 1}`}>İLETİŞİM</Span>
    </Stack>
    <span style={{width: '90%', height: tablet ? 1.5 : 0.5, background: BORDER}}></span>
    <Span kind={`g${tablet ? 4 : 2}`}>Hz. Yüşa Çıkmazı, Türbe Otopark Girişi No: 1 <br/> Beykoz / İstanbul</Span>
    <Span kind={`g${tablet ? 3 : 0}`}>+90 532 746 03 82<br/>bilgi@yusaadak.com</Span>
  </Stack>
}

const Footer = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Stack width="100%" style={{ background: BACKGROUND}}>
    <span style={{width: '100%', height: 10, background: ORANGE}}></span>
    <MainFooter />
      <span style={{width: '100%', background: ORANGE, padding: 10}}>
        <Container>
          <Span kind={`w${tablet ? 5 : 3}`}> © 2020 - Yûşa Adâk Kurban Satış Evi. Tüm hakları saklıdır.</Span>
        </Container>
      </span>
  </Stack>
}

export default Footer