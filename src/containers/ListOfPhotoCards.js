import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'
import { useQuery } from '@apollo/react-hooks'
import { GET_PHOTOS } from '../services/getPhotos'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, err, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })
  
  if(loading) return null
  
  const { photos } = data

  return (
    <ul>
      {photos && photos.map(photo => 
        <PhotoCard key={photo.id} {...photo} />
      )}
    </ul>
  )
}
