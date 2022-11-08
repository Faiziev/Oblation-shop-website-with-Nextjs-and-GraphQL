// import logo from '../public/logo2.png';
import logo from '../public/Logo-Y.png';
import HorzontalLogo from '../public/Logo-H.png';
import FOOTERLOGO from '../public/footer.png';
import SingleLogo from '../public/Logo-Single.png';
import SliderImg1 from '../public/shaped-1.png';
import SliderImg2 from '../public/shaped-2.png';
import SliderImg3 from '../public/shaped-3.png';
import SliderImg4 from '../public/shaped-4.png';

import BackImg from '../public/bg.webp';

import SliderImg5 from '../public/slider-5.jpg';
import SliderImgSm1 from '../public/slider-sm-1.jpg';

import Animal1 from '../public/animal-card/1.jpg';
import Animal2 from '../public/animal-card/2.jpg';
import Animal3 from '../public/kuzu.jpg';
import Animal4 from '../public/animal-card/4.jpg';
import Animal5 from '../public/animal-card/5.jpg';
import Animal6 from '../public/animal-card/6.jpg';
import Animal7 from '../public/kasap-1.png';
import Animal8 from '../public/kasap-3.jpg';
import Animal9 from '../public/kasap-4.jpg';
import Animal10 from '../public/kasap-2.jpg';
import Animal11 from '../public/kasap-5.jpg';
import Animal12 from '../public/kasap-6.jpg';
import Animal13 from '../public/kasap-7.jpg';
import Animal14 from '../public/kasap-8.jpg';


import agd from '../public/referans/agd.png';
import kizil from '../public/referans/kizil.png';

export { logo, HorzontalLogo, SingleLogo, BackImg, FOOTERLOGO };
export { SliderImg1, SliderImg2, SliderImg3, SliderImg4, SliderImg5 };
export { SliderImgSm1 };
const referansImg = { agd, kizil };

export const referans = [
  {
    alt: 'kurban fotograf Slider-1',
    img: referansImg.kizil,
    content: 'Anadolu Gençilk Derneği, Kızılay vb daha bir çok kurum ile işbirliği içinde çalışmaktayız.',
    gradient: 'Baglarimiz Vardir',
    size: '700px',
  },
  {
    alt: 'kurban fotograf Slider-2',
    img: referansImg.agd,
    content: 'Anadolu Genclik Dernegi, Kizil Ay ile cok iyi Baglarimiz Vardir',
    gradient: 'Baglarimiz Vardir  ',
    size: '700px',
  },
];

export function Loading() {
  return (
    <div className="box">
      <style jsx>{`
        .box {
          width: 100%;
          height: 100%;
          background-color: #D4D7D9;
          animation: hmm 2s infinite;
          border-radius: 16px;
        }
        @keyframes hmm {
          0% {
            background-color: #D4D7D9;
          }
          50% {
            background-color: #E5E9EC;
          }
          100% {
            background-color: #D4D7D9;
          }
        }      
      `}
      </style>
    </div>
  );
}

export const AnimalsImages = { Animal1, Animal2, Animal3, Animal4, Animal5, Animal6, Animal7, Animal8, Animal9, Animal10, Animal11, Animal12, Animal13, Animal14 };
