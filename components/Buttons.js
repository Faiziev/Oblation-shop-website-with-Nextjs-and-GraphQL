import { ButtonBase, Stack, styled } from "@mui/material"
import { BTNRADIUS, BTNWHITE, ORANGE, RED, SECTION, textStyle, } from "../utils/styling";

const Button = styled(ButtonBase)(() => ({
  position: 'relative',
  padding: '6px 12px',
  marginTop: 15,
  marginBottom: 15,
  background: ORANGE,
  ...textStyle("w3"),
  transition: 'linear 0.2s',
  borderRadius: BTNRADIUS[0],
  // [theme.breakpoints.down('sm')]: {
  //   width: '100% !important', 
  // },
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    background: RED,
    transition: 'linear 0.2s',
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
  ...textStyle("w4"),
  transition: 'linear 0.2s',
  borderRadius: BTNRADIUS[0],
  justifyContent: 'center',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    background: '#000',
    transition: 'linear 0.2s',
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
  background: "transparent",
  border: `1px solid ${SECTION}`,

  ...textStyle("w4"),
  transition: 'linear 0.2s',
  borderRadius: BTNRADIUS[1],
  justifyContent: 'center',
  '&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    background: SECTION,
    transition: 'linear 0.2s',
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

export const CardButton = ({style, children, onClick}) => {
  return <Button onClick={onClick}>
    {children}
  </Button>
}


export const SectionButton = ({style, children, onClick}) => {
  return <SecButton onClick={onClick} disableRipple>
    {children}
  </SecButton>
}

export const TransparentBtn = ({style, children, onClick}) => {
  return <TspBtn onClick={onClick} disableRipple>
    {children}
  </TspBtn>
}