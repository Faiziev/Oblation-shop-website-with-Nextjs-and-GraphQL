import { Stack, useMediaQuery } from '@mui/material';
import Image from 'next/future/image';
import { BORDER, FOOTERSECONDARY, ORANGE, screens, WHITE, BACKGROUND, Span, FOOTERPRIMARY, BORDERRADIUS } from '../utils/styling';
import { Container } from './Container';
import { FLogo } from './Logo';

import { BackImg } from './Images';

function MainFooter() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Stack direction={tablet ? 'column' : 'column'} alignItems="center" justifyContent="space-between" width="100%" padding="20px">
      <Stack width={tablet ? '100%' : '100%'} direction={tablet ? 'column' : 'row'} style={{ borderBottom: `1px solid ${BORDER}` }}>
        <FooterLogo />
        <Phone />
      </Stack>
      <Stack width={tablet ? '100%' : '100%'}>
        <FooterContact />
      </Stack>
    </Stack>
  );
}

function Phone() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  return (
    <Stack width="100%" justifyContent="center" alignItems={tablet ? 'center' : 'flex-end'} direction={tablet ? 'row' : 'column'} spacing={2}>
      <Span kind="b2" style={{ color: ORANGE }}>İletişim</Span>
      <Span kind={tablet ? 'b2' : 'b0'} style={{ color: WHITE }}>+90 538 648 23 30</Span>
    </Stack>
  );
}

function FooterLogo() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  const mobile = useMediaQuery(`(max-width:${screens[0]}px)`);

  return (
    <Stack width="100%" maxHeight={100} alignItems="center" style={{ padding: '20px 0px', textAlign: 'center' }} spacing={2} direction={tablet ? 'column' : 'row'}>
      <Stack direction="row" height="100%" alignItems="center" spacing={2}>
        <FLogo imgStyle={{ maxWidth: 323, height: 'auto', width: '100%' }} />
        {!mobile
        && (
        <>
          <span style={{ width: 2, height: 50, background: BORDER }} />
          <Span kind="v4" style={{ width: '100%', color: BORDER }}>muhabbetle, insanlığa, hizmete</Span>
        </>
        )}
      </Stack>
    </Stack>
  );
}

function FooterContact() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Stack width="100%" alignItems="flex-start" justifyContent="center" style={{ padding: '20px 0px', textAlign: 'center' }} spacing={1}>
      <Span kind={`w${tablet ? 4 : 2}`} style={{ textAlign: !tablet && 'start', width: tablet ? '100%' : '50%' }}>Adak, Kurban ve Akika vb. hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz.</Span>
      <br />
      <br />
      <br />
      <br />
      <br />
      <Stack alignItems={tablet ? 'center' : 'flex-start'} width="100%">
        <Span kind={`w${tablet ? 2 : 0}`} style={{ textAlign: 'center' }}>+90 538 648 23 30</Span>
        <Span kind={`w${tablet ? 3 : 2}`}>info@Yildirimkurban.com</Span>
      </Stack>
    </Stack>
  );
}

function Footer() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Container>
      <Stack width="100%" style={{ background: BACKGROUND, pasition: 'relative' }} alignItems="center" justifyContent="center">
        {!tablet
          && (
          <Stack
            width="100%"
            maxWidth="100%"
            alignItems="flex-end"
            justifyContent="flex-end"
            style={{
              display: 'block',
              position: 'absolute',
              // right: '100px',
              pasition: 'relative',
              maxWidth: '1140px',
              marginTop: -45,
            }}
          >
            <Image src={BackImg} style={{ width: '850px', maxHeight: '39.3rem', top: '-202px', position: 'inherit', right: '0px' }} />
          </Stack>
          )}
        <Stack
          width="100%"
          style={{
            background: FOOTERPRIMARY,
            borderRadius: `${BORDERRADIUS[2]}px ${BORDERRADIUS[2]}px 0px 0px `,
          }}
        >
          {/* <span style={{width: '100%', height: 10, background: ORANGE}}></span> */}
          <Stack style={{ zIndex: 10 }}>
            <MainFooter />
            <span style={{ width: '100%', background: FOOTERSECONDARY, padding: 5 }}>
              <Container>
                <Span kind={`w${tablet ? 5 : 3}`}> © 2022 - Yıldırım Adâk Kurban Satış Evi. Tüm hakları saklıdır.</Span>
              </Container>
            </span>
            <span style={{ width: '100%', background: ORANGE, padding: 3 }} />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

export default Footer;
