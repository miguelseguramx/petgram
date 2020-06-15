import styled from 'styled-components'

export const Button = styled.button`
  background: #8d00ff;
  border-radius: 3px;
  color: #fff;
  height: 32px;
  display: block;
  width: 100%;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  text-align: center;
  &[disabled] {
    opacity: .3;
  }
`