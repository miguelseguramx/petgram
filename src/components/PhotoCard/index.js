import React, { useState } from 'react';
import { Article, Img, ImgWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { FavButton } from '../FavButton/index'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [ $element, show ] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)

  const renderProp = (toggleLike) => {
    const handleFavClick = () => {
      !liked && toggleLike({ variables: {
        input: {id} 
      }})
      setLiked(!liked)
    }
    return <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
  }

  return (
    <Article ref={$element}>
      {show &&  
        (
          <>
            <a href={`?detail=${id}`}>
              <ImgWrapper>
                <Img src={src} alt=""/>
              </ImgWrapper>
            </a>
            <ToggleLikeMutation>
              {renderProp}
            </ToggleLikeMutation>
          </>
        )
      }
    </Article>
  );
}
