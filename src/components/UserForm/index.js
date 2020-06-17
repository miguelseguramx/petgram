import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { FormContainer, Form, Input, Title, Error, ChangeAuthStep } from './styles'
import { SubmitButton } from '../SubmitButton'
import PropTypes from 'prop-types'

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
        onClick={() => title === 'Log In' ? setAuthStep('Register') : setAuthStep('Login')}
      >
        {
          title === 'Log In' ? 'Sing In' : 'Log In'
        }
      </ChangeAuthStep>
    </FormContainer>
  )
}

UserForm.propTypes = {
  error: PropTypes.object,
  disabled: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setAuthStep: PropTypes.func.isRequired,
}
