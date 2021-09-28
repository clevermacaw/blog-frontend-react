import { ApolloClient, HttpLink, InMemoryCache } from 'apollo-boost'

export default new ApolloClient({
  link: new HttpLink({ uri: process.env.REACT_APP_BACKEND_GRAPHQL_URL }),
  cache: new InMemoryCache(),
})
