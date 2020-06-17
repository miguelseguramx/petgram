import React, { useState } from 'react'
import { Article, Img, ImgWrapper } from './styles'
import { useNearScreen } from '../../hooks/useNearScreen'
import { FavButton } from '../FavButton'
import { ToggleLikeMutation } from '../../containers/ToggleLikeMutation'
import { Link } from '@reach/router'
import PropTypes from 'prop-types'
import { useStateValue } from '../../Context'

const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg'

export function PhotoCard({ id, liked, likes = 0, src = DEFAULT_IMAGE }) {
  const [ $element, show ] = useNearScreen()
  const [ showNoAuth, setShowNoAuth ] = useState(false)
  const [{ isAuth }] = useStateValue();

  const renderProp = (toggleLike) => {
    const handleFavClick = () => {
      if(!isAuth) return setShowNoAuth(true)
      toggleLike({ variables: {
        input: {id}
      }})
    }
    return <FavButton liked={liked} likes={likes} onClick={handleFavClick}/>
  }

  return (
    <Article ref={$element}>
      {show &&
        (
          <>
            <Link to={`/detail/${id}`}>
              <ImgWrapper>
                <Img src={src} alt="Una linda mascota, este deberia un dato que venga del servidor"/>
              </ImgWrapper>
            </Link>
            <ToggleLikeMutation>
              {renderProp}
            </ToggleLikeMutation>
            {showNoAuth ? <span>Debes estar registrado para realizar esta accion</span> : null}
          </>
        )
      }
    </Article>
  )
}

PhotoCard.propTypes = {
  id: PropTypes.string.isRequired,
  liked: PropTypes.bool.isRequired,
  src: PropTypes.string.isRequired,
  likes: function (props, propName, componentName) {
    const propValue = props[propName]

    if (propValue === undefined) {
      return new Error(`${propName} value must be defined`)
    }

    if (propValue < 0) {
      return new Error(`${propName} value must be greater than 0`)
    }
  }
}
