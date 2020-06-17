import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories/index'
import { ListOfPhotoCards } from '../containers/ListOfPhotoCards'
import { Layout } from '../components/Layout/index'

const HomePage = ({ id }) => {
  return (
    <>
      <Layout title="Petgram -  Tu app de fotos de mascotas" subtitle="Con Petgram
        puedes encontrar fotos de animales domesticos muy bonitos">
        <ListOfCategories />
        <ListOfPhotoCards categoryId={id} />
      </Layout>
    </>
  )
}

export const Home = React.memo(HomePage, (prevProps, props) => {
  return prevProps.id === props
})
