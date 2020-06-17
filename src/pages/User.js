import React from 'react'
import { useStateValue } from '../Context'
import { SubmitButton } from '../components/SubmitButton'
import { Layout } from '../components/Layout/index'

export default () => {
  const [ {}, dispatch ] = useStateValue();

  return (
    <Layout title="Sing Out" subtitle="Estas a punto de salir de Petgram como un usuario registrado">
      <h2>User</h2>
      <SubmitButton
        onClick={() => dispatch({
            type: 'LOGOUT',
          })
        }
      >Log out</SubmitButton>
    </Layout>
  )
}
