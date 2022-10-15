import React from 'react';
import Head from 'next/head'
import { useRouter } from 'next/router';
import { Stack, useMediaQuery } from '@mui/material';
import { getPosts, getPostDetails } from '../../services';
import { Span, screens } from '../../utils/styling';
// import { screens, Span } from '../utils/styling';
import Image from 'next/future/image';
import { Container } from './../../components/Container';
import { useState } from 'react';

const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;

  if (obj) {
    if (obj.bold) {
      modifiedText = (<b key={index}>{text}</b>);
    }

    if (obj.italic) {
      modifiedText = (<em key={index}>{text}</em>);
    }

    if (obj.underline) {
      modifiedText = (<u key={index}>{text}</u>);
    }
  }

  switch (type) {
    case 'heading-three':
      return <h3 key={index} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h3>;
    case 'paragraph':
      return <p key={index} className="mb-8">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</p>;
    case 'heading-four':
      return <h4 key={index} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</h4>;
    case 'image':
      return (
        <img
          key={index}
          alt={obj.title}
          height={obj.height}
          width={obj.width}
          src={obj.src}
        />
      );
    default:
      return modifiedText;
  }
};

export default function PostDetails({ post }) {
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`)
  // const [tit, setTit] = useState(null)
  const router = useRouter();
  // const tit = post.title ? post.title : null
  // console.log(post.featuredImage.url.length > 0)
  return (
    <div className={'styles.container'}>
      <Head>
        <title>Yıldırım Kurban Satış Evi - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban, adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Container>
        <Stack spacing={4}>
          <Stack paddingTop={'140px'}></Stack>
          <Stack width='100%'>
            <Span kind={tablet ? 'b0' : 'b9'}>
              {typeof window !== "undefined" ? post.title : 'loading'}
            </Span>
          </Stack>
          <Stack width="100%" maxWidth={"100%"}>
            {post.featuredImage.url && <img src={post.featuredImage.url} style={{maxWidth: tablet ? '100%' : '90%', height: 'auto' }} />}
          </Stack>
          <Stack width='100%' style={{maxWidth: tablet ? '100%' : '90%'}}>
            <Span kind={tablet ? 'b3' : 'b1'}>
              {post.content.raw.children.map((typeObj, index) => {
                const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
                return getContentFragment(index, children, typeObj, typeObj.type);
              })}
            </Span>
          </Stack>
        </Stack>
        <Stack paddingBottom={'40px'}></Stack>
      </Container>
    </div>
  )
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
