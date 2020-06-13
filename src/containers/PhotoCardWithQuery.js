import React from 'react';
import { PhotoCard } from '../components/PhotoCard/index'
import { Query } from'react-apollo'
import { GET_SINGLE_PHOTO } from '../services/getSinglePhoto'

const renderProp = ({ loading, error, data }) => {
  if (loading) return 'Loading'
  if (error) return 'Error'

  const { photo = {} } = data
  return <PhotoCard {...photo} />
}

export function PhotoCardWithQuey({ id }) {
  return (
    <Query query={GET_SINGLE_PHOTO} variables={{ id }}>
      {renderProp}
    </Query>
  );
}
