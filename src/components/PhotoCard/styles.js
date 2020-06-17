import styled from 'styled-components'
import { fadeIn } from '../../styles/fadeIn'
import { loadingBack } from '../../styles/loadingBack'

export const Article = styled.article`
  min-height: 200px;
  margin-bottom: 10px;
  padding: 0px 15px;
  position: relative;

  span{
    color: red;
    font-size: 12px;
    font-weight: bold;
    position: absolute;
    bottom: 4px;
    max-width: 150px;
    left: 115px;
  }
`

export const ImgWrapper = styled.div`
  ${fadeIn({ time: '1s' })}
  border-radius: 10px;
  display: block;
  height: 0;
  overflow: hidden;
  padding: 56.25% 0 0 0;
  position: relative;
  width: 100%;
`

export const Img = styled.img`
  box-shadow: 0 10px 14px rgba(0, 0, 0, .2);
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  width: 100%;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  padding-top: 8px;
  & svg {
    margin-right: 4px;
  }
`

export const LoadingPhotoCard = styled.div`
  ${loadingBack()}
  width: 100%;
  max-width: 470px;
  margin: 0 15px 50px;
  height: 300px;
  position: relative;
  &::after{
    position: absolute;
    ${loadingBack()}
    content: '';
    display: block;
    width: 30px;
    border-radius: 50%;
    height: 30px;
    left: 0;
    bottom: -40px;
  }
  &::before{
    position: absolute;
    ${loadingBack()}
    content: '';
    left: 45px;
    bottom: -30px;
    height: 10px;
    width: 60px;
    display: block;
  }
`