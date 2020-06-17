import styled, { css } from 'styled-components'
import { fadeIn } from '../../styles/fadeIn'
import { loadingBack } from '../../styles/loadingBack'

export const List = styled.ul`
  display: flex;
  overflow: auto;
  list-style: none;
  width: 100%;
  padding: 0 5px 15px;

  .circle{
    ${loadingBack()}
    min-width: 75px;
    margin: 0 10px;
    height: 75px;
    border-radius: 50%;
  }

  /* width */
  &::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background-color: #cecece;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background-color: #929292;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #8d00ff;
  }

  ${props => props.fixed && css`
    ${fadeIn({
        time: '0.5s',
        type: 'ease-out'
      })
    }
    background: #fff;
    border-radius: 60px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    left: 0;
    margin: 0 auto;
    max-width: 400px;
    padding: 5px;
    position: fixed;
    right: 0;
    top: -20px;
    transform: scale(.5);
    z-index: 1;
  `}
`

export const Item = styled.li`
  padding: 0 8px;
`
