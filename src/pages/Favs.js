import React from 'react'
import { QueryListFavs } from '../containers/QueryListFavs'
import { Layout } from '../components/Layout'

export default () => (
  <Layout title='Tus favoritos' subtitle='Aquí puedes encontrar tus favoritos'>
    <h1>Favs</h1>
    <QueryListFavs />
  </Layout>
)
