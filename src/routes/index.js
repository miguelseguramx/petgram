import React from 'react'
import { Home } from '../pages/Home'
import { Router } from '@reach/router'
import { Detail } from '../pages/Detail'
import { Favs } from '../pages/Favs' 
import { User } from '../pages/User'
import { NotRegisteredUser } from '../pages/NotRegisteredUser'

const UserLogged = ({ children }) => {
  return children({ isAuth: false })
}

export const Routes = () => {
  return (
    <>
      <Router>
        <Home path='/' /> 
        <Home path='/pet/:id' /> 
        <Detail path='/detail/:detailId' />
      </Router>
      <UserLogged>
        {
          ({ isAuth }) =>
            isAuth
              ? <Router>
                  <Favs path='/favs' />
                  <User path='/user' />
              </Router>
              : <Router>
                <NotRegisteredUser path='/favs' />
                <NotRegisteredUser path='/user' />
              </Router>
        }
      </UserLogged>
    </>
  )
}

