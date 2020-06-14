import React from 'react'
import { ApolloClient, HttpLink, InMemoryCache } from'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Routes } from './routes'
import { NavBar } from './components/Navbar'

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: 'https://petgram-server.miguelseguramx.now.sh/graphql',
})

const client = new ApolloClient({
  cache,
  link,
})

export function App(props) {

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Logo />
      <Routes />
      <NavBar />
    </ApolloProvider>
  )
}
