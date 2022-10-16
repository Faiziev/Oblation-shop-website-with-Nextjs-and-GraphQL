import { request, gql } from 'graphql-request'
import useSWR from 'swr'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql `query MyQuery {
    postsConnection {
      edges {
        node {
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          content {
            text
          }
        }
      }
    }
  }  
  `
  
  
  // if (error) return console.log( error, 'swr' )
  // if (!data) return console.log( data, 'swr' )
  
  const result = await request(graphqlAPI, query);
  // const { data, error } = await useSWR(graphqlAPI, query)
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
