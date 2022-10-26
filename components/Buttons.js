import { ButtonBase, styled } from '@mui/material';
import { BTNRADIUS, BTNWHITE, ORANGE, SECTION, textStyle, LINERGRADBACK, TRANSITION, DARK } from '../utils/styling';

const Button = styled(ButtonBase)(() => ({
  position: 'relative',
  padding: '4px 12px',
  // marginTop: 10,
  marginBottom: 15,
  background: ORANGE,
  opacity: 0.7,
  ...textStyle('w3'),
  transition: TRANSITION,
  borderRadius: BTNRADIUS[0],
  // [theme.breakpoints.down('sm')]: {
  //   width: '100% !important',
  // },import { LINERGRADBACK, DARK } from './../utils/styling';

  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    background: ORANGE,
    transition: TRANSITION,
    opacity: 1,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const SecButton = styled(ButtonBase)(() => ({
  position: 'relative',
  padding: '10px 20px',
  marginTop: 15,
  marginBottom: 15,
  background: BTNWHITE,
  ...textStyle('w4'),
  borderRadius: BTNRADIUS[0],
  justifyContent: 'center',
  transition: TRANSITION,
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    background: '#000',
    transition: TRANSITION,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const TspBtn = styled(ButtonBase)(() => ({
  position: 'relative',
  padding: '15px 24px',
  // marginTop: 15,
  // marginBottom: 15,
  background: 'transparent',
  border: `1px solid ${SECTION}`,

  ...textStyle('w4'),
  transition: TRANSITION,
  borderRadius: BTNRADIUS[1],
  justifyContent: 'center',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    background: SECTION,
    color: DARK,
    transition: TRANSITION,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '4px solid currentColor',
    },
  },
}));

const LinerButtonStyle = styled(ButtonBase)(() => ({
  position: 'relative',
  padding: '15px 24px',
  background: LINERGRADBACK,
  border: `1px solid ${SECTION}`,
  boxShadow: '0 8px 30px rgba(0,0,0,.12)',
  transition: 'linear 0.2s',
  borderRadius: BTNRADIUS[4],
  justifyContent: 'center',
  ...textStyle('w4'),
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    // background: SECTION,
    opacity: 0.9,
    transition: TRANSITION,
    '& .MuiImageBackdrop-root': {
      opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
      opacity: 0,
    },
    '& .MuiTypography-root': {
      border: '0px solid transparent',
    },
  },
}));

export function CardButton({ children, onClick, style }) {
  return (
    <Button onClick={onClick} style={{...style}}>
      {children}
    </Button>
  );
}

export function SectionButton({ children, onClick }) {
  return (
    <SecButton onClick={onClick} disableRipple>
      {children}
    </SecButton>
  );
}

export function TransparentBtn({ children, onClick }) {
  return (
    <TspBtn onClick={onClick} disableRipple>
      {children}
    </TspBtn>
  );
}

export function LinerButton({ children, onClick }) {
  return (
    <LinerButtonStyle onClick={onClick} disableRipple>
      {children}
    </LinerButtonStyle>
  );
}
