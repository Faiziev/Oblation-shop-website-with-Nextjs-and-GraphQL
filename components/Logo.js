import { Stack } from '@mui/material/Stack';
import Image from 'next/image';
import { logo } from './Images';

export const Logo = () => {
  return (
    // <Stack width="100%" alignItems='center'>
      <Image src={logo} width={200} height={200} />
    // </Stack>
  )
}
