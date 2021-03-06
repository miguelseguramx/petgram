import React from 'react'
import { PhotoCard } from '../components/PhotoCard/index'
import { useQuery } from '@apollo/react-hooks'
import { GET_PHOTOS } from '../services/getPhotos'
import { LoadingPhotoCard } from '../components/PhotoCard/styles'

export const ListOfPhotoCards = ({ categoryId }) => {
  const { loading, err, data } = useQuery(GET_PHOTOS, {
    variables: { categoryId }
  })

  if(loading) return (
    <>
      <LoadingPhotoCard/>
      <LoadingPhotoCard/>
    </>
  )

  const { photos } = data

  return (
    <ul>
      {photos && photos.map(photo =>
        <PhotoCard key={photo.id} {...photo} />
      )}
    </ul>
  )
}
