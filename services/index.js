import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql `query MyQuery  {
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
  `
  
  const result = await request(graphqlAPI, query)
  return result.postsConnection.edges;
}

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

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};
