import { Stack } from '@mui/material';
import { BTNRADIUS, GOLD, screens, Span } from '../utils/styling';
import { useMediaQuery } from '@mui/material';


export const SectionTitle = ({children}) => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)

  return <Stack width="100%" alignItems={"center"} marginBottom={"50px"}>
    <Span kind={`w${tablet ? 1 : 7}`}>{children}</Span>
    <span style={{width: 100, height: 1.5, background: GOLD, marginTop: 5, opacity: 1, borderRadius: BTNRADIUS[3]}}></span>
  </Stack>
}