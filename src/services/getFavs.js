import { gql } from 'apollo-boost'

export const GET_FAVS = gql`
  query geTFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`
