import { gql } from 'apollo-boost'

export const REGISTER = gql`
  mutation signup($input: UserCredentials!) {
    signup (input: $input)
  }
`
