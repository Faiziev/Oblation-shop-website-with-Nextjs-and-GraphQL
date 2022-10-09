// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Stack, useMediaQuery } from "@mui/material";
import Image from "next/future/image";
import { SliderImg1, SliderImg2, SliderImg3, SliderImg4 } from "./Images";
import { SliderCard } from "./Card";
import { ServicesData } from "./Sections";
import { GOLD, ORANGE, screens, SECTION } from "../utils/styling";

const imgList = [
  {alt: "kurban fotograf Slider-1", link: SliderImg1},
  {alt: "kurban fotograf Slider-2", link: SliderImg2},
  {alt: "kurban fotograf Slider-3", link: SliderImg3},
  {alt: "kurban fotograf Slider-4", link: SliderImg4},
]

export const BigSlider = () => {
  const rightIcon = `url("data:image/svg+xml,%3Csvg width='23' height='40' viewBox='0 0 23 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.16458 39.2646L21.2014 20.8097C21.6314 20.4136 21.6314 19.7347 21.2014 19.3386L1.16458 0.883611' stroke='white' strokeLinecap='round'/%3E%3C/svg%3E")`
  const leftIcon = `url("data:image/svg+xml,%3Csvg width='23' height='40' viewBox='0 0 23 40' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M21.8354 0.884521L1.79859 19.3395C1.36856 19.7356 1.36856 20.4145 1.79859 20.8106L21.8354 39.2656' stroke='white' strokeLinecap='round'/%3E%3C/svg%3E")`
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
          .swiper-container .swiper-button-disabled, .swiper-button-next {
            background-position: center;
            background-repeat: no-repeat;
          }
          
          .swiper-container .swiper-button-prev {
            background-position: center;
            background-repeat: no-repeat;
          }
          .swiper-container:hover .swiper-button-next{
            visibility: visible;
          }
          .swiper-container:hover .swiper-button-prev {
            visibility: visible;
          }
          .swiper-button-prev.swiper-button-disabled {
            opacity: 0.35;
          }
          .swiper-button-next::after, .swiper-button-prev::after {
            display: none
          }
          .swiper-button-next {
            background-image: ${rightIcon}
          }
          .swiper-button-prev {
            background-image: ${leftIcon}
          }
          .swiper-container11 .swiper-button-next, .swiper-button-prev {
            visibility: visible;
            background-size: 100% auto;
            background-position: center;
            background-repeat: no-repeat
          }
        `}
      </style>
      <Stack height="100%">
        <Swiper 
          className="mySwiper" 
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          pagination={false}
          centeredSlides={true}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {imgList.map((img, i) => <SwiperSlide key={i}>
              <Image src={img.link} alt={img.alt} sizes='100%'/>
            </SwiperSlide>
          )}
        </Swiper>
      </Stack>
    </>
  )
}

export const SmallSwiper = () => {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)
  const mobile = useMediaQuery(`(max-width:${screens[0]}px)`)
  console.log(tablet ? 2 : mobile ? 1 : 3)
  return <>
    <Stack height={"100%"} width={"100%"} >
      <style jsx global>
        {`
          .swiper-pagination {
            margin-top: 20px;
            margin-bottom: 10px;
            position: static;
          }
          .swiper-pagination-bullet-active {
            background-image: ${GOLD},
          }
          .swiper-pagination-bullet {
            width: var(--swiper-pagination-bullet-width,var(--swiper-pagination-bullet-size,14px));
            height: var(--swiper-pagination-bullet-height,var(--swiper-pagination-bullet-size,14px));
          }
          .swiper-pagination-bullet-active {
            opacity: var(--swiper-pagination-bullet-opacity, 1);
            background: var(--swiper-pagination-color, ${ORANGE});
          }
        `}
      </style>
      <Swiper
        slidesPerView={mobile ? 1 : tablet ? 2 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
      >
        {ServicesData.map((card, i) => <SwiperSlide style={{background: SECTION, height: "100%"}} key={i}>
          <SliderCard img={card.img} title={card.title} label={card.label} href={card.href}/>
        </SwiperSlide>)}
      </Swiper>
    </Stack>
  </>
}