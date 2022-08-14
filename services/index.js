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


export const getPostDetails = async (slug) => {
    const query = gql`
                query GetPostDetails($slug: String!) {
                    post( 
                        where: { slug: $slug }
                    ) { 
                    id
                    title
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
                        featuredImage { url },
                        content { raw }
                    }
                }
        
    `
const results = await request(graphqlAPI, query, { slug });
    return results.post;
}

export const getRecentPosts = async() => {
    const query = gql`
        query getPostDetails() {
            posts(
                orderBy: createdAt_ASC,
                last: 3
            ) {
                title
                featuredImage { url }
                createdAt
                slug
            }
        }
        `

    const results = await request(graphqlAPI, query);
    return results.posts;    
}


export const getSimilarPosts = async(categories, slug) => {
    const query = gql` 
        query SimilarPosts($slug: String!, $categories: [String!]) {
            posts(
                where: {categories_some: {slug_in: $categories}, AND: {slug_not: $slug}}
                orderBy: createdAt_ASC
                last: 3
                ) {
                    title
                    featuredImage {
                        url
                    }
                    slug
                    createdAt
                }
        }    
        `

        const results = await request(graphqlAPI, query, { categories, slug});
        return results.posts;    
        
}

export const getCategories = async() => {
   const query = gql`
                query GetCategories {
                    categories
                     {
                        name
                        slug
                        id
                        posts {
                            slug
                        }
                      }
                } 
          `
    const results = await request(graphqlAPI, query);
    return results.categories;      
}


