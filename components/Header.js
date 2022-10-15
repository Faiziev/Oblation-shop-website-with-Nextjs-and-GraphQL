import React, { useState } from "react";
import { Stack, useMediaQuery } from "@mui/material"
import { HLogo, Logo, SLogo } from './Logo';
import { HeaderButton } from './HeaderButton';
import { Container } from "./Container";
import { BACKGROUND, HEADER, screens, WHITE, Span, TRANSITION } from "../utils/styling";
import { ZINDEX, BORDERRADIUS } from './../utils/styling';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import { MenuIcon } from "../lib/icons";

const HeaderTitles = [
  {
    title:"ANASAYFA",
    href: ""
  },
  {
    title:"BLOGLAR",
    href: "bloglar"
  },
  {
    title:"HİZMETLERİMİZ",
    href: "hizmetlerimiz"
  },
  // {
    //   title:"BİZDEN KARELER",
    //   href: "bizdenkareler"
    // },
  {
    title:"HAKKIMIZDA",
    href: "hakkimizda"
  },
  {
    title:"İLETİŞİM",
    href: "iletisim"
  }
]

const DesktopHeader = () => {
  return <Stack direction="row" width="100%" height={50} alignItems={"center"} justifyContent="space-around" style={{cursor: 'pointer'}}>
    {HeaderTitles.map((btn, i) => <HeaderButton href={btn.href} title={btn.title} key={i}/>)}
  </Stack>
}

const MobileHeader = () => {
  const [state, setState] = useState({ right: false })

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, [anchor]: open });
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : "75vw" }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List >
        <Stack justifyContent='space-between' height="60vh" width="100%">
          {HeaderTitles.map((btn, i) => (
            <ListItem key={i} disablePadding >
              <ListItemButton sx={{height: 50, justifyContent: "center"}}>
                <HeaderButton href={`/${btn.href}`} title={btn.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </Stack>
      </List>
    </Box>
  );

  return <>
    {
      ['right'].map((anchor, i) => (
        <React.Fragment key={anchor}>
          {/* <Stack width="33.3%" alignItems="flex-end"> */}
            <Stack width="30px" height="30px" alignItems={"flex-end"} justifyContent={"center"} onClick={toggleDrawer(anchor, true)} style={{cursor: 'pointer'}}>
              <MenuIcon />
            </Stack>
          {/* </Stack> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))
    }
  </>
}

const Header = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)
  const desktop = useMediaQuery(`(min-width:${screens[1]}px)`)
  const l_tablet = useMediaQuery(`(min-width:${screens[2]}px)`)
  const [left, setLeft] = useState(false)
  const handle = () => {
    if (window.scrollY >= 100) {
      setLeft(true)
    }else {
      setLeft(false)
    }
  }
  if (typeof window !== "undefined") {
    window.addEventListener('scroll', handle)
  }

  return <Stack style={{position: 'fixed', top: 0, zIndex: ZINDEX[1], width: '100%', background: 'transparent'}}>
    <style jsx global>{`
        .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
          background: ${BACKGROUND};
          color: ${WHITE}
        }
        .css-1ab2xsx {
          background-color: #000 !important;
          color: ${WHITE};
          justify-content: center;
        }
        .css-1160xiw-MuiPaper-root-MuiDrawer-paper {
          justify-content: center;
        }
      `}
    </style>
    <Container>
      <Stack direction={left ? 'row' : tablet ? 'row' : 'column'} 
        alignItems="center"
        justifyContent=""
        style={{
          minWidth: '100%',
          minHeight: 85,
          background: HEADER,
          padding: '0px 15px',
          borderRadius: `0px 0px ${BORDERRADIUS[2]}px ${BORDERRADIUS[2]}px`,
          transition: TRANSITION
        }}
        >
          {tablet && <Stack width="23.3%"></Stack>}
          <Stack width={desktop ? "33.3%" : 323} alignItems="center">
            <HLogo imgStyle={{maxWidth: 323, height: 'auto'}}/>
          </Stack>
          <Stack width={tablet ? "43.3%" : '100%'} alignItems={tablet ? "flex-end" : "center"} style={{transition: TRANSITION}}>
            {tablet ?
              <MobileHeader />
              : desktop && 
              <DesktopHeader />
            }
          </Stack>
      </Stack>
    </Container>
  </Stack>
}

export default Header
