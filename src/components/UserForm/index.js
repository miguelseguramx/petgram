import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { FormContainer, Form, Input, Title, Error, ChangeAuthStep } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ error, disabled, onSubmit, title, setAuthStep }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <FormContainer>
      <Title>{title}</Title>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Input
          disabled={disabled}
          type='email'
          placeholder='example@email.com'
          { ...email }
        />
        <Input
          disabled={disabled}
          type='password'
          placeholder='password'
          { ...password }
        />
        <SubmitButton
          disabled={disabled}
          type='submit'>
          {title}
        </SubmitButton>
      </Form>
      { error && <Error>{error}</Error> }
      <ChangeAuthStep
        onClick={() => title === 'Log In' ? setAuthStep('register') : setAuthStep('login')}
      >
        {
          title === 'Log In' ? 'Sing In' : 'Log In'
        }
      </ChangeAuthStep>
    </FormContainer>
  )
}
