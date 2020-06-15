import { gql } from 'apollo-boost'

export const LOGIN = gql`
  mutation login($input: UserCredentials!) {
    login (input: $input)
  }
`
