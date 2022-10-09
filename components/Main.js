import Stack from '@mui/material/Stack';
import Header from './Header';
import { BigSlider } from './Slider';
import { Animals, Interview, Note, Services } from './Sections';
import { Span } from './../utils/styling';
import { TransparentBtn } from './Buttons';
import Footer from './Footer';


const Main = () => {
  return (
    <Stack>
      <Header />
      <BigSlider />
      <Services />
      <Note>
        <Span kind="e8">TÜM KREDI KARTLARI <Span kind="w8">GEÇERLIDIR.</Span></Span>
        <TransparentBtn>
          Hemen İletişime Geç!
        </TransparentBtn>
      </Note>
      <Interview />
      <Note blood>
        <Span kind="e8">FAIZIEV KASAP OLARAK BAŞKA ŞUBEMIZ <Span kind="w8">YOKTUR.</Span></Span>
        <TransparentBtn>
          Adresimiz İçin Tıklayın!
        </TransparentBtn>
      </Note>
      <Animals />
      <Footer />
    </Stack>
  )
}

export default Main