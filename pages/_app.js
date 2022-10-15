import '../styles/globals.css'
import '../styles/bootstrap.min.css'
import Footer from './../components/Footer';
import Header from './../components/Header';
import { Stack, useMediaQuery } from '@mui/material';
import { BACKGROUND, screens } from './../utils/styling';

function MyApp({ Component, pageProps }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)
  return (
    <Stack style={{ background: BACKGROUND}} width={"100%"}>
      <Header />
      {/* marginTop={tablet ? "120px" : "120px"} */}
      <Stack ></Stack>
      <Component {...pageProps} />
      <Footer />
    </Stack>
  )
}

export default MyApp
