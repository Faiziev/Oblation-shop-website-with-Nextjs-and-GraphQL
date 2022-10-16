import { Stack, useMediaQuery } from '@mui/material';
import { BTNRADIUS, ORANGE, screens, Span } from '../utils/styling';

export function SectionTitle({ children }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  return (
    <Stack width="100%" alignItems="center" marginBottom="50px">
      <Span kind={`b${tablet ? 1 : 7}`}>{children}</Span>
      <span style={{ width: 100, height: 1.5, background: ORANGE, marginTop: 5, opacity: 1, borderRadius: BTNRADIUS[3] }} />
    </Stack>
  );
}
