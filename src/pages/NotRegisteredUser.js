import React, { useState } from 'react'
import { useStateValue } from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../containers/RegisterUserMutation'
import { LoginMutation } from '../containers/LoginMutation'

export const NotRegisteredUser = () => {
  const [ {}, dispatch ] = useStateValue();
  const [authStep, setAuthStep] = useState('login')

  const register = (register, { data, loading, error }) => {
    const onSubmit = ({ email, password }) => {
      const input = { email, password }
      const variables = { input }
      register({ variables })
        .then(({ data }) => {
          dispatch({
            type: 'LOGIN',
            payload: data.signup
          })
        })
        .catch((err) => console.log(err.graphQLErrors[0].message) )
    }
    const errMsg = error && 'El usuario ya existe o hay algun problema'

    return <UserForm
      title='Sing In'
      setAuthStep={setAuthStep}
      disabled={loading}
      error={errMsg}
      onSubmit={onSubmit}
    />
  }

  const login = (login, {data, loading, error}) => {
    const onSubmit = ({ email, password }) => {
      const input = { email, password }
      const variables = { input }
      login({ variables })
        .then(({ data }) => {
          dispatch({
            type: 'LOGIN',
            payload: data.login
          })
        })
        .catch((err) => console.log(err.graphQLErrors[0].message) )
    }

    const errMsg = error && error.graphQLErrors[0].message

    return <UserForm
      title='Log In'
      setAuthStep={setAuthStep}
      disabled={loading}
      error={errMsg}
      onSubmit={onSubmit}
    />
  }

  return (
    <>
      {
        authStep === 'register' ?
          <RegisterMutation>
            {register}
          </RegisterMutation> :
          <LoginMutation>
            {login}
          </LoginMutation>
      }
    </>
  )
}
