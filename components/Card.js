import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import Link from 'next/link'
import { Span } from '../utils/styling';
import { WHITE, GOLD, BORDERRADIUS } from './../utils/styling';
import { CardButton } from './Buttons';

const CardImg = ({img, style, imgStyles}) => {
  return <Stack width="100%" maxWidth={350} style={{...style}}>
    <Image src={img.src} alt={img.alt} style={{ borderRadius: 0, ...imgStyles}}/>
  </Stack>
}

const PostImg = ({src, style, imgStyles}) => {
  // console.log(src)
  return <Stack width="100%" maxWidth={350} style={{...style}} alignItems={"center"}>
    <Image src={src} alt={src} width={300} height={150} style={{ borderRadius: BORDERRADIUS[2], marginTop: 15, ...imgStyles}}/>
  </Stack>
}


export const SliderCard = ({title, label, img, href}) => {
  return <div className='card'>
    <style jsx global>
      {`
        .card {
          max-width: 320px;
          width: auto !important;
          background-color: #1e2122;
          padding: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: ${BORDERRADIUS[2]}px;
          cursor: grab;
          -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
             -khtml-user-select: none; /* Konqueror HTML */
               -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
          }
        @media (min-width: 768px) and (max-width: 991px) {
          .card {
            max-width: 750px;
          }
        }
        @media (max-width: 767px) {
          .card {
            max-width: 300px;
          }
        }
        @media (min-width: 1200px) {
          .card {
            max-width: 375px;
          }
        }
      `}
    </style>
    <Stack spacing={1.5} alignItems={"center"}>
      <CardImg img={img}/>
      <Stack>
        <Span kind="w0" style={{ userSelect: 'none' }}>
          {title}
        </Span>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Span kind="w3" style={{lineHeight: "24px", opacity: 0.9, userSelect: 'none' }}>
          {label.length >= 120 
            ? label.slice(0, 120) + "..."
            : label
          }
        </Span>
      </Stack>
      <Stack width={"100%"} height={"100%"} alignItems={"center"}>
        <Link href={`/${href}`} style={{width: 'fit-content'}}>
          <CardButton>
            DETAYLARI GÖR
          </CardButton>
        </Link>
      </Stack>
    </Stack>
  </div>
}

export const PostCard = ({data}) => {
  // console.log(data.featuredImage.url)
  return <div className='card'>
    <style jsx global>
      {`
        .card {
          max-width: 320px;
          width: auto !important;
          background-color: #1e2122;
          padding: 20px;
          margin-right: 20px;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          border-radius: ${BORDERRADIUS[2]}px;
          -webkit-touch-callout: none; /* iOS Safari */
            -webkit-user-select: none; /* Safari */
             -khtml-user-select: none; /* Konqueror HTML */
               -moz-user-select: none; /* Old versions of Firefox */
                -ms-user-select: none; /* Internet Explorer/Edge */
                    user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
          }
        @media (min-width: 768px) and (max-width: 991px) {
          .card {
            max-width: 750px;
          }
        }
        @media (max-width: 767px) {
          .card {
            max-width: 300px;
          }
        }
        @media (min-width: 1200px) {
          .card {
            max-width: 375px;
          }
        }
      `}
    </style>
    <Stack spacing={1.5} alignItems={"center"}>
      <PostImg src={data.featuredImage.url}/>
      {/* <img src={data.featuredImage.url}/> */}
      <Stack>
        <Span kind="w0" style={{ userSelect: 'none' }}>
          {data.title}
        </Span>
      </Stack>
      <Stack justifyContent={"center"} alignItems={"center"}>
        <Span kind="w3" style={{lineHeight: "24px", opacity: 0.9, textAlign: 'center' }}>
          {data.excerpt.length >= 120 
            ? data.excerpt.slice(0, 120) + "..."
            : data.excerpt
          }
        </Span>
      </Stack>
      <Stack width={"100%"} height={"100%"} alignItems={"center"}>
        <Link href={`bloglar/${data.slug}`} style={{width: 'fit-content'}}>
          <CardButton>
            DETAYLARI GÖR
          </CardButton>
        </Link>
      </Stack>
    </Stack>
  </div>
}

export const ProductCard = ({data}) => {
  const variants = {
    hidden: { opacity: 0, y:  0 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }

  return <motion.div className='category-card' variants={variants} initial="hidden" animate="show">
    <style jsx global>
      {`
        .category-card {
          width: 33.33333333%;
          // background-color: #1e2122;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px 15px;
        }
        @media (min-width: 768px) and (max-width: 991px) {
          .category-card {
            width: 50%;
          }
        }
        @media (max-width: 767px) {
          .category-card {
            width: 100%;
          }
        }
        @media (min-width: 1200px) {
          .category-card {
            width: 33.33333333%;
          }
        }
      `}
    </style>
    <Stack alignItems={'flex-start'} 
      spacing={1} 
      style={{
        // width: '100%',
        marginBottom: 30,
        padding: 20,
        cursor: "pointer",
        border: '1px solid grey',
      }}
      >
      <CardImg 
        img={data.img}
        style={{
          overflow: 'hidden',
          alignItems: 'center',
        }}
        imgStyles={{
          height: "auto",
          maxWidth: '100%',
          paddingBottom: 10,
        }}
        />
      <Stack>
        <Span kind="e0" style={{ userSelect: 'none' }}>
          {data.name}
        </Span>
      </Stack>
      <Stack >
        <Span kind="e5" style={{ userSelect: 'none' }}>
          {data.category}
        </Span>
      </Stack>
    </Stack>
  </motion.div>
}

export const UltimateCard = ({ data, product, post }) => {
  const variants = {
    hidden: { opacity: 0, y:  0 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  }

  return <motion.div className='ultimate-card' variants={variants} initial="hidden" animate="show" style={{margin: product || post ? 10 : 0}}>
    <Stack spacing={1.5} alignItems={product || post ? "flex-start" : "center"}  width='100%' height={'100%'}>
      <PostImg src={data.featuredImage.url}/>
      {/* <img src={data.featuredImage.url}/> */}
      {product ? 
        <Stack direction='row' justifyContent="space-between" width='100%'>
          <Stack>
            <Span kind="b1" style={{ userSelect: 'none' }}>
              {data.title}
            </Span>
            <Span kind="v3" style={{ opacity: 0.7, textAlign: 'start' }}>
              {data.category}
            </Span>
          </Stack>
          {/* <Stack justifyContent={"center"} alignItems={"center"}> */}
          {/* </Stack> */}
          <Stack height={"100%"} alignItems={"center"}>
            <Link href={`products/${data.slug}`} style={{width: 'fit-content'}}>
              <CardButton>
                Satin Al 
              </CardButton>
            </Link>
          </Stack>
        </Stack>
      : post ? 
        <Stack direction='column' justifyContent="space-between" width='100%' height={'100%'}>
          <Stack spacing={2}>
            <Span kind="b1" style={{ userSelect: 'none' }}>
              {data.title.length >= 30 
                ? data.title.slice(0, 25) + "..."
                : data.title
              }
            </Span>
            <Span kind="v3" style={{lineHeight: "24px", opacity: 0.9, textAlign: 'center' }}>
              {data.excerpt.length >= 120 
                ? data.excerpt.slice(0, 120) + "..."
                : data.excerpt
              }
            </Span>
          </Stack>
          {/* <Stack justifyContent={"center"} alignItems={"center"}> */}
          {/* </Stack> */}
          <Stack  alignItems={"center"}>
            <Link href={`blogs/${data.slug}`} style={{width: 'fit-content'}}>
              <CardButton>
                Ayrıntılara Bakın 
              </CardButton>
            </Link>
          </Stack>
        </Stack>
      :
        <>
          <Stack>
            <Span kind="b0" style={{ userSelect: 'none' }}>
              {data.title}
            </Span>
          </Stack>
          <Stack justifyContent={"center"} alignItems={"center"}>
            <Span kind="v3" style={{lineHeight: "24px", opacity: 0.9, textAlign: 'center' }}>
              {data.excerpt.length >= 120 
                ? data.excerpt.slice(0, 120) + "..."
                : data.excerpt
              }
            </Span>
          </Stack>
          <Stack width={"100%"} height={"100%"} alignItems={"center"}>
            <Link href={`bloglar/${data.slug}`} style={{width: 'fit-content'}}>
              <CardButton>
                DETAYLARI GÖR
              </CardButton>
            </Link>
          </Stack>
        </>
      }
    </Stack>
  </motion.div>
}