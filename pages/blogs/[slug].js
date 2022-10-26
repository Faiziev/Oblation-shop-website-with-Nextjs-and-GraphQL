import React from 'react';
import Head from 'next/head';
// eslint-disable-next-line react/no-danger
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Stack, useMediaQuery } from '@mui/material';
import { getPosts, getPostDetails } from '../../services';
import { Span, screens, BORDERRADIUS } from '../../utils/styling';
import { Container } from '../../components/Container';
import { RichText } from '@graphcms/rich-text-react-renderer';

const getContentFragment = (index, text, obj, type) => {
  let modifiedText = text;
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  if (obj) {
    if (obj.bold) {
      modifiedText = (<Span kind={tablet ? 'b3' : 'b1'} key={index}>{text}</Span>);
    }

    if (obj.italic) {
      modifiedText = (<Span kind={tablet ? 'i3' : 'i1'} key={index}>{text}</Span>);
    }

    if (obj.underline) {
      modifiedText = (<Span kind={tablet ? 'u3' : 'u1'} key={index}>{text}</Span>);
    }
  }

  switch (type) {
    case 'heading-three':
      return <Span kind={tablet ? 'b3' : 'b1'} key={index} style={{ marginBottom: 4, fontWeight: 500, whiteSpace: 'nowrap', textOverflow: '"-"' }} className="text-xl font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Span>;
    case 'paragraph':
      return <Span kind={tablet ? 'h3' : 'h1'} key={index} style={{ marginBottom: 8 }}>{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Span>;
    case 'heading-four':
      return <Span kind={tablet ? 'b3' : 'b1'} key={index} style={{ marginBottom: 4 }} className="text-md font-semibold mb-4">{modifiedText.map((item, i) => <React.Fragment key={i}>{item}</React.Fragment>)}</Span>;
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
  const router = useRouter();
  const tablet = useMediaQuery(`(max-width:${screens[1]}px)`);

  if (router.isFallback) {
    return 'loading';
  }

  console.log(post.content)
  return (
    <div className="styles.container">
      <Head>
        <title>Yıldırım Kurban Satış Evi - Blog</title>
        <link rel="icon" href="/favicon.ico" />
        <meta charset="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="keywords" content="Kasap Faiziev, Faiziev kurban, beykoz adak, beykoz kurban, kurban satışı, adak kurban, akika kurban,adak, akika, şükür kurban, kurban kesimi, kurban satışı, kasap-faiziev, faiziev-kasap, kasap, adak faiziev, faiziev adak" />
        <meta name="description" content="Kasap Faiziev Kurban Satış Evi - Beykoz Anadolu Feneri köyümüzde başlamış olduğumuz hayvancılık alanındaki faaliyetlerimizi 20 yılı aşkın süredir sürdürmekteyiz. 2007 yılından itibaren Beykoz Yüşa'da hizmet vermeye başladık." />
        <meta name="author" content="Kasap Faiziev Kurban Satış Evi" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Container>
        <Stack spacing={4}>
          <Stack paddingTop="140px" />
          <Stack width="100%">
            <Span kind={tablet ? 'b0' : 'b9'}>
              {/* {post.title} */}
              Baslik
            </Span>
          </Stack>
          <Stack width="100%" maxWidth="100%">
            {post.featuredImage.url && <img src={post.featuredImage.url} style={{ maxWidth: tablet ? '100%' : '90%', height: 'auto', borderRadius: BORDERRADIUS[2] }} />}
          </Stack>
          <Stack width="100%" style={{ maxWidth: tablet ? '100%' : '90%' }}>
            {/* <Span kind={tablet ? 'b3' : 'b1'}> */}
            {/* {post.content.raw.children.map((typeObj, index) => {
              const children = typeObj.children.map((item, itemindex) => getContentFragment(itemindex, item.text, item));
              return getContentFragment(index, children, typeObj, typeObj.type);
            })} */}
            {/* {post.content} */}
            {/* </Span> */}
            {/* eslint-disable-next-line react/no-danger */}
            <RichText
              content={post.content.raw}
              renderers={{
                h1: ({ children }) => <h1 className="text-white">{children}</h1>,
                bold: ({ children }) => <strong>{children}</strong>,
                italic: ({ children }) => <em>{children}</em>,
                underline: ({ children }) => <u>{children}</u>,
                code: ({ children }) => <code>{children}</code>,
                italic: ({ children }) => <em>{children}</em>,
                code_block: ({ children }) => <blockquote>{children}</blockquote>,
                // img: ({ children }) => <blockquote>{children}</blockquote>,
                a: ({ children, openInNewTab, href, rel, ...rest }) => {
                  if (href.match(/^https?:\/\/|^\/\//i)) {
                    return (
                      <a
                        href={href}
                        target={openInNewTab ? '_blank' : '_self'}
                        rel={rel || 'noopener noreferrer'}
                        {...rest}
                      >
                        {children}
                      </a>
                    );
                  }

                  return (
                    <Link href={href}>
                      <a {...rest}>{children}</a>
                    </Link>
                  );
                },
              }}
            />
          </Stack>
        </Stack>
        <Stack paddingBottom="40px" />
      </Container>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const data = await getPostDetails(params.slug);
  return {
    props: {
      post: data,
    },
    revalidate: 5,
  };
}

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
    fallback: true,
  };
}
