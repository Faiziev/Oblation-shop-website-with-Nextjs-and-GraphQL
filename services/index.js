import { request, gql } from 'graphql-request';

export const getPosts = async () => {
  const query = gql`query MyQuery  {
      postsConnection {
        edges {
          node {
            content {
              raw
            }
            createdAt
            excerpt
            id
            slug
            title
            featuredImage {
              url
            }
          }
        }
      }
    }  
  `;

  const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl95q8fxh6by501t6flqfgnis/master', query);
  return result.postsConnection.edges;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug : String!) {
      post(where: {slug: $slug}) {
        title
        excerpt
        featuredImage {
          url
        }
        createdAt
        slug
        content {
          raw
        }
      }
    }
  `;

  const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl95q8fxh6by501t6flqfgnis/master', query, { slug });
  return result.post;
};

export const getProducts = async () => {
  const query = gql`
    query MyQuery  {
      productsConnection {
        edges {
          node {
            title
            category
            price
            description
            alt
            featuredImage {
              url
            }
            slug
          }
        }
      }
    }  
  `;

  const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl95q8fxh6by501t6flqfgnis/master', query);
  return result.productsConnection.edges;
};

export const getProductDetails = async (slug) => {
  console.log('slug', slug)
  const query = gql`
    query GetProductDetails($slug : String!) {
      product(where: {slug: $slug}) {
        title
        category
        price
        description 
        alt
        featuredImage {
          url
        }
      }
    }
  `;

  const result = await request('https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl95q8fxh6by501t6flqfgnis/master', query, { slug });
  return result.product;
};
