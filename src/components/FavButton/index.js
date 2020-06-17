import React from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import { Button } from './styles'
import PropTypes from 'prop-types'

export function FavButton({ liked, likes, onClick }) {

  const Icon = liked ? MdFavorite : MdFavoriteBorder

  return (
    <Button onClick={onClick}>
      <Icon size='32px' /> { likes } Likes!
    </Button>
  )
}

FavButton.propTypes = {
  liked: PropTypes.bool.isRequired,
  likes: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}
