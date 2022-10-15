import { request, gql, GraphQLClient } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getPosts = async () => {
  const query = gql `query MyQuery {
    postsConnection {
      edges {
        node {
          author {
            name
            id
            photo {
              url
            }
          }
          createdAt
          slug
          title
          excerpt
          featuredImage {
            url
          }
          secondaryTitle
          featuredPost
          content {
            text
          }
        }
      }
    }
  }  
  `
  const result = await request(graphqlAPI, query);
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
        author{
          name
          photo {
            url
          }
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
