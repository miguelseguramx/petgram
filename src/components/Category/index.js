import React from 'react'
import { Link, Image } from './styles'
import PropTypes from 'prop-types'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path = '#', emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} alt="Image of some category"/>
    {emoji}
  </Link>
)

Category.propTypes = {
  cover: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  emoji: PropTypes.string.isRequired,
}
