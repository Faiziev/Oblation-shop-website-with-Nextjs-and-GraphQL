import { useEffect, useState } from 'react';
import Stack from '@mui/material/Stack';
import { motion } from 'framer-motion';
import Image from 'next/future/image';
import Link from 'next/link';
import { Span, BORDERRADIUS } from '../utils/styling';
import { Loading } from './Images';

import { CardButton } from './Buttons';

function CardImg({ img, style, imgStyles }) {
  return (
    <Stack width="100%" maxWidth={350} style={{ ...style }}>
      <Image src={img.src} alt={img.alt} style={{ borderRadius: 0, ...imgStyles }} />
    </Stack>
  );
}

function PostImg({ src, style, imgStyles }) {
  // console.log(src)
  return (
    <Stack width="100%" maxWidth={350} style={{ ...style }} alignItems="center">
      <Image src={src} alt={src} sizes="100%" width={100} height={100} style={{ width: '100%', height: 'auto', maxHeight: 170, borderRadius: BORDERRADIUS[2], objectFit: 'cover', objectPosition: 'bottom center', ...imgStyles }} />
    </Stack>
  );
}

export function SliderCard({ title, label, img, href }) {
  return (
    <div className="card">
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
      <Stack spacing={1.5} alignItems="center">
        <CardImg img={img} />
        <Stack>
          <Span kind="w0" style={{ userSelect: 'none' }}>
            {title}
          </Span>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Span kind="w3" style={{ lineHeight: '24px', opacity: 0.9, userSelect: 'none' }}>
            {label.length >= 120
              ? `${label.slice(0, 120)}...`
              : label}
          </Span>
        </Stack>
        <Stack width="100%" height="100%" alignItems="center">
          <Link href={`/${href}`} style={{ width: 'fit-content' }}>
            <CardButton>
              DETAYLARI GÖR
            </CardButton>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}

export function PostCard({ data }) {
  // console.log(data.featuredImage.url)
  return (
    <div className="card">
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
      <Stack spacing={1.5} alignItems="center">
        <PostImg src={data.featuredImage.url} />
        {/* <img src={data.featuredImage.url}/> */}
        <Stack>
          <Span kind="w0" style={{ userSelect: 'none' }}>
            {data.title}
          </Span>
        </Stack>
        <Stack justifyContent="center" alignItems="center">
          <Span kind="w3" style={{ lineHeight: '24px', opacity: 0.9, textAlign: 'center' }}>
            {data.excerpt.length >= 120
              ? `${data.excerpt.slice(0, 120)}...`
              : data.excerpt}
          </Span>
        </Stack>
        <Stack width="100%" height="100%" alignItems="center">
          <Link href={`bloglar/${data.slug}`} style={{ width: 'fit-content' }}>
            <CardButton>
              DETAYLARI GÖR
            </CardButton>
          </Link>
        </Stack>
      </Stack>
    </div>
  );
}

export function ProductCard({ data }) {
  const variants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  return (
    <motion.div className="category-card" variants={variants} initial="hidden" animate="show">
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
      <Stack
        alignItems="flex-start"
        spacing={1}
        style={{
          // width: '100%',
          marginBottom: 30,
          padding: 20,
          cursor: 'pointer',
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
            height: 'auto',
            maxWidth: '100%',
            paddingBottom: 10,
          }}
        />
        <Stack>
          <Span kind="e0" style={{ userSelect: 'none' }}>
            {data.name}
          </Span>
        </Stack>
        <Stack>
          <Span kind="e5" style={{ userSelect: 'none' }}>
            {data.category}
          </Span>
        </Stack>
      </Stack>
    </motion.div>
  );
}

export function UltimateCard({ data, product, post, slider, style }) {
  const [active, setActive] = useState(true)
  const variants = {
    hidden: { opacity: 0, y: 0 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        ease: [0.6, 0.01, -0.05, 0.95],
        duration: 1.6,
      },
    },
  };

  const slideMargin = slider ? 0 : 10

  useEffect(() => {
    setTimeout(() => setActive(false), 1000); 
  },[]);

  return (
    <motion.div
      className="ultimate-card"
      variants={variants}
      initial="hidden"
      animate="show"
      style={{ margin: product || post ? 10 : 0, padding: '15px 15px 0px', ...style }}
    >
      <Stack
        spacing={1.5}
        alignItems={product || post ? 'flex-start' : 'center'}
        // width="100%"
        height="100%"
      >
        {active ? 
          <Stack width="100%" height="220px">
            <Loading />
          </Stack>
            :
          <PostImg src={data.featuredImage.url} imgStyles={{ marginTop: slider ? 10 : 0}}/>
        }
        {product ? (
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Stack>
              <Span kind="b1" style={{ userSelect: 'none' }}>
                {data.title}
              </Span>
              <Span kind="v3" style={{ opacity: 0.6, textAlign: 'start', marginTop: 5 }}>
                {data.category}
              </Span>
            </Stack>
            <Stack height="100%" alignItems="flex-end">
              <Span kind="b1" style={{ userSelect: 'none' }}>
                {data.price}₺
              </Span>
              <Link
                href={`urunler/${data.slug}`}
                style={{ width: '100%' }}
              >
                <CardButton>Satin Al</CardButton>
              </Link>
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction="column"
            justifyContent="space-between"
            width="100%"
            height="100%"
          >
            <Stack spacing={2}>
              <Span kind="b1" style={{ userSelect: 'none', textAlign: 'center', }}>
                {data.title.length >= 30
                  ? `${data.title.slice(0, 25)}...`
                  : data.title}
              </Span>
              <Span
                kind="v3"
                style={{
                  lineHeight: '24px',
                  opacity: 0.9,
                  textAlign: 'left',
                }}
              >
                {data.excerpt.length >= 120
                  ? `${data.excerpt.slice(0, 120)}...`
                  : data.excerpt}
              </Span>
            </Stack>
            <Stack alignItems="center" paddingTop="10px">
              <Link
                href={`blogs/${data.slug}`}
                style={{ width: 'fit-content' }}
              >
                <CardButton>Ayrıntılara Bakın</CardButton>
              </Link>
            </Stack>
          </Stack>
        )}
      </Stack>
    </motion.div>
  );
}
