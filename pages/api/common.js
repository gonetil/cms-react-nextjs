
import { GraphQLClient } from "graphql-request";

export default function getGraphQLClient() {
    
    const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

    new GraphQLClient( graphqlAPI,  {
        headers: {
            authorization: `Bearer ${process.env.GRAPHCMS_TOKEN}`
        }
      })

}