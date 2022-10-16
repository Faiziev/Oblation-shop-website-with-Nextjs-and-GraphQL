import '../styles/globals.css';
import '../styles/navigation.min.css';
import '../styles/pagination.min.css';
import '../styles/swiper.min.css';
import '../styles/bootstrap.min.css';
import { Stack } from '@mui/material';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { BACKGROUND } from '../utils/styling';

function MyApp({ Component, pageProps }) {
  return (
    <Stack style={{ background: BACKGROUND }} width="100%">
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Stack>
  );
}

export default MyApp;
