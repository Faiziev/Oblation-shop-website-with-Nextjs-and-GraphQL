import Stack from '@mui/material/Stack';
import { useRouter } from 'next/router';
import Image from 'next/future/image';
import { logo, HorzontalLogo, SingleLogo, FOOTERLOGO } from './Images';

export function Logo() {
  return (
    <Image src={logo} width={200} height={200} />
  );
}
export function HLogo({ imgStyle, style }) {
  const router = useRouter();
  
  return (
    <Stack width="100%" maxWidth="100%" style={{ cursor: 'pointer', ...style }}>
      <Image src={HorzontalLogo} style={{ ...imgStyle }} onClick={() => router.push('/', '/')} />
    </Stack>
  );
}

export function FLogo({ imgStyle, style }) {
  return (
    <Stack width="100%" maxWidth="100%" style={{ ...style }}>
      <Image src={FOOTERLOGO} style={{ ...imgStyle }} />
    </Stack>
  );
}

// export const SLogo = ({style}) => {
//   <Stack width="100%" maxWidth={"100px"} style={{...style}}>
//     <LogoSvg />
//   </Stack>
// }

export function SLogo({ imgStyle, style }) {
  return (
    <Stack maxWidth="100%" style={{ ...style }}>
      <Image src={SingleLogo} style={{ ...imgStyle }} />
    </Stack>
  );
}
