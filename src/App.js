import React from 'react';
import { ApolloClient, HttpLink, InMemoryCache } from'apollo-boost';
import { ApolloProvider } from 'react-apollo'
import { ListOfCategories } from './components/ListOfCategories'
import { GlobalStyle } from './styles/GlobalStyle'
import { ListOfPhotoCards } from './containers/ListOfPhotoCards'
import { Logo } from './components/Logo'
import { PhotoCardWithQuey } from './containers/PhotoCardWithQuery'

const cache = new InMemoryCache()

const link = new HttpLink({
  uri: 'https://petgram-server.miguelseguramx.now.sh/graphql',
})

const client = new ApolloClient({
  cache,
  link,
});

export function App(props) {
  const urlParams = new window.URLSearchParams(window.location.search)
  const detailId = urlParams.get('detail')
  console.log(detailId);

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Logo />
      {
        detailId ?
          <PhotoCardWithQuey id={detailId}/> :
          <>
            <ListOfCategories />
            <ListOfPhotoCards categoryId={2} />
          </>
      }
    </ApolloProvider>
  );
}
