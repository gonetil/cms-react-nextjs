import {request, gql} from 'graphql-request';

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
    //query created through App.HyGraph project 
    const query = gql`
                        query MyQuery {
                            postsConnection {
                            edges {
                                node {
                                id
                                title
                                slug
                                exceprt
                                authors {
                                    bio
                                    id
                                    name
                                    photo {
                                    url
                                    }
                                }
                                categories {
                                    slug
                                    name
                                    id
                                }
                                createdAt
                                featuredPost
                                updatedAt
                                publishedAt
                                featuredImage { url }
                                }
                            }
                            }
                        }
        
    `

    const results = await request(graphqlAPI, query);
    return results.postsConnection.edges;
}