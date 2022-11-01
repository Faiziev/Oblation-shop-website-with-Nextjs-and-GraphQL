// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Stack, useMediaQuery } from '@mui/material';
import Image from 'next/future/image';
import { SliderImgSm1, SliderImg1, SliderImg2, SliderImg3, SliderImg4 } from './Images';
import { UltimateCard } from './Card';
import { GOLD, GREY, ORANGE, screens, SECTION, Span } from '../utils/styling';
import { Container } from './Container';

const imgList = [
  {
    alt: 'kurban fotograf Slider-1',
    img: SliderImg1,
    content: 'Yıldırım Adak ve Kurban Satış Noktasına',
    gradient: 'Hoş Geldiniz',
    size: '500px',
  },
  {
    alt: 'kurban fotograf Slider-2',
    img: SliderImg2,
    content: 'Yıldırım Adak ve Kurban Satış Noktasına',
    gradient: 'Hoş Geldiniz',
    size: '500px',
  },
  {
    alt: 'kurban fotograf Slider-3',
    img: SliderImg3,
    content: 'Yıldırım Adak ve Kurban Satış Noktasına',
    gradient: 'Hoş Geldiniz',
    size: '500px',
  },
  {
    alt: 'kurban fotograf Slider-4',
    img: SliderImg4,
    content: 'Yıldırım Adak ve Kurban Satış Noktasına',
    gradient: 'Hoş Geldiniz',
    size: '500px',
  },
];

const ServicesData = [
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
  {
    featuredImage: { url: SliderImgSm1, alt: 'akika foto' },
    title: 'Baslik',
    excerpt:
      'Yeni doğan çocuk için şükür amacıyla kesilen kurbana, “akîka” adı verilir. Akika kurbanı kesmek sünnettir. 20 yılı aşkın süredir.',
    slug: '#',
  },
];

const rightIcon = `url("data:image/svg+xml,%3Csvg width='23' height='40' viewBox='0 0 23 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.16458 39.2646L21.2014 20.8097C21.6314 20.4136 21.6314 19.7347 21.2014 19.3386L1.16458 0.883611' stroke='${GREY}' strokeLinecap='round'/%3E%3C/svg%3E")`;
const leftIcon = `url("data:image/svg+xml,%3Csvg width='23' height='40' viewBox='0 0 23 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.8354 0.884521L1.79859 19.3395C1.36856 19.7356 1.36856 20.4145 1.79859 20.8106L21.8354 39.2656' stroke='${GREY}' strokeLinecap='round'/%3E%3C/svg%3E")`;

export function BigSlider() {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  return (
    <>
      <style jsx global>
        {`
          .swiper {
            width: 100%;
            height: 100%;
          }

          .swiper-slide {
            text-align: center;
            font-size: 18px;
            background: #fff;

            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
          }

          .swiper-slide img {
            display: block;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          .mySwiper {
            // height: calc(100% + 30px);
          }
          .swiper-container .swiper-button-disabled,
          .swiper-button-next {
            background-position: center;
            background-repeat: no-repeat;
          }

          .swiper-container .swiper-button-prev {
            background-position: center;
            background-repeat: no-repeat;
          }
          .swiper-container:hover .swiper-button-next {
            visibility: visible;
          }
          .swiper-container:hover .swiper-button-prev {
            visibility: visible;
          }
          .swiper-button-prev.swiper-button-disabled {
            opacity: 0.35;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            display: none;
          }
          .swiper-button-next {
            background-image: ${rightIcon};
          }
          .swiper-button-prev {
            background-image: ${leftIcon};
          }
          .swiper-container11 .swiper-button-next,
          .swiper-button-prev {
            visibility: visible;
            background-size: 100% auto;
            background-position: center;
            background-repeat: no-repeat;
          }
          .mySwiper .swiper-pagination-bullets.swiper-pagination-horizontal {
            bottom: 100px;
            position: absolute;
          }
        `}
      </style>
      <Stack height={tablet ? '110vh' : '110vh'}>
        <Swiper
          className="mySwiper"
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          centeredSlides
          navigation
          modules={[Autoplay, Pagination, Navigation]}
        >
          {imgList.map((img, i) => (
            <SwiperSlide key={i}>
              <Container>
                <Stack
                  direction={tablet ? 'column-reverse' : 'row'}
                  width="100%"
                  height="100%"
                  alignItems="center"
                  justifyContent="center"
                  spacing={tablet ? 3 : 0}
                >
                  <Stack
                    width={tablet ? '100%' : '50%'}
                    height={tablet ? '15%' : undefined}
                  >
                    <Span
                      kind={tablet ? 'b7' : 'b9'}
                      style={{ textAlign: tablet ? 'center' : 'start' }}
                    >
                      {img.content}{' '}
                      <Span
                        kind={tablet ? 'b7' : 'b9'}
                        style={{ color: ORANGE }}
                      >
                        {img.gradient}
                      </Span>
                    </Span>
                  </Stack>
                  <Stack
                    width={tablet ? '100%' : '50%'}
                    height={tablet ? 'auto' : undefined}
                    maxWidth={img.size}
                    maxHeight={img.size}
                  >
                    <Image src={img.img} alt={img.alt} sizes="100%" />
                  </Stack>
                </Stack>
              </Container>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>
    </>
  );
}

export function SmallSwiper({ small, data }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  const mobile = useMediaQuery(`(max-width:${screens[0]}px)`);
  const swipValue = tablet ? 2 : 3;
  return (
    <Stack height="100%" width="100%">
      <style jsx global>
        {`
          .swiper-pagination {
            margin-top: 20px;
            margin-bottom: 10px;
            position: static;
          }
          .swiper-pagination-bullet-active {
            background-image: ${GOLD};
          }
          .swiper-pagination-bullet {
            width: var(
              --swiper-pagination-bullet-width,
              var(--swiper-pagination-bullet-size, 14px)
            );
            height: var(
              --swiper-pagination-bullet-height,
              var(--swiper-pagination-bullet-size, 14px)
            );
          }
          .swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
            background: var(--swiper-pagination-color, ${ORANGE});
          }
        `}
      </style>
      <Swiper
        slidesPerView={mobile ? 1 : swipValue}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        centeredSlides={small || false}
        modules={[Pagination]}
      >
        {data.map((card, i) => (
          <SwiperSlide style={{ background: SECTION, height: '100%' }} key={i}>
            <UltimateCard
              data={card.node}
              img={card.img}
              title={card.title}
              label={card.label}
              href={card.href}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}

export function ProductSwiper({ data }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);
  const mobile = useMediaQuery(`(max-width:${screens[0]}px)`);
  const swipValue = tablet ? 2 : 4;
  return (
    <Stack height="100%" width="100%">
      <style jsx global>
        {`
          .swiper {
            width: 100%;
          }

          .swiper-container .swiper-button-disabled,
          .swiper-button-prev, .swiper-button-next {
            background-position: center;
            background-repeat: no-repeat;
            background-color: white;
            box-shadow: 0 8px 30px rgba(0,0,0,.12);
            width: 50px;
            height: 50px;
            border-radius: 50px;
          }

          .swiper-container .swiper-button-prev {
            background-position: center;
            background-repeat: no-repeat;
          }
          .swiper-container:hover .swiper-button-next {
            visibility: visible;
          }
          .swiper-container:hover .swiper-button-prev {
            visibility: visible;
          }
          .swiper-button-prev.swiper-button-disabled {
            opacity: 0.35;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            display: none;
          }
          .swiper-button-next {
            background-image: ${rightIcon};
          }
          .swiper-button-prev {
            background-image: ${leftIcon};
          }
          .swiper-container11 .swiper-button-next,
          .swiper-button-prev {
            visibility: visible;
            // background-size: 100% auto;
            background-position: center;
            background-repeat: no-repeat;
          }
        `}
      </style>
      <Swiper
        slidesPerView={mobile ? 1 : swipValue}
        navigation
        modules={[Navigation]}
      >
        {data.map((card, index) => (
          <SwiperSlide style={{ background: SECTION, height: '100%', width: 'fit-content !important', justifyContent: 'center', display: 'flex' }} key={index}>
            <UltimateCard
              data={card}
              img={card.img}
              title={card.title}
              label={card.label}
              href={card.href}
              style={{ padding: '0px 10px' }}
              product
              slider
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Stack>
  );
}
