import React from 'react'
import { Mutation } from 'react-apollo'
import { LOGIN } from '../services/login'

export const LoginMutation = ({ children }) => {
  return <Mutation mutation={LOGIN}>
    {children}
  </Mutation>
}
