import React from 'react'
import { Home } from '../pages/Home'
import { Router } from '@reach/router'
import { Detail } from '../pages/Detail'
import { Favs } from '../pages/Favs' 
import { User } from '../pages/User'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'
import { useStateValue } from '../Context'

export const Routes = () => {
  const [{ isAuth }] = useStateValue();
  return (
    <>
      <Router>
        <Home path='/' /> 
        <Home path='/pet/:id' /> 
        <Detail path='/detail/:detailId' />
      {
        isAuth
          ? 
            <>
              <Favs path='/favs' />
              <User path='/user' />
            </>
          : 
            <>
              <NotRegisteredUser path='/favs' />
              <NotRegisteredUser path='/user' />
            </>
      }
      </Router>
    </>
  )
}

