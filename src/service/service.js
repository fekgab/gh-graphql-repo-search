import {
  ApolloClient,
  ApolloLink,
  from,
  HttpLink,
  InMemoryCache,
} from '@apollo/client'
import { DEFAULT_API_URI } from '../config/constant'
import { onError } from '@apollo/client/link/error'
import { getUserToken, toastError } from '../utils/helpers'

const httpLink = new HttpLink({
  uri: DEFAULT_API_URI,
})

const authLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers }) => ({
    headers: {
      authorization: getUserToken(),
      ...headers,
    },
  }))
  return forward(operation)
})

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      toastError(
        `[GraphQL error]: Message: ${message}, Location: ${
          locations ? locations : 'Unknown locations'
        }, Path: ${path ? path : 'Unknown path'}`
      )
    )

  if (networkError) toastError(`[Network error]: ${networkError}`)
})

export const client = new ApolloClient({
  link: from([authLink, errorLink, httpLink]),
  cache: new InMemoryCache(),
})
