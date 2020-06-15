import styled from 'styled-components'

export const FormContainer = styled.div`
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const Form = styled.form`
  padding: 16px 0px;
`

export const Input = styled.input`
  margin-bottom: 16px;
  font-size: 1.1em;
  padding: 8px 4px;
  display: block;
  width: 100%;
  border: none;
  border-bottom: 2px solid #8d00ff;
  color: #8d00ff;
  outline: none;
  &:focus{
    box-shadow: 0px 0px 4px 1px #8d00ff;
  }
  &[disable]{
    opacity: .3;
    border-bottom: none;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  font-weight: 500;
  padding: 8px 0px;
  margin: 20% 0px 10%;
`

export const Error = styled.span`
  color: red;
  font-size: 14px;
  font-weight: bold;
`

export const ChangeAuthStep = styled.button`
  margin: 16px auto;
  color: #8d00ff;
  text-decoration: underline;
  text-align: center;
  width: fit-content;
  font-size: 16px;
`
