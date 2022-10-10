import React, { useState } from "react";
import { Stack, useMediaQuery } from "@mui/material"
import { Logo } from './Logo';
import { HeaderButton } from './HeaderButton';
import { Container } from "./Container";
import { BACKGROUND, HEADER, screens, WHITE, Span } from "../utils/styling";
import { ZINDEX } from './../utils/styling';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { MenuIcon } from "../lib/icons";
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';

const HeaderTitles = [
  {
    title:"ANASAYFA",
    href: "anasayfa"
  },
  {
    title:"HAKKIMIZDA",
    href: "hakkimizda"
  },
  {
    title:"HİZMETLERİMİZ",
    href: "hizmetlerimiz"
  },
  {
    title:"BİZDEN KARELER",
    href: "bizdenkareler"
  },
  {
    title:"İLETİŞİM",
    href: "iletisim"
  }
]

const Header = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)
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


  return <Stack style={{position: 'fixed', top: 0, zIndex: ZINDEX[1], width: '100%', background: HEADER}}>
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
      <Stack direction={left ? 'row' : tablet ? 'row' : 'column'} width={"100%"} alignItems="center" justifyContent="space-between">
        {tablet && <Stack width="33.3%"></Stack>}
        <Stack width={tablet ? "33.3%" : undefined} alignItems="center">
          <Stack width={"200px"} height={100} margin={'10px 0px'}>
            <Logo />
          </Stack>
        </Stack>
        { tablet ?
          ['right'].map((anchor, i) => (
            <React.Fragment key={anchor}>
              <Stack width="33.3%" alignItems="flex-end">
                <Stack width="30px" height="30px" alignItems={"center"} justifyContent={"center"} onClick={toggleDrawer(anchor, true)} style={{cursor: 'pointer'}}>
                  <MenuIcon />
                </Stack>
              </Stack>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))
        :
          <Stack direction="row" width="70%" height={70} alignItems={"center"} justifyContent="space-around">
            {HeaderTitles.map((btn, i) => <HeaderButton href={`/${btn.href}`} title={btn.title} key={i}/>)}
          </Stack>
        }
      </Stack>
    </Container>
  </Stack>
}

export default Header