import styled from 'styled-components'
import { Link as LinkRouter } from '@reach/router'
import { loadingBack } from '../../styles/loadingBack'

export const Link = styled(LinkRouter)`
  border-radius: 8px;
  box-shadow: 0 0 8px rgba(0, 0, 0, .3);
  display: inline-block;
  margin: 1%;
  overflow: hidden;
  position: relative;
  width: 31.33%;
  &:after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }
`

export const Grid = styled.div`
  padding-top: 32px;
`

export const Image = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
  position: absolute;
`

export const LoadingGrid = styled.div`
  margin-top: 32px;
  display: grid;
  min-height: 100%;
  width: 100%;
  max-width: 470px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  margin: 0 15px;
`

export const LoadingCell = styled.span`
  ${loadingBack()}
  display: block;
  min-width: 100%;
  max-height: 156.65px;
  min-height: 31.33%;
  border-radius: 10px;
`
