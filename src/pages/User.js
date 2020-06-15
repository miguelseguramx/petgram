import React from 'react'
import { useStateValue } from '../Context'
import { SubmitButton } from '../components/SubmitButton'

export const User = () => {
  const [ {}, dispatch ] = useStateValue();


  return (
    <div>
      <h2>User</h2>
      <SubmitButton
        onClick={() => dispatch({
            type: 'LOGOUT',
          })
        }
      >Log out</SubmitButton>
    </div>
  )
}
