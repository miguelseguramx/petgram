import React from 'react';
import { GET_FAVS } from '../services/getFavs'
import { useQuery } from '@apollo/react-hooks'
import { ListOfFavs } from '../components/ListOfFavs'

export const QueryListFavs = () => {
  const { loading, error, data } = useQuery(GET_FAVS, {
      fetchPolicy: 'network-only'
    }
  )

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error...</p>

  const { favs } = data

  return <ListOfFavs favs={favs} />
}