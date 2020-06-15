import React from 'react'
import ApolloClient from'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { GlobalStyle } from './styles/GlobalStyle'
import { Logo } from './components/Logo'
import { Routes } from './routes'
import { NavBar } from './components/Navbar'
import { Provider } from './Context'

const client = new ApolloClient({
  uri: 'https://petgram-server.miguelseguramx.now.sh/graphql',
  request: operation => {
    const token = window.sessionStorage.getItem('token')
    const authorization = token ? `Bearer ${token}` : ''
    operation.setContext({
      headers: {
        authorization
      }
    })
  },
  onError: error => {
    const { networkError } = error
    if (networkError && networkError.result.code === 'invalid_token') {
      window.sessionStorage.removeItem('token')
      window.location.href = '/'
    }
  }
})

export function App(props) {

  return (
    <Provider>
      <ApolloProvider client={client}>
        <GlobalStyle />
        <Logo />
        <Routes />
        <NavBar />
      </ApolloProvider>
    </Provider>
  )
}
