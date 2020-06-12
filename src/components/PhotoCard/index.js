import React, { useState } from 'react';
import { Article, Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { useNearScreen } from '../../hooks/useNearScreen'
import { useLocalStorage } from '../../hooks/useLocalStorage'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {
  const [ $element, show ] = useNearScreen()
  const key = `like-${id}`
  const [liked, setLiked] = useLocalStorage(key, false)
  
  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Article ref={$element}>
      {show &&  
        (
          <>
            <a href={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt=""/>
              </ImgWrapper>
            </a>
            <Button onClick={() => setLiked(!liked)}>
              <Icon size='32px' /> { likes } Likes!
            </Button>
          </>
        )
      }
    </Article>
  );
}
