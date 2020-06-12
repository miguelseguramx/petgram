import React from 'react';
import { Img, ImgWrapper, Button } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export function PhotoCard({ id, likes = 0, src = DEFAULT_IMAGE }) {
  return (
    <article>
      <a href={`/detail/${id}`}>
        <ImgWrapper>
          <Img src={src} alt=""/>
        </ImgWrapper>
      </a>
      <Button>
        <MdFavoriteBorder size='32px' /> { likes } Likes!
      </Button>
    </article>
  );
}
