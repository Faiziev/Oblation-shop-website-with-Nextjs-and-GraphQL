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
    <Stack width={"300px"} height="100px">
      <Logo />
    </Stack>
    <Span kind={`g${tablet ? 5 : 3}`}>Adak, Kurban ve Akika vb. hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Faiziev&apos;da hizmet vermeye başladık. </Span>
  </Stack>
}

const FooterContact = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Stack width="100%" alignItems="center" justifyContent={"center"} style={{padding: "20px 0px", textAlign: 'center'}} spacing={2}>
    <Stack width="100%" alignItems="center">
      <Span kind={`w${tablet ? 2 : 1}`}>İLETİŞİM</Span>
    </Stack>
    <span style={{width: '90%', height: tablet ? 1.5 : 0.5, background: BORDER}}></span>
    <Span kind={`g${tablet ? 4 : 2}`}>Esenyurt Kıraç Pazar Pazarı Karşısı <br/> Esenyurt / İstanbul</Span>
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
          <Span kind={`w${tablet ? 5 : 3}`}> © 2020 - Yıldırım Adâk Kurban Satış Evi. Tüm hakları saklıdır.</Span>
        </Container>
      </span>
  </Stack>
}

export default Footer
