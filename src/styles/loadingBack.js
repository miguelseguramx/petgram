import { css, keyframes } from 'styled-components'

const mobileBackFrames = keyframes`
  from{
    background-color: #ececec;
  }
  to {
    background-color: #9d9d9d;
  }
`

export const loadingBack = ({ time = '.5s', type = 'ease-in' } = {}) => (
  css`
    animation-name: ${mobileBackFrames};
    animation-duration: ${time};
    animation-iteration-count: infinite;
    animation-timing-function: ${type};
  `
)
